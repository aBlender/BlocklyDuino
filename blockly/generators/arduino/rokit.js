/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.rokit');

goog.require('Blockly.Arduino');

Blockly.Arduino.rokit_begin = function() {

  Blockly.Arduino.definitions_['define_include_rokit'] = '#include <SmartInventor.h>\n';
  Blockly.Arduino.setups_['setup_rokit_motor_begin'] = 'SmartInventor.DCMotorUse();\n'

  var code = '';
  return code;
};

Blockly.Arduino.rokit_dcmotor = function() {
  var motor = this.getFieldValue('MOTOR');
  var dir = this.getFieldValue('DIR');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'SmartInventor.DCMotor(' + motor + ',' + dir + ',' + speed +');\n';
  return code;
};

Blockly.Arduino.rokit_dcmove = function() {
  var dir = this.getFieldValue('DIR');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'SmartInventor.DCMove(' + dir + ',' + speed +');\n';
  return code;
};

Blockly.Arduino.rokit_buzz = function() {
  var note = this.getFieldValue('NOTE');
  var tempo = this.getFieldValue('TEMPO');

  var code = 'SmartInventor.Buzz(' + note + ',' + tempo +');\n';
  return code;
};

Blockly.Arduino.rokit_buzz_custom = function() {
  var freq = Blockly.Arduino.valueToCode(this, 'FREQ', Blockly.Arduino.ORDER_ATOMIC) || '262'
  var tempo = this.getFieldValue('TEMPO');

  var code = 'SmartInventor.Buzz(' + freq + ',' + tempo +');\n';
  return code;
};
