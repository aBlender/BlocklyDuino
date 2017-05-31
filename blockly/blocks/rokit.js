/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.rokit');

goog.require('Blockly.Blocks');

Blockly.Blocks.rokit.HUE = 215;

Blockly.Blocks.rokit.image = filepath.media + '/neopixel.jpg';

Blockly.Blocks.rokit.checkBlocks = function(obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'rokit_dcmotor' ||
        blocks[i].type == 'rokit_dcmove' &&
        legal == null){
        if (blocks[i].type != current)  legal = true;
        else  legal = false;
    }
    if(blocks[i].type == 'rokit_begin'){
      return true;
    }
  }
  return legal;
};

Blockly.Blocks['rokit_begin'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL); //TODO
        this.setColour(Blockly.Blocks.rokit.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.rokit.image, 64, 64))
            .appendField("Setup Rokit SMART"); //TODO
            //.appendField(new Blockly.FieldTextInput("16"), "NUM");
        //this.appendDummyInput()
        //    .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        //    .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        //this.appendDummyInput()
        //    .appendField(Blockly.Msg.NEOPIXEL_BEGIN_BRIGHTNESS)
        //    .appendField(new Blockly.FieldTextInput("50"), "BRIGHTNESS");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP); //TODO
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        this.setWarningText("Need to install SmartInventor Library"); //TODO
    }
};

Blockly.Blocks['rokit_dcmotor'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Blocks.rokit.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.rokit.image, 64, 64))
            .appendField("DC MOTOR")
            .appendField(new Blockly.FieldDropdown(profile.default.rokit_motor),"MOTOR");
        this.appendDummyInput()
            .appendField("Dir")
            .appendField(new Blockly.FieldDropdown(profile.default.rokit_motor_direction),"DIR");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("Speed takes values from 0 to 127, 0 = slowest, 127 = fastest");
    },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.rokit.checkBlocks(this)) {
      this.setWarningText("ROKIT Setup block is needed");
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['rokit_dcmove'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Blocks.rokit.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.rokit.image, 64, 64))
            .appendField("DC MOVE")
            .appendField("Dir")
            .appendField(new Blockly.FieldDropdown(profile.default.rokit_move_direction),"DIR");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("Speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("Speed takes values from 0 to 127, 0 = slowest, 127 = fastest");
    },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.rokit.checkBlocks(this)) {
      this.setWarningText("ROKIT Setup block is needed");
    } else {
      this.setWarningText(null);
    }
  }
};
