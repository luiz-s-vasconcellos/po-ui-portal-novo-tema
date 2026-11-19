import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,gt as Tu,io as vu,ji as Vk,ki as V_,kt as Zoe,li as Qc,na as de,ni as Oo,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tn as gte,tt as R4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ce=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&vu(0,`po-button-group`,0),a&2&&Rb(`p-buttons`,o.buttons)},dependencies:[gte],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-button-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Group Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-button-group-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{poNotification=p(Ru);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:Tu.None},{label:`single`,value:Tu.Single},{label:`multiple`,value:Tu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=YO();Qc(0,`div`,2),vu(1,`po-button-group`,3),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.button.label,s)||(o.button.label=s),U_(s)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.button.action,s)||(o.button.action=s),U_(s)}),Kg(),Qc(8,`po-input`,6),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.button.tooltip,s)||(o.button.tooltip=s),U_(s)}),Kg(),Qc(9,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.button.icon,s)||(o.button.icon=s),U_(s)}),Kg(),Qc(10,`po-switch`,8),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.button.disabled,s)||(o.button.disabled=s),U_(s)}),Kg()(),Qc(11,`div`,2)(12,`po-button`,9),vt(`p-click`,function(){B_(c);let s=ik(4);return o.addButton(),U_(s.reset())}),Kg()()(),vu(13,`po-divider`),Qc(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.toggle,s)||(o.toggle=s),U_(s)}),Kg(),Qc(18,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(o.size,s)||(o.size=s),U_(s)}),Kg()(),Qc(19,`div`,2)(20,`po-button`,12),vt(`p-click`,function(){B_(c);let s=ik(4);return ik(15).reset(),s.reset(),U_(o.restore())}),Kg()()()}if(a&2){let c=ik(4);wg(),Rb(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),wg(5),Yb(`ngModel`,o.button.label),W0(),wg(),Yb(`ngModel`,o.button.action),W0(),wg(),Yb(`ngModel`,o.button.tooltip),W0(),wg(),Yb(`ngModel`,o.button.icon),Rb(`p-options`,o.iconsOptions),W0(),wg(),Yb(`ngModel`,o.button.disabled),W0(),wg(2),Rb(`p-disabled`,c.invalid),wg(5),Yb(`ngModel`,o.toggle),Rb(`p-options`,o.toggleOptions),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,gte,Nf,j4,Zte,Koe,R4],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-button-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Group Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-button-group-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ge,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{poNotification=p(Ru);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`div`,1),Sk(2,`Choose the type of attendance`),Kg(),Qc(3,`div`,2),Sk(4,`Get your password`),Kg()(),vu(5,`po-divider`),Qc(6,`div`,0),vu(7,`po-button-group`,3),Kg()),a&2&&(wg(7),Rb(`p-buttons`,o.attendances))},dependencies:[gte,Nf],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-button-group-attendance`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Group - Attendance`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-button-group-attendance`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(Qc(0,`div`,0),Sk(1,`Opening Service Ticket`),Kg(),Qc(2,`po-widget`)(3,`div`,1)(4,`div`,2),Sk(5,`Day of the week`),Kg(),Qc(6,`div`,3),vu(7,`po-button-group`,4),Kg(),Qc(8,`div`,3),vu(9,`po-button-group`,4),Kg(),vu(10,`po-divider`),Qc(11,`div`,5)(12,`strong`),Sk(13,`Selected day:`),Kg(),Sk(14),Kg(),Qc(15,`div`,5)(16,`strong`),Sk(17,`Selected period:`),Kg(),Sk(18),Kg()()()),a&2&&(wg(7),Rb(`p-buttons`,o.weekDays),wg(2),Rb(`p-buttons`,o.periods),wg(5),tm(` `,o.selectedWeekDay||`None`),wg(4),tm(` `,o.selectedPeriod||`None`))},dependencies:[gte,Nf,bae],encapsulation:2})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:38,vars:6,consts:[[`id`,`sample-po-button-group-opening-service-ticket`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Group - Opening Service Ticket`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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

    <div class="po-md-12 po-font-text"><strong>Selected day:</strong> `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` selectedWeekDay || 'None' `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</div>
    <div class="po-md-12 po-font-text"><strong>Selected period:</strong> `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` selectedPeriod || 'None' `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
  </div>
