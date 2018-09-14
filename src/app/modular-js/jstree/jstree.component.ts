import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { JstreeNode } from './jstree-node';

@Component({
  selector: 'app-jstree',
  templateUrl: './jstree.component.html',
  styleUrls: ['./jstree.component.css']
})
export class JstreeComponent {

  @Input() jstreeNodes: JstreeNode[];
  @Input() contextmenus: any;
  @Input() uniqId: string;
  @Input() isCheckbox: boolean;
  selectedNode: any;
  @Output() jstreeEvent = new EventEmitter<any>();
  private buildJstreeComplete: boolean = false;
  constructor() { }

  refresh(nodes: JstreeNode[]) {
    if (!this.buildJstreeComplete) {
      this._buildJstree(nodes);
    }
    else {
      let jstree = $('#' + this.uniqId).jstree() as any;
      jstree.settings.core.data = nodes;
      jstree.refresh(true);
    }
  }

  destroyJstree() {
    $('#' + this.uniqId).jstree("destroy");
    this.buildJstreeComplete = false;
  }

  getChecked(full: boolean): any[] {
    return $('#' + this.uniqId).jstree().get_checked(full);
  }

  setChecked(checked: string[], e) {
    let that = this;
    $('#' + this.uniqId).on('loaded.jstree', function () {
      $('#' + that.uniqId).jstree().check_node(checked, e);
    });
  }

  private _buildJstree(nodes: JstreeNode[]) {
    let that = this;
    let plugins = ["types"];
    let args = {
      'core': {
        "check_callback": true,
        'data': nodes
      },
      "types": {
        "default": {
          "icon": "anticon anticon-folder"
        },
        "file": {
          "icon": "anticon anticon-folder"
        }
      },
      // 'plugins': ["contextmenu", "dnd", "types", "expand"],
      'plugins': plugins,
      "expand": {
        level: 2,
        "icon": 'anticon anticon-plus',
      },
      "contextmenu": {
        items: function (o, cb) {
          const contextmenu: any = {};
          for (var item in that.contextmenus) {
            contextmenu[that.contextmenus[item]["key"]] = {
              "separator_before": false,
              "separator_after": false,
              "_disabled": false,
              "icon": 'anticon anticon-plus',
              "label": that.contextmenus[item]["label"],
              "enName": that.contextmenus[item]["key"],
              "action": function (data) {
                that.jstreeEvent.emit({ "name": data.item.enName, "data": that.selectedNode })
              }
            };
          }
          return contextmenu;//返回右键菜单项
        }
      }
    }
    if (this.isCheckbox) {
      plugins.push("checkbox");
      args["checkbox"] = {
        "three_state": false,
        "keep_selected_style": false
      }
    }
    $('#' + that.uniqId).jstree(args);

    $('#' + that.uniqId).on("changed.jstree", function (e, data) {
      if (data.node) {
        var itemData = {
          "name": "单击",
          "data": data.node
        }
        that.jstreeEvent.emit(itemData);
        that.selectedNode = data.node;
      }
    });
    if (this.isCheckbox) {
      $('#' + that.uniqId).on('activate_node.jstree', function (e, data) {
        if ($('#' + that.uniqId).jstree(true).is_checked(data.node)) {
          $('#' + that.uniqId).jstree(true).check_node(data.node.parents, null);
        }

        if (data.node.children.length > 0) {
          if ($('#' + that.uniqId).jstree(true).is_checked(data.node)) {
            $('#' + that.uniqId).jstree(true).check_node(data.node.children_d, null);
          } else {
            $('#' + that.uniqId).jstree(true).uncheck_node(data.node.children_d, null);
          }
        }
      });
    }
    this.buildJstreeComplete = true;
  }
}
