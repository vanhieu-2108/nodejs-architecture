"use strict";
const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
// Count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return console.log(`Number of connections: ${numConnection}`);
};
// Check over load
const checkOverload = () => {
  setInterval(() => {
    // Lấy số lượng kết nối hiện tại
    const numConnection = mongoose.connections.length;
    // Lấy số lượng core của CPU hiện tại
    const numCores = os.cpus().length;
    // Lấy mức sử dụng bộ nhớ hiện tại của quá trình
    const memoryUsage = process.memoryUsage().rss;
    // Ví dụ về số lượng kết nối tối đa dựa trên số lượng core của CPU
    const maxConnections = numCores * 5;
    // In ra số lượng kết nối hiện tại
    console.log(`Active connections: ${numConnection}`);
    // In ra mức sử dụng bộ nhớ hiện tại
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
    // Nếu số lượng kết nối vượt quá số lượng kết nối tối đa, thông báo quá tải
    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
      // notify.send(...) // Gửi thông báo (nếu có)
    }
  }, _SECONDS); // Kiểm tra mỗi 5 giây
};

module.exports = {
  countConnect,
  checkOverload,
};
