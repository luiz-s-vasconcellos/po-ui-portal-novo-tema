import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{A as Goe,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ka as tD,Ki as _u,Kr as Lt,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Pr as I,Qn as AZ,Si as UO,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,_a as jO,_i as RZ,ar as B_,ca as ge$1,ea as de,er as Ab,fn as oi,ja as nm,jr as H_,kr as HO,li as QL,na as eD,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,vn as qP,w as Fc,zr as KO}from"./chunk-CTJH0VS3.js";var se=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,a){l&1&&_u(0,`po-badge`)},dependencies:[qP],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-badge-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-badge-basic/sample-po-badge-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-basic/sample-po-badge-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Badge Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-badge-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-badge></po-badge>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,a){if(l&1){let C=KO();Jc(0,`div`,1),_u(1,`po-badge`,2),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.value,r)||(a.value=r),H_(r)}),Kg(),Jc(7,`po-input`,4),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.color,r)||(a.color=r),H_(r)}),Kg()(),Jc(8,`div`,1)(9,`po-checkbox-group`,5),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.properties,r)||(a.properties=r),H_(r)}),_t(`p-change`,function(r){return a.propertiesChange(r)}),Kg(),Jc(10,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.status,r)||(a.status=r),H_(r)}),_t(`p-change`,function(r){return a.statusChange(r)}),Kg(),Jc(11,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.size,r)||(a.size=r),H_(r)}),Kg(),Jc(12,`po-radio-group`,8),G0(),Zb(`ngModelChange`,function(r){return U_(C),Rk(a.icon,r)||(a.icon=r),H_(r)}),_t(`p-change`,function(r){return a.iconsChange(r)}),Kg()(),Jc(13,`div`,1)(14,`po-button`,9),_t(`p-click`,function(){return a.restore()}),Kg()()()}l&2&&(wg(),Ab(`p-color`,a.color)(`p-icon`,a.showIcon?!0:a.icon)(`p-size`,a.size)(`p-status`,a.status)(`p-show-border`,a.properties.includes(`showBorder`))(`p-value`,a.value),wg(5),Kb(`ngModel`,a.value),Ab(`p-min`,0),q0(),wg(),Kb(`ngModel`,a.color),q0(),wg(2),Kb(`ngModel`,a.properties),Ab(`p-options`,a.propertiesOptions),q0(),wg(),Kb(`ngModel`,a.status),Ab(`p-options`,a.statusOptions),q0(),wg(),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizesOptions),q0(),wg(),Kb(`ngModel`,a.icon),Ab(`p-options`,a.iconsOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,qP],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-badge-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-badge-labs/sample-po-badge-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-labs/sample-po-badge-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Badge Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-badge-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();function we(i,W){if(i&1&&(Jc(0,`div`,1)(1,`po-container`)(2,`div`,2),eD(),Jc(3,`svg`,3),_u(4,`circle`,4)(5,`path`,5),Kg(),tD(),Jc(6,`p`,6),Mk(7),_u(8,`po-badge`,7),Kg()()()()),i&2){let p=W.$implicit;wg(3),Lt(`kind`,p.status),wg(4),nm(` `,p.nome,` `),wg(),Ab(`p-status`,p.status===`online`?`positive`:`negative`)}}var ue=(()=>{class i{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`div`),HO(2,we,9,3,`div`,1,UO),Kg()()),l&2&&(wg(2),$O(a.users))},dependencies:[Fc,qP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return i})();var be=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:37,vars:0,consts:[[`id`,`sample-po-badge-message`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Badge Message`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-badge-message`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-badge-message/sample-po-badge-message.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row po-mt-3">
  <div>
    @for (user of users; track user) {
      <div class="po-mb-1">
        <po-container>
          <div class="card">
            <svg class="po-mr-2" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p class="po-mr-2 card-name-user po-text-color-neutral-dark-40">
              `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` user.nome `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
              <po-badge
                class="po-badge-wrap"
                [p-status]="user.status === 'online' ? 'positive' : 'negative'"
              ></po-badge>
            </p>
          </div>
        </po-container>
      </div>
    }
  </div>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-badge-message/sample-po-badge-message.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),Kg()()()(),Jc(29,`po-tab`,13)(30,`div`)(31,`label`,7),Mk(32,`sample-po-badge-message/sample-po-badge-message.component.css`),Kg(),Jc(33,`div`,14)(34,`pre`,15),Mk(35,`.po-badge-wrap {
  position: absolute;
  top: -5px;
  right: -5px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),Kg()()()()()(),_u(36,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-badge-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-show-border`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`id`,`prop-p-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-badge.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoBadgeComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`Utilizado para exibir a quantidade de notificações. `),Kg()(),Jc(15,`div`,6)(16,`h4`,7),Mk(17,`Seletor`),Kg(),Jc(18,`pre`,8),Mk(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),Kg()(),Jc(20,`h4`,9),Mk(21,`Propriedades`),Kg(),Jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Mk(25,`Nome`),Kg(),Jc(26,`th`,12),Mk(27,`Tipo`),Kg(),Jc(28,`th`,12),Mk(29,`Padrão`),Kg(),Jc(30,`th`,12),Mk(31,`Descrição`),Kg()(),Jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Mk(36,` p-aria-label`),_u(37,`br`),Kg()()(),Jc(38,`td`,17)(39,`code`,18),Mk(40,`string`),Kg()(),Jc(41,`td`,19),Mk(42,`-`),Kg(),Jc(43,`td`,20)(44,`p`),Mk(45,`Define um `),Jc(46,`code`),Mk(47,`aria-label`),Kg(),Mk(48,` para o `),Jc(49,`code`),Mk(50,`po-badge`),Kg()()()(),Jc(51,`tr`,21)(52,`td`,14)(53,`div`,15)(54,`span`,16),Mk(55,` p-color`),_u(56,`br`),Kg()()(),Jc(57,`td`,17)(58,`code`,18),Mk(59,`string`),Kg()(),Jc(60,`td`,19)(61,`p`)(62,`code`),Mk(63,`color-07`),Kg()()(),Jc(64,`td`,20)(65,`em`)(66,`strong`),Mk(67,`(opcional)`),Kg()(),Jc(68,`p`),Mk(69,`Determina a cor do `),Jc(70,`code`),Mk(71,`po-badge`),Kg(),Mk(72,`. As maneiras de customizar as cores são:`),Kg(),Jc(73,`ul`)(74,`li`),Mk(75,`Hexadeximal, por exemplo `),Jc(76,`code`),Mk(77,`#c64840`),Kg(),Mk(78,`;`),Kg(),Jc(79,`li`),Mk(80,`RGB, como `),Jc(81,`code`),Mk(82,`rgb(0, 0, 165)`),Kg(),Mk(83,`;`),Kg(),Jc(84,`li`),Mk(85,`O nome da cor, por exemplo `),Jc(86,`code`),Mk(87,`blue`),Kg(),Mk(88,`;`),Kg(),Jc(89,`li`),Mk(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Jc(91,`ul`)(92,`li`),_u(93,`span`,22),Jc(94,`code`),Mk(95,`color-01`),Kg()(),Jc(96,`li`),_u(97,`span`,23),Jc(98,`code`),Mk(99,`color-02`),Kg()(),Jc(100,`li`),_u(101,`span`,24),Jc(102,`code`),Mk(103,`color-03`),Kg()(),Jc(104,`li`),_u(105,`span`,25),Jc(106,`code`),Mk(107,`color-04`),Kg()(),Jc(108,`li`),_u(109,`span`,26),Jc(110,`code`),Mk(111,`color-05`),Kg()(),Jc(112,`li`),_u(113,`span`,27),Jc(114,`code`),Mk(115,`color-06`),Kg()(),Jc(116,`li`),_u(117,`span`,28),Jc(118,`code`),Mk(119,`color-07`),Kg()(),Jc(120,`li`),_u(121,`span`,29),Jc(122,`code`),Mk(123,`color-08`),Kg()(),Jc(124,`li`),_u(125,`span`,30),Jc(126,`code`),Mk(127,`color-09`),Kg()(),Jc(128,`li`),_u(129,`span`,31),Jc(130,`code`),Mk(131,`color-10`),Kg()(),Jc(132,`li`),_u(133,`span`,32),Jc(134,`code`),Mk(135,`color-11`),Kg()(),Jc(136,`li`),_u(137,`span`,33),Jc(138,`code`),Mk(139,`color-12`),Kg()()()()(),Jc(140,`blockquote`)(141,`p`),Mk(142,`Também é possível utilizar as 35 cores da paleta `),Jc(143,`strong`),Mk(144,`Caption Tag Colors`),Kg(),Mk(145,`:`),Kg()(),Jc(146,`ul`)(147,`li`),_u(148,`span`,34),Jc(149,`code`),Mk(150,`caption-tag-01`),Kg(),_u(151,`span`,35),Jc(152,`code`),Mk(153,`caption-tag-02`),Kg(),_u(154,`span`,36),Jc(155,`code`),Mk(156,`caption-tag-03`),Kg(),_u(157,`span`,37),Jc(158,`code`),Mk(159,`caption-tag-04`),Kg(),_u(160,`span`,38),Jc(161,`code`),Mk(162,`caption-tag-05`),Kg()(),Jc(163,`li`),_u(164,`span`,39),Jc(165,`code`),Mk(166,`caption-tag-06`),Kg(),_u(167,`span`,40),Jc(168,`code`),Mk(169,`caption-tag-07`),Kg(),_u(170,`span`,41),Jc(171,`code`),Mk(172,`caption-tag-08`),Kg(),_u(173,`span`,42),Jc(174,`code`),Mk(175,`caption-tag-09`),Kg(),_u(176,`span`,43),Jc(177,`code`),Mk(178,`caption-tag-10`),Kg()(),Jc(179,`li`),_u(180,`span`,44),Jc(181,`code`),Mk(182,`caption-tag-11`),Kg(),_u(183,`span`,45),Jc(184,`code`),Mk(185,`caption-tag-12`),Kg(),_u(186,`span`,46),Jc(187,`code`),Mk(188,`caption-tag-13`),Kg(),_u(189,`span`,47),Jc(190,`code`),Mk(191,`caption-tag-14`),Kg(),_u(192,`span`,48),Jc(193,`code`),Mk(194,`caption-tag-15`),Kg()(),Jc(195,`li`),_u(196,`span`,49),Jc(197,`code`),Mk(198,`caption-tag-16`),Kg(),_u(199,`span`,50),Jc(200,`code`),Mk(201,`caption-tag-17`),Kg(),_u(202,`span`,51),Jc(203,`code`),Mk(204,`caption-tag-18`),Kg(),_u(205,`span`,52),Jc(206,`code`),Mk(207,`caption-tag-19`),Kg(),_u(208,`span`,53),Jc(209,`code`),Mk(210,`caption-tag-20`),Kg()(),Jc(211,`li`),_u(212,`span`,54),Jc(213,`code`),Mk(214,`caption-tag-21`),Kg(),_u(215,`span`,55),Jc(216,`code`),Mk(217,`caption-tag-22`),Kg(),_u(218,`span`,56),Jc(219,`code`),Mk(220,`caption-tag-23`),Kg(),_u(221,`span`,57),Jc(222,`code`),Mk(223,`caption-tag-24`),Kg(),_u(224,`span`,58),Jc(225,`code`),Mk(226,`caption-tag-25`),Kg()(),Jc(227,`li`),_u(228,`span`,59),Jc(229,`code`),Mk(230,`caption-tag-26`),Kg(),_u(231,`span`,60),Jc(232,`code`),Mk(233,`caption-tag-27`),Kg(),_u(234,`span`,61),Jc(235,`code`),Mk(236,`caption-tag-28`),Kg(),_u(237,`span`,62),Jc(238,`code`),Mk(239,`caption-tag-29`),Kg(),_u(240,`span`,63),Jc(241,`code`),Mk(242,`caption-tag-30`),Kg()(),Jc(243,`li`),_u(244,`span`,64),Jc(245,`code`),Mk(246,`caption-tag-31`),Kg(),_u(247,`span`,65),Jc(248,`code`),Mk(249,`caption-tag-32`),Kg(),_u(250,`span`,66),Jc(251,`code`),Mk(252,`caption-tag-33`),Kg(),_u(253,`span`,67),Jc(254,`code`),Mk(255,`caption-tag-34`),Kg(),_u(256,`span`,68),Jc(257,`code`),Mk(258,`caption-tag-35`),Kg()()(),Jc(259,`p`),Mk(260,`Exemplo de uso:`),Kg(),Jc(261,`pre`)(262,`code`),Mk(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),Kg()()()(),Jc(264,`tr`,69)(265,`td`,14)(266,`div`,15)(267,`span`,16),Mk(268,` p-icon`),_u(269,`br`),Kg()()(),Jc(270,`td`,17)(271,`code`,70),Mk(272,`PoBadgeIcon`),Kg()(),Jc(273,`td`,19),Mk(274,`-`),Kg(),Jc(275,`td`,20)(276,`em`)(277,`strong`),Mk(278,`(opcional)`),Kg()(),Jc(279,`p`),Mk(280,`Ícone exibido no `),Jc(281,`code`),Mk(282,`po-badge`),Kg(),Mk(283,`.`),Kg(),Jc(284,`p`),Mk(285,`Para exibir icone do status atual declare a propriedade `),Jc(286,`code`),Mk(287,`p-icon`),Kg(),Mk(288,`. conforme exemplo abaixo:`),Kg(),Jc(289,`pre`)(290,`code`),Mk(291,`<po-badge [p-icon]="true"></po-badge>
`),Kg()(),Jc(292,`p`),Mk(293,`É possível usar qualquer um dos ícones da `),Jc(294,`a`,71),Mk(295,`Biblioteca de ícones`),Kg(),Mk(296,`. conforme exemplo abaixo:`),Kg(),Jc(297,`pre`)(298,`code`),Mk(299,`<po-badge p-icon="an an-user"></po-badge>
`),Kg()(),Jc(300,`p`),Mk(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(302,`em`),Mk(303,`Font Awesome`),Kg(),Mk(304,`, da seguinte forma:`),Kg(),Jc(305,`pre`)(306,`code`),Mk(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),Kg()(),Jc(308,`p`),Mk(309,`Outra opção seria a customização do ícone através do `),Jc(310,`code`),Mk(311,`TemplateRef`),Kg(),Mk(312,`, conforme exemplo abaixo:`),Kg(),Jc(313,`pre`)(314,`code`),Mk(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()()()(),Jc(316,`tr`,72)(317,`td`,14)(318,`div`,15)(319,`span`,16),Mk(320,` p-show-border`),_u(321,`br`),Kg()()(),Jc(322,`td`,17)(323,`code`,73),Mk(324,`boolean`),Kg()(),Jc(325,`td`,19),Mk(326,`-`),Kg(),Jc(327,`td`,20)(328,`p`),Mk(329,`Exibe uma borda para o `),Jc(330,`code`),Mk(331,`po-badge`),Kg()(),Jc(332,`blockquote`)(333,`p`),Mk(334,`Pode personalizar cor da bordar com a propriedade `),Jc(335,`code`),Mk(336,`p-color-border`),Kg()()()()(),Jc(337,`tr`,74)(338,`td`,14)(339,`div`,15)(340,`span`,16),Mk(341,` p-size`),_u(342,`br`),Kg()()(),Jc(343,`td`,17)(344,`code`,75),Mk(345,`PoBadgeSize`),Kg()(),Jc(346,`td`,19)(347,`p`)(348,`code`),Mk(349,`medium`),Kg()()(),Jc(350,`td`,20)(351,`p`),Mk(352,`Define o tamanho do `),Jc(353,`code`),Mk(354,`po-badge`),Kg()(),Jc(355,`p`),Mk(356,`Valores válidos:`),Kg(),Jc(357,`ul`)(358,`li`)(359,`code`),Mk(360,`small`),Kg(),Mk(361,`: o `),Jc(362,`code`),Mk(363,`po-badge`),Kg(),Mk(364,` fica do tamanho padrão, com 8px de altura.;`),Kg(),Jc(365,`li`)(366,`code`),Mk(367,`medium`),Kg(),Mk(368,`: o `),Jc(369,`code`),Mk(370,`po-badge`),Kg(),Mk(371,` fica do tamanho padrão, com 16px de altura.;`),Kg(),Jc(372,`li`)(373,`code`),Mk(374,`large`),Kg(),Mk(375,`: o `),Jc(376,`code`),Mk(377,`po-badge`),Kg(),Mk(378,` fica do tamanho padrão, com 24px de altura.;`),Kg()()()(),Jc(379,`tr`,76)(380,`td`,14)(381,`div`,15)(382,`span`,16),Mk(383,` p-status`),_u(384,`br`),Kg()()(),Jc(385,`td`,17)(386,`code`,77),Mk(387,`PoBadgeStatus`),Kg()(),Jc(388,`td`,19),Mk(389,`-`),Kg(),Jc(390,`td`,20)(391,`p`),Mk(392,`Define o estado do `),Jc(393,`code`),Mk(394,`po-badge`),Kg()(),Jc(395,`p`),Mk(396,`Valores válidos:`),Kg(),Jc(397,`ul`)(398,`li`)(399,`code`),Mk(400,`positive`),Kg(),Mk(401,`: Define a cor do `),Jc(402,`code`),Mk(403,`po-badge`),Kg(),Mk(404,` com a cor de feedback positivo.;`),Kg(),Jc(405,`li`)(406,`code`),Mk(407,`negative`),Kg(),Mk(408,`: Define a cor do `),Jc(409,`code`),Mk(410,`po-badge`),Kg(),Mk(411,` com a cor de feedback negative.;`),Kg(),Jc(412,`li`)(413,`code`),Mk(414,`warning`),Kg(),Mk(415,`: Define a cor do `),Jc(416,`code`),Mk(417,`po-badge`),Kg(),Mk(418,` com a cor de feedback warning.;`),Kg(),Jc(419,`li`)(420,`code`),Mk(421,`disabled`),Kg(),Mk(422,`: Define a cor do `),Jc(423,`code`),Mk(424,`po-badge`),Kg(),Mk(425,` com a cor de feedback disabled;`),Kg()()()(),Jc(426,`tr`,78)(427,`td`,14)(428,`div`,15)(429,`span`,16),Mk(430,` p-value`),_u(431,`br`),Kg()()(),Jc(432,`td`,17)(433,`code`,79),Mk(434,`number`),Kg()(),Jc(435,`td`,19),Mk(436,`-`),Kg(),Jc(437,`td`,20)(438,`p`),Mk(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Me(i,W){if(i&1&&(Jc(0,`div`,1),_u(1,`sample-po-badge-basic-view`)(2,`sample-po-badge-labs-view`)(3,`sample-po-badge-message-view`),Kg()),i&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var De=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Badge`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Badge · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(l,a){l&1&&(Jc(0,`po-page-default`,0),LO(1,Me,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-badge-doc`),Kg()()),l&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,me,ge,be,Se],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(De),GV]})}return i})();var ot=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,fe]})}return i})();export{ot as DocPoBadgeModule};