</po-widget>
`),Kg()()()(),Qc(28,`po-tab`,9)(29,`div`)(30,`label`,6),Sk(31,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),Kg(),Qc(32,`div`,10)(33,`pre`,11),Sk(34,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),Qc(35,`div`,12),vu(36,`sample-po-button-group-opening-service-ticket`),Kg(),vu(37,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(Qc(0,`div`,0),Sk(1,`Create New Post`),Kg(),Qc(2,`po-widget`)(3,`div`,1)(4,`div`,2),vu(5,`po-button-group`,3),Kg(),Qc(6,`div`,2),vu(7,`po-button-group`,4),Kg(),Qc(8,`po-textarea`,5),z0(),Kb(`ngModelChange`,function(h){return Tk(o.textArea,h)||(o.textArea=h),h}),Kg(),Qc(9,`div`,6),Sk(10),Kg()()()),a&2&&(wg(5),Rb(`p-buttons`,o.fontStyle),wg(2),Rb(`p-buttons`,o.textAlign),wg(),Yb(`ngModel`,o.textArea),W0(),wg(),Oo(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),wg(),tm(` `,o.textArea,` `))},dependencies:[MZ,QL,gte,Zoe,bae],encapsulation:2,changeDetection:1})}return i})();var Ve=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-button-group-post`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-post/sample-po-button-group-post.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-post/sample-po-button-group-post.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Group - Post`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-title po-mb-2">Create New Post</div>
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
      `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` textArea `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
    </div>
  </div>
