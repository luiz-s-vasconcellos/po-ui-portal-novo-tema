import{m as P,p as M}from"./main-KBK5JSBU.js";import{Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Mi as WL,Mt as Zte,Na as ok,Pr as I,Qn as AZ,R as Koe,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Xt as gte,Ya as tk,_a as jO,_i as RZ,_t as Tu,ar as B_,ca as ge$1,ea as de$1,er as Ab,fn as oi,it as Ru,ja as nm,jr as H_,jt as Zoe,li as QL,ni as Oo,nt as R4,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var pe=(()=>{class o{buttons=[{label:`Button 1`,action:this.action.bind(this)},{label:`Button 2`,action:this.action.bind(this)}];action(r){alert(`${r.label}`)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-basic`]],standalone:!1,decls:1,vars:1,consts:[[1,`po-md-12`,3,`p-buttons`]],template:function(i,a){i&1&&_u(0,`po-button-group`,0),i&2&&Ab(`p-buttons`,a.buttons)},dependencies:[gte],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Group Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-group-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-group-basic/sample-po-button-group-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-button-group-basic/sample-po-button-group-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{poNotification=p(Ru);button;buttons;size;toggle;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`fa fa-podcast`,value:`fa fa-podcast`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];toggleOptions=[{label:`none`,value:Tu.None},{label:`single`,value:Tu.Single},{label:`multiple`,value:Tu.Multiple}];ngOnInit(){this.restore()}action(r){this.poNotification.success(r.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size=`medium`,this.button={},this.buttons=[]}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-labs`]],standalone:!1,decls:21,vars:14,consts:[[`fButtons`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-buttons`,`p-toggle`,`p-size`],[`name`,`buttonLabel`,`p-label`,`Button label`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonAction`,`p-label`,`Button action`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonTooltip`,`p-label`,`Button tooltip`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`buttonIcon`,`p-columns`,`4`,`p-label`,`Button Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`buttonDisabled`,`p-label`,`Button disabled`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add button`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`toggle`,`p-label`,`Toggle`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let u=KO();Jc(0,`div`,2),_u(1,`po-button-group`,3),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.button.label,p)||(a.button.label=p),H_(p)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.button.action,p)||(a.button.action=p),H_(p)}),Kg(),Jc(8,`po-input`,6),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.button.tooltip,p)||(a.button.tooltip=p),H_(p)}),Kg(),Jc(9,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.button.icon,p)||(a.button.icon=p),H_(p)}),Kg(),Jc(10,`po-switch`,8),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.button.disabled,p)||(a.button.disabled=p),H_(p)}),Kg()(),Jc(11,`div`,2)(12,`po-button`,9),_t(`p-click`,function(){U_(u);let p=ok(4);return a.addButton(),H_(p.reset())}),Kg()()(),_u(13,`po-divider`),Jc(14,`form`,null,1)(16,`div`,2)(17,`po-select`,10),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.toggle,p)||(a.toggle=p),H_(p)}),Kg(),Jc(18,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(p){return U_(u),Rk(a.size,p)||(a.size=p),H_(p)}),Kg()(),Jc(19,`div`,2)(20,`po-button`,12),_t(`p-click`,function(){U_(u);let p=ok(4);return ok(15).reset(),p.reset(),H_(a.restore())}),Kg()()()}if(i&2){let u=ok(4);wg(),Ab(`p-buttons`,a.buttons)(`p-toggle`,a.toggle)(`p-size`,a.size),wg(5),Kb(`ngModel`,a.button.label),q0(),wg(),Kb(`ngModel`,a.button.action),q0(),wg(),Kb(`ngModel`,a.button.tooltip),q0(),wg(),Kb(`ngModel`,a.button.icon),Ab(`p-options`,a.iconsOptions),q0(),wg(),Kb(`ngModel`,a.button.disabled),q0(),wg(2),Ab(`p-disabled`,u.invalid),wg(5),Kb(`ngModel`,a.toggle),Ab(`p-options`,a.toggleOptions),q0(),wg(),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizeOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,gte,Nf,j4,Zte,Koe,R4],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Group Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-group-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-group-labs/sample-po-button-group-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-button-group-labs/sample-po-button-group-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{poNotification=p(Ru);attendances=[{label:`Appointment`,icon:`an an-calendar-dots`,action:this.getPassword.bind(this)},{label:`Emergency`,icon:`an an-syringe`,action:this.getPassword.bind(this)},{label:`Exams`,icon:`an an-flask`,action:this.getPassword.bind(this)}];getPassword(r){let i=this.randomPassword(),a=this.getTypeNotification(r.label);this.poNotification[a](`
      Type of attendance: ${r.label} -
      Your password: ${i}
    `)}getTypeNotification(r=``){switch(r){case`Emergency`:return`error`;case`Appointment`:return`information`;case`Exams`:return`success`}}randomPassword(){return Math.random().toString().slice(2,5)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-attendance`]],standalone:!1,decls:8,vars:1,consts:[[1,`po-row`],[1,`po-md-12`,`po-font-title`],[1,`po-md-12`,`po-font-text`,`po-text-color-neutral-dark-40`],[1,`po-md-12`,3,`p-buttons`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`div`,1),Mk(2,`Choose the type of attendance`),Kg(),Jc(3,`div`,2),Mk(4,`Get your password`),Kg()(),_u(5,`po-divider`),Jc(6,`div`,0),_u(7,`po-button-group`,3),Kg()),i&2&&(wg(7),Ab(`p-buttons`,a.attendances))},dependencies:[gte,Nf],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-attendance-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-group-attendance`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Group - Attendance`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-group-attendance`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{selectedWeekDay=``;selectedPeriod=``;weekDays=[{label:`Mon`,tooltip:`Monday`,action:this.selectWeekDay.bind(this)},{label:`Tue`,tooltip:`Tuesday`,action:this.selectWeekDay.bind(this)},{label:`Wed`,tooltip:`Wednesday`,action:this.selectWeekDay.bind(this)},{label:`Thu`,tooltip:`Thursday`,action:this.selectWeekDay.bind(this)},{label:`Fri`,tooltip:`Friday`,action:this.selectWeekDay.bind(this)}];periods=[{label:`Morning`,action:this.selectPeriod.bind(this)},{label:`Afternoon`,action:this.selectPeriod.bind(this)},{label:`Evening`,action:this.selectPeriod.bind(this)}];selectWeekDay(r){this.selectedWeekDay=r.selected?r.label:``}selectPeriod(r){this.selectedPeriod=r.selected?r.label:``}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-opening-service-ticket`]],standalone:!1,decls:19,vars:4,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-12`,`po-mb-1`,`po-font-text-bold`],[1,`po-md-12`,`po-mb-3`],[`p-toggle`,`single`,3,`p-buttons`],[1,`po-md-12`,`po-font-text`]],template:function(i,a){i&1&&(Jc(0,`div`,0),Mk(1,`Opening Service Ticket`),Kg(),Jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),Mk(5,`Day of the week`),Kg(),Jc(6,`div`,3),_u(7,`po-button-group`,4),Kg(),Jc(8,`div`,3),_u(9,`po-button-group`,4),Kg(),_u(10,`po-divider`),Jc(11,`div`,5)(12,`strong`),Mk(13,`Selected day:`),Kg(),Mk(14),Kg(),Jc(15,`div`,5)(16,`strong`),Mk(17,`Selected period:`),Kg(),Mk(18),Kg()()()),i&2&&(wg(7),Ab(`p-buttons`,a.weekDays),wg(2),Ab(`p-buttons`,a.periods),wg(5),nm(` `,a.selectedWeekDay||`None`),wg(4),nm(` `,a.selectedPeriod||`None`))},dependencies:[gte,Nf,yae],encapsulation:2})}return o})();var be=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-opening-service-ticket-view`]],standalone:!1,decls:36,vars:0,consts:[[`id`,`sample-po-button-group-opening-service-ticket`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Group - Opening Service Ticket`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-group-opening-service-ticket`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-font-title po-mb-2">Opening Service Ticket</div>

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

    <div class="po-md-12 po-font-text"><strong>Selected day:</strong> `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` selectedWeekDay || 'None' `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
    <div class="po-md-12 po-font-text"><strong>Selected period:</strong> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` selectedPeriod || 'None' `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
  </div>
</po-widget>
`),Kg()()()(),Jc(28,`po-tab`,10)(29,`div`)(30,`label`,7),Mk(31,`sample-po-button-group-opening-service-ticket/sample-po-button-group-opening-service-ticket.component.ts`),Kg(),Jc(32,`div`,11)(33,`pre`,12),Mk(34,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),_u(35,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{setBold;setItalic;setTextAlignment;setUnderline;textArea=`"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway`;fontStyle=[{icon:`an an-text-b`,action:()=>this.setBold=!this.setBold,tooltip:`Bold`},{icon:`an an-text-italic`,action:()=>this.setItalic=!this.setItalic,tooltip:`Italic`},{icon:`an an-text-underline`,action:()=>this.setUnderline=!this.setUnderline,tooltip:`Underline`}];textAlign=[{icon:`an an-text-align-left`,selected:!0,action:()=>this.setTextAlignment=`left`,tooltip:`Left align`},{icon:`an an-text-align-center`,action:()=>this.setTextAlignment=`center`,tooltip:`Center align`},{icon:`an an-text-align-right`,action:()=>this.setTextAlignment=`right`,tooltip:`Right align`},{icon:`an an-text-align-justify`,action:()=>this.setTextAlignment=`justify`,tooltip:`Justify`}];static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-post`]],standalone:!1,decls:11,vars:12,consts:[[1,`po-font-title`,`po-mb-2`],[1,`po-row`],[1,`po-md-4`,`po-lg-3`],[`p-toggle`,`multiple`,3,`p-buttons`],[`p-toggle`,`single`,3,`p-buttons`],[`name`,`textArea`,`p-maxlength`,`400`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[1,`po-md-12`,`po-mt-3`,`po-font-text-large`]],template:function(i,a){i&1&&(Jc(0,`div`,0),Mk(1,`Create New Post`),Kg(),Jc(2,`po-widget`)(3,`div`,1)(4,`div`,2),_u(5,`po-button-group`,3),Kg(),Jc(6,`div`,2),_u(7,`po-button-group`,4),Kg(),Jc(8,`po-textarea`,5),G0(),Zb(`ngModelChange`,function(g){return Rk(a.textArea,g)||(a.textArea=g),g}),Kg(),Jc(9,`div`,6),Mk(10),Kg()()()),i&2&&(wg(5),Ab(`p-buttons`,a.fontStyle),wg(2),Ab(`p-buttons`,a.textAlign),wg(),Kb(`ngModel`,a.textArea),q0(),wg(),Oo(`font-weight`,a.setBold?`bold`:`normal`)(`font-style`,a.setItalic?`italic`:`normal`)(`text-decoration`,a.setUnderline?`underline`:`none`)(`text-align`,a.setTextAlignment),wg(),nm(` `,a.textArea,` `))},dependencies:[RZ,QL,gte,Zoe,yae],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-post-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-button-group-post`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-group-post/sample-po-button-group-post.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-group-post/sample-po-button-group-post.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Group - Post`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-group-post`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-group-post/sample-po-button-group-post.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-font-title po-mb-2">Create New Post</div>
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
      `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` textArea `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
    </div>
  </div>
</po-widget>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-button-group-post/sample-po-button-group-post.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-group-doc`]],standalone:!1,decls:577,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-button-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-buttons`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoButtonGroupItem>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-toggle`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-button-group-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-button-group-item-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-button-group-item-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-button-group-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-button-group-item-tooltip`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle`,1,`docs-api-class-name`],[`id`,`enum-po-button-group-toggle-multiple`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle-none`,1,`docs-api-properties-row`],[`id`,`enum-po-button-group-toggle-single`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoButtonGroupModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-button-group.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoButtonGroupComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-button-group`),Kg(),Mk(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),Kg(),Jc(18,`p`),Mk(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),Kg(),Jc(20,`p`),Mk(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),Kg(),Jc(22,`h4`),Mk(23,`Boas práticas`),Kg(),Jc(24,`ul`)(25,`li`),Mk(26,`Evite usar o `),Jc(27,`code`),Mk(28,`po-button-group`),Kg(),Mk(29,` com apenas 1 ação, para isso utilize o `),Jc(30,`code`),Mk(31,`po-button`),Kg(),Mk(32,`.`),Kg(),Jc(33,`li`),Mk(34,`Procure utilizar no máximo 3 ações para cada `),Jc(35,`code`),Mk(36,`po-button-group`),Kg(),Mk(37,`.`),Kg()(),Jc(38,`blockquote`)(39,`p`),Mk(40,`As recomendações do `),Jc(41,`code`),Mk(42,`po-button`),Kg(),Mk(43,` também valem para o `),Jc(44,`code`),Mk(45,`po-button-group`),Kg(),Mk(46,`.`),Kg()(),Jc(47,`h4`),Mk(48,`Tokens customizáveis`),Kg(),Jc(49,`p`),Mk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(51,`blockquote`)(52,`p`),Mk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Mk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(56,`.`),Kg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Mk(61,`Propriedade`),Kg(),Jc(62,`th`),Mk(63,`Descrição`),Kg(),Jc(64,`th`),Mk(65,`Valor Padrão`),Kg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Mk(70,`Default Values`),Kg()(),_u(71,`td`)(72,`td`),Kg(),Jc(73,`tr`)(74,`td`)(75,`code`),Mk(76,`--font-family`),Kg()(),Jc(77,`td`),Mk(78,`Família tipográfica usada`),Kg(),Jc(79,`td`)(80,`code`),Mk(81,`var(--font-family-theme)`),Kg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Mk(85,`--font-size`),Kg()(),Jc(86,`td`),Mk(87,`Tamanho da fonte`),Kg(),Jc(88,`td`)(89,`code`),Mk(90,`var(--font-size-default)`),Kg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Mk(94,`--font-weight`),Kg()(),Jc(95,`td`),Mk(96,`Peso da fonte`),Kg(),Jc(97,`td`)(98,`code`),Mk(99,`var(--font-weight-bold)`),Kg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Mk(103,`--line-height`),Kg()(),Jc(104,`td`),Mk(105,`Tamanho da label`),Kg(),Jc(106,`td`)(107,`code`),Mk(108,`var(--line-height-none)`),Kg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Mk(112,`--border-radius`),Kg()(),Jc(113,`td`),Mk(114,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(115,`td`)(116,`code`),Mk(117,`var(--border-radius-md)`),Kg()()(),Jc(118,`tr`)(119,`td`)(120,`code`),Mk(121,`--border-width`),Kg()(),Jc(122,`td`),Mk(123,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(124,`td`)(125,`code`),Mk(126,`var(--border-width-md)`),Kg()()(),Jc(127,`tr`)(128,`td`)(129,`code`),Mk(130,`--padding`),Kg()(),Jc(131,`td`),Mk(132,`Preenchimento`),Kg(),Jc(133,`td`)(134,`code`),Mk(135,`0 1em`),Kg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Mk(139,`--text-color`),Kg()(),Jc(140,`td`),Mk(141,`Cor do texto`),Kg(),Jc(142,`td`)(143,`code`),Mk(144,`var(--color-neutral-light-00)`),Kg()()(),Jc(145,`tr`)(146,`td`)(147,`code`),Mk(148,`--color`),Kg()(),Jc(149,`td`),Mk(150,`Cor principal do botão`),Kg(),Jc(151,`td`)(152,`code`),Mk(153,`var(--color-action-default)`),Kg()()(),Jc(154,`tr`)(155,`td`)(156,`code`),Mk(157,`--background-color`),Kg()(),Jc(158,`td`),Mk(159,`Cor de background`),Kg(),Jc(160,`td`)(161,`code`),Mk(162,`var(--color-transparent)`),Kg()()(),Jc(163,`tr`)(164,`td`)(165,`code`),Mk(166,`--shadow`),Kg()(),Jc(167,`td`),Mk(168,`Contém o valor da sombra do elemento`),Kg(),Jc(169,`td`)(170,`code`),Mk(171,`var(--shadow-none)`),Kg()()(),Jc(172,`tr`)(173,`td`)(174,`strong`),Mk(175,`Hover`),Kg()(),_u(176,`td`)(177,`td`),Kg(),Jc(178,`tr`)(179,`td`)(180,`code`),Mk(181,`--color-hover`),Kg()(),Jc(182,`td`),Mk(183,`Cor principal no estado hover`),Kg(),Jc(184,`td`)(185,`code`),Mk(186,`var(--color-action-hover)`),Kg()()(),Jc(187,`tr`)(188,`td`)(189,`code`),Mk(190,`--background-hover`),Kg()(),Jc(191,`td`),Mk(192,`Cor de background no estado hover`),Kg(),Jc(193,`td`)(194,`code`),Mk(195,`var(--color-brand-01-lighter)`),Kg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Mk(199,`--border-color-hover`),Kg()(),Jc(200,`td`),Mk(201,`Cor da borda no estado hover`),Kg(),Jc(202,`td`)(203,`code`),Mk(204,`var(--color-brand-01-darkest)`),Kg()()(),Jc(205,`tr`)(206,`td`)(207,`strong`),Mk(208,`Focused`),Kg()(),_u(209,`td`)(210,`td`),Kg(),Jc(211,`tr`)(212,`td`)(213,`code`),Mk(214,`--outline-color-focused`),Kg()(),Jc(215,`td`),Mk(216,`Cor do outline do estado de focus`),Kg(),Jc(217,`td`)(218,`code`),Mk(219,`var(--color-action-focus)`),Kg()()(),Jc(220,`tr`)(221,`td`)(222,`strong`),Mk(223,`Pressed`),Kg()(),_u(224,`td`)(225,`td`),Kg(),Jc(226,`tr`)(227,`td`)(228,`code`),Mk(229,`--color-pressed`),Kg()(),Jc(230,`td`),Mk(231,`Cor principal no estado de pressionado`),Kg(),Jc(232,`td`)(233,`code`),Mk(234,`var(--color-action-pressed)`),Kg()()(),Jc(235,`tr`)(236,`td`)(237,`code`),Mk(238,`--background-pressed`),Kg()(),Jc(239,`td`),Mk(240,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(241,`td`)(242,`code`),Mk(243,`var(--color-brand-01-light)`),Kg()()(),Jc(244,`tr`)(245,`td`)(246,`strong`),Mk(247,`Disabled`),Kg()(),_u(248,`td`)(249,`td`),Kg(),Jc(250,`tr`)(251,`td`)(252,`code`),Mk(253,`--color-disabled`),Kg()(),Jc(254,`td`),Mk(255,`Cor principal no estado disabled`),Kg(),Jc(256,`td`)(257,`code`),Mk(258,`var(--color-action-disabled)`),Kg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Mk(262,`--background-color-disabled`),Kg(),Mk(263,` \xA0`),Kg(),Jc(264,`td`),Mk(265,`Cor de background no estado disabled`),Kg(),Jc(266,`td`)(267,`code`),Mk(268,`var(--color-transparent)`),Kg()()()()()(),Jc(269,`div`,7)(270,`h4`,8),Mk(271,`Seletor`),Kg(),Jc(272,`pre`,9),Mk(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),Kg()(),Jc(274,`h4`,10),Mk(275,`Propriedades`),Kg(),Jc(276,`table`,11)(277,`tr`,12)(278,`th`,13),Mk(279,`Nome`),Kg(),Jc(280,`th`,13),Mk(281,`Tipo`),Kg(),Jc(282,`th`,13),Mk(283,`Padrão`),Kg(),Jc(284,`th`,13),Mk(285,`Descrição`),Kg()(),Jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),Mk(290,` p-buttons`),_u(291,`br`),Kg()()(),Jc(292,`td`,18)(293,`code`,19),Mk(294,`Array<PoButtonGroupItem>`),Kg()(),Jc(295,`td`,20),Mk(296,`-`),Kg(),Jc(297,`td`,21)(298,`p`),Mk(299,`Lista de botões.`),Kg()()(),Jc(300,`tr`,22)(301,`td`,15)(302,`div`,16)(303,`span`,17),Mk(304,` p-size`),_u(305,`br`),Kg()()(),Jc(306,`td`,18)(307,`code`,23),Mk(308,`string`),Kg()(),Jc(309,`td`,20)(310,`p`)(311,`code`),Mk(312,`medium`),Kg()()(),Jc(313,`td`,21)(314,`em`)(315,`strong`),Mk(316,`(opcional)`),Kg()(),Jc(317,`p`),Mk(318,`Define o tamanho do componente:`),Kg(),Jc(319,`ul`)(320,`li`)(321,`code`),Mk(322,`small`),Kg(),Mk(323,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(324,`li`)(325,`code`),Mk(326,`medium`),Kg(),Mk(327,`: altura de 44px.`),Kg()(),Jc(328,`blockquote`)(329,`p`),Mk(330,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(331,`code`),Mk(332,`medium`),Kg(),Mk(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(334,`a`,24),Mk(335,`po-theme`),Kg(),Mk(336,`.`),Kg()()()(),Jc(337,`tr`,25)(338,`td`,15)(339,`div`,16)(340,`span`,17),Mk(341,` p-toggle`),_u(342,`br`),Kg()()(),Jc(343,`td`,18)(344,`code`,23),Mk(345,`string`),Kg()(),Jc(346,`td`,20)(347,`p`)(348,`code`),Mk(349,`none`),Kg()()(),Jc(350,`td`,21)(351,`em`)(352,`strong`),Mk(353,`(opcional)`),Kg()(),Jc(354,`p`),Mk(355,`Define o modo de seleção dos botões no componente conforme valores especificados no enum `),Jc(356,`code`),Mk(357,`PoButtonGroupToggle`),Kg(),Mk(358,`:`),Kg(),Jc(359,`ul`)(360,`li`)(361,`code`),Mk(362,`multiple`),Kg(),Mk(363,`: permite múltiplas seleções.`),Kg(),Jc(364,`li`)(365,`code`),Mk(366,`none`),Kg(),Mk(367,`: desativa a funcionalidade de seleção.`),Kg(),Jc(368,`li`)(369,`code`),Mk(370,`single`),Kg(),Mk(371,`: restringe a seleção a um único botão.`),Kg()()()()(),Jc(372,`h3`),Mk(373,`Interfaces`),Kg(),Jc(374,`h4`,26)(375,`code`,5),Mk(376,`PoButtonGroupItem`),Kg()(),Jc(377,`div`,2)(378,`p`),Mk(379,`Interface para os itens do `),Jc(380,`code`),Mk(381,`po-button-group`),Kg(),Mk(382,`.`),Kg()(),Jc(383,`h4`,10),Mk(384,`Propriedades`),Kg(),Jc(385,`table`,11)(386,`tr`,12)(387,`th`,13),Mk(388,`Nome`),Kg(),Jc(389,`th`,13),Mk(390,`Tipo`),Kg(),Jc(391,`th`,13),Mk(392,`Descrição`),Kg()(),Jc(393,`tr`,27)(394,`td`,15)(395,`div`,16)(396,`span`,17),Mk(397,` action`),_u(398,`br`),Kg()()(),Jc(399,`td`,18)(400,`code`,28),Mk(401,`Function`),Kg()(),Jc(402,`td`,21)(403,`p`),Mk(404,`Ação executada ao clicar sobre o botão.`),Kg()()(),Jc(405,`tr`,29)(406,`td`,15)(407,`div`,16)(408,`span`,17),Mk(409,` disabled`),_u(410,`br`),Kg()()(),Jc(411,`td`,18)(412,`code`,30),Mk(413,`boolean`),Kg()(),Jc(414,`td`,21)(415,`em`)(416,`strong`),Mk(417,`(opcional)`),Kg()(),Jc(418,`p`),Mk(419,`Se verdadeiro, define o botão como desabilitado.`),Kg(),Jc(420,`blockquote`)(421,`p`),Mk(422,`Por padrão esta propriedade é `),Jc(423,`code`),Mk(424,`false`),Kg(),Mk(425,`.`),Kg()()()(),Jc(426,`tr`,31)(427,`td`,15)(428,`div`,16)(429,`span`,17),Mk(430,` icon`),_u(431,`br`),Kg()()(),Jc(432,`td`,18)(433,`code`,23),Mk(434,`string `),Kg(),Jc(435,`code`,32),Mk(436,` TemplateRef<void>`),Kg()(),Jc(437,`td`,21)(438,`em`)(439,`strong`),Mk(440,`(opcional)`),Kg()(),Jc(441,`p`),Mk(442,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Jc(443,`p`),Mk(444,`É possível usar qualquer um dos ícones da `),Jc(445,`a`,33),Mk(446,`Biblioteca de ícones`),Kg(),Mk(447,`. conforme exemplo abaixo:`),Kg(),Jc(448,`pre`)(449,`code`),Mk(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),Kg()(),Jc(451,`p`),Mk(452,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(453,`em`),Mk(454,`Font Awesome`),Kg(),Mk(455,`, da seguinte forma:`),Kg(),Jc(456,`pre`)(457,`code`),Mk(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),Kg()(),Jc(459,`p`),Mk(460,`Outra opção seria a customização do ícone através do `),Jc(461,`code`),Mk(462,`TemplateRef`),Kg(),Mk(463,`, conforme exemplo abaixo:`),Kg(),Jc(464,`p`),Mk(465,`component.html:`),Kg(),Jc(466,`pre`)(467,`code`),Mk(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Jc(469,`p`),Mk(470,`component.ts:`),Kg(),Jc(471,`pre`)(472,`code`),Mk(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),Kg()(),Jc(474,`blockquote`)(475,`p`),Mk(476,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(477,`code`),Mk(478,`font-size: inherit`),Kg(),Mk(479,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(480,`tr`,34)(481,`td`,15)(482,`div`,16)(483,`span`,17),Mk(484,` label`),_u(485,`br`),Kg()()(),Jc(486,`td`,18)(487,`code`,23),Mk(488,`string`),Kg()(),Jc(489,`td`,21)(490,`em`)(491,`strong`),Mk(492,`(opcional)`),Kg()(),Jc(493,`p`),Mk(494,`Label do botão.`),Kg()()(),Jc(495,`tr`,35)(496,`td`,15)(497,`div`,16)(498,`span`,17),Mk(499,` selected`),_u(500,`br`),Kg()()(),Jc(501,`td`,18)(502,`code`,30),Mk(503,`boolean`),Kg()(),Jc(504,`td`,21)(505,`em`)(506,`strong`),Mk(507,`(opcional)`),Kg()(),Jc(508,`p`),Mk(509,`Define se o botão está selecionado. Utilizado juntamente à propriedade `),Jc(510,`code`),Mk(511,`p-toggle`),Kg(),Mk(512,`.`),Kg()()(),Jc(513,`tr`,36)(514,`td`,15)(515,`div`,16)(516,`span`,17),Mk(517,` tooltip`),_u(518,`br`),Kg()()(),Jc(519,`td`,18)(520,`code`,23),Mk(521,`string`),Kg()(),Jc(522,`td`,21)(523,`em`)(524,`strong`),Mk(525,`(opcional)`),Kg()(),Jc(526,`p`),Mk(527,`Define a mensagem a ser exibida ao posicionar o `),Jc(528,`em`),Mk(529,`mouse`),Kg(),Mk(530,` sobre o botão.`),Kg()()()(),Jc(531,`h3`),Mk(532,`Enums`),Kg(),Jc(533,`h4`,37)(534,`code`,5),Mk(535,`PoButtonGroupToggle`),Kg()(),Jc(536,`div`,2)(537,`p`),Mk(538,`Tipos de seleção (`),Jc(539,`code`),Mk(540,`p-toggle`),Kg(),Mk(541,`) disponíveis para o componente.`),Kg()(),Jc(542,`h4`,10),Mk(543,`Propriedades`),Kg(),Jc(544,`table`,11)(545,`tr`,12)(546,`th`,13),Mk(547,`Nome`),Kg(),Jc(548,`th`,13),Mk(549,`Descrição`),Kg()(),Jc(550,`tr`,38)(551,`td`,15)(552,`div`,16)(553,`span`,17),Mk(554,` Multiple`),_u(555,`br`),Kg()()(),Jc(556,`td`,21)(557,`p`),Mk(558,`Seleção múltipla.`),Kg()()(),Jc(559,`tr`,39)(560,`td`,15)(561,`div`,16)(562,`span`,17),Mk(563,` None`),_u(564,`br`),Kg()()(),Jc(565,`td`,21)(566,`p`),Mk(567,`Seleção desabilitada.`),Kg()()(),Jc(568,`tr`,40)(569,`td`,15)(570,`div`,16)(571,`span`,17),Mk(572,` Single`),_u(573,`br`),Kg()()(),Jc(574,`td`,21)(575,`p`),Mk(576,`Seleção única.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function _e(o,ze){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-button-group-basic-view`)(2,`sample-po-button-group-labs-view`)(3,`sample-po-button-group-attendance-view`)(4,`sample-po-button-group-opening-service-ticket-view`)(5,`sample-po-button-group-post-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var We=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Button Group`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Button Group · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,_e,6,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-button-group-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,de,me,ue,be,fe,Se],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(We),GV]})}return o})();var Bt=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ve]})}return o})();export{Bt as DocPoButtonGroupModule};