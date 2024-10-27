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

module.exports.info = 'get numid energy';

let bc, contx;

module.exports.init = function (blockchain, context, args) {
    // Do nothing
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

// 查询账户信息
module.exports.run = function () {
    return bc.queryState(contx, 'MedHealth', 'v0', '0xa22ac65be61a6068d17037deecac0d1b221e4e52', 'getAccount(address)');
};

module.exports.end = function () {
    // Do nothing
    return Promise.resolve();
};
