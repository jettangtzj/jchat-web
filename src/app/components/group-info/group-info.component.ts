import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'group-info-component',
    templateUrl: './group-info.component.html',
    styleUrls: ['./group-info.component.scss']
})

export class GroupInfoComponent implements OnInit {
    @Input()
    private groupInfo;
    @Output()
    private applyEnterGroup: EventEmitter<any> = new EventEmitter();
    @Output()
    private changeGroupConversation: EventEmitter<any> = new EventEmitter();
    constructor() {
        // pass
    }
    public ngOnInit() {
        // pass
    }
    private groupInfoClose() {
        this.groupInfo.show = false;
    }
    private applyEnterGroupAction() {
        this.applyEnterGroup.emit(this.groupInfo.info);
    }
    private changeGroupConversationAction() {
        const group = {
            appkey: this.groupInfo.info.appkey,//群所属appkey
            avatar: this.groupInfo.info.avatar,//群头像
            avatarUrl: this.groupInfo.info.avatarUrl,//群头像URL
            ctime: this.groupInfo.info.ctime,//群创建时间
            desc: this.groupInfo.info.desc,//群描述
            flag: this.groupInfo.info.flag,
            gid: this.groupInfo.info.gid,//群id
            key: this.groupInfo.info.gid,//群id
            max_member_count: this.groupInfo.info.max_member_count,//最大群成员数量
            mtime: this.groupInfo.info.mtime,//最近一次群信息修改时间
            name: this.groupInfo.info.name,//群名称
            type: 4
        };
        this.groupInfo.show = false;
        this.changeGroupConversation.emit(group);
    }
}
