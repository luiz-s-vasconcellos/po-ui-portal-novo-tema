import{$i as h,B as L4,Cn as oi,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Hn as xu,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Ni as _o,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,Zt as fae,ai as Sn,b as Fu,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,qt as dte,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,w as Goe,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var de=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&nu(0,`po-button-group`,0),a&2&&UE(`p-buttons`,o.buttons)},dependencies:[dte],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-button-group-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{poNotification=h(Fu);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:xu.None},{label:`single`,value:xu.Single},{label:`multiple`,value:xu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=Ax();jc(0,`div`,2),nu(1,`po-button-group`,3),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.button.label,s)||(o.button.label=s),__(s)}),wg(),jc(7,`po-input`,5),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.button.action,s)||(o.button.action=s),__(s)}),wg(),jc(8,`po-input`,6),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.button.tooltip,s)||(o.button.tooltip=s),__(s)}),wg(),jc(9,`po-radio-group`,7),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.button.icon,s)||(o.button.icon=s),__(s)}),wg(),jc(10,`po-switch`,8),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.button.disabled,s)||(o.button.disabled=s),__(s)}),wg()(),jc(11,`div`,2)(12,`po-button`,9),mt(`p-click`,function(){v_(c);let s=Bx(4);return o.addButton(),__(s.reset())}),wg()()(),nu(13,`po-divider`),jc(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.toggle,s)||(o.toggle=s),__(s)}),wg(),jc(18,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(s){return v_(c),uO(o.size,s)||(o.size=s),__(s)}),wg()(),jc(19,`div`,2)(20,`po-button`,12),mt(`p-click`,function(){v_(c);let s=Bx(4);return Bx(15).reset(),s.reset(),__(o.restore())}),wg()()()}if(a&2){let c=Bx(4);rg(),UE(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),rg(5),sb(`ngModel`,o.button.label),o0(),rg(),sb(`ngModel`,o.button.action),o0(),rg(),sb(`ngModel`,o.button.tooltip),o0(),rg(),sb(`ngModel`,o.button.icon),UE(`p-options`,o.iconsOptions),o0(),rg(),sb(`ngModel`,o.button.disabled),o0(),rg(2),UE(`p-disabled`,c.invalid),rg(5),sb(`ngModel`,o.toggle),UE(`p-options`,o.toggleOptions),o0(),rg(),sb(`ngModel`,o.size),UE(`p-options`,o.sizeOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,oi,dte,Lf,U4,Gte,Woe,L4],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle" [p-size]="size"> </po-button-group>
</div>

<po-divider />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input
      class="po-lg-4 po-md-6"
      name="buttonAction"
      [(ngModel)]="button.action"
      p-label="Button action"
      p-required
    >
    </po-input>

    <po-input class="po-lg-4 po-md-6" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip">
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-columns="4"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-switch class="po-lg-4 po-md-6" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select
      class="po-lg-4 po-md-6"
      name="toggle"
      [(ngModel)]="toggle"
      p-label="Toggle"
      [p-options]="toggleOptions"
    ></po-select>

    <po-radio-group
      class="po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()">
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  button: any;
  buttons: Array<PoButtonGroupItem>;
  size: string;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.size = 'medium';
    this.button = {};
    this.buttons = [];
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-button-group-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{poNotification=h(Fu);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`div`,1),lO(2,`Choose the type of attendance`),wg(),jc(3,`div`,2),lO(4,`Get your password`),wg()(),nu(5,`po-divider`),jc(6,`div`,0),nu(7,`po-button-group`,3),wg()),a&2&&(rg(7),UE(`p-buttons`,o.attendances))},dependencies:[dte,Lf],encapsulation:2,changeDetection:1})}return i})();var Me=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Group - Attendance`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  private poNotification = inject(PoNotificationService);

  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
  ];

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-button-group-attendance`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Me,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(jc(0,`div`,0),lO(1,`Opening Service Ticket`),wg(),jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),lO(5,`Day of the week`),wg(),jc(6,`div`,3),nu(7,`po-button-group`,4),wg(),jc(8,`div`,3),nu(9,`po-button-group`,4),wg(),nu(10,`po-divider`),jc(11,`div`,5)(12,`strong`),lO(13,`Selected day:`),wg(),lO(14),wg(),jc(15,`div`,5)(16,`strong`),lO(17,`Selected period:`),wg(),lO(18),wg()()()),a&2&&(rg(7),UE(`p-buttons`,o.weekDays),rg(2),UE(`p-buttons`,o.periods),rg(5),Ag(` `,o.selectedWeekDay||`None`),rg(4),Ag(` `,o.selectedPeriod||`None`))},dependencies:[dte,Lf,fae],encapsulation:2})}return i})();var Le=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Group - Opening Service Ticket`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

<po-widget>
  <div class="po-row">
    <div class="po-md-12 po-mb-1 po-font-text-bold">Day of the week</div>
    <div class="po-md-12 po-mb-3">
      <po-button-group p-toggle="single" [p-buttons]="weekDays"> </po-button-group>
    </div>

    <div class="po-md-12 po-mb-3">
      <po-button-group p-toggle="single" [p-buttons]="periods"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-md-12 po-font-text"><strong>Selected day:</strong> { { selectedWeekDay || 'None' }}</div>
    <div class="po-md-12 po-font-text"><strong>Selected period:</strong> { { selectedPeriod || 'None' }}</div>
  </div>
</po-widget>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-opening-service-ticket',
  templateUrl: './sample-po-button-group-opening-service-ticket.component.html',
  standalone: false
})
export class SamplePoButtonGroupOpeningServiceTicketComponent {
  selectedWeekDay: string = '';
  selectedPeriod: string = '';

  weekDays: Array<PoButtonGroupItem> = [
    { label: 'Mon', tooltip: 'Monday', action: this.selectWeekDay.bind(this) },
    { label: 'Tue', tooltip: 'Tuesday', action: this.selectWeekDay.bind(this) },
    { label: 'Wed', tooltip: 'Wednesday', action: this.selectWeekDay.bind(this) },
    { label: 'Thu', tooltip: 'Thursday', action: this.selectWeekDay.bind(this) },
    { label: 'Fri', tooltip: 'Friday', action: this.selectWeekDay.bind(this) }
  ];

  periods: Array<PoButtonGroupItem> = [
    { label: 'Morning', action: this.selectPeriod.bind(this) },
    { label: 'Afternoon', action: this.selectPeriod.bind(this) },
    { label: 'Evening', action: this.selectPeriod.bind(this) }
  ];

  selectWeekDay(button: PoButtonGroupItem): void {
    this.selectedWeekDay = button.selected ? button.label : '';
  }

  selectPeriod(button: PoButtonGroupItem): void {
    this.selectedPeriod = button.selected ? button.label : '';
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-button-group-opening-service-ticket`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Le,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Se],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(jc(0,`div`,0),lO(1,`Create New Post`),wg(),jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),nu(5,`po-button-group`,3),wg(),jc(6,`div`,2),nu(7,`po-button-group`,4),wg(),jc(8,`po-textarea`,5),r0(),ab(`ngModelChange`,function(h){return uO(o.textArea,h)||(o.textArea=h),h}),wg(),jc(9,`div`,6),lO(10),wg()()()),a&2&&(rg(5),UE(`p-buttons`,o.fontStyle),rg(2),UE(`p-buttons`,o.textAlign),rg(),sb(`ngModel`,o.textArea),o0(),rg(),_o(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),rg(),Ag(` `,o.textArea,` `))},dependencies:[SK,xF,dte,Goe,fae],encapsulation:2,changeDetection:1})}return i})();var We=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Group - Post`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>

    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-button-group-post`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,We,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-button-group.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoButtonGroupComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-button-group`),wg(),lO(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),wg(),jc(18,`p`),lO(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),wg(),jc(20,`p`),lO(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),wg(),jc(22,`h4`),lO(23,`Boas práticas`),wg(),jc(24,`ul`)(25,`li`),lO(26,`Evite usar o `),jc(27,`code`),lO(28,`po-button-group`),wg(),lO(29,` com apenas 1 ação, para isso utilize o `),jc(30,`code`),lO(31,`po-button`),wg(),lO(32,`.`),wg(),jc(33,`li`),lO(34,`Procure utilizar no máximo 3 ações para cada `),jc(35,`code`),lO(36,`po-button-group`),wg(),lO(37,`.`),wg()(),jc(38,`blockquote`)(39,`p`),lO(40,`As recomendações do `),jc(41,`code`),lO(42,`po-button`),wg(),lO(43,` também valem para o `),jc(44,`code`),lO(45,`po-button-group`),wg(),lO(46,`.`),wg()(),jc(47,`h4`),lO(48,`Tokens customizáveis`),wg(),jc(49,`p`),lO(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(51,`blockquote`)(52,`p`),lO(53,`Para maiores informações, acesse o guia `),jc(54,`a`,6),lO(55,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(56,`.`),wg()(),jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),lO(61,`Propriedade`),wg(),jc(62,`th`),lO(63,`Descrição`),wg(),jc(64,`th`),lO(65,`Valor Padrão`),wg()()(),jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),lO(70,`Default Values`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),lO(76,`--font-family`),wg()(),jc(77,`td`),lO(78,`Família tipográfica usada`),wg(),jc(79,`td`)(80,`code`),lO(81,`var(--font-family-theme)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),lO(85,`--font-size`),wg()(),jc(86,`td`),lO(87,`Tamanho da fonte`),wg(),jc(88,`td`)(89,`code`),lO(90,`var(--font-size-default)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),lO(94,`--font-weight`),wg()(),jc(95,`td`),lO(96,`Peso da fonte`),wg(),jc(97,`td`)(98,`code`),lO(99,`var(--font-weight-bold)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),lO(103,`--line-height`),wg()(),jc(104,`td`),lO(105,`Tamanho da label`),wg(),jc(106,`td`)(107,`code`),lO(108,`var(--line-height-none)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`code`),lO(112,`--border-radius`),wg()(),jc(113,`td`),lO(114,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(115,`td`)(116,`code`),lO(117,`var(--border-radius-md)`),wg()()(),jc(118,`tr`)(119,`td`)(120,`code`),lO(121,`--border-width`),wg()(),jc(122,`td`),lO(123,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(124,`td`)(125,`code`),lO(126,`var(--border-width-md)`),wg()()(),jc(127,`tr`)(128,`td`)(129,`code`),lO(130,`--padding`),wg()(),jc(131,`td`),lO(132,`Preenchimento`),wg(),jc(133,`td`)(134,`code`),lO(135,`0 1em`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),lO(139,`--text-color`),wg()(),jc(140,`td`),lO(141,`Cor do texto`),wg(),jc(142,`td`)(143,`code`),lO(144,`var(--color-neutral-light-00)`),wg()()(),jc(145,`tr`)(146,`td`)(147,`code`),lO(148,`--color`),wg()(),jc(149,`td`),lO(150,`Cor principal do botão`),wg(),jc(151,`td`)(152,`code`),lO(153,`var(--color-action-default)`),wg()()(),jc(154,`tr`)(155,`td`)(156,`code`),lO(157,`--background-color`),wg()(),jc(158,`td`),lO(159,`Cor de background`),wg(),jc(160,`td`)(161,`code`),lO(162,`var(--color-transparent)`),wg()()(),jc(163,`tr`)(164,`td`)(165,`code`),lO(166,`--shadow`),wg()(),jc(167,`td`),lO(168,`Contém o valor da sombra do elemento`),wg(),jc(169,`td`)(170,`code`),lO(171,`var(--shadow-none)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`strong`),lO(175,`Hover`),wg()(),nu(176,`td`)(177,`td`),wg(),jc(178,`tr`)(179,`td`)(180,`code`),lO(181,`--color-hover`),wg()(),jc(182,`td`),lO(183,`Cor principal no estado hover`),wg(),jc(184,`td`)(185,`code`),lO(186,`var(--color-action-hover)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`code`),lO(190,`--background-hover`),wg()(),jc(191,`td`),lO(192,`Cor de background no estado hover`),wg(),jc(193,`td`)(194,`code`),lO(195,`var(--color-brand-01-lighter)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),lO(199,`--border-color-hover`),wg()(),jc(200,`td`),lO(201,`Cor da borda no estado hover`),wg(),jc(202,`td`)(203,`code`),lO(204,`var(--color-brand-01-darkest)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`strong`),lO(208,`Focused`),wg()(),nu(209,`td`)(210,`td`),wg(),jc(211,`tr`)(212,`td`)(213,`code`),lO(214,`--outline-color-focused`),wg()(),jc(215,`td`),lO(216,`Cor do outline do estado de focus`),wg(),jc(217,`td`)(218,`code`),lO(219,`var(--color-action-focus)`),wg()()(),jc(220,`tr`)(221,`td`)(222,`strong`),lO(223,`Pressed`),wg()(),nu(224,`td`)(225,`td`),wg(),jc(226,`tr`)(227,`td`)(228,`code`),lO(229,`--color-pressed`),wg()(),jc(230,`td`),lO(231,`Cor principal no estado de pressionado`),wg(),jc(232,`td`)(233,`code`),lO(234,`var(--color-action-pressed)`),wg()()(),jc(235,`tr`)(236,`td`)(237,`code`),lO(238,`--background-pressed`),wg()(),jc(239,`td`),lO(240,`Cor de background no estado de pressionado\xA0`),wg(),jc(241,`td`)(242,`code`),lO(243,`var(--color-brand-01-light)`),wg()()(),jc(244,`tr`)(245,`td`)(246,`strong`),lO(247,`Disabled`),wg()(),nu(248,`td`)(249,`td`),wg(),jc(250,`tr`)(251,`td`)(252,`code`),lO(253,`--color-disabled`),wg()(),jc(254,`td`),lO(255,`Cor principal no estado disabled`),wg(),jc(256,`td`)(257,`code`),lO(258,`var(--color-action-disabled)`),wg()()(),jc(259,`tr`)(260,`td`)(261,`code`),lO(262,`--background-color-disabled`),wg(),lO(263,` \xA0`),wg(),jc(264,`td`),lO(265,`Cor de background no estado disabled`),wg(),jc(266,`td`)(267,`code`),lO(268,`var(--color-transparent)`),wg()()()()()(),jc(269,`div`,7)(270,`h4`,8),lO(271,`Seletor`),wg(),jc(272,`pre`,9),lO(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),wg()(),jc(274,`h4`,10),lO(275,`Propriedades`),wg(),jc(276,`table`,11)(277,`tr`,12)(278,`th`,13),lO(279,`Nome`),wg(),jc(280,`th`,13),lO(281,`Tipo`),wg(),jc(282,`th`,13),lO(283,`Padrão`),wg(),jc(284,`th`,13),lO(285,`Descrição`),wg()(),jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),lO(290,` p-buttons`),nu(291,`br`),wg()()(),jc(292,`td`,18)(293,`code`,19),lO(294,`Array<PoButtonGroupItem>`),wg()(),jc(295,`td`,20),lO(296,`-`),wg(),jc(297,`td`,21)(298,`p`),lO(299,`Lista de botões.`),wg()()(),jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),lO(304,` p-size`),nu(305,`br`),wg()()(),jc(306,`td`,18)(307,`code`,22),lO(308,`string`),wg()(),jc(309,`td`,20)(310,`p`)(311,`code`),lO(312,`medium`),wg()()(),jc(313,`td`,21)(314,`em`)(315,`strong`),lO(316,`(opcional)`),wg()(),jc(317,`p`),lO(318,`Define o tamanho do componente:`),wg(),jc(319,`ul`)(320,`li`)(321,`code`),lO(322,`small`),wg(),lO(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(324,`li`)(325,`code`),lO(326,`medium`),wg(),lO(327,`: altura de 44px.`),wg()(),jc(328,`blockquote`)(329,`p`),lO(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(331,`code`),lO(332,`medium`),wg(),lO(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(334,`a`,23),lO(335,`po-theme`),wg(),lO(336,`.`),wg()()()(),jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),lO(341,` p-toggle`),nu(342,`br`),wg()()(),jc(343,`td`,18)(344,`code`,22),lO(345,`string`),wg()(),jc(346,`td`,20)(347,`p`)(348,`code`),lO(349,`none`),wg()()(),jc(350,`td`,21)(351,`em`)(352,`strong`),lO(353,`(opcional)`),wg()(),jc(354,`p`),lO(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),jc(356,`code`),lO(357,`PoButtonGroupToggle`),wg(),lO(358,`:`),wg(),jc(359,`ul`)(360,`li`)(361,`code`),lO(362,`multiple`),wg(),lO(363,`: permite múltiplas seleções.`),wg(),jc(364,`li`)(365,`code`),lO(366,`none`),wg(),lO(367,`: desativa a funcionalidade de seleção.`),wg(),jc(368,`li`)(369,`code`),lO(370,`single`),wg(),lO(371,`: restringe a seleção a um único botão.`),wg()()()()(),jc(372,`h3`),lO(373,`Interfaces`),wg(),jc(374,`h4`,24)(375,`code`,5),lO(376,`PoButtonGroupItem`),wg()(),jc(377,`div`,2)(378,`p`),lO(379,`Interface para os itens do `),jc(380,`code`),lO(381,`po-button-group`),wg(),lO(382,`.`),wg()(),jc(383,`h4`,10),lO(384,`Propriedades`),wg(),jc(385,`table`,11)(386,`tr`,12)(387,`th`,13),lO(388,`Nome`),wg(),jc(389,`th`,13),lO(390,`Tipo`),wg(),jc(391,`th`,13),lO(392,`Descrição`),wg()(),jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),lO(397,` action`),nu(398,`br`),wg()()(),jc(399,`td`,18)(400,`code`,25),lO(401,`Function`),wg()(),jc(402,`td`,21)(403,`p`),lO(404,`Ação executada ao clicar sobre o botão.`),wg()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),lO(409,` disabled`),nu(410,`br`),wg()()(),jc(411,`td`,18)(412,`code`,26),lO(413,`boolean`),wg()(),jc(414,`td`,21)(415,`em`)(416,`strong`),lO(417,`(opcional)`),wg()(),jc(418,`p`),lO(419,`Se verdadeiro, define o botão como desabilitado.`),wg(),jc(420,`blockquote`)(421,`p`),lO(422,`Por padrão esta propriedade é `),jc(423,`code`),lO(424,`false`),wg(),lO(425,`.`),wg()()()(),jc(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),lO(430,` icon`),nu(431,`br`),wg()()(),jc(432,`td`,18)(433,`code`,22),lO(434,`string `),wg(),jc(435,`code`,27),lO(436,` TemplateRef<void>`),wg()(),jc(437,`td`,21)(438,`em`)(439,`strong`),lO(440,`(opcional)`),wg()(),jc(441,`p`),lO(442,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(443,`p`),lO(444,`É possível usar qualquer um dos ícones da `),jc(445,`a`,28),lO(446,`Biblioteca de ícones`),wg(),lO(447,`. conforme exemplo abaixo:`),wg(),jc(448,`pre`)(449,`code`),lO(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),wg()(),jc(451,`p`),lO(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(453,`em`),lO(454,`Font Awesome`),wg(),lO(455,`, da seguinte forma:`),wg(),jc(456,`pre`)(457,`code`),lO(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),wg()(),jc(459,`p`),lO(460,`Outra opção seria a customização do ícone através do `),jc(461,`code`),lO(462,`TemplateRef`),wg(),lO(463,`, conforme exemplo abaixo:`),wg(),jc(464,`p`),lO(465,`component.html:`),wg(),jc(466,`pre`)(467,`code`),lO(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(469,`p`),lO(470,`component.ts:`),wg(),jc(471,`pre`)(472,`code`),lO(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),wg()(),jc(474,`blockquote`)(475,`p`),lO(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(477,`code`),lO(478,`font-size: inherit`),wg(),lO(479,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),lO(484,` label`),nu(485,`br`),wg()()(),jc(486,`td`,18)(487,`code`,22),lO(488,`string`),wg()(),jc(489,`td`,21)(490,`em`)(491,`strong`),lO(492,`(opcional)`),wg()(),jc(493,`p`),lO(494,`Label do botão.`),wg()()(),jc(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),lO(499,` selected`),nu(500,`br`),wg()()(),jc(501,`td`,18)(502,`code`,26),lO(503,`boolean`),wg()(),jc(504,`td`,21)(505,`em`)(506,`strong`),lO(507,`(opcional)`),wg()(),jc(508,`p`),lO(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),jc(510,`code`),lO(511,`p-toggle`),wg(),lO(512,`.`),wg()()(),jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),lO(517,` tooltip`),nu(518,`br`),wg()()(),jc(519,`td`,18)(520,`code`,22),lO(521,`string`),wg()(),jc(522,`td`,21)(523,`em`)(524,`strong`),lO(525,`(opcional)`),wg()(),jc(526,`p`),lO(527,`Define a mensagem a ser exibida ao posicionar o `),jc(528,`em`),lO(529,`mouse`),wg(),lO(530,` sobre o botão.`),wg()()()(),jc(531,`h3`),lO(532,`Enums`),wg(),jc(533,`h4`,4)(534,`code`,5),lO(535,`PoButtonGroupToggle`),wg()(),jc(536,`div`,2)(537,`p`),lO(538,`Tipos de seleção (`),jc(539,`code`),lO(540,`p-toggle`),wg(),lO(541,`) disponíveis para o componente.`),wg()(),jc(542,`h4`,10),lO(543,`Propriedades`),wg(),jc(544,`table`,11)(545,`tr`,12)(546,`th`,13),lO(547,`Nome`),wg(),jc(548,`th`,13),lO(549,`Descrição`),wg()(),jc(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),lO(554,` Multiple`),nu(555,`br`),wg()()(),jc(556,`td`,21)(557,`p`),lO(558,`Seleção múltipla.`),wg()()(),jc(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),lO(563,` None`),nu(564,`br`),wg()()(),jc(565,`td`,21)(566,`p`),lO(567,`Seleção desabilitada.`),wg()()(),jc(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),lO(572,` Single`),nu(573,`br`),wg()()(),jc(574,`td`,21)(575,`p`),lO(576,`Seleção única.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Oe(i,He){if(i&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-button-group-basic-view`)(2,`sample-po-button-group-labs-view`)(3,`sample-po-button-group-attendance-view`)(4,`sample-po-button-group-opening-service-ticket-view`)(5,`sample-po-button-group-post-view`),wg()}if(i&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Oe,6,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-button-group-doc`),wg()()()),a&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ce,ge,he,fe,Ce,ve],encapsulation:2,changeDetection:1})}return i})()}];var ye=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[I1.forChild(qe),I1]})}return i})();var Gt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[M,ye]})}return i})();export{Gt as DocPoButtonGroupModule};