/*
 * @lc app=leetcode.cn id=3408 lang=javascript
 *
 * [3408] 设计任务管理器
 *
 * https://leetcode.cn/problems/design-task-manager/description/
 *
 * algorithms
 * Medium (45.80%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    11.8K
 * Total Submissions: 25.7K
 * Testcase Example:  '["TaskManager","add","edit","execTop","rmv","add","execTop"]\n' +
  '[[[[1,101,10],[2,102,20],[3,103,15]]],[4,104,5],[102,8],[],[101],[5,105,15],[]]'
 *
 * 一个任务管理器系统可以让用户管理他们的任务，每个任务有一个优先级。这个系统需要高效地处理添加、修改、执行和删除任务的操作。
 * 
 * 请你设计一个 TaskManager 类：
 * 
 * 
 * 
 * TaskManager(vector<vector<int>>& tasks) 初始化任务管理器，初始化的数组格式为 [userId, taskId,
 * priority] ，表示给 userId 添加一个优先级为 priority 的任务 taskId 。
 * 
 * 
 * void add(int userId, int taskId, int priority) 表示给用户 userId 添加一个优先级为
 * priority 的任务 taskId ，输入 保证 taskId 不在系统中。
 * 
 * 
 * void edit(int taskId, int newPriority) 更新已经存在的任务 taskId 的优先级为 newPriority
 * 。输入 保证 taskId 存在于系统中。
 * 
 * 
 * void rmv(int taskId) 从系统中删除任务 taskId 。输入 保证 taskId 存在于系统中。
 * 
 * 
 * int execTop() 执行所有用户的任务中优先级 最高 的任务，如果有多个任务优先级相同且都为 最高 ，执行 taskId
 * 最大的一个任务。执行完任务后，taskId 从系统中 删除 。同时请你返回这个任务所属的用户 userId 。如果不存在任何任务，返回 -1
 * 。
 * 
 * 
 * 
 * 注意 ，一个用户可能被安排多个任务。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：
 * ["TaskManager", "add", "edit", "execTop", "rmv", "add", "execTop"]
 * [[[[1, 101, 10], [2, 102, 20], [3, 103, 15]]], [4, 104, 5], [102, 8], [],
 * [101], [5, 105, 15], []]
 * 
 * 输出：
 * [null, null, null, 3, null, null, 5] 
 * 
 * 解释：
 * TaskManager taskManager = new TaskManager([[1, 101, 10], [2, 102, 20], [3,
 * 103, 15]]); // 分别给用户 1 ，2 和 3 初始化一个任务。
 * taskManager.add(4, 104, 5); // 给用户 4 添加优先级为 5 的任务 104 。
 * taskManager.edit(102, 8); // 更新任务 102 的优先级为 8 。
 * taskManager.execTop(); // 返回 3 。执行用户 3 的任务 103 。
 * taskManager.rmv(101); // 将系统中的任务 101 删除。
 * taskManager.add(5, 105, 15); // 给用户 5 添加优先级为 15 的任务 105 。
 * taskManager.execTop(); // 返回 5 。执行用户 5 的任务 105 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= tasks.length <= 10^5
 * 0 <= userId <= 10^5
 * 0 <= taskId <= 10^5
 * 0 <= priority <= 10^9
 * 0 <= newPriority <= 10^9
 * add ，edit ，rmv 和 execTop 的总操作次数 加起来 不超过 2 * 10^5 次。
 * 输入保证 taskId 是合法的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 */
var TaskManager = function (tasks) {
  this.taskInfo = new Map()

  this.heap = new PriorityQueue((a, b) => {
    if (a[0] === b[0]) {
      return a[1] > b[1] ? -1 : 1
    }
    return a[0] > b[0] ? -1 : 1
  })

  for (const [userId, taskId, priority] of tasks) {
    this.taskInfo.set(taskId, [priority, userId])
    this.heap.enqueue([priority, taskId])
  }
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
  this.taskInfo.set(taskId, [priority, userId])
  this.heap.enqueue([priority, taskId])
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
  if (this.taskInfo.has(taskId)) {
    const [priority, userId] = this.taskInfo.get(taskId)
    this.taskInfo.delete(taskId)
    this.taskInfo.set(taskId, [newPriority, userId])
    this.heap.enqueue([newPriority, taskId])
  }
}

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function (taskId) {
  this.taskInfo.delete(taskId)
}

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function () {
  while (!this.heap.isEmpty()) {
    const [priority, taskId] = this.heap.dequeue()
    if (this.taskInfo.has(taskId) && this.taskInfo.get(taskId)[0] == priority) {
      const userId = this.taskInfo.get(taskId)[1]
      this.taskInfo.delete(taskId)
      return userId
    }
  }
  return -1
}

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
// @lc code=end
