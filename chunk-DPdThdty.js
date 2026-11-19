import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Ci as UO,F as Joe,G as Nf,Ii as WL,Ir as Kb,It as bae,Jt as db,K as Nl,L as Koe,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,ki as V_,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,sr as BO,tt as R4,ua as ge,uo as xk,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ve=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(p,i){p&1&&vu(0,`po-tag`,0)},dependencies:[Ss],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-tag-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tag-basic/sample-po-tag-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tag-basic/sample-po-tag-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tag Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-tag p-value="PO Tag"> </po-tag>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-tag-basic`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();function Fe(a,c){if(a&1){let l=YO();Qc(0,`po-select`,14),z0(),Kb(`ngModelChange`,function(i){B_(l);let g=ek();return Tk(g.icon,i)||(g.icon=i),U_(i)}),Kg()}if(a&2){let l=ek();Yb(`ngModel`,l.icon),Rb(`p-options`,l.iconList),W0()}}function Ae(a,c){if(a&1){let l=YO();Qc(0,`po-switch`,15),z0(),Kb(`ngModelChange`,function(i){B_(l);let g=ek();return Tk(g.icon,i)||(g.icon=i),U_(i)}),Kg()}if(a&2){let l=ek();Yb(`ngModel`,l.icon),W0()}}var he=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:db.Horizontal},{label:`Vertical`,value:db.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:Nl.Info},{label:`Danger`,value:Nl.Danger},{label:`Success`,value:Nl.Success},{label:`Warning`,value:Nl.Warning},{label:`Neutral`,value:Nl.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let p=[...this.propertiesOptions];l.includes(`removable`)?(p[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=p):this.propertiesOptions=p.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let g=YO();Qc(0,`po-tag`,1),vt(`p-click`,function(){return i.changeEvent(`p-click`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Kg(),vu(4,`po-divider`),Qc(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.label,d)||(i.label=d),U_(d)}),Kg(),Qc(9,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.value,d)||(i.value=d),U_(d)}),Kg()(),Qc(10,`div`,2)(11,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.color,d)||(i.color=d),U_(d)}),Kg(),Qc(12,`po-input`,7),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.textColor,d)||(i.textColor=d),U_(d)}),Kg(),FO(13,Fe,1,2,`po-select`,8),Qc(14,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.properties,d)||(i.properties=d),U_(d)}),vt(`p-change`,function(d){return i.propertiesChange(d)}),Kg(),FO(15,Ae,1,1,`po-switch`,10),Kg(),Qc(16,`div`,2)(17,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.orientation,d)||(i.orientation=d),U_(d)}),Kg(),Qc(18,`po-radio-group`,12),z0(),Kb(`ngModelChange`,function(d){return B_(g),Tk(i.type,d)||(i.type=d),U_(d)}),Kg()(),Qc(19,`div`,2)(20,`po-button`,13),vt(`p-click`,function(){return i.restore()}),Kg()()()}p&2&&(Rb(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),wg(3),Rb(`p-value`,i.event),wg(5),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.value),W0(),wg(2),Yb(`ngModel`,i.color),W0(),wg(),Yb(`ngModel`,i.textColor),W0(),wg(),VO(i.type?-1:13),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),VO(i.type?15:-1),wg(2),Yb(`ngModel`,i.orientation),Rb(`p-options`,i.orientationOptions),W0(),wg(),Yb(`ngModel`,i.type),Rb(`p-options`,i.typeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,R4,Ss,Joe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:33,vars:6,consts:[[`id`,`sample-po-tag-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tag-labs/sample-po-tag-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tag-labs/sample-po-tag-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-tag-labs/sample-po-tag-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tag Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styleUrls: ['./sample-po-tag-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-tag-labs/sample-po-tag-labs.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),Kg()()()()()(),Qc(30,`div`,15),vu(31,`sample-po-tag-labs`),Kg(),vu(32,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();function ze(a,c){if(a&1&&vu(0,`po-tag`,12),a&2){let l=c.$implicit;Rb(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function qe(a,c){if(a&1&&(Qc(0,`po-widget`,15)(1,`div`,3),vu(2,`po-info`,16)(3,`po-tag`,17),Kg()()),a&2){let l=c.$implicit;wg(2),Rb(`p-label`,l.label)(`p-value`,l.value),wg(),Rb(`p-type`,l.type)(`p-value`,l.text)}}function We(a,c){if(a&1&&(Qc(0,`po-tab`,14),UO(1,qe,4,4,`po-widget`,15,BO),Kg()),a&2){let l=c.$implicit;Rb(`p-label`,Nk(l.month)),wg(),HO(l.details)}}var Te=(()=>{class a{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),vu(5,`po-avatar`,5),Kg(),Qc(6,`div`,6)(7,`div`,7),vu(8,`po-info`,8)(9,`po-tag`,9),Kg(),Qc(10,`div`,7),vu(11,`po-info`,10),Kg()()()(),Qc(12,`po-widget`,11)(13,`div`,3),UO(14,ze,1,3,`po-tag`,12,BO),Kg()()(),Qc(16,`po-widget`,13)(17,`po-tabs`),UO(18,We,3,2,`po-tab`,14,BO),Kg()()()),p&2&&(wg(5),Rb(`p-src`,xk(`assets/graphics/`,i.userData.photo)),wg(3),Rb(`p-value`,i.userData.name),wg(3),Rb(`p-value`,i.userData.email),wg(3),HO(i.investiments),wg(4),HO(i.items))},dependencies:[c4,Ss,Joe,Mze,tre,are,bae],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:38,vars:6,consts:[[`id`,`sample-po-tag-bank-account`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tag - Bank Account`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` userData.photo `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` item.month `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),Kg()()()(),Qc(28,`po-tab`,9)(29,`div`)(30,`label`,6),Sk(31,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),Kg(),Qc(32,`div`,10)(33,`pre`,11),Sk(34,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),Kg()()()()()(),Qc(35,`div`,12),vu(36,`sample-po-tag-bank-account`),Kg(),vu(37,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Re,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Te],encapsulation:2,changeDetection:1})}return a})();var Y=(a,c)=>c.color;var $e=(a,c)=>c.name;function je(a,c){if(a&1&&vu(0,`po-tag`,3),a&2){let l=c.$implicit;Rb(`p-color`,l.color)(`p-value`,l.label)}}function Ge(a,c){if(a&1&&vu(0,`po-tag`,5),a&2){let l=c.$implicit;Rb(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function Ue(a,c){if(a&1&&vu(0,`po-tag`,7),a&2){let l=c.$implicit;Rb(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function Je(a,c){if(a&1&&vu(0,`po-tag`,10),a&2){let l=c.$implicit;Rb(`p-color`,l.color)(`p-value`,l.label)}}function Qe(a,c){if(a&1&&(Qc(0,`po-tab`,9)(1,`div`,2),UO(2,Je,1,2,`po-tag`,10,Y),Kg()()),a&2){let l=c.$implicit;Rb(`p-label`,l.name),wg(2),HO(l.tags)}}var we=(()=>{class a{captionTags=Array.from({length:35},(l,p)=>{let i=String(p+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),UO(3,je,1,2,`po-tag`,3,Y),Kg()(),Qc(5,`po-widget`,4)(6,`div`,2),UO(7,Ge,1,3,`po-tag`,5,Y),Kg()(),Qc(9,`po-widget`,6)(10,`div`,2),UO(11,Ue,1,3,`po-tag`,7,Y),Kg()(),Qc(13,`po-widget`,8)(14,`po-tabs`),UO(15,Qe,4,1,`po-tab`,9,$e),Kg()()()),p&2&&(wg(3),HO(i.captionTags),wg(4),HO(i.statusItems),wg(4),HO(i.categories),wg(4),HO(i.families))},dependencies:[Ss,Mze,tre,are,bae],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-tag-caption-tag-colors`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tag - Caption Tag Colors`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Caption Tag Colors">
  <po-widget class="po-md-12 po-mb-1" p-title="Paleta completa - 35 cores">
    <div class="po-row">
      @for (tag of captionTags; track tag.color) {
        <po-tag class="po-md-3 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Status de processos">
    <div class="po-row">
      @for (item of statusItems; track item.color) {
        <po-tag
          class="po-md-4 po-lg-3 po-mb-1"
          [p-color]="item.color"
          [p-label]="item.label"
          [p-value]="item.value"
          p-orientation="horizontal"
        >
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12" p-title="Categorias com icones">
    <div class="po-row">
      @for (cat of categories; track cat.color) {
        <po-tag class="po-md-4 po-lg-3 po-mb-1" [p-color]="cat.color" [p-icon]="cat.icon" [p-value]="cat.label">
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Familias de cores">
    <po-tabs>
      @for (family of families; track family.name) {
        <po-tab [p-label]="family.name">
          <div class="po-row">
            @for (tag of family.tags; track tag.color) {
              <po-tag class="po-md-4 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
            }
          </div>
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-caption-tag-colors',
  templateUrl: './sample-po-tag-caption-tag-colors.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagCaptionTagColorsComponent {
  captionTags = Array.from({ length: 35 }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return { label: \`Caption Tag \${index}\`, color: \`caption-tag-\${index}\` };
  });

  statusItems = [
    { label: 'Ativo', value: 'Em operacao', color: 'caption-tag-01' },
    { label: 'Pendente', value: 'Aguardando aprovacao', color: 'caption-tag-06' },
    { label: 'Em analise', value: 'Verificacao interna', color: 'caption-tag-11' },
    { label: 'Concluido', value: 'Finalizado com sucesso', color: 'caption-tag-16' },
    { label: 'Cancelado', value: 'Operacao cancelada', color: 'caption-tag-21' },
    { label: 'Expirado', value: 'Prazo excedido', color: 'caption-tag-26' },
    { label: 'Bloqueado', value: 'Acesso restrito', color: 'caption-tag-31' }
  ];

  categories = [
    { label: 'Financeiro', color: 'caption-tag-03', icon: 'an an-currency-circle-dollar' },
    { label: 'Recursos Humanos', color: 'caption-tag-08', icon: 'an an-users' },
    { label: 'Logistica', color: 'caption-tag-13', icon: 'an an-truck' },
    { label: 'Vendas', color: 'caption-tag-18', icon: 'an an-shopping-cart-simple' },
    { label: 'Suporte', color: 'caption-tag-23', icon: 'an an-headset' },
    { label: 'Marketing', color: 'caption-tag-28', icon: 'an an-megaphone-simple' },
    { label: 'TI', color: 'caption-tag-33', icon: 'an an-desktop-tower' }
  ];

  families = [
    {
      name: 'Familia 01-05',
      tags: [
        { label: 'caption-tag-01', color: 'caption-tag-01' },
        { label: 'caption-tag-02', color: 'caption-tag-02' },
        { label: 'caption-tag-03', color: 'caption-tag-03' },
        { label: 'caption-tag-04', color: 'caption-tag-04' },
        { label: 'caption-tag-05', color: 'caption-tag-05' }
      ]
    },
    {
      name: 'Familia 06-10',
      tags: [
        { label: 'caption-tag-06', color: 'caption-tag-06' },
        { label: 'caption-tag-07', color: 'caption-tag-07' },
        { label: 'caption-tag-08', color: 'caption-tag-08' },
        { label: 'caption-tag-09', color: 'caption-tag-09' },
        { label: 'caption-tag-10', color: 'caption-tag-10' }
      ]
    },
    {
      name: 'Familia 11-15',
      tags: [
        { label: 'caption-tag-11', color: 'caption-tag-11' },
        { label: 'caption-tag-12', color: 'caption-tag-12' },
        { label: 'caption-tag-13', color: 'caption-tag-13' },
        { label: 'caption-tag-14', color: 'caption-tag-14' },
        { label: 'caption-tag-15', color: 'caption-tag-15' }
      ]
    },
    {
      name: 'Familia 16-20',
      tags: [
        { label: 'caption-tag-16', color: 'caption-tag-16' },
        { label: 'caption-tag-17', color: 'caption-tag-17' },
        { label: 'caption-tag-18', color: 'caption-tag-18' },
        { label: 'caption-tag-19', color: 'caption-tag-19' },
        { label: 'caption-tag-20', color: 'caption-tag-20' }
      ]
    },
    {
      name: 'Familia 21-25',
      tags: [
        { label: 'caption-tag-21', color: 'caption-tag-21' },
        { label: 'caption-tag-22', color: 'caption-tag-22' },
        { label: 'caption-tag-23', color: 'caption-tag-23' },
        { label: 'caption-tag-24', color: 'caption-tag-24' },
        { label: 'caption-tag-25', color: 'caption-tag-25' }
      ]
    },
    {
      name: 'Familia 26-30',
      tags: [
        { label: 'caption-tag-26', color: 'caption-tag-26' },
        { label: 'caption-tag-27', color: 'caption-tag-27' },
        { label: 'caption-tag-28', color: 'caption-tag-28' },
        { label: 'caption-tag-29', color: 'caption-tag-29' },
        { label: 'caption-tag-30', color: 'caption-tag-30' }
      ]
    },
    {
      name: 'Familia 31-35',
      tags: [
        { label: 'caption-tag-31', color: 'caption-tag-31' },
        { label: 'caption-tag-32', color: 'caption-tag-32' },
        { label: 'caption-tag-33', color: 'caption-tag-33' },
        { label: 'caption-tag-34', color: 'caption-tag-34' },
        { label: 'caption-tag-35', color: 'caption-tag-35' }
      ]
    }
  ];
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-tag-caption-tag-colors`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ke,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-tag-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-color`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`id`,`prop-p-removable`,1,`docs-api-properties-row`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[`id`,`prop-p-text-color`,1,`docs-api-properties-row`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`id`,`interface-po-tag-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-tag-literals-remove`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-orientation`,1,`docs-api-class-name`],[`id`,`enum-po-tag-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-orientation-vertical`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-type`,1,`docs-api-class-name`],[`id`,`enum-po-tag-type-danger`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-type-info`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-type-success`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-type-warning`,1,`docs-api-properties-row`],[`id`,`enum-po-tag-type-neutral`,1,`docs-api-properties-row`]],template:function(p,i){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTagModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-tag`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoTagComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),Kg(),Qc(18,`p`),Sk(19,`Além disso, é possível definir uma ação que será executada tanto ao `),Qc(20,`em`),Sk(21,`click`),Kg(),Sk(22,` quanto através das teclas `),Qc(23,`em`),Sk(24,`enter/space`),Kg(),Sk(25,` enquanto navega
utilizando a tecla `),Qc(26,`em`),Sk(27,`tab`),Kg(),Sk(28,`.`),Kg(),Qc(29,`p`),Sk(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),Kg(),Qc(31,`h4`),Sk(32,`Tokens customizáveis`),Kg(),Qc(33,`p`),Sk(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(35,`blockquote`)(36,`p`),Sk(37,`Para maiores informações, acesse o guia `),Qc(38,`a`,6),Sk(39,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(40,`.`),Kg()(),Qc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),Sk(45,`Propriedade`),Kg(),Qc(46,`th`),Sk(47,`Descrição`),Kg(),Qc(48,`th`),Sk(49,`Valor Padrão`),Kg()()(),Qc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),Sk(54,`Default Values`),Kg()(),vu(55,`td`)(56,`td`),Kg(),Qc(57,`tr`)(58,`td`)(59,`code`),Sk(60,`--font-family`),Kg()(),Qc(61,`td`),Sk(62,`Família tipográfica usada`),Kg(),Qc(63,`td`)(64,`code`),Sk(65,`var(--font-family-theme)`),Kg()()(),Qc(66,`tr`)(67,`td`)(68,`code`),Sk(69,`--font-size`),Kg()(),Qc(70,`td`),Sk(71,`Tamanho da fonte`),Kg(),Qc(72,`td`)(73,`code`),Sk(74,`var(--font-size-sm)`),Kg()()(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--line-height`),Kg()(),Qc(79,`td`),Sk(80,`Tamanho da label`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(---line-height-sm)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--border-radius`),Kg()(),Qc(88,`td`),Sk(89,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--border-radius-pill)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--gap`),Kg()(),Qc(97,`td`),Sk(98,`Espaçamento entre o label e o value`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--spacing-xs)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`strong`),Sk(105,`Neutral`),Kg()(),vu(106,`td`)(107,`td`),Kg(),Qc(108,`tr`)(109,`td`)(110,`code`),Sk(111,`--color-neutral`),Kg()(),Qc(112,`td`),Sk(113,`Cor principal no estado neutral`),Kg(),Qc(114,`td`)(115,`code`),Sk(116,`var(--color-neutral-light-10)`),Kg()()(),Qc(117,`tr`)(118,`td`)(119,`code`),Sk(120,`--text-color-positive`),Kg()(),Qc(121,`td`),Sk(122,`Cor do texto no estado neutral`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--color-neutral-dark-80)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`strong`),Sk(129,`Positive`),Kg()(),vu(130,`td`)(131,`td`),Kg(),Qc(132,`tr`)(133,`td`)(134,`code`),Sk(135,`--color-positive`),Kg()(),Qc(136,`td`),Sk(137,`Cor principal no estado positive`),Kg(),Qc(138,`td`)(139,`code`),Sk(140,`var(--color-feedback-positive-lightest)`),Kg()()(),Qc(141,`tr`)(142,`td`)(143,`code`),Sk(144,`--text-color-positive`),Kg()(),Qc(145,`td`),Sk(146,`Cor do texto no estado positive`),Kg(),Qc(147,`td`)(148,`code`),Sk(149,`var(--color-feedback-positive-dark)`),Kg()()(),Qc(150,`tr`)(151,`td`)(152,`strong`),Sk(153,`Negative`),Kg()(),vu(154,`td`)(155,`td`),Kg(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--color-negative`),Kg()(),Qc(160,`td`),Sk(161,`Cor principal no estado danger`),Kg(),Qc(162,`td`)(163,`code`),Sk(164,`var(--color-feedback-negative-lightest)`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`code`),Sk(168,`--text-color-negative`),Kg()(),Qc(169,`td`),Sk(170,`Cor do texto no estado danger`),Kg(),Qc(171,`td`)(172,`code`),Sk(173,`var(--color-feedback-negative-darker)`),Kg()()(),Qc(174,`tr`)(175,`td`)(176,`strong`),Sk(177,`Warning`),Kg()(),vu(178,`td`)(179,`td`),Kg(),Qc(180,`tr`)(181,`td`)(182,`code`),Sk(183,`--color-tag-warning`),Kg()(),Qc(184,`td`),Sk(185,`Cor principal no estado warning`),Kg(),Qc(186,`td`)(187,`code`),Sk(188,`var(--color-feedback-warning-lightest)`),Kg()()(),Qc(189,`tr`)(190,`td`)(191,`code`),Sk(192,`--text-color-warning`),Kg()(),Qc(193,`td`),Sk(194,`Cor do texto no estado warning`),Kg(),Qc(195,`td`)(196,`code`),Sk(197,`var(--color-feedback-warning-darkest)`),Kg()()(),Qc(198,`tr`)(199,`td`)(200,`strong`),Sk(201,`Info`),Kg()(),vu(202,`td`)(203,`td`),Kg(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--color-info`),Kg()(),Qc(208,`td`),Sk(209,`Cor principal no estado info`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-feedback-info-lightest)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`code`),Sk(216,`--text-color-info`),Kg()(),Qc(217,`td`),Sk(218,`Cor do texto no estado info`),Kg(),Qc(219,`td`)(220,`code`),Sk(221,`var(--color-feedback-info-dark)`),Kg()()(),Qc(222,`tr`)(223,`td`)(224,`strong`),Sk(225,`Removable`),Kg()(),vu(226,`td`)(227,`td`),Kg(),Qc(228,`tr`)(229,`td`)(230,`code`),Sk(231,`--color`),Kg()(),Qc(232,`td`),Sk(233,`Cor principal quando removable`),Kg(),Qc(234,`td`)(235,`code`),Sk(236,`var(--color-brand-01-lightest)`),Kg()()(),Qc(237,`tr`)(238,`td`)(239,`code`),Sk(240,`--border-color`),Kg()(),Qc(241,`td`),Sk(242,`Cor de borda quando removable \xA0`),Kg(),Qc(243,`td`)(244,`code`),Sk(245,`var(--color-brand-01-lighter)`),Kg()()(),Qc(246,`tr`)(247,`td`)(248,`code`),Sk(249,`--color-icon`),Kg()(),Qc(250,`td`),Sk(251,`Cor do ícone quando removable \xA0`),Kg(),Qc(252,`td`)(253,`code`),Sk(254,`var(--color-action-default)`),Kg()()(),Qc(255,`tr`)(256,`td`)(257,`code`),Sk(258,`--text-color`),Kg()(),Qc(259,`td`),Sk(260,`Cor do texto quando removable \xA0`),Kg(),Qc(261,`td`)(262,`code`),Sk(263,`var(--color-neutral-dark-80)`),Kg()()(),Qc(264,`tr`)(265,`td`)(266,`code`),Sk(267,`--color-hover`),Kg()(),Qc(268,`td`),Sk(269,`Cor do hover no estado removable \xA0`),Kg(),Qc(270,`td`)(271,`code`),Sk(272,`var(--color-brand-01-lighter)`),Kg()()(),Qc(273,`tr`)(274,`td`)(275,`strong`),Sk(276,`Focused`),Kg()(),vu(277,`td`)(278,`td`),Kg(),Qc(279,`tr`)(280,`td`)(281,`code`),Sk(282,`--outline-color-focused`),Kg()(),Qc(283,`td`),Sk(284,`Cor do outline do estado de focus`),Kg(),Qc(285,`td`)(286,`code`),Sk(287,`var(--color-action-focus)`),Kg()()(),Qc(288,`tr`)(289,`td`)(290,`strong`),Sk(291,`Disabled`),Kg()(),vu(292,`td`)(293,`td`),Kg(),Qc(294,`tr`)(295,`td`)(296,`code`),Sk(297,`--color-disabled`),Kg()(),Qc(298,`td`),Sk(299,`Cor principal no estado disabled`),Kg(),Qc(300,`td`)(301,`code`),Sk(302,`var(--color-neutral-light-20)`),Kg()()(),Qc(303,`tr`)(304,`td`)(305,`code`),Sk(306,`--border-color-disabled`),Kg()(),Qc(307,`td`),Sk(308,`Cor da borda no estado disabled \xA0`),Kg(),Qc(309,`td`)(310,`code`),Sk(311,`var(--color-action-disabled)`),Kg()()(),Qc(312,`tr`)(313,`td`)(314,`code`),Sk(315,`--color-icon-disabled`),Kg()(),Qc(316,`td`),Sk(317,`Cor do icone no estado disabled \xA0`),Kg(),Qc(318,`td`)(319,`code`),Sk(320,`var(--color-action-disabled)`),Kg()()(),Qc(321,`tr`)(322,`td`)(323,`code`),Sk(324,`--text-color-disabled`),Kg()(),Qc(325,`td`),Sk(326,`Cor do texto no estado disabled \xA0`),Kg(),Qc(327,`td`)(328,`code`),Sk(329,`var(--color-neutral-mid-60)`),Kg()()()()()(),Qc(330,`div`,7)(331,`h4`,8),Sk(332,`Seletor`),Kg(),Qc(333,`pre`,9),Sk(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),Kg()(),Qc(335,`h4`,10),Sk(336,`Propriedades`),Kg(),Qc(337,`table`,11)(338,`tr`,12)(339,`th`,13),Sk(340,`Nome`),Kg(),Qc(341,`th`,13),Sk(342,`Tipo`),Kg(),Qc(343,`th`,13),Sk(344,`Padrão`),Kg(),Qc(345,`th`,13),Sk(346,`Descrição`),Kg()(),Qc(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),Sk(351,` (p-click)`),vu(352,`br`),Kg()()(),Qc(353,`td`,18)(354,`code`,19),Sk(355,`EventEmitter`),Kg()(),Qc(356,`td`,20),Sk(357,`-`),Kg(),Qc(358,`td`,21)(359,`em`)(360,`strong`),Sk(361,`(opcional)`),Kg()(),Qc(362,`p`),Sk(363,`Ação que será executada ao clicar sobre o `),Qc(364,`code`),Sk(365,`po-tag`),Kg(),Sk(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),Kg(),Qc(367,`p`),Sk(368,`O evento de click só funciona se a tag não for removível.`),Kg()()(),Qc(369,`tr`,22)(370,`td`,15)(371,`div`,23)(372,`span`,24),Sk(373,` p-color`),vu(374,`br`),Kg()()(),Qc(375,`td`,18)(376,`code`,25),Sk(377,`string`),Kg()(),Qc(378,`td`,20),Sk(379,`-`),Kg(),Qc(380,`td`,21)(381,`em`)(382,`strong`),Sk(383,`(opcional)`),Kg()(),Qc(384,`p`),Sk(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),Kg(),Qc(386,`ul`)(387,`li`),Sk(388,`Hexadeximal, por exemplo `),Qc(389,`code`),Sk(390,`#c64840`),Kg(),Sk(391,`;`),Kg(),Qc(392,`li`),Sk(393,`RGB, como `),Qc(394,`code`),Sk(395,`rgb(0, 0, 165)`),Kg(),Sk(396,`;`),Kg(),Qc(397,`li`),Sk(398,`O nome da cor, por exemplo `),Qc(399,`code`),Sk(400,`blue`),Kg(),Sk(401,`;`),Kg(),Qc(402,`li`),Sk(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Qc(404,`ul`)(405,`li`),vu(406,`span`,26),Qc(407,`code`),Sk(408,`color-01`),Kg()(),Qc(409,`li`),vu(410,`span`,27),Qc(411,`code`),Sk(412,`color-02`),Kg()(),Qc(413,`li`),vu(414,`span`,28),Qc(415,`code`),Sk(416,`color-03`),Kg()(),Qc(417,`li`),vu(418,`span`,29),Qc(419,`code`),Sk(420,`color-04`),Kg()(),Qc(421,`li`),vu(422,`span`,30),Qc(423,`code`),Sk(424,`color-05`),Kg()(),Qc(425,`li`),vu(426,`span`,31),Qc(427,`code`),Sk(428,`color-06`),Kg()(),Qc(429,`li`),vu(430,`span`,32),Qc(431,`code`),Sk(432,`color-07`),Kg()(),Qc(433,`li`),vu(434,`span`,33),Qc(435,`code`),Sk(436,`color-08`),Kg()(),Qc(437,`li`),vu(438,`span`,34),Qc(439,`code`),Sk(440,`color-09`),Kg()(),Qc(441,`li`),vu(442,`span`,35),Qc(443,`code`),Sk(444,`color-10`),Kg()(),Qc(445,`li`),vu(446,`span`,36),Qc(447,`code`),Sk(448,`color-11`),Kg()(),Qc(449,`li`),vu(450,`span`,37),Qc(451,`code`),Sk(452,`color-12`),Kg()()()()(),Qc(453,`blockquote`)(454,`p`),Sk(455,`Também é possível utilizar as 35 cores da paleta `),Qc(456,`strong`),Sk(457,`Caption Tag Colors`),Kg(),Sk(458,`:`),Kg()(),Qc(459,`ul`)(460,`li`),vu(461,`span`,38),Qc(462,`code`),Sk(463,`caption-tag-01`),Kg(),vu(464,`span`,39),Qc(465,`code`),Sk(466,`caption-tag-02`),Kg(),vu(467,`span`,40),Qc(468,`code`),Sk(469,`caption-tag-03`),Kg(),vu(470,`span`,41),Qc(471,`code`),Sk(472,`caption-tag-04`),Kg(),vu(473,`span`,42),Qc(474,`code`),Sk(475,`caption-tag-05`),Kg()(),Qc(476,`li`),vu(477,`span`,43),Qc(478,`code`),Sk(479,`caption-tag-06`),Kg(),vu(480,`span`,44),Qc(481,`code`),Sk(482,`caption-tag-07`),Kg(),vu(483,`span`,45),Qc(484,`code`),Sk(485,`caption-tag-08`),Kg(),vu(486,`span`,46),Qc(487,`code`),Sk(488,`caption-tag-09`),Kg(),vu(489,`span`,47),Qc(490,`code`),Sk(491,`caption-tag-10`),Kg()(),Qc(492,`li`),vu(493,`span`,48),Qc(494,`code`),Sk(495,`caption-tag-11`),Kg(),vu(496,`span`,49),Qc(497,`code`),Sk(498,`caption-tag-12`),Kg(),vu(499,`span`,50),Qc(500,`code`),Sk(501,`caption-tag-13`),Kg(),vu(502,`span`,51),Qc(503,`code`),Sk(504,`caption-tag-14`),Kg(),vu(505,`span`,52),Qc(506,`code`),Sk(507,`caption-tag-15`),Kg()(),Qc(508,`li`),vu(509,`span`,53),Qc(510,`code`),Sk(511,`caption-tag-16`),Kg(),vu(512,`span`,54),Qc(513,`code`),Sk(514,`caption-tag-17`),Kg(),vu(515,`span`,55),Qc(516,`code`),Sk(517,`caption-tag-18`),Kg(),vu(518,`span`,56),Qc(519,`code`),Sk(520,`caption-tag-19`),Kg(),vu(521,`span`,57),Qc(522,`code`),Sk(523,`caption-tag-20`),Kg()(),Qc(524,`li`),vu(525,`span`,58),Qc(526,`code`),Sk(527,`caption-tag-21`),Kg(),vu(528,`span`,59),Qc(529,`code`),Sk(530,`caption-tag-22`),Kg(),vu(531,`span`,60),Qc(532,`code`),Sk(533,`caption-tag-23`),Kg(),vu(534,`span`,61),Qc(535,`code`),Sk(536,`caption-tag-24`),Kg(),vu(537,`span`,62),Qc(538,`code`),Sk(539,`caption-tag-25`),Kg()(),Qc(540,`li`),vu(541,`span`,63),Qc(542,`code`),Sk(543,`caption-tag-26`),Kg(),vu(544,`span`,64),Qc(545,`code`),Sk(546,`caption-tag-27`),Kg(),vu(547,`span`,65),Qc(548,`code`),Sk(549,`caption-tag-28`),Kg(),vu(550,`span`,66),Qc(551,`code`),Sk(552,`caption-tag-29`),Kg(),vu(553,`span`,67),Qc(554,`code`),Sk(555,`caption-tag-30`),Kg()(),Qc(556,`li`),vu(557,`span`,68),Qc(558,`code`),Sk(559,`caption-tag-31`),Kg(),vu(560,`span`,69),Qc(561,`code`),Sk(562,`caption-tag-32`),Kg(),vu(563,`span`,70),Qc(564,`code`),Sk(565,`caption-tag-33`),Kg(),vu(566,`span`,71),Qc(567,`code`),Sk(568,`caption-tag-34`),Kg(),vu(569,`span`,72),Qc(570,`code`),Sk(571,`caption-tag-35`),Kg()()(),Qc(572,`p`),Sk(573,`Exemplo de uso:`),Kg(),Qc(574,`pre`)(575,`code`),Sk(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),Kg()(),Qc(577,`ul`)(578,`li`),Sk(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),Kg(),Qc(580,`li`),Sk(581,`Para as cores legacy (`),Qc(582,`code`),Sk(583,`color-01`),Kg(),Sk(584,` a `),Qc(585,`code`),Sk(586,`color-12`),Kg(),Sk(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),Kg(),Qc(588,`li`),Sk(589,`Para as cores `),Qc(590,`strong`),Sk(591,`Caption Tag Colors`),Kg(),Sk(592,` (`),Qc(593,`code`),Sk(594,`caption-tag-01`),Kg(),Sk(595,` a `),Qc(596,`code`),Sk(597,`caption-tag-35`),Kg(),Sk(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),Qc(599,`code`),Sk(600,`p-text-color`),Kg(),Sk(601,`.`),Kg()(),Qc(602,`blockquote`)(603,`p`)(604,`strong`),Sk(605,`Atenção:`),Kg(),Sk(606,` A propriedade `),Qc(607,`code`),Sk(608,`p-type`),Kg(),Sk(609,` sobrepõe esta definição.`),Kg()()()(),Qc(610,`tr`,73)(611,`td`,15)(612,`div`,23)(613,`span`,24),Sk(614,` p-disabled`),vu(615,`br`),Kg()()(),Qc(616,`td`,18)(617,`code`,74),Sk(618,`boolean`),Kg()(),Qc(619,`td`,20)(620,`p`)(621,`code`),Sk(622,`false`),Kg()()(),Qc(623,`td`,21)(624,`em`)(625,`strong`),Sk(626,`(opcional)`),Kg()(),Qc(627,`p`),Sk(628,`Desabilita o `),Qc(629,`code`),Sk(630,`po-tag`),Kg(),Sk(631,` e não permite que o usuário interaja com o mesmo.`),Kg(),Qc(632,`blockquote`)(633,`p`),Sk(634,`A propriedade `),Qc(635,`code`),Sk(636,`p-disabled`),Kg(),Sk(637,` somente terá efeito caso a propriedade `),Qc(638,`code`),Sk(639,`p-removable`),Kg(),Sk(640,` esteja definida como `),Qc(641,`code`),Sk(642,`true`),Kg(),Sk(643,`.`),Kg()()()(),Qc(644,`tr`,75)(645,`td`,15)(646,`div`,23)(647,`span`,24),Sk(648,` p-icon`),vu(649,`br`),Kg()()(),Qc(650,`td`,18)(651,`code`,25),Sk(652,`string `),Kg(),Qc(653,`code`,74),Sk(654,` boolean `),Kg(),Qc(655,`code`,76),Sk(656,` TemplateRef<void>`),Kg()(),Qc(657,`td`,20)(658,`p`)(659,`code`),Sk(660,`false`),Kg()()(),Qc(661,`td`,21)(662,`em`)(663,`strong`),Sk(664,`(opcional)`),Kg()(),Qc(665,`p`),Sk(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),Qc(667,`em`),Sk(668,`tag`),Kg(),Sk(669,`.`),Kg(),Qc(670,`p`),Sk(671,`Quando `),Qc(672,`code`),Sk(673,`p-type`),Kg(),Sk(674,` estiver definida, basta informar um valor igual a `),Qc(675,`code`),Sk(676,`true`),Kg(),Sk(677,` para que o ícone seja exibido conforme descrições abaixo:`),Kg(),Qc(678,`ul`)(679,`li`),vu(680,`span`,77),Sk(681,` - `),Qc(682,`code`),Sk(683,`success`),Kg()(),Qc(684,`li`),vu(685,`span`,78),Sk(686,` - `),Qc(687,`code`),Sk(688,`warning`),Kg()(),Qc(689,`li`),vu(690,`span`,79),Sk(691,` - `),Qc(692,`code`),Sk(693,`danger`),Kg()(),Qc(694,`li`),vu(695,`span`,80),Sk(696,` - `),Qc(697,`code`),Sk(698,`info`),Kg()()(),Qc(699,`p`),Sk(700,`Também É possível usar qualquer um dos ícones da `),Qc(701,`a`,81),Sk(702,`Biblioteca de ícones`),Kg(),Sk(703,`. conforme exemplo abaixo:`),Kg(),Qc(704,`pre`)(705,`code`),Sk(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),Kg()(),Qc(707,`p`),Sk(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(709,`em`),Sk(710,`Font Awesome`),Kg(),Sk(711,`, da seguinte forma:`),Kg(),Qc(712,`pre`)(713,`code`),Sk(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),Kg()(),Qc(715,`p`),Sk(716,`Outra opção seria a customização do ícone através do `),Qc(717,`code`),Sk(718,`TemplateRef`),Kg(),Sk(719,`, conforme exemplo abaixo:`),Kg(),Qc(720,`pre`)(721,`code`),Sk(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(723,`blockquote`)(724,`p`),Sk(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(726,`code`),Sk(727,`font-size: inherit`),Kg(),Sk(728,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(729,`tr`,82)(730,`td`,15)(731,`div`,23)(732,`span`,24),Sk(733,` p-label`),vu(734,`br`),Kg()()(),Qc(735,`td`,18)(736,`code`,25),Sk(737,`string`),Kg()(),Qc(738,`td`,20),Sk(739,`-`),Kg(),Qc(740,`td`,21)(741,`em`)(742,`strong`),Sk(743,`(opcional)`),Kg()(),Qc(744,`p`),Sk(745,`Define uma legenda que será exibida acima ou ao lado da `),Qc(746,`em`),Sk(747,`tag`),Kg(),Sk(748,`, de acordo com a `),Qc(749,`code`),Sk(750,`p-orientation`),Kg(),Sk(751,`.`),Kg()()(),Qc(752,`tr`,83)(753,`td`,15)(754,`div`,23)(755,`span`,24),Sk(756,` p-literals`),vu(757,`br`),Kg()()(),Qc(758,`td`,18)(759,`code`,84),Sk(760,`PoTagLiterals`),Kg()(),Qc(761,`td`,20),Sk(762,`-`),Kg(),Qc(763,`td`,21)(764,`em`)(765,`strong`),Sk(766,`(opcional)`),Kg()(),Qc(767,`p`),Sk(768,`Objeto com as literais usadas no `),Qc(769,`code`),Sk(770,`po-tag`),Kg(),Sk(771,`.`),Kg(),Qc(772,`p`),Sk(773,`Para utilizar, basta passar a literal customizada:`),Kg(),Qc(774,`pre`)(775,`code`),Sk(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),Kg()(),Qc(777,`p`),Sk(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Qc(779,`pre`)(780,`code`),Sk(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),Kg()(),Qc(782,`blockquote`)(783,`p`),Sk(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(785,`a`,85)(786,`code`),Sk(787,`PoI18nService`),Kg()(),Sk(788,` ou do browser.`),Kg()()()(),Qc(789,`tr`,86)(790,`td`,15)(791,`div`,23)(792,`span`,24),Sk(793,` p-orientation`),vu(794,`br`),Kg()()(),Qc(795,`td`,18)(796,`code`,87),Sk(797,`PoTagOrientation`),Kg()(),Qc(798,`td`,20)(799,`p`)(800,`code`),Sk(801,`vertical`),Kg()()(),Qc(802,`td`,21)(803,`em`)(804,`strong`),Sk(805,`(opcional)`),Kg()(),Qc(806,`p`),Sk(807,`Define o `),Qc(808,`em`),Sk(809,`layout`),Kg(),Sk(810,` de exibição.`),Kg()()(),Qc(811,`tr`,88)(812,`td`,15)(813,`div`,23)(814,`span`,24),Sk(815,` p-removable`),vu(816,`br`),Kg()()(),Qc(817,`td`,18)(818,`code`,74),Sk(819,`boolean`),Kg()(),Qc(820,`td`,20)(821,`p`)(822,`code`),Sk(823,`false`),Kg()()(),Qc(824,`td`,21)(825,`em`)(826,`strong`),Sk(827,`(opcional)`),Kg()(),Qc(828,`p`),Sk(829,`Habilita a opção de remover a tag`),Kg()()(),Qc(830,`tr`,89)(831,`td`,15)(832,`div`,16)(833,`span`,17),Sk(834,` (p-close)`),vu(835,`br`),Kg()()(),Qc(836,`td`,18)(837,`code`,19),Sk(838,`EventEmitter`),Kg()(),Qc(839,`td`,20),Sk(840,`-`),Kg(),Qc(841,`td`,21)(842,`em`)(843,`strong`),Sk(844,`(opcional)`),Kg()(),Qc(845,`p`),Sk(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),Qc(847,`code`),Sk(848,`po-tag`),Kg()()()(),Qc(849,`tr`,90)(850,`td`,15)(851,`div`,23)(852,`span`,24),Sk(853,` p-text-color`),vu(854,`br`),Kg()()(),Qc(855,`td`,18)(856,`code`,25),Sk(857,`string`),Kg()(),Qc(858,`td`,20),Sk(859,`-`),Kg(),Qc(860,`td`,21)(861,`em`)(862,`strong`),Sk(863,`(opcional)`),Kg()(),Qc(864,`p`),Sk(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Kg(),Qc(866,`ul`)(867,`li`)(868,`p`),Sk(869,`Hexadeximal, por exemplo `),Qc(870,`code`),Sk(871,`#c64840`),Kg(),Sk(872,`;`),Kg()(),Qc(873,`li`)(874,`p`),Sk(875,`RGB, como `),Qc(876,`code`),Sk(877,`rgb(0, 0, 165)`),Kg(),Sk(878,`;`),Kg()(),Qc(879,`li`)(880,`p`),Sk(881,`O nome da cor, por exemplo `),Qc(882,`code`),Sk(883,`blue`),Kg(),Sk(884,`;`),Kg()(),Qc(885,`li`)(886,`p`),Sk(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Kg(),Qc(888,`ul`)(889,`li`),vu(890,`span`,26),Qc(891,`code`),Sk(892,`color-01`),Kg()(),Qc(893,`li`),vu(894,`span`,27),Qc(895,`code`),Sk(896,`color-02`),Kg()(),Qc(897,`li`),vu(898,`span`,28),Qc(899,`code`),Sk(900,`color-03`),Kg()(),Qc(901,`li`),vu(902,`span`,29),Qc(903,`code`),Sk(904,`color-04`),Kg()(),Qc(905,`li`),vu(906,`span`,30),Qc(907,`code`),Sk(908,`color-05`),Kg()(),Qc(909,`li`),vu(910,`span`,31),Qc(911,`code`),Sk(912,`color-06`),Kg()(),Qc(913,`li`),vu(914,`span`,32),Qc(915,`code`),Sk(916,`color-07`),Kg()(),Qc(917,`li`),vu(918,`span`,33),Qc(919,`code`),Sk(920,`color-08`),Kg()(),Qc(921,`li`),vu(922,`span`,34),Qc(923,`code`),Sk(924,`color-09`),Kg()(),Qc(925,`li`),vu(926,`span`,35),Qc(927,`code`),Sk(928,`color-10`),Kg()(),Qc(929,`li`),vu(930,`span`,36),Qc(931,`code`),Sk(932,`color-11`),Kg()(),Qc(933,`li`),vu(934,`span`,37),Qc(935,`code`),Sk(936,`color-12`),Kg()()()(),Qc(937,`li`)(938,`p`),Sk(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),Kg()()(),Qc(940,`blockquote`)(941,`p`)(942,`strong`),Sk(943,`Atenção:`),Kg(),Sk(944,` A propriedade `),Qc(945,`code`),Sk(946,`p-type`),Kg(),Sk(947,` sobrepõe esta definição.`),Kg()(),Qc(948,`blockquote`)(949,`p`)(950,`strong`),Sk(951,`Atenção:`),Kg(),Sk(952,` As cores da paleta `),Qc(953,`strong`),Sk(954,`Caption Tag Colors`),Kg(),Sk(955,` (`),Qc(956,`code`),Sk(957,`caption-tag-01`),Kg(),Sk(958,` a `),Qc(959,`code`),Sk(960,`caption-tag-35`),Kg(),Sk(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),Kg()()()(),Qc(962,`tr`,91)(963,`td`,15)(964,`div`,23)(965,`span`,24),Sk(966,` p-type`),vu(967,`br`),Kg()()(),Qc(968,`td`,18)(969,`code`,92),Sk(970,`PoTagType`),Kg()(),Qc(971,`td`,20)(972,`p`)(973,`code`),Sk(974,`info`),Kg()()(),Qc(975,`td`,21)(976,`em`)(977,`strong`),Sk(978,`(opcional)`),Kg()(),Qc(979,`p`),Sk(980,`Define o tipo da `),Qc(981,`em`),Sk(982,`tag`),Kg(),Sk(983,`.`),Kg(),Qc(984,`p`),Sk(985,`Valores válidos:`),Kg(),Qc(986,`ul`)(987,`li`)(988,`code`),Sk(989,`success`),Kg(),Sk(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Kg(),Qc(991,`li`)(992,`code`),Sk(993,`warning`),Kg(),Sk(994,`: cor amarela que representa aviso ou advertência.`),Kg(),Qc(995,`li`)(996,`code`),Sk(997,`danger`),Kg(),Sk(998,`: cor vermelha para erro ou aviso crítico.`),Kg(),Qc(999,`li`)(1e3,`code`),Sk(1001,`info`),Kg(),Sk(1002,`: cor azul claro que caracteriza conteúdo informativo.`),Kg(),Qc(1003,`li`)(1004,`code`),Sk(1005,`neutral`),Kg(),Sk(1006,`: cor cinza claro para uso geral.`),Kg()(),Qc(1007,`blockquote`)(1008,`p`),Sk(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),Qc(1010,`code`),Sk(1011,`p-color`),Kg(),Sk(1012,` e `),Qc(1013,`code`),Sk(1014,`p-icon`),Kg(),Sk(1015,` somente será exibido caso seja `),Qc(1016,`code`),Sk(1017,`true`),Kg(),Sk(1018,`.`),Kg()()()(),Qc(1019,`tr`,93)(1020,`td`,15)(1021,`div`,23)(1022,`span`,24),Sk(1023,` p-value`),vu(1024,`br`),Kg()()(),Qc(1025,`td`,18)(1026,`code`,25),Sk(1027,`string`),Kg()(),Qc(1028,`td`,20),Sk(1029,`-`),Kg(),Qc(1030,`td`,21)(1031,`p`),Sk(1032,`Texto da tag.`),Kg()()()(),Qc(1033,`h3`),Sk(1034,`Interfaces`),Kg(),Qc(1035,`h4`,94)(1036,`code`,5),Sk(1037,`PoTagLiterals`),Kg()(),Qc(1038,`div`,2)(1039,`p`),Sk(1040,`Interface para definição das literais usadas no `),Qc(1041,`code`),Sk(1042,`po-tag`),Kg(),Sk(1043,`.`),Kg()(),Qc(1044,`h4`,10),Sk(1045,`Propriedades`),Kg(),Qc(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),Sk(1049,`Nome`),Kg(),Qc(1050,`th`,13),Sk(1051,`Tipo`),Kg(),Qc(1052,`th`,13),Sk(1053,`Descrição`),Kg()(),Qc(1054,`tr`,95)(1055,`td`,15)(1056,`div`,23)(1057,`span`,24),Sk(1058,` remove`),vu(1059,`br`),Kg()()(),Qc(1060,`td`,18)(1061,`code`,25),Sk(1062,`string`),Kg()(),Qc(1063,`td`,21)(1064,`em`)(1065,`strong`),Sk(1066,`(opcional)`),Kg()(),Qc(1067,`p`),Sk(1068,`Texto exibido no tooltip indicando remoção da tag.`),Kg()()()(),Qc(1069,`h3`),Sk(1070,`Enums`),Kg(),Qc(1071,`h4`,96)(1072,`code`,5),Sk(1073,`PoTagOrientation`),Kg()(),Qc(1074,`div`,2)(1075,`p`),Sk(1076,`Define os tipos de orientações disponíveis para o `),Qc(1077,`code`),Sk(1078,`po-tag`),Kg(),Sk(1079,`.`),Kg()(),Qc(1080,`h4`,10),Sk(1081,`Propriedades`),Kg(),Qc(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),Sk(1085,`Nome`),Kg(),Qc(1086,`th`,13),Sk(1087,`Descrição`),Kg()(),Qc(1088,`tr`,97)(1089,`td`,15)(1090,`div`,23)(1091,`span`,24),Sk(1092,` Horizontal`),vu(1093,`br`),Kg()()(),Qc(1094,`td`,21)(1095,`p`),Sk(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),Kg()()(),Qc(1097,`tr`,98)(1098,`td`,15)(1099,`div`,23)(1100,`span`,24),Sk(1101,` Vertical`),vu(1102,`br`),Kg()()(),Qc(1103,`td`,21)(1104,`p`),Sk(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),Kg()()()(),Qc(1106,`h4`,99)(1107,`code`,5),Sk(1108,`PoTagType`),Kg()(),Qc(1109,`div`,2)(1110,`p`),Sk(1111,`Define os tipos disponíveis para o `),Qc(1112,`code`),Sk(1113,`po-tag`),Kg(),Sk(1114,`.`),Kg()(),Qc(1115,`h4`,10),Sk(1116,`Propriedades`),Kg(),Qc(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),Sk(1120,`Nome`),Kg(),Qc(1121,`th`,13),Sk(1122,`Descrição`),Kg()(),Qc(1123,`tr`,100)(1124,`td`,15)(1125,`div`,23)(1126,`span`,24),Sk(1127,` Danger`),vu(1128,`br`),Kg()()(),Qc(1129,`td`,21)(1130,`p`),Sk(1131,`Erro, perigo, problema ou aviso crítico.`),Kg()()(),Qc(1132,`tr`,101)(1133,`td`,15)(1134,`div`,23)(1135,`span`,24),Sk(1136,` Info`),vu(1137,`br`),Kg()()(),Qc(1138,`td`,21)(1139,`p`),Sk(1140,`Informativo ou explicativo.`),Kg()()(),Qc(1141,`tr`,102)(1142,`td`,15)(1143,`div`,23)(1144,`span`,24),Sk(1145,` Success`),vu(1146,`br`),Kg()()(),Qc(1147,`td`,21)(1148,`p`),Sk(1149,`Confirmação, resultados positivos ou êxito.`),Kg()()(),Qc(1150,`tr`,103)(1151,`td`,15)(1152,`div`,23)(1153,`span`,24),Sk(1154,` Warning`),vu(1155,`br`),Kg()()(),Qc(1156,`td`,21)(1157,`p`),Sk(1158,`Aviso ou advertência.`),Kg()()(),Qc(1159,`tr`,104)(1160,`td`,15)(1161,`div`,23)(1162,`span`,24),Sk(1163,` Neutral`),vu(1164,`br`),Kg()()(),Qc(1165,`td`,21)(1166,`p`),Sk(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function et(a,c){if(a&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-tag-basic-view`)(2,`sample-po-tag-labs-view`)(3,`sample-po-tag-bank-account-view`)(4,`sample-po-tag-caption-tag-colors-view`),Kg()}if(a&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,et,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-tag-doc`),Kg()()()),p&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,fe,Ce,ye,Pe,_e],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(tt),GV]})}return a})();var Ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,De]})}return a})();export{Ot as DocPoTagModule};