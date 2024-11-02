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

module.exports.info = 'verify medHealth register message';

let bc, contx;

module.exports.init = function (blockchain, context, args) {
    // Do nothing
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

// 查询账户信息
module.exports.run = function () {
    // 查询账户账户注册信息判断是否注册成功
    return bc.queryState(contx, 'MedHealth', 'v0', '0x195c534f3c9358b1a8323423964baace2b1e1bfc', 'getAccount(address)');
};

module.exports.end = function () {
    // Do nothing
    return Promise.resolve();
};
