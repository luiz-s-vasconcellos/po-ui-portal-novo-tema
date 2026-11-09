import{$n as Ak,Ar as Ig,Ba as tD,Br as Lt,Cn as qP,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Ji as eD,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xn as $O,Yi as eF,an as j4,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,oo as zO,or as Bk,qi as de$1,qr as NZ,va as nk,vn as oi,w as Fc,wr as HO,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var de=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic`]],standalone:!1,decls:1,vars:0,template:function(l,a){l&1&&_u(0,`po-badge`)},dependencies:[qP],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Badge Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-badge-basic/sample-po-badge-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-badge></po-badge>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-badge-basic/sample-po-badge-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-badge-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ee,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:`showBorder`,label:`Show Border`}];iconsOptions=[{label:`an-check`,value:`an an-check`},{label:`an-check-circle`,value:`an an-check-circle`},{label:`an an-check`,value:`an an-check`},{label:`fa-minus`,value:`fa fa-minus`},{label:`true (Enabled when status is settled)`,value:`true`,disabled:!0},{label:`None`,value:`false`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];statusOptions=[{label:`Positive`,value:`positive`},{label:`Negative`,value:`negative`},{label:`Warning`,value:`warning`},{label:`Disabled`,value:`disabled`},{label:`None`,value:`none`}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p===`none`&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p===`true`}restore(){this.size=`medium`,this.status=void 0,this.icon=void 0,this.color=`color-07`,this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs`]],standalone:!1,decls:15,vars:17,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-color`,`p-icon`,`p-size`,`p-status`,`p-show-border`,`p-value`],[`name`,`value`,`p-label`,`Value`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min`],[`name`,`color`,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,a){if(l&1){let g=ZO();Jc(0,`div`,1),_u(1,`po-badge`,2),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,3),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.value,r)||(a.value=r),H_(r)}),Zg(),Jc(7,`po-input`,4),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.color,r)||(a.color=r),H_(r)}),Zg()(),Jc(8,`div`,1)(9,`po-checkbox-group`,5),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.properties,r)||(a.properties=r),H_(r)}),vt(`p-change`,function(r){return a.propertiesChange(r)}),Zg(),Jc(10,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.status,r)||(a.status=r),H_(r)}),vt(`p-change`,function(r){return a.statusChange(r)}),Zg(),Jc(11,`po-radio-group`,7),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.size,r)||(a.size=r),H_(r)}),Zg(),Jc(12,`po-radio-group`,8),W0(),Kb(`ngModelChange`,function(r){return U_(g),Ak(a.icon,r)||(a.icon=r),H_(r)}),vt(`p-change`,function(r){return a.iconsChange(r)}),Zg()(),Jc(13,`div`,1)(14,`po-button`,9),vt(`p-click`,function(){return a.restore()}),Zg()()()}l&2&&(Ig(),Rb(`p-color`,a.color)(`p-icon`,a.showIcon?!0:a.icon)(`p-size`,a.size)(`p-status`,a.status)(`p-show-border`,a.properties.includes(`showBorder`))(`p-value`,a.value),Ig(5),Yb(`ngModel`,a.value),Rb(`p-min`,0),Y0(),Ig(),Yb(`ngModel`,a.color),Y0(),Ig(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,a.status),Rb(`p-options`,a.statusOptions),Y0(),Ig(),Yb(`ngModel`,a.size),Rb(`p-options`,a.sizesOptions),Y0(),Ig(),Yb(`ngModel`,a.icon),Rb(`p-options`,a.iconsOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Goe,Zte,qP],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Badge Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-badge-labs/sample-po-badge-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-badge-labs/sample-po-badge-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-badge-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pe,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ge],encapsulation:2,changeDetection:1})}return i})();function Be(i,F){if(i&1&&(Jc(0,`div`,1)(1,`po-container`)(2,`div`,2),eD(),Jc(3,`svg`,3),_u(4,`circle`,4)(5,`path`,5),Zg(),tD(),Jc(6,`p`,6),Tk(7),_u(8,`po-badge`,7),Zg()()()()),i&2){let p=F.$implicit;Ig(3),Lt(`kind`,p.status),Ig(4),nm(` `,p.nome,` `),Ig(),Rb(`p-status`,p.status===`online`?`positive`:`negative`)}}var be=(()=>{class i{users=[{nome:`Leonardo da vinci`,status:`online`},{nome:`Johann Pachelbel`,status:`offline`},{nome:`Amadeus Mozart`,status:`offline`}];static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`,`po-mt-3`],[1,`po-mb-1`],[1,`card`],[`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`po-mr-2`],[`cx`,`12`,`cy`,`12`,`r`,`11`],[`d`,`m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9`,`fill`,`none`],[1,`po-mr-2`,`card-name-user`,`po-text-color-neutral-dark-40`],[1,`po-badge-wrap`,3,`p-status`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`div`),$O(2,Be,9,3,`div`,1,HO),Zg()()),l&2&&(Ig(2),zO(a.users))},dependencies:[Fc,qP],styles:[`.po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}`],changeDetection:1})}return i})();var Me=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-message-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Badge Message`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-badge-message/sample-po-badge-message.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row po-mt-3">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-badge-message/sample-po-badge-message.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-badge-message/sample-po-badge-message.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.po-badge-wrap {
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
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-badge-message`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-badge-doc`]],standalone:!1,decls:440,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeIcon`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeSize`],[`pan`,``,1,`docs-api-property-type`,`PoBadgeStatus`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoBadgeModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-badge.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoBadgeComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Utilizado para exibir a quantidade de notificações. `),Zg()(),Jc(15,`div`,6)(16,`h4`,7),Tk(17,`Seletor`),Zg(),Jc(18,`pre`,8),Tk(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),Zg()(),Jc(20,`h4`,9),Tk(21,`Propriedades`),Zg(),Jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Tk(25,`Nome`),Zg(),Jc(26,`th`,12),Tk(27,`Tipo`),Zg(),Jc(28,`th`,12),Tk(29,`Padrão`),Zg(),Jc(30,`th`,12),Tk(31,`Descrição`),Zg()(),Jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Tk(36,` p-aria-label`),_u(37,`br`),Zg()()(),Jc(38,`td`,17)(39,`code`,18),Tk(40,`string`),Zg()(),Jc(41,`td`,19),Tk(42,`-`),Zg(),Jc(43,`td`,20)(44,`p`),Tk(45,`Define um `),Jc(46,`code`),Tk(47,`aria-label`),Zg(),Tk(48,` para o `),Jc(49,`code`),Tk(50,`po-badge`),Zg()()()(),Jc(51,`tr`,13)(52,`td`,14)(53,`div`,15)(54,`span`,16),Tk(55,` p-color`),_u(56,`br`),Zg()()(),Jc(57,`td`,17)(58,`code`,18),Tk(59,`string`),Zg()(),Jc(60,`td`,19)(61,`p`)(62,`code`),Tk(63,`color-07`),Zg()()(),Jc(64,`td`,20)(65,`em`)(66,`strong`),Tk(67,`(opcional)`),Zg()(),Jc(68,`p`),Tk(69,`Determina a cor do `),Jc(70,`code`),Tk(71,`po-badge`),Zg(),Tk(72,`. As maneiras de customizar as cores são:`),Zg(),Jc(73,`ul`)(74,`li`),Tk(75,`Hexadeximal, por exemplo `),Jc(76,`code`),Tk(77,`#c64840`),Zg(),Tk(78,`;`),Zg(),Jc(79,`li`),Tk(80,`RGB, como `),Jc(81,`code`),Tk(82,`rgb(0, 0, 165)`),Zg(),Tk(83,`;`),Zg(),Jc(84,`li`),Tk(85,`O nome da cor, por exemplo `),Jc(86,`code`),Tk(87,`blue`),Zg(),Tk(88,`;`),Zg(),Jc(89,`li`),Tk(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Jc(91,`ul`)(92,`li`),_u(93,`span`,21),Jc(94,`code`),Tk(95,`color-01`),Zg()(),Jc(96,`li`),_u(97,`span`,22),Jc(98,`code`),Tk(99,`color-02`),Zg()(),Jc(100,`li`),_u(101,`span`,23),Jc(102,`code`),Tk(103,`color-03`),Zg()(),Jc(104,`li`),_u(105,`span`,24),Jc(106,`code`),Tk(107,`color-04`),Zg()(),Jc(108,`li`),_u(109,`span`,25),Jc(110,`code`),Tk(111,`color-05`),Zg()(),Jc(112,`li`),_u(113,`span`,26),Jc(114,`code`),Tk(115,`color-06`),Zg()(),Jc(116,`li`),_u(117,`span`,27),Jc(118,`code`),Tk(119,`color-07`),Zg()(),Jc(120,`li`),_u(121,`span`,28),Jc(122,`code`),Tk(123,`color-08`),Zg()(),Jc(124,`li`),_u(125,`span`,29),Jc(126,`code`),Tk(127,`color-09`),Zg()(),Jc(128,`li`),_u(129,`span`,30),Jc(130,`code`),Tk(131,`color-10`),Zg()(),Jc(132,`li`),_u(133,`span`,31),Jc(134,`code`),Tk(135,`color-11`),Zg()(),Jc(136,`li`),_u(137,`span`,32),Jc(138,`code`),Tk(139,`color-12`),Zg()()()()(),Jc(140,`blockquote`)(141,`p`),Tk(142,`Também é possível utilizar as 35 cores da paleta `),Jc(143,`strong`),Tk(144,`Caption Tag Colors`),Zg(),Tk(145,`:`),Zg()(),Jc(146,`ul`)(147,`li`),_u(148,`span`,33),Jc(149,`code`),Tk(150,`caption-tag-01`),Zg(),_u(151,`span`,34),Jc(152,`code`),Tk(153,`caption-tag-02`),Zg(),_u(154,`span`,35),Jc(155,`code`),Tk(156,`caption-tag-03`),Zg(),_u(157,`span`,36),Jc(158,`code`),Tk(159,`caption-tag-04`),Zg(),_u(160,`span`,37),Jc(161,`code`),Tk(162,`caption-tag-05`),Zg()(),Jc(163,`li`),_u(164,`span`,38),Jc(165,`code`),Tk(166,`caption-tag-06`),Zg(),_u(167,`span`,39),Jc(168,`code`),Tk(169,`caption-tag-07`),Zg(),_u(170,`span`,40),Jc(171,`code`),Tk(172,`caption-tag-08`),Zg(),_u(173,`span`,41),Jc(174,`code`),Tk(175,`caption-tag-09`),Zg(),_u(176,`span`,42),Jc(177,`code`),Tk(178,`caption-tag-10`),Zg()(),Jc(179,`li`),_u(180,`span`,43),Jc(181,`code`),Tk(182,`caption-tag-11`),Zg(),_u(183,`span`,44),Jc(184,`code`),Tk(185,`caption-tag-12`),Zg(),_u(186,`span`,45),Jc(187,`code`),Tk(188,`caption-tag-13`),Zg(),_u(189,`span`,46),Jc(190,`code`),Tk(191,`caption-tag-14`),Zg(),_u(192,`span`,47),Jc(193,`code`),Tk(194,`caption-tag-15`),Zg()(),Jc(195,`li`),_u(196,`span`,48),Jc(197,`code`),Tk(198,`caption-tag-16`),Zg(),_u(199,`span`,49),Jc(200,`code`),Tk(201,`caption-tag-17`),Zg(),_u(202,`span`,50),Jc(203,`code`),Tk(204,`caption-tag-18`),Zg(),_u(205,`span`,51),Jc(206,`code`),Tk(207,`caption-tag-19`),Zg(),_u(208,`span`,52),Jc(209,`code`),Tk(210,`caption-tag-20`),Zg()(),Jc(211,`li`),_u(212,`span`,53),Jc(213,`code`),Tk(214,`caption-tag-21`),Zg(),_u(215,`span`,54),Jc(216,`code`),Tk(217,`caption-tag-22`),Zg(),_u(218,`span`,55),Jc(219,`code`),Tk(220,`caption-tag-23`),Zg(),_u(221,`span`,56),Jc(222,`code`),Tk(223,`caption-tag-24`),Zg(),_u(224,`span`,57),Jc(225,`code`),Tk(226,`caption-tag-25`),Zg()(),Jc(227,`li`),_u(228,`span`,58),Jc(229,`code`),Tk(230,`caption-tag-26`),Zg(),_u(231,`span`,59),Jc(232,`code`),Tk(233,`caption-tag-27`),Zg(),_u(234,`span`,60),Jc(235,`code`),Tk(236,`caption-tag-28`),Zg(),_u(237,`span`,61),Jc(238,`code`),Tk(239,`caption-tag-29`),Zg(),_u(240,`span`,62),Jc(241,`code`),Tk(242,`caption-tag-30`),Zg()(),Jc(243,`li`),_u(244,`span`,63),Jc(245,`code`),Tk(246,`caption-tag-31`),Zg(),_u(247,`span`,64),Jc(248,`code`),Tk(249,`caption-tag-32`),Zg(),_u(250,`span`,65),Jc(251,`code`),Tk(252,`caption-tag-33`),Zg(),_u(253,`span`,66),Jc(254,`code`),Tk(255,`caption-tag-34`),Zg(),_u(256,`span`,67),Jc(257,`code`),Tk(258,`caption-tag-35`),Zg()()(),Jc(259,`p`),Tk(260,`Exemplo de uso:`),Zg(),Jc(261,`pre`)(262,`code`),Tk(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),Zg()()()(),Jc(264,`tr`,13)(265,`td`,14)(266,`div`,15)(267,`span`,16),Tk(268,` p-icon`),_u(269,`br`),Zg()()(),Jc(270,`td`,17)(271,`code`,68),Tk(272,`PoBadgeIcon`),Zg()(),Jc(273,`td`,19),Tk(274,`-`),Zg(),Jc(275,`td`,20)(276,`em`)(277,`strong`),Tk(278,`(opcional)`),Zg()(),Jc(279,`p`),Tk(280,`Ícone exibido no `),Jc(281,`code`),Tk(282,`po-badge`),Zg(),Tk(283,`.`),Zg(),Jc(284,`p`),Tk(285,`Para exibir icone do status atual declare a propriedade `),Jc(286,`code`),Tk(287,`p-icon`),Zg(),Tk(288,`. conforme exemplo abaixo:`),Zg(),Jc(289,`pre`)(290,`code`),Tk(291,`<po-badge [p-icon]="true"></po-badge>
`),Zg()(),Jc(292,`p`),Tk(293,`É possível usar qualquer um dos ícones da `),Jc(294,`a`,69),Tk(295,`Biblioteca de ícones`),Zg(),Tk(296,`. conforme exemplo abaixo:`),Zg(),Jc(297,`pre`)(298,`code`),Tk(299,`<po-badge p-icon="an an-user"></po-badge>
`),Zg()(),Jc(300,`p`),Tk(301,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(302,`em`),Tk(303,`Font Awesome`),Zg(),Tk(304,`, da seguinte forma:`),Zg(),Jc(305,`pre`)(306,`code`),Tk(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),Zg()(),Jc(308,`p`),Tk(309,`Outra opção seria a customização do ícone através do `),Jc(310,`code`),Tk(311,`TemplateRef`),Zg(),Tk(312,`, conforme exemplo abaixo:`),Zg(),Jc(313,`pre`)(314,`code`),Tk(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()()()(),Jc(316,`tr`,13)(317,`td`,14)(318,`div`,15)(319,`span`,16),Tk(320,` p-show-border`),_u(321,`br`),Zg()()(),Jc(322,`td`,17)(323,`code`,70),Tk(324,`boolean`),Zg()(),Jc(325,`td`,19),Tk(326,`-`),Zg(),Jc(327,`td`,20)(328,`p`),Tk(329,`Exibe uma borda para o `),Jc(330,`code`),Tk(331,`po-badge`),Zg()(),Jc(332,`blockquote`)(333,`p`),Tk(334,`Pode personalizar cor da bordar com a propriedade `),Jc(335,`code`),Tk(336,`p-color-border`),Zg()()()()(),Jc(337,`tr`,13)(338,`td`,14)(339,`div`,15)(340,`span`,16),Tk(341,` p-size`),_u(342,`br`),Zg()()(),Jc(343,`td`,17)(344,`code`,71),Tk(345,`PoBadgeSize`),Zg()(),Jc(346,`td`,19)(347,`p`)(348,`code`),Tk(349,`medium`),Zg()()(),Jc(350,`td`,20)(351,`p`),Tk(352,`Define o tamanho do `),Jc(353,`code`),Tk(354,`po-badge`),Zg()(),Jc(355,`p`),Tk(356,`Valores válidos:`),Zg(),Jc(357,`ul`)(358,`li`)(359,`code`),Tk(360,`small`),Zg(),Tk(361,`: o `),Jc(362,`code`),Tk(363,`po-badge`),Zg(),Tk(364,` fica do tamanho padrão, com 8px de altura.;`),Zg(),Jc(365,`li`)(366,`code`),Tk(367,`medium`),Zg(),Tk(368,`: o `),Jc(369,`code`),Tk(370,`po-badge`),Zg(),Tk(371,` fica do tamanho padrão, com 16px de altura.;`),Zg(),Jc(372,`li`)(373,`code`),Tk(374,`large`),Zg(),Tk(375,`: o `),Jc(376,`code`),Tk(377,`po-badge`),Zg(),Tk(378,` fica do tamanho padrão, com 24px de altura.;`),Zg()()()(),Jc(379,`tr`,13)(380,`td`,14)(381,`div`,15)(382,`span`,16),Tk(383,` p-status`),_u(384,`br`),Zg()()(),Jc(385,`td`,17)(386,`code`,72),Tk(387,`PoBadgeStatus`),Zg()(),Jc(388,`td`,19),Tk(389,`-`),Zg(),Jc(390,`td`,20)(391,`p`),Tk(392,`Define o estado do `),Jc(393,`code`),Tk(394,`po-badge`),Zg()(),Jc(395,`p`),Tk(396,`Valores válidos:`),Zg(),Jc(397,`ul`)(398,`li`)(399,`code`),Tk(400,`positive`),Zg(),Tk(401,`: Define a cor do `),Jc(402,`code`),Tk(403,`po-badge`),Zg(),Tk(404,` com a cor de feedback positivo.;`),Zg(),Jc(405,`li`)(406,`code`),Tk(407,`negative`),Zg(),Tk(408,`: Define a cor do `),Jc(409,`code`),Tk(410,`po-badge`),Zg(),Tk(411,` com a cor de feedback negative.;`),Zg(),Jc(412,`li`)(413,`code`),Tk(414,`warning`),Zg(),Tk(415,`: Define a cor do `),Jc(416,`code`),Tk(417,`po-badge`),Zg(),Tk(418,` com a cor de feedback warning.;`),Zg(),Jc(419,`li`)(420,`code`),Tk(421,`disabled`),Zg(),Tk(422,`: Define a cor do `),Jc(423,`code`),Tk(424,`po-badge`),Zg(),Tk(425,` com a cor de feedback disabled;`),Zg()()()(),Jc(426,`tr`,13)(427,`td`,14)(428,`div`,15)(429,`span`,16),Tk(430,` p-value`),_u(431,`br`),Zg()()(),Jc(432,`td`,17)(433,`code`,73),Tk(434,`number`),Zg()(),Jc(435,`td`,19),Tk(436,`-`),Zg(),Jc(437,`td`,20)(438,`p`),Tk(439,`Número exibido no componente, caso o mesmo seja maior que 9 o valor exibido será 9+.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Te(i,F){if(i&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-badge-basic-view`)(2,`sample-po-badge-labs-view`)(3,`sample-po-badge-message-view`),Zg()}if(i&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Le=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Badge`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Te,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-badge-doc`),Zg()()()),l&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ce,ue,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[WV.forChild(Le),WV]})}return i})();var ot=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,Ce]})}return i})();export{ot as DocPoBadgeModule};