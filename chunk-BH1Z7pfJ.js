import{B as L4,Cn as oi,Ct as Yoe,Da as pe,Ea as pO,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Pt as a4,Qr as RK,Ra as ue,Rt as ab$1,Sa as o0,Si as Xx,T as Gte,Vi as bx,Xa as wx,Xt as ere,Ya as wg,Yn as zl,Za as xF,Zt as fae,ai as Sn,dr as DO,ea as hO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,p as Cs,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,yr as Ex,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(r,i){r&1&&nu(0,`po-tag`,0)},dependencies:[Cs],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tag Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-tag p-value="PO Tag"> </po-tag>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tag-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return a})();function Me(a,c){if(a&1){let l=Ax();jc(0,`po-select`,14),r0(),ab(`ngModelChange`,function(i){v_(l);let g=Fx();return uO(g.icon,i)||(g.icon=i),__(i)}),wg()}if(a&2){let l=Fx();sb(`ngModel`,l.icon),UE(`p-options`,l.iconList),o0()}}function Be(a,c){if(a&1){let l=Ax();jc(0,`po-switch`,15),r0(),ab(`ngModelChange`,function(i){v_(l);let g=Fx();return uO(g.icon,i)||(g.icon=i),__(i)}),wg()}if(a&2){let l=Fx();sb(`ngModel`,l.icon),o0()}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:ab$1.Horizontal},{label:`Vertical`,value:ab$1.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:zl.Info},{label:`Danger`,value:zl.Danger},{label:`Success`,value:zl.Success},{label:`Warning`,value:zl.Warning},{label:`Neutral`,value:zl.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let r=[...this.propertiesOptions];l.includes(`removable`)?(r[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let g=Ax();jc(0,`po-tag`,1),mt(`p-click`,function(){return i.changeEvent(`p-click`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),wg(),nu(4,`po-divider`),jc(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.label,d)||(i.label=d),__(d)}),wg(),jc(9,`po-input`,5),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.value,d)||(i.value=d),__(d)}),wg()(),jc(10,`div`,2)(11,`po-input`,6),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.color,d)||(i.color=d),__(d)}),wg(),jc(12,`po-input`,7),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.textColor,d)||(i.textColor=d),__(d)}),wg(),vx(13,Me,1,2,`po-select`,8),jc(14,`po-checkbox-group`,9),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.properties,d)||(i.properties=d),__(d)}),mt(`p-change`,function(d){return i.propertiesChange(d)}),wg(),vx(15,Be,1,1,`po-switch`,10),wg(),jc(16,`div`,2)(17,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.orientation,d)||(i.orientation=d),__(d)}),wg(),jc(18,`po-radio-group`,12),r0(),ab(`ngModelChange`,function(d){return v_(g),uO(i.type,d)||(i.type=d),__(d)}),wg()(),jc(19,`div`,2)(20,`po-button`,13),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(UE(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),rg(3),UE(`p-value`,i.event),rg(5),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.value),o0(),rg(2),sb(`ngModel`,i.color),o0(),rg(),sb(`ngModel`,i.textColor),o0(),rg(),Dx(i.type?-1:13),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),Dx(i.type?15:-1),rg(2),sb(`ngModel`,i.orientation),UE(`p-options`,i.orientationOptions),o0(),rg(),sb(`ngModel`,i.type),UE(`p-options`,i.typeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Gte,Woe,L4,Cs,Yoe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tag Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-tag
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-tag-labs/sample-po-tag-labs.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-tag-labs`),wg(),nu(29,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Fe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return a})();function Oe(a,c){if(a&1&&nu(0,`po-tag`,12),a&2){let l=c.$implicit;UE(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function Ie(a,c){if(a&1&&(jc(0,`po-widget`,15)(1,`div`,3),nu(2,`po-info`,16)(3,`po-tag`,17),wg()()),a&2){let l=c.$implicit;rg(2),UE(`p-label`,l.label)(`p-value`,l.value),rg(),UE(`p-type`,l.type)(`p-value`,l.text)}}function Ve(a,c){if(a&1&&(jc(0,`po-tab`,14),bx(1,Ie,4,4,`po-widget`,15,Ex),wg()),a&2){let l=c.$implicit;UE(`p-label`,hO(l.month)),rg(),wx(l.details)}}var fe=(()=>{class a{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),nu(5,`po-avatar`,5),wg(),jc(6,`div`,6)(7,`div`,7),nu(8,`po-info`,8)(9,`po-tag`,9),wg(),jc(10,`div`,7),nu(11,`po-info`,10),wg()()()(),jc(12,`po-widget`,11)(13,`div`,3),bx(14,Oe,1,3,`po-tag`,12,Ex),wg()()(),jc(16,`po-widget`,13)(17,`po-tabs`),bx(18,Ve,3,2,`po-tab`,14,Ex),wg()()()),r&2&&(rg(5),UE(`p-src`,pO(`assets/graphics/`,i.userData.photo)),rg(3),UE(`p-value`,i.userData.name),rg(3),UE(`p-value`,i.userData.email),rg(3),wx(i.investiments),rg(4),wx(i.items))},dependencies:[a4,Cs,Yoe,Tze,Qae,ere,fae],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tag - Bank Account`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
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
        <po-tab p-active p-label="{ { item.month }}">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tag-bank-account`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,fe],encapsulation:2,changeDetection:1})}return a})();var U=(a,c)=>c.color;var Ne=(a,c)=>c.name;function He(a,c){if(a&1&&nu(0,`po-tag`,3),a&2){let l=c.$implicit;UE(`p-color`,l.color)(`p-value`,l.label)}}function Re(a,c){if(a&1&&nu(0,`po-tag`,5),a&2){let l=c.$implicit;UE(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function $e(a,c){if(a&1&&nu(0,`po-tag`,7),a&2){let l=c.$implicit;UE(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function je(a,c){if(a&1&&nu(0,`po-tag`,10),a&2){let l=c.$implicit;UE(`p-color`,l.color)(`p-value`,l.label)}}function Ge(a,c){if(a&1&&(jc(0,`po-tab`,9)(1,`div`,2),bx(2,je,1,2,`po-tag`,10,U),wg()()),a&2){let l=c.$implicit;UE(`p-label`,l.name),rg(2),wx(l.tags)}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),bx(3,He,1,2,`po-tag`,3,U),wg()(),jc(5,`po-widget`,4)(6,`div`,2),bx(7,Re,1,3,`po-tag`,5,U),wg()(),jc(9,`po-widget`,6)(10,`div`,2),bx(11,$e,1,3,`po-tag`,7,U),wg()(),jc(13,`po-widget`,8)(14,`po-tabs`),bx(15,Ge,4,1,`po-tab`,9,Ne),wg()()()),r&2&&(rg(3),wx(i.captionTags),rg(4),wx(i.statusItems),rg(4),wx(i.categories),rg(4),wx(i.families))},dependencies:[Cs,Tze,Qae,ere,fae],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tag - Caption Tag Colors`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-default p-title="Caption Tag Colors">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tag-caption-tag-colors`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Je,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoTagModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-tag`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoTagComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),wg(),jc(18,`p`),lO(19,`Além disso, é possível definir uma ação que será executada tanto ao `),jc(20,`em`),lO(21,`click`),wg(),lO(22,` quanto através das teclas `),jc(23,`em`),lO(24,`enter/space`),wg(),lO(25,` enquanto navega
utilizando a tecla `),jc(26,`em`),lO(27,`tab`),wg(),lO(28,`.`),wg(),jc(29,`p`),lO(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),wg(),jc(31,`h4`),lO(32,`Tokens customizáveis`),wg(),jc(33,`p`),lO(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(35,`blockquote`)(36,`p`),lO(37,`Para maiores informações, acesse o guia `),jc(38,`a`,6),lO(39,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(40,`.`),wg()(),jc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),lO(45,`Propriedade`),wg(),jc(46,`th`),lO(47,`Descrição`),wg(),jc(48,`th`),lO(49,`Valor Padrão`),wg()()(),jc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),lO(54,`Default Values`),wg()(),nu(55,`td`)(56,`td`),wg(),jc(57,`tr`)(58,`td`)(59,`code`),lO(60,`--font-family`),wg()(),jc(61,`td`),lO(62,`Família tipográfica usada`),wg(),jc(63,`td`)(64,`code`),lO(65,`var(--font-family-theme)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),lO(69,`--font-size`),wg()(),jc(70,`td`),lO(71,`Tamanho da fonte`),wg(),jc(72,`td`)(73,`code`),lO(74,`var(--font-size-sm)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),lO(78,`--line-height`),wg()(),jc(79,`td`),lO(80,`Tamanho da label`),wg(),jc(81,`td`)(82,`code`),lO(83,`var(---line-height-sm)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),lO(87,`--border-radius`),wg()(),jc(88,`td`),lO(89,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(90,`td`)(91,`code`),lO(92,`var(--border-radius-pill)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),lO(96,`--gap`),wg()(),jc(97,`td`),lO(98,`Espaçamento entre o label e o value`),wg(),jc(99,`td`)(100,`code`),lO(101,`var(--spacing-xs)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`strong`),lO(105,`Neutral`),wg()(),nu(106,`td`)(107,`td`),wg(),jc(108,`tr`)(109,`td`)(110,`code`),lO(111,`--color-neutral`),wg()(),jc(112,`td`),lO(113,`Cor principal no estado neutral`),wg(),jc(114,`td`)(115,`code`),lO(116,`var(--color-neutral-light-10)`),wg()()(),jc(117,`tr`)(118,`td`)(119,`code`),lO(120,`--text-color-positive`),wg()(),jc(121,`td`),lO(122,`Cor do texto no estado neutral`),wg(),jc(123,`td`)(124,`code`),lO(125,`var(--color-neutral-dark-80)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`strong`),lO(129,`Positive`),wg()(),nu(130,`td`)(131,`td`),wg(),jc(132,`tr`)(133,`td`)(134,`code`),lO(135,`--color-positive`),wg()(),jc(136,`td`),lO(137,`Cor principal no estado positive`),wg(),jc(138,`td`)(139,`code`),lO(140,`var(--color-feedback-positive-lightest)`),wg()()(),jc(141,`tr`)(142,`td`)(143,`code`),lO(144,`--text-color-positive`),wg()(),jc(145,`td`),lO(146,`Cor do texto no estado positive`),wg(),jc(147,`td`)(148,`code`),lO(149,`var(--color-feedback-positive-dark)`),wg()()(),jc(150,`tr`)(151,`td`)(152,`strong`),lO(153,`Negative`),wg()(),nu(154,`td`)(155,`td`),wg(),jc(156,`tr`)(157,`td`)(158,`code`),lO(159,`--color-negative`),wg()(),jc(160,`td`),lO(161,`Cor principal no estado danger`),wg(),jc(162,`td`)(163,`code`),lO(164,`var(--color-feedback-negative-lightest)`),wg()()(),jc(165,`tr`)(166,`td`)(167,`code`),lO(168,`--text-color-negative`),wg()(),jc(169,`td`),lO(170,`Cor do texto no estado danger`),wg(),jc(171,`td`)(172,`code`),lO(173,`var(--color-feedback-negative-darker)`),wg()()(),jc(174,`tr`)(175,`td`)(176,`strong`),lO(177,`Warning`),wg()(),nu(178,`td`)(179,`td`),wg(),jc(180,`tr`)(181,`td`)(182,`code`),lO(183,`--color-tag-warning`),wg()(),jc(184,`td`),lO(185,`Cor principal no estado warning`),wg(),jc(186,`td`)(187,`code`),lO(188,`var(--color-feedback-warning-lightest)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`code`),lO(192,`--text-color-warning`),wg()(),jc(193,`td`),lO(194,`Cor do texto no estado warning`),wg(),jc(195,`td`)(196,`code`),lO(197,`var(--color-feedback-warning-darkest)`),wg()()(),jc(198,`tr`)(199,`td`)(200,`strong`),lO(201,`Info`),wg()(),nu(202,`td`)(203,`td`),wg(),jc(204,`tr`)(205,`td`)(206,`code`),lO(207,`--color-info`),wg()(),jc(208,`td`),lO(209,`Cor principal no estado info`),wg(),jc(210,`td`)(211,`code`),lO(212,`var(--color-feedback-info-lightest)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`code`),lO(216,`--text-color-info`),wg()(),jc(217,`td`),lO(218,`Cor do texto no estado info`),wg(),jc(219,`td`)(220,`code`),lO(221,`var(--color-feedback-info-dark)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),lO(225,`Removable`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),lO(231,`--color`),wg()(),jc(232,`td`),lO(233,`Cor principal quando removable`),wg(),jc(234,`td`)(235,`code`),lO(236,`var(--color-brand-01-lightest)`),wg()()(),jc(237,`tr`)(238,`td`)(239,`code`),lO(240,`--border-color`),wg()(),jc(241,`td`),lO(242,`Cor de borda quando removable \xA0`),wg(),jc(243,`td`)(244,`code`),lO(245,`var(--color-brand-01-lighter)`),wg()()(),jc(246,`tr`)(247,`td`)(248,`code`),lO(249,`--color-icon`),wg()(),jc(250,`td`),lO(251,`Cor do ícone quando removable \xA0`),wg(),jc(252,`td`)(253,`code`),lO(254,`var(--color-action-default)`),wg()()(),jc(255,`tr`)(256,`td`)(257,`code`),lO(258,`--text-color`),wg()(),jc(259,`td`),lO(260,`Cor do texto quando removable \xA0`),wg(),jc(261,`td`)(262,`code`),lO(263,`var(--color-neutral-dark-80)`),wg()()(),jc(264,`tr`)(265,`td`)(266,`code`),lO(267,`--color-hover`),wg()(),jc(268,`td`),lO(269,`Cor do hover no estado removable \xA0`),wg(),jc(270,`td`)(271,`code`),lO(272,`var(--color-brand-01-lighter)`),wg()()(),jc(273,`tr`)(274,`td`)(275,`strong`),lO(276,`Focused`),wg()(),nu(277,`td`)(278,`td`),wg(),jc(279,`tr`)(280,`td`)(281,`code`),lO(282,`--outline-color-focused`),wg()(),jc(283,`td`),lO(284,`Cor do outline do estado de focus`),wg(),jc(285,`td`)(286,`code`),lO(287,`var(--color-action-focus)`),wg()()(),jc(288,`tr`)(289,`td`)(290,`strong`),lO(291,`Disabled`),wg()(),nu(292,`td`)(293,`td`),wg(),jc(294,`tr`)(295,`td`)(296,`code`),lO(297,`--color-disabled`),wg()(),jc(298,`td`),lO(299,`Cor principal no estado disabled`),wg(),jc(300,`td`)(301,`code`),lO(302,`var(--color-neutral-light-20)`),wg()()(),jc(303,`tr`)(304,`td`)(305,`code`),lO(306,`--border-color-disabled`),wg()(),jc(307,`td`),lO(308,`Cor da borda no estado disabled \xA0`),wg(),jc(309,`td`)(310,`code`),lO(311,`var(--color-action-disabled)`),wg()()(),jc(312,`tr`)(313,`td`)(314,`code`),lO(315,`--color-icon-disabled`),wg()(),jc(316,`td`),lO(317,`Cor do icone no estado disabled \xA0`),wg(),jc(318,`td`)(319,`code`),lO(320,`var(--color-action-disabled)`),wg()()(),jc(321,`tr`)(322,`td`)(323,`code`),lO(324,`--text-color-disabled`),wg()(),jc(325,`td`),lO(326,`Cor do texto no estado disabled \xA0`),wg(),jc(327,`td`)(328,`code`),lO(329,`var(--color-neutral-mid-60)`),wg()()()()()(),jc(330,`div`,7)(331,`h4`,8),lO(332,`Seletor`),wg(),jc(333,`pre`,9),lO(334,`<po-tag
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
`),wg()(),jc(335,`h4`,10),lO(336,`Propriedades`),wg(),jc(337,`table`,11)(338,`tr`,12)(339,`th`,13),lO(340,`Nome`),wg(),jc(341,`th`,13),lO(342,`Tipo`),wg(),jc(343,`th`,13),lO(344,`Padrão`),wg(),jc(345,`th`,13),lO(346,`Descrição`),wg()(),jc(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),lO(351,` (p-click)`),nu(352,`br`),wg()()(),jc(353,`td`,18)(354,`code`,19),lO(355,`EventEmitter`),wg()(),jc(356,`td`,20),lO(357,`-`),wg(),jc(358,`td`,21)(359,`em`)(360,`strong`),lO(361,`(opcional)`),wg()(),jc(362,`p`),lO(363,`Ação que será executada ao clicar sobre o `),jc(364,`code`),lO(365,`po-tag`),wg(),lO(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),wg(),jc(367,`p`),lO(368,`O evento de click só funciona se a tag não for removível.`),wg()()(),jc(369,`tr`,14)(370,`td`,15)(371,`div`,22)(372,`span`,23),lO(373,` p-color`),nu(374,`br`),wg()()(),jc(375,`td`,18)(376,`code`,24),lO(377,`string`),wg()(),jc(378,`td`,20),lO(379,`-`),wg(),jc(380,`td`,21)(381,`em`)(382,`strong`),lO(383,`(opcional)`),wg()(),jc(384,`p`),lO(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),wg(),jc(386,`ul`)(387,`li`),lO(388,`Hexadeximal, por exemplo `),jc(389,`code`),lO(390,`#c64840`),wg(),lO(391,`;`),wg(),jc(392,`li`),lO(393,`RGB, como `),jc(394,`code`),lO(395,`rgb(0, 0, 165)`),wg(),lO(396,`;`),wg(),jc(397,`li`),lO(398,`O nome da cor, por exemplo `),jc(399,`code`),lO(400,`blue`),wg(),lO(401,`;`),wg(),jc(402,`li`),lO(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),jc(404,`ul`)(405,`li`),nu(406,`span`,25),jc(407,`code`),lO(408,`color-01`),wg()(),jc(409,`li`),nu(410,`span`,26),jc(411,`code`),lO(412,`color-02`),wg()(),jc(413,`li`),nu(414,`span`,27),jc(415,`code`),lO(416,`color-03`),wg()(),jc(417,`li`),nu(418,`span`,28),jc(419,`code`),lO(420,`color-04`),wg()(),jc(421,`li`),nu(422,`span`,29),jc(423,`code`),lO(424,`color-05`),wg()(),jc(425,`li`),nu(426,`span`,30),jc(427,`code`),lO(428,`color-06`),wg()(),jc(429,`li`),nu(430,`span`,31),jc(431,`code`),lO(432,`color-07`),wg()(),jc(433,`li`),nu(434,`span`,32),jc(435,`code`),lO(436,`color-08`),wg()(),jc(437,`li`),nu(438,`span`,33),jc(439,`code`),lO(440,`color-09`),wg()(),jc(441,`li`),nu(442,`span`,34),jc(443,`code`),lO(444,`color-10`),wg()(),jc(445,`li`),nu(446,`span`,35),jc(447,`code`),lO(448,`color-11`),wg()(),jc(449,`li`),nu(450,`span`,36),jc(451,`code`),lO(452,`color-12`),wg()()()()(),jc(453,`blockquote`)(454,`p`),lO(455,`Também é possível utilizar as 35 cores da paleta `),jc(456,`strong`),lO(457,`Caption Tag Colors`),wg(),lO(458,`:`),wg()(),jc(459,`ul`)(460,`li`),nu(461,`span`,37),jc(462,`code`),lO(463,`caption-tag-01`),wg(),nu(464,`span`,38),jc(465,`code`),lO(466,`caption-tag-02`),wg(),nu(467,`span`,39),jc(468,`code`),lO(469,`caption-tag-03`),wg(),nu(470,`span`,40),jc(471,`code`),lO(472,`caption-tag-04`),wg(),nu(473,`span`,41),jc(474,`code`),lO(475,`caption-tag-05`),wg()(),jc(476,`li`),nu(477,`span`,42),jc(478,`code`),lO(479,`caption-tag-06`),wg(),nu(480,`span`,43),jc(481,`code`),lO(482,`caption-tag-07`),wg(),nu(483,`span`,44),jc(484,`code`),lO(485,`caption-tag-08`),wg(),nu(486,`span`,45),jc(487,`code`),lO(488,`caption-tag-09`),wg(),nu(489,`span`,46),jc(490,`code`),lO(491,`caption-tag-10`),wg()(),jc(492,`li`),nu(493,`span`,47),jc(494,`code`),lO(495,`caption-tag-11`),wg(),nu(496,`span`,48),jc(497,`code`),lO(498,`caption-tag-12`),wg(),nu(499,`span`,49),jc(500,`code`),lO(501,`caption-tag-13`),wg(),nu(502,`span`,50),jc(503,`code`),lO(504,`caption-tag-14`),wg(),nu(505,`span`,51),jc(506,`code`),lO(507,`caption-tag-15`),wg()(),jc(508,`li`),nu(509,`span`,52),jc(510,`code`),lO(511,`caption-tag-16`),wg(),nu(512,`span`,53),jc(513,`code`),lO(514,`caption-tag-17`),wg(),nu(515,`span`,54),jc(516,`code`),lO(517,`caption-tag-18`),wg(),nu(518,`span`,55),jc(519,`code`),lO(520,`caption-tag-19`),wg(),nu(521,`span`,56),jc(522,`code`),lO(523,`caption-tag-20`),wg()(),jc(524,`li`),nu(525,`span`,57),jc(526,`code`),lO(527,`caption-tag-21`),wg(),nu(528,`span`,58),jc(529,`code`),lO(530,`caption-tag-22`),wg(),nu(531,`span`,59),jc(532,`code`),lO(533,`caption-tag-23`),wg(),nu(534,`span`,60),jc(535,`code`),lO(536,`caption-tag-24`),wg(),nu(537,`span`,61),jc(538,`code`),lO(539,`caption-tag-25`),wg()(),jc(540,`li`),nu(541,`span`,62),jc(542,`code`),lO(543,`caption-tag-26`),wg(),nu(544,`span`,63),jc(545,`code`),lO(546,`caption-tag-27`),wg(),nu(547,`span`,64),jc(548,`code`),lO(549,`caption-tag-28`),wg(),nu(550,`span`,65),jc(551,`code`),lO(552,`caption-tag-29`),wg(),nu(553,`span`,66),jc(554,`code`),lO(555,`caption-tag-30`),wg()(),jc(556,`li`),nu(557,`span`,67),jc(558,`code`),lO(559,`caption-tag-31`),wg(),nu(560,`span`,68),jc(561,`code`),lO(562,`caption-tag-32`),wg(),nu(563,`span`,69),jc(564,`code`),lO(565,`caption-tag-33`),wg(),nu(566,`span`,70),jc(567,`code`),lO(568,`caption-tag-34`),wg(),nu(569,`span`,71),jc(570,`code`),lO(571,`caption-tag-35`),wg()()(),jc(572,`p`),lO(573,`Exemplo de uso:`),wg(),jc(574,`pre`)(575,`code`),lO(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),wg()(),jc(577,`ul`)(578,`li`),lO(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),wg(),jc(580,`li`),lO(581,`Para as cores legacy (`),jc(582,`code`),lO(583,`color-01`),wg(),lO(584,` a `),jc(585,`code`),lO(586,`color-12`),wg(),lO(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),wg(),jc(588,`li`),lO(589,`Para as cores `),jc(590,`strong`),lO(591,`Caption Tag Colors`),wg(),lO(592,` (`),jc(593,`code`),lO(594,`caption-tag-01`),wg(),lO(595,` a `),jc(596,`code`),lO(597,`caption-tag-35`),wg(),lO(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),jc(599,`code`),lO(600,`p-text-color`),wg(),lO(601,`.`),wg()(),jc(602,`blockquote`)(603,`p`)(604,`strong`),lO(605,`Atenção:`),wg(),lO(606,` A propriedade `),jc(607,`code`),lO(608,`p-type`),wg(),lO(609,` sobrepõe esta definição.`),wg()()()(),jc(610,`tr`,14)(611,`td`,15)(612,`div`,22)(613,`span`,23),lO(614,` p-disabled`),nu(615,`br`),wg()()(),jc(616,`td`,18)(617,`code`,72),lO(618,`boolean`),wg()(),jc(619,`td`,20)(620,`p`)(621,`code`),lO(622,`false`),wg()()(),jc(623,`td`,21)(624,`em`)(625,`strong`),lO(626,`(opcional)`),wg()(),jc(627,`p`),lO(628,`Desabilita o `),jc(629,`code`),lO(630,`po-tag`),wg(),lO(631,` e não permite que o usuário interaja com o mesmo.`),wg(),jc(632,`blockquote`)(633,`p`),lO(634,`A propriedade `),jc(635,`code`),lO(636,`p-disabled`),wg(),lO(637,` somente terá efeito caso a propriedade `),jc(638,`code`),lO(639,`p-removable`),wg(),lO(640,` esteja definida como `),jc(641,`code`),lO(642,`true`),wg(),lO(643,`.`),wg()()()(),jc(644,`tr`,14)(645,`td`,15)(646,`div`,22)(647,`span`,23),lO(648,` p-icon`),nu(649,`br`),wg()()(),jc(650,`td`,18)(651,`code`,24),lO(652,`string `),wg(),jc(653,`code`,72),lO(654,` boolean `),wg(),jc(655,`code`,73),lO(656,` TemplateRef<void>`),wg()(),jc(657,`td`,20)(658,`p`)(659,`code`),lO(660,`false`),wg()()(),jc(661,`td`,21)(662,`em`)(663,`strong`),lO(664,`(opcional)`),wg()(),jc(665,`p`),lO(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),jc(667,`em`),lO(668,`tag`),wg(),lO(669,`.`),wg(),jc(670,`p`),lO(671,`Quando `),jc(672,`code`),lO(673,`p-type`),wg(),lO(674,` estiver definida, basta informar um valor igual a `),jc(675,`code`),lO(676,`true`),wg(),lO(677,` para que o ícone seja exibido conforme descrições abaixo:`),wg(),jc(678,`ul`)(679,`li`),nu(680,`span`,74),lO(681,` - `),jc(682,`code`),lO(683,`success`),wg()(),jc(684,`li`),nu(685,`span`,75),lO(686,` - `),jc(687,`code`),lO(688,`warning`),wg()(),jc(689,`li`),nu(690,`span`,76),lO(691,` - `),jc(692,`code`),lO(693,`danger`),wg()(),jc(694,`li`),nu(695,`span`,77),lO(696,` - `),jc(697,`code`),lO(698,`info`),wg()()(),jc(699,`p`),lO(700,`Também É possível usar qualquer um dos ícones da `),jc(701,`a`,78),lO(702,`Biblioteca de ícones`),wg(),lO(703,`. conforme exemplo abaixo:`),wg(),jc(704,`pre`)(705,`code`),lO(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),wg()(),jc(707,`p`),lO(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(709,`em`),lO(710,`Font Awesome`),wg(),lO(711,`, da seguinte forma:`),wg(),jc(712,`pre`)(713,`code`),lO(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),wg()(),jc(715,`p`),lO(716,`Outra opção seria a customização do ícone através do `),jc(717,`code`),lO(718,`TemplateRef`),wg(),lO(719,`, conforme exemplo abaixo:`),wg(),jc(720,`pre`)(721,`code`),lO(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(723,`blockquote`)(724,`p`),lO(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(726,`code`),lO(727,`font-size: inherit`),wg(),lO(728,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(729,`tr`,14)(730,`td`,15)(731,`div`,22)(732,`span`,23),lO(733,` p-label`),nu(734,`br`),wg()()(),jc(735,`td`,18)(736,`code`,24),lO(737,`string`),wg()(),jc(738,`td`,20),lO(739,`-`),wg(),jc(740,`td`,21)(741,`em`)(742,`strong`),lO(743,`(opcional)`),wg()(),jc(744,`p`),lO(745,`Define uma legenda que será exibida acima ou ao lado da `),jc(746,`em`),lO(747,`tag`),wg(),lO(748,`, de acordo com a `),jc(749,`code`),lO(750,`p-orientation`),wg(),lO(751,`.`),wg()()(),jc(752,`tr`,14)(753,`td`,15)(754,`div`,22)(755,`span`,23),lO(756,` p-literals`),nu(757,`br`),wg()()(),jc(758,`td`,18)(759,`code`,79),lO(760,`PoTagLiterals`),wg()(),jc(761,`td`,20),lO(762,`-`),wg(),jc(763,`td`,21)(764,`em`)(765,`strong`),lO(766,`(opcional)`),wg()(),jc(767,`p`),lO(768,`Objeto com as literais usadas no `),jc(769,`code`),lO(770,`po-tag`),wg(),lO(771,`.`),wg(),jc(772,`p`),lO(773,`Para utilizar, basta passar a literal customizada:`),wg(),jc(774,`pre`)(775,`code`),lO(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),wg()(),jc(777,`p`),lO(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),wg(),jc(779,`pre`)(780,`code`),lO(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),wg()(),jc(782,`blockquote`)(783,`p`),lO(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(785,`a`,80)(786,`code`),lO(787,`PoI18nService`),wg()(),lO(788,` ou do browser.`),wg()()()(),jc(789,`tr`,14)(790,`td`,15)(791,`div`,22)(792,`span`,23),lO(793,` p-orientation`),nu(794,`br`),wg()()(),jc(795,`td`,18)(796,`code`,81),lO(797,`PoTagOrientation`),wg()(),jc(798,`td`,20)(799,`p`)(800,`code`),lO(801,`vertical`),wg()()(),jc(802,`td`,21)(803,`em`)(804,`strong`),lO(805,`(opcional)`),wg()(),jc(806,`p`),lO(807,`Define o `),jc(808,`em`),lO(809,`layout`),wg(),lO(810,` de exibição.`),wg()()(),jc(811,`tr`,14)(812,`td`,15)(813,`div`,22)(814,`span`,23),lO(815,` p-removable`),nu(816,`br`),wg()()(),jc(817,`td`,18)(818,`code`,72),lO(819,`boolean`),wg()(),jc(820,`td`,20)(821,`p`)(822,`code`),lO(823,`false`),wg()()(),jc(824,`td`,21)(825,`em`)(826,`strong`),lO(827,`(opcional)`),wg()(),jc(828,`p`),lO(829,`Habilita a opção de remover a tag`),wg()()(),jc(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),lO(834,` (p-close)`),nu(835,`br`),wg()()(),jc(836,`td`,18)(837,`code`,19),lO(838,`EventEmitter`),wg()(),jc(839,`td`,20),lO(840,`-`),wg(),jc(841,`td`,21)(842,`em`)(843,`strong`),lO(844,`(opcional)`),wg()(),jc(845,`p`),lO(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),jc(847,`code`),lO(848,`po-tag`),wg()()()(),jc(849,`tr`,14)(850,`td`,15)(851,`div`,22)(852,`span`,23),lO(853,` p-text-color`),nu(854,`br`),wg()()(),jc(855,`td`,18)(856,`code`,24),lO(857,`string`),wg()(),jc(858,`td`,20),lO(859,`-`),wg(),jc(860,`td`,21)(861,`em`)(862,`strong`),lO(863,`(opcional)`),wg()(),jc(864,`p`),lO(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),wg(),jc(866,`ul`)(867,`li`)(868,`p`),lO(869,`Hexadeximal, por exemplo `),jc(870,`code`),lO(871,`#c64840`),wg(),lO(872,`;`),wg()(),jc(873,`li`)(874,`p`),lO(875,`RGB, como `),jc(876,`code`),lO(877,`rgb(0, 0, 165)`),wg(),lO(878,`;`),wg()(),jc(879,`li`)(880,`p`),lO(881,`O nome da cor, por exemplo `),jc(882,`code`),lO(883,`blue`),wg(),lO(884,`;`),wg()(),jc(885,`li`)(886,`p`),lO(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),wg(),jc(888,`ul`)(889,`li`),nu(890,`span`,25),jc(891,`code`),lO(892,`color-01`),wg()(),jc(893,`li`),nu(894,`span`,26),jc(895,`code`),lO(896,`color-02`),wg()(),jc(897,`li`),nu(898,`span`,27),jc(899,`code`),lO(900,`color-03`),wg()(),jc(901,`li`),nu(902,`span`,28),jc(903,`code`),lO(904,`color-04`),wg()(),jc(905,`li`),nu(906,`span`,29),jc(907,`code`),lO(908,`color-05`),wg()(),jc(909,`li`),nu(910,`span`,30),jc(911,`code`),lO(912,`color-06`),wg()(),jc(913,`li`),nu(914,`span`,31),jc(915,`code`),lO(916,`color-07`),wg()(),jc(917,`li`),nu(918,`span`,32),jc(919,`code`),lO(920,`color-08`),wg()(),jc(921,`li`),nu(922,`span`,33),jc(923,`code`),lO(924,`color-09`),wg()(),jc(925,`li`),nu(926,`span`,34),jc(927,`code`),lO(928,`color-10`),wg()(),jc(929,`li`),nu(930,`span`,35),jc(931,`code`),lO(932,`color-11`),wg()(),jc(933,`li`),nu(934,`span`,36),jc(935,`code`),lO(936,`color-12`),wg()()()(),jc(937,`li`)(938,`p`),lO(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),wg()()(),jc(940,`blockquote`)(941,`p`)(942,`strong`),lO(943,`Atenção:`),wg(),lO(944,` A propriedade `),jc(945,`code`),lO(946,`p-type`),wg(),lO(947,` sobrepõe esta definição.`),wg()(),jc(948,`blockquote`)(949,`p`)(950,`strong`),lO(951,`Atenção:`),wg(),lO(952,` As cores da paleta `),jc(953,`strong`),lO(954,`Caption Tag Colors`),wg(),lO(955,` (`),jc(956,`code`),lO(957,`caption-tag-01`),wg(),lO(958,` a `),jc(959,`code`),lO(960,`caption-tag-35`),wg(),lO(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),wg()()()(),jc(962,`tr`,14)(963,`td`,15)(964,`div`,22)(965,`span`,23),lO(966,` p-type`),nu(967,`br`),wg()()(),jc(968,`td`,18)(969,`code`,82),lO(970,`PoTagType`),wg()(),jc(971,`td`,20)(972,`p`)(973,`code`),lO(974,`info`),wg()()(),jc(975,`td`,21)(976,`em`)(977,`strong`),lO(978,`(opcional)`),wg()(),jc(979,`p`),lO(980,`Define o tipo da `),jc(981,`em`),lO(982,`tag`),wg(),lO(983,`.`),wg(),jc(984,`p`),lO(985,`Valores válidos:`),wg(),jc(986,`ul`)(987,`li`)(988,`code`),lO(989,`success`),wg(),lO(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),wg(),jc(991,`li`)(992,`code`),lO(993,`warning`),wg(),lO(994,`: cor amarela que representa aviso ou advertência.`),wg(),jc(995,`li`)(996,`code`),lO(997,`danger`),wg(),lO(998,`: cor vermelha para erro ou aviso crítico.`),wg(),jc(999,`li`)(1e3,`code`),lO(1001,`info`),wg(),lO(1002,`: cor azul claro que caracteriza conteúdo informativo.`),wg(),jc(1003,`li`)(1004,`code`),lO(1005,`neutral`),wg(),lO(1006,`: cor cinza claro para uso geral.`),wg()(),jc(1007,`blockquote`)(1008,`p`),lO(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),jc(1010,`code`),lO(1011,`p-color`),wg(),lO(1012,` e `),jc(1013,`code`),lO(1014,`p-icon`),wg(),lO(1015,` somente será exibido caso seja `),jc(1016,`code`),lO(1017,`true`),wg(),lO(1018,`.`),wg()()()(),jc(1019,`tr`,14)(1020,`td`,15)(1021,`div`,22)(1022,`span`,23),lO(1023,` p-value`),nu(1024,`br`),wg()()(),jc(1025,`td`,18)(1026,`code`,24),lO(1027,`string`),wg()(),jc(1028,`td`,20),lO(1029,`-`),wg(),jc(1030,`td`,21)(1031,`p`),lO(1032,`Texto da tag.`),wg()()()(),jc(1033,`h3`),lO(1034,`Interfaces`),wg(),jc(1035,`h4`,83)(1036,`code`,5),lO(1037,`PoTagLiterals`),wg()(),jc(1038,`div`,2)(1039,`p`),lO(1040,`Interface para definição das literais usadas no `),jc(1041,`code`),lO(1042,`po-tag`),wg(),lO(1043,`.`),wg()(),jc(1044,`h4`,10),lO(1045,`Propriedades`),wg(),jc(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),lO(1049,`Nome`),wg(),jc(1050,`th`,13),lO(1051,`Tipo`),wg(),jc(1052,`th`,13),lO(1053,`Descrição`),wg()(),jc(1054,`tr`,14)(1055,`td`,15)(1056,`div`,22)(1057,`span`,23),lO(1058,` remove`),nu(1059,`br`),wg()()(),jc(1060,`td`,18)(1061,`code`,24),lO(1062,`string`),wg()(),jc(1063,`td`,21)(1064,`em`)(1065,`strong`),lO(1066,`(opcional)`),wg()(),jc(1067,`p`),lO(1068,`Texto exibido no tooltip indicando remoção da tag.`),wg()()()(),jc(1069,`h3`),lO(1070,`Enums`),wg(),jc(1071,`h4`,4)(1072,`code`,5),lO(1073,`PoTagOrientation`),wg()(),jc(1074,`div`,2)(1075,`p`),lO(1076,`Define os tipos de orientações disponíveis para o `),jc(1077,`code`),lO(1078,`po-tag`),wg(),lO(1079,`.`),wg()(),jc(1080,`h4`,10),lO(1081,`Propriedades`),wg(),jc(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),lO(1085,`Nome`),wg(),jc(1086,`th`,13),lO(1087,`Descrição`),wg()(),jc(1088,`tr`,14)(1089,`td`,15)(1090,`div`,22)(1091,`span`,23),lO(1092,` Horizontal`),nu(1093,`br`),wg()()(),jc(1094,`td`,21)(1095,`p`),lO(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),wg()()(),jc(1097,`tr`,14)(1098,`td`,15)(1099,`div`,22)(1100,`span`,23),lO(1101,` Vertical`),nu(1102,`br`),wg()()(),jc(1103,`td`,21)(1104,`p`),lO(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),wg()()()(),jc(1106,`h4`,4)(1107,`code`,5),lO(1108,`PoTagType`),wg()(),jc(1109,`div`,2)(1110,`p`),lO(1111,`Define os tipos disponíveis para o `),jc(1112,`code`),lO(1113,`po-tag`),wg(),lO(1114,`.`),wg()(),jc(1115,`h4`,10),lO(1116,`Propriedades`),wg(),jc(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),lO(1120,`Nome`),wg(),jc(1121,`th`,13),lO(1122,`Descrição`),wg()(),jc(1123,`tr`,14)(1124,`td`,15)(1125,`div`,22)(1126,`span`,23),lO(1127,` Danger`),nu(1128,`br`),wg()()(),jc(1129,`td`,21)(1130,`p`),lO(1131,`Erro, perigo, problema ou aviso crítico.`),wg()()(),jc(1132,`tr`,14)(1133,`td`,15)(1134,`div`,22)(1135,`span`,23),lO(1136,` Info`),nu(1137,`br`),wg()()(),jc(1138,`td`,21)(1139,`p`),lO(1140,`Informativo ou explicativo.`),wg()()(),jc(1141,`tr`,14)(1142,`td`,15)(1143,`div`,22)(1144,`span`,23),lO(1145,` Success`),nu(1146,`br`),wg()()(),jc(1147,`td`,21)(1148,`p`),lO(1149,`Confirmação, resultados positivos ou êxito.`),wg()()(),jc(1150,`tr`,14)(1151,`td`,15)(1152,`div`,22)(1153,`span`,23),lO(1154,` Warning`),nu(1155,`br`),wg()()(),jc(1156,`td`,21)(1157,`p`),lO(1158,`Aviso ou advertência.`),wg()()(),jc(1159,`tr`,14)(1160,`td`,15)(1161,`div`,22)(1162,`span`,23),lO(1163,` Neutral`),nu(1164,`br`),wg()()(),jc(1165,`td`,21)(1166,`p`),lO(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ke(a,c){if(a&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-tag-basic-view`)(2,`sample-po-tag-labs-view`)(3,`sample-po-tag-bank-account-view`)(4,`sample-po-tag-caption-tag-colors-view`),wg()}if(a&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Xe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ke,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-tag-doc`),wg()()()),r&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Xe),I1]})}return a})();var kt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,we]})}return a})();export{kt as DocPoTagModule};