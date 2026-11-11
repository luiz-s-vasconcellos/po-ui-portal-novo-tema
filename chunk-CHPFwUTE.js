import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,$t as gte,Dt as Zoe,Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,an as j4,cr as Bk,ea as ge$1,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,jr as I,mt as Tu,no as yk,nr as An,qa as vt,qi as de$1,ti as Oo,tr as Ak,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm}from"./chunk-BJubg121.js";var de=(()=>{class i{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&_u(0,`po-button-group`,0),a&2&&Ab(`p-buttons`,o.buttons)},dependencies:[gte],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Group Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-group-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Pe,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{poNotification=p(Ru);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:Tu.None},{label:`single`,value:Tu.Single},{label:`multiple`,value:Tu.Multiple}];ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let c=ZO();Jc(0,`div`,2),_u(1,`po-button-group`,3),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.button.label,s)||(o.button.label=s),$_(s)}),Zg(),Jc(7,`po-input`,5),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.button.action,s)||(o.button.action=s),$_(s)}),Zg(),Jc(8,`po-input`,6),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.button.tooltip,s)||(o.button.tooltip=s),$_(s)}),Zg(),Jc(9,`po-radio-group`,7),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.button.icon,s)||(o.button.icon=s),$_(s)}),Zg(),Jc(10,`po-switch`,8),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.button.disabled,s)||(o.button.disabled=s),$_(s)}),Zg()(),Jc(11,`div`,2)(12,`po-button`,9),vt(`p-click`,function(){H_(c);let s=sk(4);return o.addButton(),$_(s.reset())}),Zg()()(),_u(13,`po-divider`),Jc(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.toggle,s)||(o.toggle=s),$_(s)}),Zg(),Jc(18,`po-radio-group`,11),W0(),Zb(`ngModelChange`,function(s){return H_(c),Ak(o.size,s)||(o.size=s),$_(s)}),Zg()(),Jc(19,`div`,2)(20,`po-button`,12),vt(`p-click`,function(){H_(c);let s=sk(4);return sk(15).reset(),s.reset(),$_(o.restore())}),Zg()()()}if(a&2){let c=sk(4);Ig(),Ab(`p-buttons`,o.buttons)(`p-toggle`,o.toggle)(`p-size`,o.size),Ig(5),Kb(`ngModel`,o.button.label),Y0(),Ig(),Kb(`ngModel`,o.button.action),Y0(),Ig(),Kb(`ngModel`,o.button.tooltip),Y0(),Ig(),Kb(`ngModel`,o.button.icon),Ab(`p-options`,o.iconsOptions),Y0(),Ig(),Kb(`ngModel`,o.button.disabled),Y0(),Ig(2),Ab(`p-disabled`,c.invalid),Ig(5),Kb(`ngModel`,o.toggle),Ab(`p-options`,o.toggleOptions),Y0(),Ig(),Kb(`ngModel`,o.size),Ab(`p-options`,o.sizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,gte,Nf,j4,Zte,Koe,R4],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Group Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-group-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,De,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{poNotification=p(Ru);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(p){let a=this.randomPassword(),o=this.getTypeNotification(p.label);this.poNotification[o](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=``){switch(p){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`div`,1),Tk(2,`Choose the type of attendance`),Zg(),Jc(3,`div`,2),Tk(4,`Get your password`),Zg()(),_u(5,`po-divider`),Jc(6,`div`,0),_u(7,`po-button-group`,3),Zg()),a&2&&(Ig(7),Ab(`p-buttons`,o.attendances))},dependencies:[gte,Nf],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Group - Attendance`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-group-attendance`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,_e,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(p){this.selectedWeekDay=p.selected?p.label:``}selectPeriod(p){this.selectedPeriod=p.selected?p.label:``}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(a,o){a&1&&(Jc(0,`div`,0),Tk(1,`Opening Service Ticket`),Zg(),Jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),Tk(5,`Day of the week`),Zg(),Jc(6,`div`,3),_u(7,`po-button-group`,4),Zg(),Jc(8,`div`,3),_u(9,`po-button-group`,4),Zg(),_u(10,`po-divider`),Jc(11,`div`,5)(12,`strong`),Tk(13,`Selected day:`),Zg(),Tk(14),Zg(),Jc(15,`div`,5)(16,`strong`),Tk(17,`Selected period:`),Zg(),Tk(18),Zg()()()),a&2&&(Ig(7),Ab(`p-buttons`,o.weekDays),Ig(2),Ab(`p-buttons`,o.periods),Ig(5),nm(` `,o.selectedWeekDay||`None`),Ig(4),nm(` `,o.selectedPeriod||`None`))},dependencies:[gte,Nf,bae],encapsulation:2})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Group - Opening Service Ticket`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-group-opening-service-ticket`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ie,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(a,o){a&1&&(Jc(0,`div`,0),Tk(1,`Create New Post`),Zg(),Jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),_u(5,`po-button-group`,3),Zg(),Jc(6,`div`,2),_u(7,`po-button-group`,4),Zg(),Jc(8,`po-textarea`,5),W0(),Zb(`ngModelChange`,function(h){return Ak(o.textArea,h)||(o.textArea=h),h}),Zg(),Jc(9,`div`,6),Tk(10),Zg()()()),a&2&&(Ig(5),Ab(`p-buttons`,o.fontStyle),Ig(2),Ab(`p-buttons`,o.textAlign),Ig(),Kb(`ngModel`,o.textArea),Y0(),Ig(),Oo(`font-weight`,o.setBold?`bold`:`normal`)(`font-style`,o.setItalic?`italic`:`normal`)(`text-decoration`,o.setUnderline?`underline`:`none`)(`text-align`,o.setTextAlignment),Ig(),nm(` `,o.textArea,` `))},dependencies:[TZ,JL,gte,Zoe,bae],encapsulation:2,changeDetection:1})}return i})();var We=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Group - Post`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-group-post`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,We,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-button-group.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoButtonGroupComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-button-group`),Zg(),Tk(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),Zg(),Jc(18,`p`),Tk(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),Zg(),Jc(20,`p`),Tk(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),Zg(),Jc(22,`h4`),Tk(23,`Boas práticas`),Zg(),Jc(24,`ul`)(25,`li`),Tk(26,`Evite usar o `),Jc(27,`code`),Tk(28,`po-button-group`),Zg(),Tk(29,` com apenas 1 ação, para isso utilize o `),Jc(30,`code`),Tk(31,`po-button`),Zg(),Tk(32,`.`),Zg(),Jc(33,`li`),Tk(34,`Procure utilizar no máximo 3 ações para cada `),Jc(35,`code`),Tk(36,`po-button-group`),Zg(),Tk(37,`.`),Zg()(),Jc(38,`blockquote`)(39,`p`),Tk(40,`As recomendações do `),Jc(41,`code`),Tk(42,`po-button`),Zg(),Tk(43,` também valem para o `),Jc(44,`code`),Tk(45,`po-button-group`),Zg(),Tk(46,`.`),Zg()(),Jc(47,`h4`),Tk(48,`Tokens customizáveis`),Zg(),Jc(49,`p`),Tk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(51,`blockquote`)(52,`p`),Tk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Tk(55,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(56,`.`),Zg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Tk(61,`Propriedade`),Zg(),Jc(62,`th`),Tk(63,`Descrição`),Zg(),Jc(64,`th`),Tk(65,`Valor Padrão`),Zg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Tk(70,`Default Values`),Zg()(),_u(71,`td`)(72,`td`),Zg(),Jc(73,`tr`)(74,`td`)(75,`code`),Tk(76,`--font-family`),Zg()(),Jc(77,`td`),Tk(78,`Família tipográfica usada`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--font-family-theme)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--font-size`),Zg()(),Jc(86,`td`),Tk(87,`Tamanho da fonte`),Zg(),Jc(88,`td`)(89,`code`),Tk(90,`var(--font-size-default)`),Zg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Tk(94,`--font-weight`),Zg()(),Jc(95,`td`),Tk(96,`Peso da fonte`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--font-weight-bold)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Tk(103,`--line-height`),Zg()(),Jc(104,`td`),Tk(105,`Tamanho da label`),Zg(),Jc(106,`td`)(107,`code`),Tk(108,`var(--line-height-none)`),Zg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Tk(112,`--border-radius`),Zg()(),Jc(113,`td`),Tk(114,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(115,`td`)(116,`code`),Tk(117,`var(--border-radius-md)`),Zg()()(),Jc(118,`tr`)(119,`td`)(120,`code`),Tk(121,`--border-width`),Zg()(),Jc(122,`td`),Tk(123,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(124,`td`)(125,`code`),Tk(126,`var(--border-width-md)`),Zg()()(),Jc(127,`tr`)(128,`td`)(129,`code`),Tk(130,`--padding`),Zg()(),Jc(131,`td`),Tk(132,`Preenchimento`),Zg(),Jc(133,`td`)(134,`code`),Tk(135,`0 1em`),Zg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Tk(139,`--text-color`),Zg()(),Jc(140,`td`),Tk(141,`Cor do texto`),Zg(),Jc(142,`td`)(143,`code`),Tk(144,`var(--color-neutral-light-00)`),Zg()()(),Jc(145,`tr`)(146,`td`)(147,`code`),Tk(148,`--color`),Zg()(),Jc(149,`td`),Tk(150,`Cor principal do botão`),Zg(),Jc(151,`td`)(152,`code`),Tk(153,`var(--color-action-default)`),Zg()()(),Jc(154,`tr`)(155,`td`)(156,`code`),Tk(157,`--background-color`),Zg()(),Jc(158,`td`),Tk(159,`Cor de background`),Zg(),Jc(160,`td`)(161,`code`),Tk(162,`var(--color-transparent)`),Zg()()(),Jc(163,`tr`)(164,`td`)(165,`code`),Tk(166,`--shadow`),Zg()(),Jc(167,`td`),Tk(168,`Contém o valor da sombra do elemento`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`var(--shadow-none)`),Zg()()(),Jc(172,`tr`)(173,`td`)(174,`strong`),Tk(175,`Hover`),Zg()(),_u(176,`td`)(177,`td`),Zg(),Jc(178,`tr`)(179,`td`)(180,`code`),Tk(181,`--color-hover`),Zg()(),Jc(182,`td`),Tk(183,`Cor principal no estado hover`),Zg(),Jc(184,`td`)(185,`code`),Tk(186,`var(--color-action-hover)`),Zg()()(),Jc(187,`tr`)(188,`td`)(189,`code`),Tk(190,`--background-hover`),Zg()(),Jc(191,`td`),Tk(192,`Cor de background no estado hover`),Zg(),Jc(193,`td`)(194,`code`),Tk(195,`var(--color-brand-01-lighter)`),Zg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--border-color-hover`),Zg()(),Jc(200,`td`),Tk(201,`Cor da borda no estado hover`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`var(--color-brand-01-darkest)`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`strong`),Tk(208,`Focused`),Zg()(),_u(209,`td`)(210,`td`),Zg(),Jc(211,`tr`)(212,`td`)(213,`code`),Tk(214,`--outline-color-focused`),Zg()(),Jc(215,`td`),Tk(216,`Cor do outline do estado de focus`),Zg(),Jc(217,`td`)(218,`code`),Tk(219,`var(--color-action-focus)`),Zg()()(),Jc(220,`tr`)(221,`td`)(222,`strong`),Tk(223,`Pressed`),Zg()(),_u(224,`td`)(225,`td`),Zg(),Jc(226,`tr`)(227,`td`)(228,`code`),Tk(229,`--color-pressed`),Zg()(),Jc(230,`td`),Tk(231,`Cor principal no estado de pressionado`),Zg(),Jc(232,`td`)(233,`code`),Tk(234,`var(--color-action-pressed)`),Zg()()(),Jc(235,`tr`)(236,`td`)(237,`code`),Tk(238,`--background-pressed`),Zg()(),Jc(239,`td`),Tk(240,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(241,`td`)(242,`code`),Tk(243,`var(--color-brand-01-light)`),Zg()()(),Jc(244,`tr`)(245,`td`)(246,`strong`),Tk(247,`Disabled`),Zg()(),_u(248,`td`)(249,`td`),Zg(),Jc(250,`tr`)(251,`td`)(252,`code`),Tk(253,`--color-disabled`),Zg()(),Jc(254,`td`),Tk(255,`Cor principal no estado disabled`),Zg(),Jc(256,`td`)(257,`code`),Tk(258,`var(--color-action-disabled)`),Zg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Tk(262,`--background-color-disabled`),Zg(),Tk(263,` \xA0`),Zg(),Jc(264,`td`),Tk(265,`Cor de background no estado disabled`),Zg(),Jc(266,`td`)(267,`code`),Tk(268,`var(--color-transparent)`),Zg()()()()()(),Jc(269,`div`,7)(270,`h4`,8),Tk(271,`Seletor`),Zg(),Jc(272,`pre`,9),Tk(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),Zg()(),Jc(274,`h4`,10),Tk(275,`Propriedades`),Zg(),Jc(276,`table`,11)(277,`tr`,12)(278,`th`,13),Tk(279,`Nome`),Zg(),Jc(280,`th`,13),Tk(281,`Tipo`),Zg(),Jc(282,`th`,13),Tk(283,`Padrão`),Zg(),Jc(284,`th`,13),Tk(285,`Descrição`),Zg()(),Jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),Tk(290,` p-buttons`),_u(291,`br`),Zg()()(),Jc(292,`td`,18)(293,`code`,19),Tk(294,`Array<PoButtonGroupItem>`),Zg()(),Jc(295,`td`,20),Tk(296,`-`),Zg(),Jc(297,`td`,21)(298,`p`),Tk(299,`Lista de botões.`),Zg()()(),Jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),Tk(304,` p-size`),_u(305,`br`),Zg()()(),Jc(306,`td`,18)(307,`code`,22),Tk(308,`string`),Zg()(),Jc(309,`td`,20)(310,`p`)(311,`code`),Tk(312,`medium`),Zg()()(),Jc(313,`td`,21)(314,`em`)(315,`strong`),Tk(316,`(opcional)`),Zg()(),Jc(317,`p`),Tk(318,`Define o tamanho do componente:`),Zg(),Jc(319,`ul`)(320,`li`)(321,`code`),Tk(322,`small`),Zg(),Tk(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(324,`li`)(325,`code`),Tk(326,`medium`),Zg(),Tk(327,`: altura de 44px.`),Zg()(),Jc(328,`blockquote`)(329,`p`),Tk(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(331,`code`),Tk(332,`medium`),Zg(),Tk(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(334,`a`,23),Tk(335,`po-theme`),Zg(),Tk(336,`.`),Zg()()()(),Jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),Tk(341,` p-toggle`),_u(342,`br`),Zg()()(),Jc(343,`td`,18)(344,`code`,22),Tk(345,`string`),Zg()(),Jc(346,`td`,20)(347,`p`)(348,`code`),Tk(349,`none`),Zg()()(),Jc(350,`td`,21)(351,`em`)(352,`strong`),Tk(353,`(opcional)`),Zg()(),Jc(354,`p`),Tk(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Jc(356,`code`),Tk(357,`PoButtonGroupToggle`),Zg(),Tk(358,`:`),Zg(),Jc(359,`ul`)(360,`li`)(361,`code`),Tk(362,`multiple`),Zg(),Tk(363,`: permite múltiplas seleções.`),Zg(),Jc(364,`li`)(365,`code`),Tk(366,`none`),Zg(),Tk(367,`: desativa a funcionalidade de seleção.`),Zg(),Jc(368,`li`)(369,`code`),Tk(370,`single`),Zg(),Tk(371,`: restringe a seleção a um único botão.`),Zg()()()()(),Jc(372,`h3`),Tk(373,`Interfaces`),Zg(),Jc(374,`h4`,24)(375,`code`,5),Tk(376,`PoButtonGroupItem`),Zg()(),Jc(377,`div`,2)(378,`p`),Tk(379,`Interface para os itens do `),Jc(380,`code`),Tk(381,`po-button-group`),Zg(),Tk(382,`.`),Zg()(),Jc(383,`h4`,10),Tk(384,`Propriedades`),Zg(),Jc(385,`table`,11)(386,`tr`,12)(387,`th`,13),Tk(388,`Nome`),Zg(),Jc(389,`th`,13),Tk(390,`Tipo`),Zg(),Jc(391,`th`,13),Tk(392,`Descrição`),Zg()(),Jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),Tk(397,` action`),_u(398,`br`),Zg()()(),Jc(399,`td`,18)(400,`code`,25),Tk(401,`Function`),Zg()(),Jc(402,`td`,21)(403,`p`),Tk(404,`Ação executada ao clicar sobre o botão.`),Zg()()(),Jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),Tk(409,` disabled`),_u(410,`br`),Zg()()(),Jc(411,`td`,18)(412,`code`,26),Tk(413,`boolean`),Zg()(),Jc(414,`td`,21)(415,`em`)(416,`strong`),Tk(417,`(opcional)`),Zg()(),Jc(418,`p`),Tk(419,`Se verdadeiro, define o botão como desabilitado.`),Zg(),Jc(420,`blockquote`)(421,`p`),Tk(422,`Por padrão esta propriedade é `),Jc(423,`code`),Tk(424,`false`),Zg(),Tk(425,`.`),Zg()()()(),Jc(426,`tr`,14)(427,`td`,15)(428,`div`,16)(429,`span`,17),Tk(430,` icon`),_u(431,`br`),Zg()()(),Jc(432,`td`,18)(433,`code`,22),Tk(434,`string `),Zg(),Jc(435,`code`,27),Tk(436,` TemplateRef<void>`),Zg()(),Jc(437,`td`,21)(438,`em`)(439,`strong`),Tk(440,`(opcional)`),Zg()(),Jc(441,`p`),Tk(442,`Ícone exibido ao lado esquerdo do label do botão.`),Zg(),Jc(443,`p`),Tk(444,`É possível usar qualquer um dos ícones da `),Jc(445,`a`,28),Tk(446,`Biblioteca de ícones`),Zg(),Tk(447,`. conforme exemplo abaixo:`),Zg(),Jc(448,`pre`)(449,`code`),Tk(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),Zg()(),Jc(451,`p`),Tk(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(453,`em`),Tk(454,`Font Awesome`),Zg(),Tk(455,`, da seguinte forma:`),Zg(),Jc(456,`pre`)(457,`code`),Tk(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),Zg()(),Jc(459,`p`),Tk(460,`Outra opção seria a customização do ícone através do `),Jc(461,`code`),Tk(462,`TemplateRef`),Zg(),Tk(463,`, conforme exemplo abaixo:`),Zg(),Jc(464,`p`),Tk(465,`component.html:`),Zg(),Jc(466,`pre`)(467,`code`),Tk(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(469,`p`),Tk(470,`component.ts:`),Zg(),Jc(471,`pre`)(472,`code`),Tk(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),Zg()(),Jc(474,`blockquote`)(475,`p`),Tk(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(477,`code`),Tk(478,`font-size: inherit`),Zg(),Tk(479,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(480,`tr`,14)(481,`td`,15)(482,`div`,16)(483,`span`,17),Tk(484,` label`),_u(485,`br`),Zg()()(),Jc(486,`td`,18)(487,`code`,22),Tk(488,`string`),Zg()(),Jc(489,`td`,21)(490,`em`)(491,`strong`),Tk(492,`(opcional)`),Zg()(),Jc(493,`p`),Tk(494,`Label do botão.`),Zg()()(),Jc(495,`tr`,14)(496,`td`,15)(497,`div`,16)(498,`span`,17),Tk(499,` selected`),_u(500,`br`),Zg()()(),Jc(501,`td`,18)(502,`code`,26),Tk(503,`boolean`),Zg()(),Jc(504,`td`,21)(505,`em`)(506,`strong`),Tk(507,`(opcional)`),Zg()(),Jc(508,`p`),Tk(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Jc(510,`code`),Tk(511,`p-toggle`),Zg(),Tk(512,`.`),Zg()()(),Jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),Tk(517,` tooltip`),_u(518,`br`),Zg()()(),Jc(519,`td`,18)(520,`code`,22),Tk(521,`string`),Zg()(),Jc(522,`td`,21)(523,`em`)(524,`strong`),Tk(525,`(opcional)`),Zg()(),Jc(526,`p`),Tk(527,`Define a mensagem a ser exibida ao posicionar o `),Jc(528,`em`),Tk(529,`mouse`),Zg(),Tk(530,` sobre o botão.`),Zg()()()(),Jc(531,`h3`),Tk(532,`Enums`),Zg(),Jc(533,`h4`,4)(534,`code`,5),Tk(535,`PoButtonGroupToggle`),Zg()(),Jc(536,`div`,2)(537,`p`),Tk(538,`Tipos de seleção (`),Jc(539,`code`),Tk(540,`p-toggle`),Zg(),Tk(541,`) disponíveis para o componente.`),Zg()(),Jc(542,`h4`,10),Tk(543,`Propriedades`),Zg(),Jc(544,`table`,11)(545,`tr`,12)(546,`th`,13),Tk(547,`Nome`),Zg(),Jc(548,`th`,13),Tk(549,`Descrição`),Zg()(),Jc(550,`tr`,14)(551,`td`,15)(552,`div`,16)(553,`span`,17),Tk(554,` Multiple`),_u(555,`br`),Zg()()(),Jc(556,`td`,21)(557,`p`),Tk(558,`Seleção múltipla.`),Zg()()(),Jc(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),Tk(563,` None`),_u(564,`br`),Zg()()(),Jc(565,`td`,21)(566,`p`),Tk(567,`Seleção desabilitada.`),Zg()()(),Jc(568,`tr`,14)(569,`td`,15)(570,`div`,16)(571,`span`,17),Tk(572,` Single`),_u(573,`br`),Zg()()(),Jc(574,`td`,21)(575,`p`),Tk(576,`Seleção única.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ne(i,qe){if(i&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(p);let o=nk();return $_(o.changeTab(`web`))}),_u(1,`sample-po-button-group-basic-view`)(2,`sample-po-button-group-labs-view`)(3,`sample-po-button-group-attendance-view`)(4,`sample-po-button-group-opening-service-ticket-view`)(5,`sample-po-button-group-post-view`),Zg()}if(i&2){let p=nk();Ab(`p-active`,p.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ne,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-button-group-doc`),Zg()()()),a&2&&(Ab(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,me,ue,be,Se,Ee,ve],encapsulation:2,changeDetection:1})}return i})()}];var xe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[WV.forChild(Oe),WV]})}return i})();var kt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,xe]})}return i})();export{kt as DocPoButtonGroupModule};