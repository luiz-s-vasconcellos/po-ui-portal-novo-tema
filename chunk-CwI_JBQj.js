import{A as Hoe,Cn as oi,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Ur as N_,Vi as bx,Xa as wx,Xt as ere,Ya as wg,Yr as Pt,Za as xF,ai as Sn,dr as DO,eo as x_,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,ot as RP,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,yr as Ex,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var de=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,a){l&1&&nu(0,`po-badge`)},dependencies:[RP],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Badge Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-badge></po-badge>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-badge-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ee,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,a){if(l&1){let g=Ax();jc(0,`div`,1),nu(1,`po-badge`,2),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.value,r)||(a.value=r),__(r)}),wg(),jc(7,`po-input`,4),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.color,r)||(a.color=r),__(r)}),wg()(),jc(8,`div`,1)(9,`po-checkbox-group`,5),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.properties,r)||(a.properties=r),__(r)}),mt(`p-change`,function(r){return a.propertiesChange(r)}),wg(),jc(10,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.status,r)||(a.status=r),__(r)}),mt(`p-change`,function(r){return a.statusChange(r)}),wg(),jc(11,`po-radio-group`,7),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.size,r)||(a.size=r),__(r)}),wg(),jc(12,`po-radio-group`,8),r0(),ab(`ngModelChange`,function(r){return v_(g),uO(a.icon,r)||(a.icon=r),__(r)}),mt(`p-change`,function(r){return a.iconsChange(r)}),wg()(),jc(13,`div`,1)(14,`po-button`,9),mt(`p-click`,function(){return a.restore()}),wg()()()}l&2&&(rg(),UE(`p-color`,a.color)(`p-icon`,a.showIcon?!0:a.icon)(`p-size`,a.size)(`p-status`,a.status)(`p-show-border`,a.properties.includes(`showBorder`))(`p-value`,a.value),rg(5),sb(`ngModel`,a.value),UE(`p-min`,0),o0(),rg(),sb(`ngModel`,a.color),o0(),rg(2),sb(`ngModel`,a.properties),UE(`p-options`,a.propertiesOptions),o0(),rg(),sb(`ngModel`,a.status),UE(`p-options`,a.statusOptions),o0(),rg(),sb(`ngModel`,a.size),UE(`p-options`,a.sizesOptions),o0(),rg(),sb(`ngModel`,a.icon),UE(`p-options`,a.iconsOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Hoe,Gte,RP],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Badge Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-badge-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Pe,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return i})();function Be(i,F){if(i&1&&(jc(0,`div`,1)(1,`po-container`)(2,`div`,2),N_(),jc(3,`svg`,3),nu(4,`circle`,4)(5,`path`,5),wg(),x_(),jc(6,`p`,6),lO(7),nu(8,`po-badge`,7),wg()()()()),i&2){let p=F.$implicit;rg(3),Pt(`kind`,p.status),rg(4),Ag(` `,p.nome,` `),rg(),UE(`p-status`,p.status===`online`?`positive`:`negative`)}}var be=(()=>{class i{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`div`),bx(2,Be,9,3,`div`,1,Ex),wg()()),l&2&&(rg(2),wx(a.users))},dependencies:[Ac,RP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return i})();var Me=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Badge Message`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-badge-message/sample-po-badge-message.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row po-mt-3">
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
              { { user.nome }}
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-badge-message/sample-po-badge-message.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-badge-message/sample-po-badge-message.component.css`),wg(),jc(25,`pre`,11),lO(26,`.po-badge-wrap {
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
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-badge-message`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Me,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-badge.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoBadgeComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Utilizado para exibir a quantidade de notificações. `),wg()(),jc(15,`div`,6)(16,`h4`,7),lO(17,`Seletor`),wg(),jc(18,`pre`,8),lO(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),wg()(),jc(20,`h4`,9),lO(21,`Propriedades`),wg(),jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),lO(25,`Nome`),wg(),jc(26,`th`,12),lO(27,`Tipo`),wg(),jc(28,`th`,12),lO(29,`Padrão`),wg(),jc(30,`th`,12),lO(31,`Descrição`),wg()(),jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),lO(36,` p-aria-label`),nu(37,`br`),wg()()(),jc(38,`td`,17)(39,`code`,18),lO(40,`string`),wg()(),jc(41,`td`,19),lO(42,`-`),wg(),jc(43,`td`,20)(44,`p`),lO(45,`Define um `),jc(46,`code`),lO(47,`aria-label`),wg(),lO(48,` para o `),jc(49,`code`),lO(50,`po-badge`),wg()()()(),jc(51,`tr`,13)(52,`td`,14)(53,`div`,15)(54,`span`,16),lO(55,` p-color`),nu(56,`br`),wg()()(),jc(57,`td`,17)(58,`code`,18),lO(59,`string`),wg()(),jc(60,`td`,19)(61,`p`)(62,`code`),lO(63,`color-07`),wg()()(),jc(64,`td`,20)(65,`em`)(66,`strong`),lO(67,`(opcional)`),wg()(),jc(68,`p`),lO(69,`Determina a cor do `),jc(70,`code`),lO(71,`po-badge`),wg(),lO(72,`. As maneiras de customizar as cores são:`),wg(),jc(73,`ul`)(74,`li`),lO(75,`Hexadeximal, por exemplo `),jc(76,`code`),lO(77,`#c64840`),wg(),lO(78,`;`),wg(),jc(79,`li`),lO(80,`RGB, como `),jc(81,`code`),lO(82,`rgb(0, 0, 165)`),wg(),lO(83,`;`),wg(),jc(84,`li`),lO(85,`O nome da cor, por exemplo `),jc(86,`code`),lO(87,`blue`),wg(),lO(88,`;`),wg(),jc(89,`li`),lO(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),jc(91,`ul`)(92,`li`),nu(93,`span`,21),jc(94,`code`),lO(95,`color-01`),wg()(),jc(96,`li`),nu(97,`span`,22),jc(98,`code`),lO(99,`color-02`),wg()(),jc(100,`li`),nu(101,`span`,23),jc(102,`code`),lO(103,`color-03`),wg()(),jc(104,`li`),nu(105,`span`,24),jc(106,`code`),lO(107,`color-04`),wg()(),jc(108,`li`),nu(109,`span`,25),jc(110,`code`),lO(111,`color-05`),wg()(),jc(112,`li`),nu(113,`span`,26),jc(114,`code`),lO(115,`color-06`),wg()(),jc(116,`li`),nu(117,`span`,27),jc(118,`code`),lO(119,`color-07`),wg()(),jc(120,`li`),nu(121,`span`,28),jc(122,`code`),lO(123,`color-08`),wg()(),jc(124,`li`),nu(125,`span`,29),jc(126,`code`),lO(127,`color-09`),wg()(),jc(128,`li`),nu(129,`span`,30),jc(130,`code`),lO(131,`color-10`),wg()(),jc(132,`li`),nu(133,`span`,31),jc(134,`code`),lO(135,`color-11`),wg()(),jc(136,`li`),nu(137,`span`,32),jc(138,`code`),lO(139,`color-12`),wg()()()()(),jc(140,`blockquote`)(141,`p`),lO(142,`Também é possível utilizar as 35 cores da paleta `),jc(143,`strong`),lO(144,`Caption Tag Colors`),wg(),lO(145,`:`),wg()(),jc(146,`ul`)(147,`li`),nu(148,`span`,33),jc(149,`code`),lO(150,`caption-tag-01`),wg(),nu(151,`span`,34),jc(152,`code`),lO(153,`caption-tag-02`),wg(),nu(154,`span`,35),jc(155,`code`),lO(156,`caption-tag-03`),wg(),nu(157,`span`,36),jc(158,`code`),lO(159,`caption-tag-04`),wg(),nu(160,`span`,37),jc(161,`code`),lO(162,`caption-tag-05`),wg()(),jc(163,`li`),nu(164,`span`,38),jc(165,`code`),lO(166,`caption-tag-06`),wg(),nu(167,`span`,39),jc(168,`code`),lO(169,`caption-tag-07`),wg(),nu(170,`span`,40),jc(171,`code`),lO(172,`caption-tag-08`),wg(),nu(173,`span`,41),jc(174,`code`),lO(175,`caption-tag-09`),wg(),nu(176,`span`,42),jc(177,`code`),lO(178,`caption-tag-10`),wg()(),jc(179,`li`),nu(180,`span`,43),jc(181,`code`),lO(182,`caption-tag-11`),wg(),nu(183,`span`,44),jc(184,`code`),lO(185,`caption-tag-12`),wg(),nu(186,`span`,45),jc(187,`code`),lO(188,`caption-tag-13`),wg(),nu(189,`span`,46),jc(190,`code`),lO(191,`caption-tag-14`),wg(),nu(192,`span`,47),jc(193,`code`),lO(194,`caption-tag-15`),wg()(),jc(195,`li`),nu(196,`span`,48),jc(197,`code`),lO(198,`caption-tag-16`),wg(),nu(199,`span`,49),jc(200,`code`),lO(201,`caption-tag-17`),wg(),nu(202,`span`,50),jc(203,`code`),lO(204,`caption-tag-18`),wg(),nu(205,`span`,51),jc(206,`code`),lO(207,`caption-tag-19`),wg(),nu(208,`span`,52),jc(209,`code`),lO(210,`caption-tag-20`),wg()(),jc(211,`li`),nu(212,`span`,53),jc(213,`code`),lO(214,`caption-tag-21`),wg(),nu(215,`span`,54),jc(216,`code`),lO(217,`caption-tag-22`),wg(),nu(218,`span`,55),jc(219,`code`),lO(220,`caption-tag-23`),wg(),nu(221,`span`,56),jc(222,`code`),lO(223,`caption-tag-24`),wg(),nu(224,`span`,57),jc(225,`code`),lO(226,`caption-tag-25`),wg()(),jc(227,`li`),nu(228,`span`,58),jc(229,`code`),lO(230,`caption-tag-26`),wg(),nu(231,`span`,59),jc(232,`code`),lO(233,`caption-tag-27`),wg(),nu(234,`span`,60),jc(235,`code`),lO(236,`caption-tag-28`),wg(),nu(237,`span`,61),jc(238,`code`),lO(239,`caption-tag-29`),wg(),nu(240,`span`,62),jc(241,`code`),lO(242,`caption-tag-30`),wg()(),jc(243,`li`),nu(244,`span`,63),jc(245,`code`),lO(246,`caption-tag-31`),wg(),nu(247,`span`,64),jc(248,`code`),lO(249,`caption-tag-32`),wg(),nu(250,`span`,65),jc(251,`code`),lO(252,`caption-tag-33`),wg(),nu(253,`span`,66),jc(254,`code`),lO(255,`caption-tag-34`),wg(),nu(256,`span`,67),jc(257,`code`),lO(258,`caption-tag-35`),wg()()(),jc(259,`p`),lO(260,`Exemplo de uso:`),wg(),jc(261,`pre`)(262,`code`),lO(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),wg()()()(),jc(264,`tr`,13)(265,`td`,14)(266,`div`,15)(267,`span`,16),lO(268,` p-icon`),nu(269,`br`),wg()()(),jc(270,`td`,17)(271,`code`,68),lO(272,`PoBadgeIcon`),wg()(),jc(273,`td`,19),lO(274,`-`),wg(),jc(275,`td`,20)(276,`em`)(277,`strong`),lO(278,`(opcional)`),wg()(),jc(279,`p`),lO(280,`Ícone exibido no `),jc(281,`code`),lO(282,`po-badge`),wg(),lO(283,`.`),wg(),jc(284,`p`),lO(285,`Para exibir icone do status atual declare a propriedade `),jc(286,`code`),lO(287,`p-icon`),wg(),lO(288,`. conforme exemplo abaixo:`),wg(),jc(289,`pre`)(290,`code`),lO(291,`<po-badge [p-icon]="true"></po-badge>
`),wg()(),jc(292,`p`),lO(293,`É possível usar qualquer um dos ícones da `),jc(294,`a`,69),lO(295,`Biblioteca de ícones`),wg(),lO(296,`. conforme exemplo abaixo:`),wg(),jc(297,`pre`)(298,`code`),lO(299,`<po-badge p-icon="an an-user"></po-badge>
`),wg()(),jc(300,`p`),lO(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(302,`em`),lO(303,`Font Awesome`),wg(),lO(304,`, da seguinte forma:`),wg(),jc(305,`pre`)(306,`code`),lO(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),wg()(),jc(308,`p`),lO(309,`Outra opção seria a customização do ícone através do `),jc(310,`code`),lO(311,`TemplateRef`),wg(),lO(312,`, conforme exemplo abaixo:`),wg(),jc(313,`pre`)(314,`code`),lO(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()()()(),jc(316,`tr`,13)(317,`td`,14)(318,`div`,15)(319,`span`,16),lO(320,` p-show-border`),nu(321,`br`),wg()()(),jc(322,`td`,17)(323,`code`,70),lO(324,`boolean`),wg()(),jc(325,`td`,19),lO(326,`-`),wg(),jc(327,`td`,20)(328,`p`),lO(329,`Exibe uma borda para o `),jc(330,`code`),lO(331,`po-badge`),wg()(),jc(332,`blockquote`)(333,`p`),lO(334,`Pode personalizar cor da bordar com a propriedade `),jc(335,`code`),lO(336,`p-color-border`),wg()()()()(),jc(337,`tr`,13)(338,`td`,14)(339,`div`,15)(340,`span`,16),lO(341,` p-size`),nu(342,`br`),wg()()(),jc(343,`td`,17)(344,`code`,71),lO(345,`PoBadgeSize`),wg()(),jc(346,`td`,19)(347,`p`)(348,`code`),lO(349,`medium`),wg()()(),jc(350,`td`,20)(351,`p`),lO(352,`Define o tamanho do `),jc(353,`code`),lO(354,`po-badge`),wg()(),jc(355,`p`),lO(356,`Valores válidos:`),wg(),jc(357,`ul`)(358,`li`)(359,`code`),lO(360,`small`),wg(),lO(361,`: o `),jc(362,`code`),lO(363,`po-badge`),wg(),lO(364,` fica do tamanho padrão, com 8px de altura.;`),wg(),jc(365,`li`)(366,`code`),lO(367,`medium`),wg(),lO(368,`: o `),jc(369,`code`),lO(370,`po-badge`),wg(),lO(371,` fica do tamanho padrão, com 16px de altura.;`),wg(),jc(372,`li`)(373,`code`),lO(374,`large`),wg(),lO(375,`: o `),jc(376,`code`),lO(377,`po-badge`),wg(),lO(378,` fica do tamanho padrão, com 24px de altura.;`),wg()()()(),jc(379,`tr`,13)(380,`td`,14)(381,`div`,15)(382,`span`,16),lO(383,` p-status`),nu(384,`br`),wg()()(),jc(385,`td`,17)(386,`code`,72),lO(387,`PoBadgeStatus`),wg()(),jc(388,`td`,19),lO(389,`-`),wg(),jc(390,`td`,20)(391,`p`),lO(392,`Define o estado do `),jc(393,`code`),lO(394,`po-badge`),wg()(),jc(395,`p`),lO(396,`Valores válidos:`),wg(),jc(397,`ul`)(398,`li`)(399,`code`),lO(400,`positive`),wg(),lO(401,`: Define a cor do `),jc(402,`code`),lO(403,`po-badge`),wg(),lO(404,` com a cor de feedback positivo.;`),wg(),jc(405,`li`)(406,`code`),lO(407,`negative`),wg(),lO(408,`: Define a cor do `),jc(409,`code`),lO(410,`po-badge`),wg(),lO(411,` com a cor de feedback negative.;`),wg(),jc(412,`li`)(413,`code`),lO(414,`warning`),wg(),lO(415,`: Define a cor do `),jc(416,`code`),lO(417,`po-badge`),wg(),lO(418,` com a cor de feedback warning.;`),wg(),jc(419,`li`)(420,`code`),lO(421,`disabled`),wg(),lO(422,`: Define a cor do `),jc(423,`code`),lO(424,`po-badge`),wg(),lO(425,` com a cor de feedback disabled;`),wg()()()(),jc(426,`tr`,13)(427,`td`,14)(428,`div`,15)(429,`span`,16),lO(430,` p-value`),nu(431,`br`),wg()()(),jc(432,`td`,17)(433,`code`,73),lO(434,`number`),wg()(),jc(435,`td`,19),lO(436,`-`),wg(),jc(437,`td`,20)(438,`p`),lO(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Te(i,F){if(i&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let a=Fx();return __(a.changeTab(`web`))}),nu(1,`sample-po-badge-basic-view`)(2,`sample-po-badge-labs-view`)(3,`sample-po-badge-message-view`),wg()}if(i&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Te,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(4,`sample-po-badge-doc`),wg()()()),l&2&&(UE(`p-actions`,a.actions),rg(2),Dx(a.hidePoWebSample?-1:2),rg(),UE(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ce,ue,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[I1.forChild(Le),I1]})}return i})();var ot=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[M,Ce]})}return i})();export{ot as DocPoBadgeModule};