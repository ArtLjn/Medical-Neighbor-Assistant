/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

module.exports.info = 'account register';

let bc, contx;
let txnPerBatch;

module.exports.init = function (blockchain, context, args) {
    txnPerBatch = 10;
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

// 生成交易负载，用于注册账户
function generateWorkload() {
    // 用于存放所有交易字段
    let workload = [];
    for (let i = 0;i < txnPerBatch; i ++) {
        // 编写交易字段
        let w = {
            'transaction_type':'registerAccount(address,string,string)',
            'accountAddress':"0x195c534f3c9358b1a8323423964baace2b1e1bfc",
            'role':"患者",
            'uuid':'0x1001'
        }
        // 将交易字段加入数组中
        workload.push(w);
    }
    return workload;
}

// 调用智能合约
module.exports.run = function () {
    // 获取相关交易字段
    let args = generateWorkload();
    // 调用caliper提供的方法，执行所有交易信息
    return bc.invokeSmartContract(contx, 'MedHealth', 'v0', args, null);
};

module.exports.end = function () {
    // Do nothing
    return Promise.resolve();
};

