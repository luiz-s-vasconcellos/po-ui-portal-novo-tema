import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Ci as UO,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Mr as J_,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Tn as qP,Ui as YO,Ur as Lt,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,ia as eD,io as vu,j as I4,ji as Vk,k as Goe,ki as V_,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,sr as BO,ua as ge$1,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,a){l&1&&vu(0,`po-badge`)},dependencies:[qP],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-badge-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-badge-basic/sample-po-badge-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-basic/sample-po-badge-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Badge Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-badge></po-badge>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-badge-basic`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,a){if(l&1){let g=YO();Qc(0,`div`,1),vu(1,`po-badge`,2),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.value,s)||(a.value=s),U_(s)}),Kg(),Qc(7,`po-input`,4),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.color,s)||(a.color=s),U_(s)}),Kg()(),Qc(8,`div`,1)(9,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.properties,s)||(a.properties=s),U_(s)}),vt(`p-change`,function(s){return a.propertiesChange(s)}),Kg(),Qc(10,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.status,s)||(a.status=s),U_(s)}),vt(`p-change`,function(s){return a.statusChange(s)}),Kg(),Qc(11,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.size,s)||(a.size=s),U_(s)}),Kg(),Qc(12,`po-radio-group`,8),z0(),Kb(`ngModelChange`,function(s){return B_(g),Tk(a.icon,s)||(a.icon=s),U_(s)}),vt(`p-change`,function(s){return a.iconsChange(s)}),Kg()(),Qc(13,`div`,1)(14,`po-button`,9),vt(`p-click`,function(){return a.restore()}),Kg()()()}l&2&&(wg(),Rb(`p-color`,a.color)(`p-icon`,a.showIcon?!0:a.icon)(`p-size`,a.size)(`p-status`,a.status)(`p-show-border`,a.properties.includes(`showBorder`))(`p-value`,a.value),wg(5),Yb(`ngModel`,a.value),Rb(`p-min`,0),W0(),wg(),Yb(`ngModel`,a.color),W0(),wg(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0(),wg(),Yb(`ngModel`,a.status),Rb(`p-options`,a.statusOptions),W0(),wg(),Yb(`ngModel`,a.size),Rb(`p-options`,a.sizesOptions),W0(),wg(),Yb(`ngModel`,a.icon),Rb(`p-options`,a.iconsOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,qP],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-badge-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-badge-labs/sample-po-badge-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-labs/sample-po-badge-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Badge Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-badge-labs`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();function Me(i,R){if(i&1&&(Qc(0,`div`,1)(1,`po-container`)(2,`div`,2),J_(),Qc(3,`svg`,3),vu(4,`circle`,4)(5,`path`,5),Kg(),eD(),Qc(6,`p`,6),Sk(7),vu(8,`po-badge`,7),Kg()()()()),i&2){let p=R.$implicit;wg(3),Lt(`kind`,p.status),wg(4),tm(` `,p.nome,` `),wg(),Rb(`p-status`,p.status===`online`?`positive`:`negative`)}}var fe=(()=>{class i{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`div`),UO(2,Me,9,3,`div`,1,BO),Kg()()),l&2&&(wg(2),HO(a.users))},dependencies:[Fc,qP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:39,vars:6,consts:[[`id`,`sample-po-badge-message`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-badge-message/sample-po-badge-message.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Badge Message`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-badge-message/sample-po-badge-message.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row po-mt-3">
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
              `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` user.nome `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-badge-message/sample-po-badge-message.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Qc(29,`po-tab`,12)(30,`div`)(31,`label`,6),Sk(32,`sample-po-badge-message/sample-po-badge-message.component.css`),Kg(),Qc(33,`div`,13)(34,`pre`,14),Sk(35,`.po-badge-wrap {
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
`),Kg()()()()()(),Qc(36,`div`,15),vu(37,`sample-po-badge-message`),Kg(),vu(38,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return i})();var Ce=(()=>{class i{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-badge-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-show-border`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`id`,`prop-p-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-badge.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoBadgeComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Utilizado para exibir a quantidade de notificações. `),Kg()(),Qc(15,`div`,6)(16,`h4`,7),Sk(17,`Seletor`),Kg(),Qc(18,`pre`,8),Sk(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),Kg()(),Qc(20,`h4`,9),Sk(21,`Propriedades`),Kg(),Qc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Sk(25,`Nome`),Kg(),Qc(26,`th`,12),Sk(27,`Tipo`),Kg(),Qc(28,`th`,12),Sk(29,`Padrão`),Kg(),Qc(30,`th`,12),Sk(31,`Descrição`),Kg()(),Qc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Sk(36,` p-aria-label`),vu(37,`br`),Kg()()(),Qc(38,`td`,17)(39,`code`,18),Sk(40,`string`),Kg()(),Qc(41,`td`,19),Sk(42,`-`),Kg(),Qc(43,`td`,20)(44,`p`),Sk(45,`Define um `),Qc(46,`code`),Sk(47,`aria-label`),Kg(),Sk(48,` para o `),Qc(49,`code`),Sk(50,`po-badge`),Kg()()()(),Qc(51,`tr`,21)(52,`td`,14)(53,`div`,15)(54,`span`,16),Sk(55,` p-color`),vu(56,`br`),Kg()()(),Qc(57,`td`,17)(58,`code`,18),Sk(59,`string`),Kg()(),Qc(60,`td`,19)(61,`p`)(62,`code`),Sk(63,`color-07`),Kg()()(),Qc(64,`td`,20)(65,`em`)(66,`strong`),Sk(67,`(opcional)`),Kg()(),Qc(68,`p`),Sk(69,`Determina a cor do `),Qc(70,`code`),Sk(71,`po-badge`),Kg(),Sk(72,`. As maneiras de customizar as cores são:`),Kg(),Qc(73,`ul`)(74,`li`),Sk(75,`Hexadeximal, por exemplo `),Qc(76,`code`),Sk(77,`#c64840`),Kg(),Sk(78,`;`),Kg(),Qc(79,`li`),Sk(80,`RGB, como `),Qc(81,`code`),Sk(82,`rgb(0, 0, 165)`),Kg(),Sk(83,`;`),Kg(),Qc(84,`li`),Sk(85,`O nome da cor, por exemplo `),Qc(86,`code`),Sk(87,`blue`),Kg(),Sk(88,`;`),Kg(),Qc(89,`li`),Sk(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Qc(91,`ul`)(92,`li`),vu(93,`span`,22),Qc(94,`code`),Sk(95,`color-01`),Kg()(),Qc(96,`li`),vu(97,`span`,23),Qc(98,`code`),Sk(99,`color-02`),Kg()(),Qc(100,`li`),vu(101,`span`,24),Qc(102,`code`),Sk(103,`color-03`),Kg()(),Qc(104,`li`),vu(105,`span`,25),Qc(106,`code`),Sk(107,`color-04`),Kg()(),Qc(108,`li`),vu(109,`span`,26),Qc(110,`code`),Sk(111,`color-05`),Kg()(),Qc(112,`li`),vu(113,`span`,27),Qc(114,`code`),Sk(115,`color-06`),Kg()(),Qc(116,`li`),vu(117,`span`,28),Qc(118,`code`),Sk(119,`color-07`),Kg()(),Qc(120,`li`),vu(121,`span`,29),Qc(122,`code`),Sk(123,`color-08`),Kg()(),Qc(124,`li`),vu(125,`span`,30),Qc(126,`code`),Sk(127,`color-09`),Kg()(),Qc(128,`li`),vu(129,`span`,31),Qc(130,`code`),Sk(131,`color-10`),Kg()(),Qc(132,`li`),vu(133,`span`,32),Qc(134,`code`),Sk(135,`color-11`),Kg()(),Qc(136,`li`),vu(137,`span`,33),Qc(138,`code`),Sk(139,`color-12`),Kg()()()()(),Qc(140,`blockquote`)(141,`p`),Sk(142,`Também é possível utilizar as 35 cores da paleta `),Qc(143,`strong`),Sk(144,`Caption Tag Colors`),Kg(),Sk(145,`:`),Kg()(),Qc(146,`ul`)(147,`li`),vu(148,`span`,34),Qc(149,`code`),Sk(150,`caption-tag-01`),Kg(),vu(151,`span`,35),Qc(152,`code`),Sk(153,`caption-tag-02`),Kg(),vu(154,`span`,36),Qc(155,`code`),Sk(156,`caption-tag-03`),Kg(),vu(157,`span`,37),Qc(158,`code`),Sk(159,`caption-tag-04`),Kg(),vu(160,`span`,38),Qc(161,`code`),Sk(162,`caption-tag-05`),Kg()(),Qc(163,`li`),vu(164,`span`,39),Qc(165,`code`),Sk(166,`caption-tag-06`),Kg(),vu(167,`span`,40),Qc(168,`code`),Sk(169,`caption-tag-07`),Kg(),vu(170,`span`,41),Qc(171,`code`),Sk(172,`caption-tag-08`),Kg(),vu(173,`span`,42),Qc(174,`code`),Sk(175,`caption-tag-09`),Kg(),vu(176,`span`,43),Qc(177,`code`),Sk(178,`caption-tag-10`),Kg()(),Qc(179,`li`),vu(180,`span`,44),Qc(181,`code`),Sk(182,`caption-tag-11`),Kg(),vu(183,`span`,45),Qc(184,`code`),Sk(185,`caption-tag-12`),Kg(),vu(186,`span`,46),Qc(187,`code`),Sk(188,`caption-tag-13`),Kg(),vu(189,`span`,47),Qc(190,`code`),Sk(191,`caption-tag-14`),Kg(),vu(192,`span`,48),Qc(193,`code`),Sk(194,`caption-tag-15`),Kg()(),Qc(195,`li`),vu(196,`span`,49),Qc(197,`code`),Sk(198,`caption-tag-16`),Kg(),vu(199,`span`,50),Qc(200,`code`),Sk(201,`caption-tag-17`),Kg(),vu(202,`span`,51),Qc(203,`code`),Sk(204,`caption-tag-18`),Kg(),vu(205,`span`,52),Qc(206,`code`),Sk(207,`caption-tag-19`),Kg(),vu(208,`span`,53),Qc(209,`code`),Sk(210,`caption-tag-20`),Kg()(),Qc(211,`li`),vu(212,`span`,54),Qc(213,`code`),Sk(214,`caption-tag-21`),Kg(),vu(215,`span`,55),Qc(216,`code`),Sk(217,`caption-tag-22`),Kg(),vu(218,`span`,56),Qc(219,`code`),Sk(220,`caption-tag-23`),Kg(),vu(221,`span`,57),Qc(222,`code`),Sk(223,`caption-tag-24`),Kg(),vu(224,`span`,58),Qc(225,`code`),Sk(226,`caption-tag-25`),Kg()(),Qc(227,`li`),vu(228,`span`,59),Qc(229,`code`),Sk(230,`caption-tag-26`),Kg(),vu(231,`span`,60),Qc(232,`code`),Sk(233,`caption-tag-27`),Kg(),vu(234,`span`,61),Qc(235,`code`),Sk(236,`caption-tag-28`),Kg(),vu(237,`span`,62),Qc(238,`code`),Sk(239,`caption-tag-29`),Kg(),vu(240,`span`,63),Qc(241,`code`),Sk(242,`caption-tag-30`),Kg()(),Qc(243,`li`),vu(244,`span`,64),Qc(245,`code`),Sk(246,`caption-tag-31`),Kg(),vu(247,`span`,65),Qc(248,`code`),Sk(249,`caption-tag-32`),Kg(),vu(250,`span`,66),Qc(251,`code`),Sk(252,`caption-tag-33`),Kg(),vu(253,`span`,67),Qc(254,`code`),Sk(255,`caption-tag-34`),Kg(),vu(256,`span`,68),Qc(257,`code`),Sk(258,`caption-tag-35`),Kg()()(),Qc(259,`p`),Sk(260,`Exemplo de uso:`),Kg(),Qc(261,`pre`)(262,`code`),Sk(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),Kg()()()(),Qc(264,`tr`,69)(265,`td`,14)(266,`div`,15)(267,`span`,16),Sk(268,` p-icon`),vu(269,`br`),Kg()()(),Qc(270,`td`,17)(271,`code`,70),Sk(272,`PoBadgeIcon`),Kg()(),Qc(273,`td`,19),Sk(274,`-`),Kg(),Qc(275,`td`,20)(276,`em`)(277,`strong`),Sk(278,`(opcional)`),Kg()(),Qc(279,`p`),Sk(280,`Ícone exibido no `),Qc(281,`code`),Sk(282,`po-badge`),Kg(),Sk(283,`.`),Kg(),Qc(284,`p`),Sk(285,`Para exibir icone do status atual declare a propriedade `),Qc(286,`code`),Sk(287,`p-icon`),Kg(),Sk(288,`. conforme exemplo abaixo:`),Kg(),Qc(289,`pre`)(290,`code`),Sk(291,`<po-badge [p-icon]="true"></po-badge>
`),Kg()(),Qc(292,`p`),Sk(293,`É possível usar qualquer um dos ícones da `),Qc(294,`a`,71),Sk(295,`Biblioteca de ícones`),Kg(),Sk(296,`. conforme exemplo abaixo:`),Kg(),Qc(297,`pre`)(298,`code`),Sk(299,`<po-badge p-icon="an an-user"></po-badge>
`),Kg()(),Qc(300,`p`),Sk(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(302,`em`),Sk(303,`Font Awesome`),Kg(),Sk(304,`, da seguinte forma:`),Kg(),Qc(305,`pre`)(306,`code`),Sk(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),Kg()(),Qc(308,`p`),Sk(309,`Outra opção seria a customização do ícone através do `),Qc(310,`code`),Sk(311,`TemplateRef`),Kg(),Sk(312,`, conforme exemplo abaixo:`),Kg(),Qc(313,`pre`)(314,`code`),Sk(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()()()(),Qc(316,`tr`,72)(317,`td`,14)(318,`div`,15)(319,`span`,16),Sk(320,` p-show-border`),vu(321,`br`),Kg()()(),Qc(322,`td`,17)(323,`code`,73),Sk(324,`boolean`),Kg()(),Qc(325,`td`,19),Sk(326,`-`),Kg(),Qc(327,`td`,20)(328,`p`),Sk(329,`Exibe uma borda para o `),Qc(330,`code`),Sk(331,`po-badge`),Kg()(),Qc(332,`blockquote`)(333,`p`),Sk(334,`Pode personalizar cor da bordar com a propriedade `),Qc(335,`code`),Sk(336,`p-color-border`),Kg()()()()(),Qc(337,`tr`,74)(338,`td`,14)(339,`div`,15)(340,`span`,16),Sk(341,` p-size`),vu(342,`br`),Kg()()(),Qc(343,`td`,17)(344,`code`,75),Sk(345,`PoBadgeSize`),Kg()(),Qc(346,`td`,19)(347,`p`)(348,`code`),Sk(349,`medium`),Kg()()(),Qc(350,`td`,20)(351,`p`),Sk(352,`Define o tamanho do `),Qc(353,`code`),Sk(354,`po-badge`),Kg()(),Qc(355,`p`),Sk(356,`Valores válidos:`),Kg(),Qc(357,`ul`)(358,`li`)(359,`code`),Sk(360,`small`),Kg(),Sk(361,`: o `),Qc(362,`code`),Sk(363,`po-badge`),Kg(),Sk(364,` fica do tamanho padrão, com 8px de altura.;`),Kg(),Qc(365,`li`)(366,`code`),Sk(367,`medium`),Kg(),Sk(368,`: o `),Qc(369,`code`),Sk(370,`po-badge`),Kg(),Sk(371,` fica do tamanho padrão, com 16px de altura.;`),Kg(),Qc(372,`li`)(373,`code`),Sk(374,`large`),Kg(),Sk(375,`: o `),Qc(376,`code`),Sk(377,`po-badge`),Kg(),Sk(378,` fica do tamanho padrão, com 24px de altura.;`),Kg()()()(),Qc(379,`tr`,76)(380,`td`,14)(381,`div`,15)(382,`span`,16),Sk(383,` p-status`),vu(384,`br`),Kg()()(),Qc(385,`td`,17)(386,`code`,77),Sk(387,`PoBadgeStatus`),Kg()(),Qc(388,`td`,19),Sk(389,`-`),Kg(),Qc(390,`td`,20)(391,`p`),Sk(392,`Define o estado do `),Qc(393,`code`),Sk(394,`po-badge`),Kg()(),Qc(395,`p`),Sk(396,`Valores válidos:`),Kg(),Qc(397,`ul`)(398,`li`)(399,`code`),Sk(400,`positive`),Kg(),Sk(401,`: Define a cor do `),Qc(402,`code`),Sk(403,`po-badge`),Kg(),Sk(404,` com a cor de feedback positivo.;`),Kg(),Qc(405,`li`)(406,`code`),Sk(407,`negative`),Kg(),Sk(408,`: Define a cor do `),Qc(409,`code`),Sk(410,`po-badge`),Kg(),Sk(411,` com a cor de feedback negative.;`),Kg(),Qc(412,`li`)(413,`code`),Sk(414,`warning`),Kg(),Sk(415,`: Define a cor do `),Qc(416,`code`),Sk(417,`po-badge`),Kg(),Sk(418,` com a cor de feedback warning.;`),Kg(),Qc(419,`li`)(420,`code`),Sk(421,`disabled`),Kg(),Sk(422,`: Define a cor do `),Qc(423,`code`),Sk(424,`po-badge`),Kg(),Sk(425,` com a cor de feedback disabled;`),Kg()()()(),Qc(426,`tr`,78)(427,`td`,14)(428,`div`,15)(429,`span`,16),Sk(430,` p-value`),vu(431,`br`),Kg()()(),Qc(432,`td`,17)(433,`code`,79),Sk(434,`number`),Kg()(),Qc(435,`td`,19),Sk(436,`-`),Kg(),Qc(437,`td`,20)(438,`p`),Sk(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ze(i,R){if(i&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-badge-basic-view`)(2,`sample-po-badge-labs-view`)(3,`sample-po-badge-message-view`),Kg()}if(i&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ze,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-badge-doc`),Kg()()()),l&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,be,Se,ve,Ce],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(Ve),GV]})}return i})();var dt=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,Ee]})}return i})();export{dt as DocPoBadgeModule};