</po-widget>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-button-group-post`),Kg(),vu(31,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-button-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-buttons`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-toggle`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-button-group-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-button-group-item-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-button-group-item-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-button-group-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item-tooltip`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle`,1,`docs-api-class-name`],[`id`,`enum-po-button-group-toggle-multiple`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle-none`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle-single`,1,`docs-api-properties-row`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-button-group.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoButtonGroupComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-button-group`),Kg(),Sk(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),Kg(),Qc(18,`p`),Sk(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),Kg(),Qc(20,`p`),Sk(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),Kg(),Qc(22,`h4`),Sk(23,`Boas práticas`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`Evite usar o `),Qc(27,`code`),Sk(28,`po-button-group`),Kg(),Sk(29,` com apenas 1 ação, para isso utilize o `),Qc(30,`code`),Sk(31,`po-button`),Kg(),Sk(32,`.`),Kg(),Qc(33,`li`),Sk(34,`Procure utilizar no máximo 3 ações para cada `),Qc(35,`code`),Sk(36,`po-button-group`),Kg(),Sk(37,`.`),Kg()(),Qc(38,`blockquote`)(39,`p`),Sk(40,`As recomendações do `),Qc(41,`code`),Sk(42,`po-button`),Kg(),Sk(43,` também valem para o `),Qc(44,`code`),Sk(45,`po-button-group`),Kg(),Sk(46,`.`),Kg()(),Qc(47,`h4`),Sk(48,`Tokens customizáveis`),Kg(),Qc(49,`p`),Sk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(51,`blockquote`)(52,`p`),Sk(53,`Para maiores informações, acesse o guia `),Qc(54,`a`,6),Sk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(56,`.`),Kg()(),Qc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Sk(61,`Propriedade`),Kg(),Qc(62,`th`),Sk(63,`Descrição`),Kg(),Qc(64,`th`),Sk(65,`Valor Padrão`),Kg()()(),Qc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Sk(70,`Default Values`),Kg()(),vu(71,`td`)(72,`td`),Kg(),Qc(73,`tr`)(74,`td`)(75,`code`),Sk(76,`--font-family`),Kg()(),Qc(77,`td`),Sk(78,`Família tipográfica usada`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--font-family-theme)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--font-size`),Kg()(),Qc(86,`td`),Sk(87,`Tamanho da fonte`),Kg(),Qc(88,`td`)(89,`code`),Sk(90,`var(--font-size-default)`),Kg()()(),Qc(91,`tr`)(92,`td`)(93,`code`),Sk(94,`--font-weight`),Kg()(),Qc(95,`td`),Sk(96,`Peso da fonte`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--font-weight-bold)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`code`),Sk(103,`--line-height`),Kg()(),Qc(104,`td`),Sk(105,`Tamanho da label`),Kg(),Qc(106,`td`)(107,`code`),Sk(108,`var(--line-height-none)`),Kg()()(),Qc(109,`tr`)(110,`td`)(111,`code`),Sk(112,`--border-radius`),Kg()(),Qc(113,`td`),Sk(114,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(115,`td`)(116,`code`),Sk(117,`var(--border-radius-md)`),Kg()()(),Qc(118,`tr`)(119,`td`)(120,`code`),Sk(121,`--border-width`),Kg()(),Qc(122,`td`),Sk(123,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(124,`td`)(125,`code`),Sk(126,`var(--border-width-md)`),Kg()()(),Qc(127,`tr`)(128,`td`)(129,`code`),Sk(130,`--padding`),Kg()(),Qc(131,`td`),Sk(132,`Preenchimento`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`0 1em`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--text-color`),Kg()(),Qc(140,`td`),Sk(141,`Cor do texto`),Kg(),Qc(142,`td`)(143,`code`),Sk(144,`var(--color-neutral-light-00)`),Kg()()(),Qc(145,`tr`)(146,`td`)(147,`code`),Sk(148,`--color`),Kg()(),Qc(149,`td`),Sk(150,`Cor principal do botão`),Kg(),Qc(151,`td`)(152,`code`),Sk(153,`var(--color-action-default)`),Kg()()(),Qc(154,`tr`)(155,`td`)(156,`code`),Sk(157,`--background-color`),Kg()(),Qc(158,`td`),Sk(159,`Cor de background`),Kg(),Qc(160,`td`)(161,`code`),Sk(162,`var(--color-transparent)`),Kg()()(),Qc(163,`tr`)(164,`td`)(165,`code`),Sk(166,`--shadow`),Kg()(),Qc(167,`td`),Sk(168,`Contém o valor da sombra do elemento`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`var(--shadow-none)`),Kg()()(),Qc(172,`tr`)(173,`td`)(174,`strong`),Sk(175,`Hover`),Kg()(),vu(176,`td`)(177,`td`),Kg(),Qc(178,`tr`)(179,`td`)(180,`code`),Sk(181,`--color-hover`),Kg()(),Qc(182,`td`),Sk(183,`Cor principal no estado hover`),Kg(),Qc(184,`td`)(185,`code`),Sk(186,`var(--color-action-hover)`),Kg()()(),Qc(187,`tr`)(188,`td`)(189,`code`),Sk(190,`--background-hover`),Kg()(),Qc(191,`td`),Sk(192,`Cor de background no estado hover`),Kg(),Qc(193,`td`)(194,`code`),Sk(195,`var(--color-brand-01-lighter)`),Kg()()(),Qc(196,`tr`)(197,`td`)(198,`code`),Sk(199,`--border-color-hover`),Kg()(),Qc(200,`td`),Sk(201,`Cor da borda no estado hover`),Kg(),Qc(202,`td`)(203,`code`),Sk(204,`var(--color-brand-01-darkest)`),Kg()()(),Qc(205,`tr`)(206,`td`)(207,`strong`),Sk(208,`Focused`),Kg()(),vu(209,`td`)(210,`td`),Kg(),Qc(211,`tr`)(212,`td`)(213,`code`),Sk(214,`--outline-color-focused`),Kg()(),Qc(215,`td`),Sk(216,`Cor do outline do estado de focus`),Kg(),Qc(217,`td`)(218,`code`),Sk(219,`var(--color-action-focus)`),Kg()()(),Qc(220,`tr`)(221,`td`)(222,`strong`),Sk(223,`Pressed`),Kg()(),vu(224,`td`)(225,`td`),Kg(),Qc(226,`tr`)(227,`td`)(228,`code`),Sk(229,`--color-pressed`),Kg()(),Qc(230,`td`),Sk(231,`Cor principal no estado de pressionado`),Kg(),Qc(232,`td`)(233,`code`),Sk(234,`var(--color-action-pressed)`),Kg()()(),Qc(235,`tr`)(236,`td`)(237,`code`),Sk(238,`--background-pressed`),Kg()(),Qc(239,`td`),Sk(240,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(241,`td`)(242,`code`),Sk(243,`var(--color-brand-01-light)`),Kg()()(),Qc(244,`tr`)(245,`td`)(246,`strong`),Sk(247,`Disabled`),Kg()(),vu(248,`td`)(249,`td`),Kg(),Qc(250,`tr`)(251,`td`)(252,`code`),Sk(253,`--color-disabled`),Kg()(),Qc(254,`td`),Sk(255,`Cor principal no estado disabled`),Kg(),Qc(256,`td`)(257,`code`),Sk(258,`var(--color-action-disabled)`),Kg()()(),Qc(259,`tr`)(260,`td`)(261,`code`),Sk(262,`--background-color-disabled`),Kg(),Sk(263,` \xA0`),Kg(),Qc(264,`td`),Sk(265,`Cor de background no estado disabled`),Kg(),Qc(266,`td`)(267,`code`),Sk(268,`var(--color-transparent)`),Kg()()()()()(),Qc(269,`div`,7)(270,`h4`,8),Sk(271,`Seletor`),Kg(),Qc(272,`pre`,9),Sk(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),Kg()(),Qc(274,`h4`,10),Sk(275,`Propriedades`),Kg(),Qc(276,`table`,11)(277,`tr`,12)(278,`th`,13),Sk(279,`Nome`),Kg(),Qc(280,`th`,13),Sk(281,`Tipo`),Kg(),Qc(282,`th`,13),Sk(283,`Padrão`),Kg(),Qc(284,`th`,13),Sk(285,`Descrição`),Kg()(),Qc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),Sk(290,` p-buttons`),vu(291,`br`),Kg()()(),Qc(292,`td`,18)(293,`code`,19),Sk(294,`Array<PoButtonGroupItem>`),Kg()(),Qc(295,`td`,20),Sk(296,`-`),Kg(),Qc(297,`td`,21)(298,`p`),Sk(299,`Lista de botões.`),Kg()()(),Qc(300,`tr`,22)(301,`td`,15)(302,`div`,16)(303,`span`,17),Sk(304,` p-size`),vu(305,`br`),Kg()()(),Qc(306,`td`,18)(307,`code`,23),Sk(308,`string`),Kg()(),Qc(309,`td`,20)(310,`p`)(311,`code`),Sk(312,`medium`),Kg()()(),Qc(313,`td`,21)(314,`em`)(315,`strong`),Sk(316,`(opcional)`),Kg()(),Qc(317,`p`),Sk(318,`Define o tamanho do componente:`),Kg(),Qc(319,`ul`)(320,`li`)(321,`code`),Sk(322,`small`),Kg(),Sk(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(324,`li`)(325,`code`),Sk(326,`medium`),Kg(),Sk(327,`: altura de 44px.`),Kg()(),Qc(328,`blockquote`)(329,`p`),Sk(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(331,`code`),Sk(332,`medium`),Kg(),Sk(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(334,`a`,24),Sk(335,`po-theme`),Kg(),Sk(336,`.`),Kg()()()(),Qc(337,`tr`,25)(338,`td`,15)(339,`div`,16)(340,`span`,17),Sk(341,` p-toggle`),vu(342,`br`),Kg()()(),Qc(343,`td`,18)(344,`code`,23),Sk(345,`string`),Kg()(),Qc(346,`td`,20)(347,`p`)(348,`code`),Sk(349,`none`),Kg()()(),Qc(350,`td`,21)(351,`em`)(352,`strong`),Sk(353,`(opcional)`),Kg()(),Qc(354,`p`),Sk(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Qc(356,`code`),Sk(357,`PoButtonGroupToggle`),Kg(),Sk(358,`:`),Kg(),Qc(359,`ul`)(360,`li`)(361,`code`),Sk(362,`multiple`),Kg(),Sk(363,`: permite múltiplas seleções.`),Kg(),Qc(364,`li`)(365,`code`),Sk(366,`none`),Kg(),Sk(367,`: desativa a funcionalidade de seleção.`),Kg(),Qc(368,`li`)(369,`code`),Sk(370,`single`),Kg(),Sk(371,`: restringe a seleção a um único botão.`),Kg()()()()(),Qc(372,`h3`),Sk(373,`Interfaces`),Kg(),Qc(374,`h4`,26)(375,`code`,5),Sk(376,`PoButtonGroupItem`),Kg()(),Qc(377,`div`,2)(378,`p`),Sk(379,`Interface para os itens do `),Qc(380,`code`),Sk(381,`po-button-group`),Kg(),Sk(382,`.`),Kg()(),Qc(383,`h4`,10),Sk(384,`Propriedades`),Kg(),Qc(385,`table`,11)(386,`tr`,12)(387,`th`,13),Sk(388,`Nome`),Kg(),Qc(389,`th`,13),Sk(390,`Tipo`),Kg(),Qc(391,`th`,13),Sk(392,`Descrição`),Kg()(),Qc(393,`tr`,27)(394,`td`,15)(395,`div`,16)(396,`span`,17),Sk(397,` action`),vu(398,`br`),Kg()()(),Qc(399,`td`,18)(400,`code`,28),Sk(401,`Function`),Kg()(),Qc(402,`td`,21)(403,`p`),Sk(404,`Ação executada ao clicar sobre o botão.`),Kg()()(),Qc(405,`tr`,29)(406,`td`,15)(407,`div`,16)(408,`span`,17),Sk(409,` disabled`),vu(410,`br`),Kg()()(),Qc(411,`td`,18)(412,`code`,30),Sk(413,`boolean`),Kg()(),Qc(414,`td`,21)(415,`em`)(416,`strong`),Sk(417,`(opcional)`),Kg()(),Qc(418,`p`),Sk(419,`Se verdadeiro, define o botão como desabilitado.`),Kg(),Qc(420,`blockquote`)(421,`p`),Sk(422,`Por padrão esta propriedade é `),Qc(423,`code`),Sk(424,`false`),Kg(),Sk(425,`.`),Kg()()()(),Qc(426,`tr`,31)(427,`td`,15)(428,`div`,16)(429,`span`,17),Sk(430,` icon`),vu(431,`br`),Kg()()(),Qc(432,`td`,18)(433,`code`,23),Sk(434,`string `),Kg(),Qc(435,`code`,32),Sk(436,` TemplateRef<void>`),Kg()(),Qc(437,`td`,21)(438,`em`)(439,`strong`),Sk(440,`(opcional)`),Kg()(),Qc(441,`p`),Sk(442,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Qc(443,`p`),Sk(444,`É possível usar qualquer um dos ícones da `),Qc(445,`a`,33),Sk(446,`Biblioteca de ícones`),Kg(),Sk(447,`. conforme exemplo abaixo:`),Kg(),Qc(448,`pre`)(449,`code`),Sk(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),Kg()(),Qc(451,`p`),Sk(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(453,`em`),Sk(454,`Font Awesome`),Kg(),Sk(455,`, da seguinte forma:`),Kg(),Qc(456,`pre`)(457,`code`),Sk(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),Kg()(),Qc(459,`p`),Sk(460,`Outra opção seria a customização do ícone através do `),Qc(461,`code`),Sk(462,`TemplateRef`),Kg(),Sk(463,`, conforme exemplo abaixo:`),Kg(),Qc(464,`p`),Sk(465,`component.html:`),Kg(),Qc(466,`pre`)(467,`code`),Sk(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(469,`p`),Sk(470,`component.ts:`),Kg(),Qc(471,`pre`)(472,`code`),Sk(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),Kg()(),Qc(474,`blockquote`)(475,`p`),Sk(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(477,`code`),Sk(478,`font-size: inherit`),Kg(),Sk(479,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(480,`tr`,34)(481,`td`,15)(482,`div`,16)(483,`span`,17),Sk(484,` label`),vu(485,`br`),Kg()()(),Qc(486,`td`,18)(487,`code`,23),Sk(488,`string`),Kg()(),Qc(489,`td`,21)(490,`em`)(491,`strong`),Sk(492,`(opcional)`),Kg()(),Qc(493,`p`),Sk(494,`Label do botão.`),Kg()()(),Qc(495,`tr`,35)(496,`td`,15)(497,`div`,16)(498,`span`,17),Sk(499,` selected`),vu(500,`br`),Kg()()(),Qc(501,`td`,18)(502,`code`,30),Sk(503,`boolean`),Kg()(),Qc(504,`td`,21)(505,`em`)(506,`strong`),Sk(507,`(opcional)`),Kg()(),Qc(508,`p`),Sk(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Qc(510,`code`),Sk(511,`p-toggle`),Kg(),Sk(512,`.`),Kg()()(),Qc(513,`tr`,36)(514,`td`,15)(515,`div`,16)(516,`span`,17),Sk(517,` tooltip`),vu(518,`br`),Kg()()(),Qc(519,`td`,18)(520,`code`,23),Sk(521,`string`),Kg()(),Qc(522,`td`,21)(523,`em`)(524,`strong`),Sk(525,`(opcional)`),Kg()(),Qc(526,`p`),Sk(527,`Define a mensagem a ser exibida ao posicionar o `),Qc(528,`em`),Sk(529,`mouse`),Kg(),Sk(530,` sobre o botão.`),Kg()()()(),Qc(531,`h3`),Sk(532,`Enums`),Kg(),Qc(533,`h4`,37)(534,`code`,5),Sk(535,`PoButtonGroupToggle`),Kg()(),Qc(536,`div`,2)(537,`p`),Sk(538,`Tipos de seleção (`),Qc(539,`code`),Sk(540,`p-toggle`),Kg(),Sk(541,`) disponíveis para o componente.`),Kg()(),Qc(542,`h4`,10),Sk(543,`Propriedades`),Kg(),Qc(544,`table`,11)(545,`tr`,12)(546,`th`,13),Sk(547,`Nome`),Kg(),Qc(548,`th`,13),Sk(549,`Descrição`),Kg()(),Qc(550,`tr`,38)(551,`td`,15)(552,`div`,16)(553,`span`,17),Sk(554,` Multiple`),vu(555,`br`),Kg()()(),Qc(556,`td`,21)(557,`p`),Sk(558,`Seleção múltipla.`),Kg()()(),Qc(559,`tr`,39)(560,`td`,15)(561,`div`,16)(562,`span`,17),Sk(563,` None`),vu(564,`br`),Kg()()(),Qc(565,`td`,21)(566,`p`),Sk(567,`Seleção desabilitada.`),Kg()()(),Qc(568,`tr`,40)(569,`td`,15)(570,`div`,16)(571,`span`,17),Sk(572,` Single`),vu(573,`br`),Kg()()(),Qc(574,`td`,21)(575,`p`),Sk(576,`Seleção única.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function qe(i,je){if(i&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-button-group-basic-view`)(2,`sample-po-button-group-labs-view`)(3,`sample-po-button-group-attendance-view`)(4,`sample-po-button-group-opening-service-ticket-view`)(5,`sample-po-button-group-post-view`),Kg()}if(i&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var He=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,qe,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-button-group-doc`),Kg()()()),a&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,Se,Ee,Ce,xe],encapsulation:2,changeDetection:1})}return i})()}];var Pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(He),GV]})}return i})();var Lt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,Pe]})}return i})();export{Lt as DocPoButtonGroupModule};