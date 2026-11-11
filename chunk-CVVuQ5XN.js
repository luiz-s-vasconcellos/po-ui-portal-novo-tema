import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,Ei as WV,Er as HO,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ii as ZO,Ji as eF,Kt as db,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,W as Nl,Xn as $O,Yr as NZ,Zn as $_,an as j4,cr as Bk,ea as ge,ei as Ok,er as Ab,fa as kk,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,no as yk,nr as An,oo as zO,qa as vt,qi as de,st as Ss,tr as Ak,va as nk,vn as oi,xi as VO,ya as nm,zt as c4}from"./chunk-BJubg121.js";var Se=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-value`,`PO Tag`]],template:function(r,i){r&1&&_u(0,`po-tag`,0)},dependencies:[Ss],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tag Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tag-basic/sample-po-tag-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tag p-value="PO Tag"> </po-tag>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tag-basic/sample-po-tag-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tag-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();function Me(a,c){if(a&1){let l=ZO();Jc(0,`po-select`,14),W0(),Zb(`ngModelChange`,function(i){H_(l);let g=nk();return Ak(g.icon,i)||(g.icon=i),$_(i)}),Zg()}if(a&2){let l=nk();Kb(`ngModel`,l.icon),Ab(`p-options`,l.iconList),Y0()}}function Be(a,c){if(a&1){let l=ZO();Jc(0,`po-switch`,15),W0(),Zb(`ngModelChange`,function(i){H_(l);let g=nk();return Ak(g.icon,i)||(g.icon=i),$_(i)}),Zg()}if(a&2){let l=nk();Kb(`ngModel`,l.icon),Y0()}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:`removable`,label:`Removable`}];iconList=[{label:`an an-bluetooth`,value:`an an-bluetooth`},{label:`an an-heart`,value:`an an-heart`},{label:`an an-lightbulb`,value:`an an-lightbulb`},{label:`an an-star`,value:`an an-star`},{label:`an an-gear`,value:`an an-gear`},{label:`an an-globe`,value:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];orientationOptions=[{label:`Horizontal`,value:db.Horizontal},{label:`Vertical`,value:db.Vertical}];typeOptions=[{label:`None`,value:void 0},{label:`Info`,value:Nl.Info},{label:`Danger`,value:Nl.Danger},{label:`Success`,value:Nl.Success},{label:`Warning`,value:Nl.Warning},{label:`Neutral`,value:Nl.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let r=[...this.propertiesOptions];l.includes(`removable`)?(r[1]={value:`disabled`,label:`Disabled`,disabled:!1},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!==`disabled`)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value=`PO Tag`,this.type=void 0,this.event=``,this.textColor=void 0,this.properties=[]}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-labs`]],standalone:!1,decls:21,vars:22,consts:[[`f`,`ngForm`],[3,`p-click`,`p-color`,`p-disabled`,`p-removable`,`p-icon`,`p-text-color`,`p-label`,`p-orientation`,`p-type`,`p-value`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`p-clean`,``,`p-label`,`Color`,`p-help`,`color-01, caption-tag-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`textColor`,`p-clean`,``,`p-label`,`Text color`,`p-help`,`color-01, red, rgb(201, 53, 125), #753399`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModel`],[`name`,`orientation`,`p-columns`,`1`,`p-label`,`Orientation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let g=ZO();Jc(0,`po-tag`,1),vt(`p-click`,function(){return i.changeEvent(`p-click`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Zg(),_u(4,`po-divider`),Jc(5,`form`,null,0)(7,`div`,2)(8,`po-input`,4),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.label,d)||(i.label=d),$_(d)}),Zg(),Jc(9,`po-input`,5),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.value,d)||(i.value=d),$_(d)}),Zg()(),Jc(10,`div`,2)(11,`po-input`,6),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.color,d)||(i.color=d),$_(d)}),Zg(),Jc(12,`po-input`,7),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.textColor,d)||(i.textColor=d),$_(d)}),Zg(),VO(13,Me,1,2,`po-select`,8),Jc(14,`po-checkbox-group`,9),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.properties,d)||(i.properties=d),$_(d)}),vt(`p-change`,function(d){return i.propertiesChange(d)}),Zg(),VO(15,Be,1,1,`po-switch`,10),Zg(),Jc(16,`div`,2)(17,`po-radio-group`,11),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.orientation,d)||(i.orientation=d),$_(d)}),Zg(),Jc(18,`po-radio-group`,12),W0(),Zb(`ngModelChange`,function(d){return H_(g),Ak(i.type,d)||(i.type=d),$_(d)}),Zg()(),Jc(19,`div`,2)(20,`po-button`,13),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Ab(`p-color`,i.color)(`p-disabled`,i.properties.includes(`disabled`))(`p-removable`,i.properties.includes(`removable`))(`p-icon`,i.icon)(`p-text-color`,i.textColor)(`p-label`,i.label)(`p-orientation`,i.orientation)(`p-type`,i.type)(`p-value`,i.value),Ig(3),Ab(`p-value`,i.event),Ig(5),Kb(`ngModel`,i.label),Y0(),Ig(),Kb(`ngModel`,i.value),Y0(),Ig(2),Kb(`ngModel`,i.color),Y0(),Ig(),Kb(`ngModel`,i.textColor),Y0(),Ig(),BO(i.type?-1:13),Ig(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),Y0(),Ig(),BO(i.type?15:-1),Ig(2),Kb(`ngModel`,i.orientation),Ab(`p-options`,i.orientationOptions),Y0(),Ig(),Kb(`ngModel`,i.type),Ab(`p-options`,i.typeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Koe,R4,Ss,Joe],styles:[`.sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}`],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tag Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tag-labs/sample-po-tag-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tag
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tag-labs/sample-po-tag-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-tag-labs/sample-po-tag-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-tag-labs`),Zg(),_u(29,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return a})();function Oe(a,c){if(a&1&&_u(0,`po-tag`,12),a&2){let l=c.$implicit;Ab(`p-label`,l.label)(`p-type`,l.type)(`p-value`,l.value)}}function Ie(a,c){if(a&1&&(Jc(0,`po-widget`,15)(1,`div`,3),_u(2,`po-info`,16)(3,`po-tag`,17),Zg()()),a&2){let l=c.$implicit;Ig(2),Ab(`p-label`,l.label)(`p-value`,l.value),Ig(),Ab(`p-type`,l.type)(`p-value`,l.text)}}function Ve(a,c){if(a&1&&(Jc(0,`po-tab`,14),$O(1,Ie,4,4,`po-widget`,15,HO),Zg()),a&2){let l=c.$implicit;Ab(`p-label`,Ok(l.month)),Ig(),zO(l.details)}}var fe=(()=>{class a{investiments=[{label:`Stocks`,type:`danger`,value:`Low -3.50%`},{label:`Treasury bills`,type:`success`,value:`Growing +2.25%`},{label:`Real estate`,type:`warning`,value:`Risk -0.02%`},{label:`Mutual fund`,type:`success`,value:`Growing +3.00%`}];items=[{month:`June`,details:[{label:`Automatic Payment`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Credit Card`,value:`$ 230`,type:`danger`,text:`Expense`},{label:`Personal Loan`,value:`$ 150`,type:`warning`,text:`Future`}]},{month:`July`,details:[{label:`Deposit`,value:`$ 500`,type:`success`,text:`Income`},{label:`Car insurance`,value:`$ 40`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 200`,type:`success`,text:`Income`},{label:`Bank statement`,value:`$ 5`,type:`info`,text:`Document`},{label:`Deposit`,value:`$ 70`,type:`success`,text:`Income`}]},{month:`August`,details:[{label:`Student Loan`,value:`$ 250`,type:`danger`,text:`Expense`},{label:`Deposit`,value:`$ 50`,type:`success`,text:`Income`},{label:`Bank receipt`,value:`$ 10`,type:`info`,text:`Document`},{label:`Automatic Payment`,value:`$ 230`,type:`warning`,text:`Future`},{label:`Credit Card`,value:`$ 150`,type:`warning`,text:`Future`}]}];advantages=[{title:`Platinum Card:`,description:`best card in the market. You earn points and have concierge service and cultural advice.`},{title:`Exclusive agencies:`,description:`environments designed to offer comfort and privacy.`},{title:`Unique experience`,description:`with exclusivity background in travel, culture, entertainment and much more.`},{title:`Progressive discounts`,description:`on service packages, according to the volume of investments.`},{title:`Free tax:`,description:`withdrawals and Transfers Between Unlimited Accounts.`}];userData={name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`};static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-bank-account`]],standalone:!1,decls:20,vars:4,consts:[[`p-title`,`Bank Statement`],[1,`po-mt-1`,`po-lg-7`],[`p-title`,`User information`,1,`po-md-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Name`,3,`p-value`],[`p-value`,`Premium Account`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-title`,`My Investiments`,1,`po-md-12`,`po-sm-mt-1`,`po-mt-1`,`po-lg-mt-1`],[1,`po-md-6`,`po-lg-3`,3,`p-label`,`p-type`,`p-value`],[`p-title`,`Last three month operations`,1,`po-mt-1`,`po-lg-5`],[`p-active`,``,3,`p-label`],[1,`po-lg-12`,`po-sm-mb-1`,`po-mb-1`,`po-lg-mb-1`],[`p-label-size`,`6`,`p-orientation`,`horizontal`,1,`po-lg-9`,`po-md-8`,3,`p-label`,`p-value`],[`p-icon`,``,`p-orientation`,`horizontal`,1,`po-lg-3`,`po-md-4`,3,`p-type`,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`div`,1)(2,`po-widget`,2)(3,`div`,3)(4,`div`,4),_u(5,`po-avatar`,5),Zg(),Jc(6,`div`,6)(7,`div`,7),_u(8,`po-info`,8)(9,`po-tag`,9),Zg(),Jc(10,`div`,7),_u(11,`po-info`,10),Zg()()()(),Jc(12,`po-widget`,11)(13,`div`,3),$O(14,Oe,1,3,`po-tag`,12,HO),Zg()()(),Jc(16,`po-widget`,13)(17,`po-tabs`),$O(18,Ve,3,2,`po-tab`,14,HO),Zg()()()),r&2&&(Ig(5),Ab(`p-src`,kk(`assets/graphics/`,i.userData.photo)),Ig(3),Ab(`p-value`,i.userData.name),Ig(3),Ab(`p-value`,i.userData.email),Ig(3),zO(i.investiments),Ig(4),zO(i.items))},dependencies:[c4,Ss,Joe,Mze,tre,are,bae],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-bank-account-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tag - Bank Account`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Bank Statement">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tag-bank-account`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var U=(a,c)=>c.color;var Ne=(a,c)=>c.name;function He(a,c){if(a&1&&_u(0,`po-tag`,3),a&2){let l=c.$implicit;Ab(`p-color`,l.color)(`p-value`,l.label)}}function Re(a,c){if(a&1&&_u(0,`po-tag`,5),a&2){let l=c.$implicit;Ab(`p-color`,l.color)(`p-label`,l.label)(`p-value`,l.value)}}function $e(a,c){if(a&1&&_u(0,`po-tag`,7),a&2){let l=c.$implicit;Ab(`p-color`,l.color)(`p-icon`,l.icon)(`p-value`,l.label)}}function je(a,c){if(a&1&&_u(0,`po-tag`,10),a&2){let l=c.$implicit;Ab(`p-color`,l.color)(`p-value`,l.label)}}function Ge(a,c){if(a&1&&(Jc(0,`po-tab`,9)(1,`div`,2),$O(2,je,1,2,`po-tag`,10,U),Zg()()),a&2){let l=c.$implicit;Ab(`p-label`,l.name),Ig(2),zO(l.tags)}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,`0`);return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:`Ativo`,value:`Em operacao`,color:`caption-tag-01`},{label:`Pendente`,value:`Aguardando aprovacao`,color:`caption-tag-06`},{label:`Em analise`,value:`Verificacao interna`,color:`caption-tag-11`},{label:`Concluido`,value:`Finalizado com sucesso`,color:`caption-tag-16`},{label:`Cancelado`,value:`Operacao cancelada`,color:`caption-tag-21`},{label:`Expirado`,value:`Prazo excedido`,color:`caption-tag-26`},{label:`Bloqueado`,value:`Acesso restrito`,color:`caption-tag-31`}];categories=[{label:`Financeiro`,color:`caption-tag-03`,icon:`an an-currency-circle-dollar`},{label:`Recursos Humanos`,color:`caption-tag-08`,icon:`an an-users`},{label:`Logistica`,color:`caption-tag-13`,icon:`an an-truck`},{label:`Vendas`,color:`caption-tag-18`,icon:`an an-shopping-cart-simple`},{label:`Suporte`,color:`caption-tag-23`,icon:`an an-headset`},{label:`Marketing`,color:`caption-tag-28`,icon:`an an-megaphone-simple`},{label:`TI`,color:`caption-tag-33`,icon:`an an-desktop-tower`}];families=[{name:`Familia 01-05`,tags:[{label:`caption-tag-01`,color:`caption-tag-01`},{label:`caption-tag-02`,color:`caption-tag-02`},{label:`caption-tag-03`,color:`caption-tag-03`},{label:`caption-tag-04`,color:`caption-tag-04`},{label:`caption-tag-05`,color:`caption-tag-05`}]},{name:`Familia 06-10`,tags:[{label:`caption-tag-06`,color:`caption-tag-06`},{label:`caption-tag-07`,color:`caption-tag-07`},{label:`caption-tag-08`,color:`caption-tag-08`},{label:`caption-tag-09`,color:`caption-tag-09`},{label:`caption-tag-10`,color:`caption-tag-10`}]},{name:`Familia 11-15`,tags:[{label:`caption-tag-11`,color:`caption-tag-11`},{label:`caption-tag-12`,color:`caption-tag-12`},{label:`caption-tag-13`,color:`caption-tag-13`},{label:`caption-tag-14`,color:`caption-tag-14`},{label:`caption-tag-15`,color:`caption-tag-15`}]},{name:`Familia 16-20`,tags:[{label:`caption-tag-16`,color:`caption-tag-16`},{label:`caption-tag-17`,color:`caption-tag-17`},{label:`caption-tag-18`,color:`caption-tag-18`},{label:`caption-tag-19`,color:`caption-tag-19`},{label:`caption-tag-20`,color:`caption-tag-20`}]},{name:`Familia 21-25`,tags:[{label:`caption-tag-21`,color:`caption-tag-21`},{label:`caption-tag-22`,color:`caption-tag-22`},{label:`caption-tag-23`,color:`caption-tag-23`},{label:`caption-tag-24`,color:`caption-tag-24`},{label:`caption-tag-25`,color:`caption-tag-25`}]},{name:`Familia 26-30`,tags:[{label:`caption-tag-26`,color:`caption-tag-26`},{label:`caption-tag-27`,color:`caption-tag-27`},{label:`caption-tag-28`,color:`caption-tag-28`},{label:`caption-tag-29`,color:`caption-tag-29`},{label:`caption-tag-30`,color:`caption-tag-30`}]},{name:`Familia 31-35`,tags:[{label:`caption-tag-31`,color:`caption-tag-31`},{label:`caption-tag-32`,color:`caption-tag-32`},{label:`caption-tag-33`,color:`caption-tag-33`},{label:`caption-tag-34`,color:`caption-tag-34`},{label:`caption-tag-35`,color:`caption-tag-35`}]}];static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-caption-tag-colors`]],standalone:!1,decls:17,vars:0,consts:[[`p-title`,`Caption Tag Colors`],[`p-title`,`Paleta completa - 35 cores`,1,`po-md-12`,`po-mb-1`],[1,`po-row`],[1,`po-md-3`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`],[`p-title`,`Status de processos`,1,`po-md-12`,`po-mb-1`],[`p-orientation`,`horizontal`,1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-label`,`p-value`],[`p-title`,`Categorias com icones`,1,`po-md-12`],[1,`po-md-4`,`po-lg-3`,`po-mb-1`,3,`p-color`,`p-icon`,`p-value`],[`p-title`,`Familias de cores`,1,`po-md-12`,`po-mb-1`],[3,`p-label`],[1,`po-md-4`,`po-lg-2`,`po-mb-1`,3,`p-color`,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-widget`,1)(2,`div`,2),$O(3,He,1,2,`po-tag`,3,U),Zg()(),Jc(5,`po-widget`,4)(6,`div`,2),$O(7,Re,1,3,`po-tag`,5,U),Zg()(),Jc(9,`po-widget`,6)(10,`div`,2),$O(11,$e,1,3,`po-tag`,7,U),Zg()(),Jc(13,`po-widget`,8)(14,`po-tabs`),$O(15,Ge,4,1,`po-tab`,9,Ne),Zg()()()),r&2&&(Ig(3),zO(i.captionTags),Ig(4),zO(i.statusItems),Ig(4),zO(i.categories),Ig(4),zO(i.families))},dependencies:[Ss,Mze,tre,are,bae],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-caption-tag-colors-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tag - Caption Tag Colors`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Caption Tag Colors">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tag-caption-tag-colors`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Je,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tag-doc`]],standalone:!1,decls:1168,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoTagLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTagOrientation`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTagModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-tag`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoTagComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),Zg(),Jc(18,`p`),Tk(19,`Além disso, é possível definir uma ação que será executada tanto ao `),Jc(20,`em`),Tk(21,`click`),Zg(),Tk(22,` quanto através das teclas `),Jc(23,`em`),Tk(24,`enter/space`),Zg(),Tk(25,` enquanto navega
utilizando a tecla `),Jc(26,`em`),Tk(27,`tab`),Zg(),Tk(28,`.`),Zg(),Jc(29,`p`),Tk(30,`Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.`),Zg(),Jc(31,`h4`),Tk(32,`Tokens customizáveis`),Zg(),Jc(33,`p`),Tk(34,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(35,`blockquote`)(36,`p`),Tk(37,`Para maiores informações, acesse o guia `),Jc(38,`a`,6),Tk(39,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(40,`.`),Zg()(),Jc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),Tk(45,`Propriedade`),Zg(),Jc(46,`th`),Tk(47,`Descrição`),Zg(),Jc(48,`th`),Tk(49,`Valor Padrão`),Zg()()(),Jc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),Tk(54,`Default Values`),Zg()(),_u(55,`td`)(56,`td`),Zg(),Jc(57,`tr`)(58,`td`)(59,`code`),Tk(60,`--font-family`),Zg()(),Jc(61,`td`),Tk(62,`Família tipográfica usada`),Zg(),Jc(63,`td`)(64,`code`),Tk(65,`var(--font-family-theme)`),Zg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Tk(69,`--font-size`),Zg()(),Jc(70,`td`),Tk(71,`Tamanho da fonte`),Zg(),Jc(72,`td`)(73,`code`),Tk(74,`var(--font-size-sm)`),Zg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Tk(78,`--line-height`),Zg()(),Jc(79,`td`),Tk(80,`Tamanho da label`),Zg(),Jc(81,`td`)(82,`code`),Tk(83,`var(---line-height-sm)`),Zg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Tk(87,`--border-radius`),Zg()(),Jc(88,`td`),Tk(89,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(90,`td`)(91,`code`),Tk(92,`var(--border-radius-pill)`),Zg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Tk(96,`--gap`),Zg()(),Jc(97,`td`),Tk(98,`Espaçamento entre o label e o value`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--spacing-xs)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`strong`),Tk(105,`Neutral`),Zg()(),_u(106,`td`)(107,`td`),Zg(),Jc(108,`tr`)(109,`td`)(110,`code`),Tk(111,`--color-neutral`),Zg()(),Jc(112,`td`),Tk(113,`Cor principal no estado neutral`),Zg(),Jc(114,`td`)(115,`code`),Tk(116,`var(--color-neutral-light-10)`),Zg()()(),Jc(117,`tr`)(118,`td`)(119,`code`),Tk(120,`--text-color-positive`),Zg()(),Jc(121,`td`),Tk(122,`Cor do texto no estado neutral`),Zg(),Jc(123,`td`)(124,`code`),Tk(125,`var(--color-neutral-dark-80)`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`strong`),Tk(129,`Positive`),Zg()(),_u(130,`td`)(131,`td`),Zg(),Jc(132,`tr`)(133,`td`)(134,`code`),Tk(135,`--color-positive`),Zg()(),Jc(136,`td`),Tk(137,`Cor principal no estado positive`),Zg(),Jc(138,`td`)(139,`code`),Tk(140,`var(--color-feedback-positive-lightest)`),Zg()()(),Jc(141,`tr`)(142,`td`)(143,`code`),Tk(144,`--text-color-positive`),Zg()(),Jc(145,`td`),Tk(146,`Cor do texto no estado positive`),Zg(),Jc(147,`td`)(148,`code`),Tk(149,`var(--color-feedback-positive-dark)`),Zg()()(),Jc(150,`tr`)(151,`td`)(152,`strong`),Tk(153,`Negative`),Zg()(),_u(154,`td`)(155,`td`),Zg(),Jc(156,`tr`)(157,`td`)(158,`code`),Tk(159,`--color-negative`),Zg()(),Jc(160,`td`),Tk(161,`Cor principal no estado danger`),Zg(),Jc(162,`td`)(163,`code`),Tk(164,`var(--color-feedback-negative-lightest)`),Zg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Tk(168,`--text-color-negative`),Zg()(),Jc(169,`td`),Tk(170,`Cor do texto no estado danger`),Zg(),Jc(171,`td`)(172,`code`),Tk(173,`var(--color-feedback-negative-darker)`),Zg()()(),Jc(174,`tr`)(175,`td`)(176,`strong`),Tk(177,`Warning`),Zg()(),_u(178,`td`)(179,`td`),Zg(),Jc(180,`tr`)(181,`td`)(182,`code`),Tk(183,`--color-tag-warning`),Zg()(),Jc(184,`td`),Tk(185,`Cor principal no estado warning`),Zg(),Jc(186,`td`)(187,`code`),Tk(188,`var(--color-feedback-warning-lightest)`),Zg()()(),Jc(189,`tr`)(190,`td`)(191,`code`),Tk(192,`--text-color-warning`),Zg()(),Jc(193,`td`),Tk(194,`Cor do texto no estado warning`),Zg(),Jc(195,`td`)(196,`code`),Tk(197,`var(--color-feedback-warning-darkest)`),Zg()()(),Jc(198,`tr`)(199,`td`)(200,`strong`),Tk(201,`Info`),Zg()(),_u(202,`td`)(203,`td`),Zg(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--color-info`),Zg()(),Jc(208,`td`),Tk(209,`Cor principal no estado info`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-feedback-info-lightest)`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Tk(216,`--text-color-info`),Zg()(),Jc(217,`td`),Tk(218,`Cor do texto no estado info`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-feedback-info-dark)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Tk(225,`Removable`),Zg()(),_u(226,`td`)(227,`td`),Zg(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--color`),Zg()(),Jc(232,`td`),Tk(233,`Cor principal quando removable`),Zg(),Jc(234,`td`)(235,`code`),Tk(236,`var(--color-brand-01-lightest)`),Zg()()(),Jc(237,`tr`)(238,`td`)(239,`code`),Tk(240,`--border-color`),Zg()(),Jc(241,`td`),Tk(242,`Cor de borda quando removable \xA0`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`var(--color-brand-01-lighter)`),Zg()()(),Jc(246,`tr`)(247,`td`)(248,`code`),Tk(249,`--color-icon`),Zg()(),Jc(250,`td`),Tk(251,`Cor do ícone quando removable \xA0`),Zg(),Jc(252,`td`)(253,`code`),Tk(254,`var(--color-action-default)`),Zg()()(),Jc(255,`tr`)(256,`td`)(257,`code`),Tk(258,`--text-color`),Zg()(),Jc(259,`td`),Tk(260,`Cor do texto quando removable \xA0`),Zg(),Jc(261,`td`)(262,`code`),Tk(263,`var(--color-neutral-dark-80)`),Zg()()(),Jc(264,`tr`)(265,`td`)(266,`code`),Tk(267,`--color-hover`),Zg()(),Jc(268,`td`),Tk(269,`Cor do hover no estado removable \xA0`),Zg(),Jc(270,`td`)(271,`code`),Tk(272,`var(--color-brand-01-lighter)`),Zg()()(),Jc(273,`tr`)(274,`td`)(275,`strong`),Tk(276,`Focused`),Zg()(),_u(277,`td`)(278,`td`),Zg(),Jc(279,`tr`)(280,`td`)(281,`code`),Tk(282,`--outline-color-focused`),Zg()(),Jc(283,`td`),Tk(284,`Cor do outline do estado de focus`),Zg(),Jc(285,`td`)(286,`code`),Tk(287,`var(--color-action-focus)`),Zg()()(),Jc(288,`tr`)(289,`td`)(290,`strong`),Tk(291,`Disabled`),Zg()(),_u(292,`td`)(293,`td`),Zg(),Jc(294,`tr`)(295,`td`)(296,`code`),Tk(297,`--color-disabled`),Zg()(),Jc(298,`td`),Tk(299,`Cor principal no estado disabled`),Zg(),Jc(300,`td`)(301,`code`),Tk(302,`var(--color-neutral-light-20)`),Zg()()(),Jc(303,`tr`)(304,`td`)(305,`code`),Tk(306,`--border-color-disabled`),Zg()(),Jc(307,`td`),Tk(308,`Cor da borda no estado disabled \xA0`),Zg(),Jc(309,`td`)(310,`code`),Tk(311,`var(--color-action-disabled)`),Zg()()(),Jc(312,`tr`)(313,`td`)(314,`code`),Tk(315,`--color-icon-disabled`),Zg()(),Jc(316,`td`),Tk(317,`Cor do icone no estado disabled \xA0`),Zg(),Jc(318,`td`)(319,`code`),Tk(320,`var(--color-action-disabled)`),Zg()()(),Jc(321,`tr`)(322,`td`)(323,`code`),Tk(324,`--text-color-disabled`),Zg()(),Jc(325,`td`),Tk(326,`Cor do texto no estado disabled \xA0`),Zg(),Jc(327,`td`)(328,`code`),Tk(329,`var(--color-neutral-mid-60)`),Zg()()()()()(),Jc(330,`div`,7)(331,`h4`,8),Tk(332,`Seletor`),Zg(),Jc(333,`pre`,9),Tk(334,`<po-tag
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
`),Zg()(),Jc(335,`h4`,10),Tk(336,`Propriedades`),Zg(),Jc(337,`table`,11)(338,`tr`,12)(339,`th`,13),Tk(340,`Nome`),Zg(),Jc(341,`th`,13),Tk(342,`Tipo`),Zg(),Jc(343,`th`,13),Tk(344,`Padrão`),Zg(),Jc(345,`th`,13),Tk(346,`Descrição`),Zg()(),Jc(347,`tr`,14)(348,`td`,15)(349,`div`,16)(350,`span`,17),Tk(351,` (p-click)`),_u(352,`br`),Zg()()(),Jc(353,`td`,18)(354,`code`,19),Tk(355,`EventEmitter`),Zg()(),Jc(356,`td`,20),Tk(357,`-`),Zg(),Jc(358,`td`,21)(359,`em`)(360,`strong`),Tk(361,`(opcional)`),Zg()(),Jc(362,`p`),Tk(363,`Ação que será executada ao clicar sobre o `),Jc(364,`code`),Tk(365,`po-tag`),Zg(),Tk(366,` e que receberá como parâmetro um objeto contendo o seu valor e tipo.`),Zg(),Jc(367,`p`),Tk(368,`O evento de click só funciona se a tag não for removível.`),Zg()()(),Jc(369,`tr`,14)(370,`td`,15)(371,`div`,22)(372,`span`,23),Tk(373,` p-color`),_u(374,`br`),Zg()()(),Jc(375,`td`,18)(376,`code`,24),Tk(377,`string`),Zg()(),Jc(378,`td`,20),Tk(379,`-`),Zg(),Jc(380,`td`,21)(381,`em`)(382,`strong`),Tk(383,`(opcional)`),Zg()(),Jc(384,`p`),Tk(385,`Determina a cor da tag. As maneiras de customizar as cores são:`),Zg(),Jc(386,`ul`)(387,`li`),Tk(388,`Hexadeximal, por exemplo `),Jc(389,`code`),Tk(390,`#c64840`),Zg(),Tk(391,`;`),Zg(),Jc(392,`li`),Tk(393,`RGB, como `),Jc(394,`code`),Tk(395,`rgb(0, 0, 165)`),Zg(),Tk(396,`;`),Zg(),Jc(397,`li`),Tk(398,`O nome da cor, por exemplo `),Jc(399,`code`),Tk(400,`blue`),Zg(),Tk(401,`;`),Zg(),Jc(402,`li`),Tk(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Jc(404,`ul`)(405,`li`),_u(406,`span`,25),Jc(407,`code`),Tk(408,`color-01`),Zg()(),Jc(409,`li`),_u(410,`span`,26),Jc(411,`code`),Tk(412,`color-02`),Zg()(),Jc(413,`li`),_u(414,`span`,27),Jc(415,`code`),Tk(416,`color-03`),Zg()(),Jc(417,`li`),_u(418,`span`,28),Jc(419,`code`),Tk(420,`color-04`),Zg()(),Jc(421,`li`),_u(422,`span`,29),Jc(423,`code`),Tk(424,`color-05`),Zg()(),Jc(425,`li`),_u(426,`span`,30),Jc(427,`code`),Tk(428,`color-06`),Zg()(),Jc(429,`li`),_u(430,`span`,31),Jc(431,`code`),Tk(432,`color-07`),Zg()(),Jc(433,`li`),_u(434,`span`,32),Jc(435,`code`),Tk(436,`color-08`),Zg()(),Jc(437,`li`),_u(438,`span`,33),Jc(439,`code`),Tk(440,`color-09`),Zg()(),Jc(441,`li`),_u(442,`span`,34),Jc(443,`code`),Tk(444,`color-10`),Zg()(),Jc(445,`li`),_u(446,`span`,35),Jc(447,`code`),Tk(448,`color-11`),Zg()(),Jc(449,`li`),_u(450,`span`,36),Jc(451,`code`),Tk(452,`color-12`),Zg()()()()(),Jc(453,`blockquote`)(454,`p`),Tk(455,`Também é possível utilizar as 35 cores da paleta `),Jc(456,`strong`),Tk(457,`Caption Tag Colors`),Zg(),Tk(458,`:`),Zg()(),Jc(459,`ul`)(460,`li`),_u(461,`span`,37),Jc(462,`code`),Tk(463,`caption-tag-01`),Zg(),_u(464,`span`,38),Jc(465,`code`),Tk(466,`caption-tag-02`),Zg(),_u(467,`span`,39),Jc(468,`code`),Tk(469,`caption-tag-03`),Zg(),_u(470,`span`,40),Jc(471,`code`),Tk(472,`caption-tag-04`),Zg(),_u(473,`span`,41),Jc(474,`code`),Tk(475,`caption-tag-05`),Zg()(),Jc(476,`li`),_u(477,`span`,42),Jc(478,`code`),Tk(479,`caption-tag-06`),Zg(),_u(480,`span`,43),Jc(481,`code`),Tk(482,`caption-tag-07`),Zg(),_u(483,`span`,44),Jc(484,`code`),Tk(485,`caption-tag-08`),Zg(),_u(486,`span`,45),Jc(487,`code`),Tk(488,`caption-tag-09`),Zg(),_u(489,`span`,46),Jc(490,`code`),Tk(491,`caption-tag-10`),Zg()(),Jc(492,`li`),_u(493,`span`,47),Jc(494,`code`),Tk(495,`caption-tag-11`),Zg(),_u(496,`span`,48),Jc(497,`code`),Tk(498,`caption-tag-12`),Zg(),_u(499,`span`,49),Jc(500,`code`),Tk(501,`caption-tag-13`),Zg(),_u(502,`span`,50),Jc(503,`code`),Tk(504,`caption-tag-14`),Zg(),_u(505,`span`,51),Jc(506,`code`),Tk(507,`caption-tag-15`),Zg()(),Jc(508,`li`),_u(509,`span`,52),Jc(510,`code`),Tk(511,`caption-tag-16`),Zg(),_u(512,`span`,53),Jc(513,`code`),Tk(514,`caption-tag-17`),Zg(),_u(515,`span`,54),Jc(516,`code`),Tk(517,`caption-tag-18`),Zg(),_u(518,`span`,55),Jc(519,`code`),Tk(520,`caption-tag-19`),Zg(),_u(521,`span`,56),Jc(522,`code`),Tk(523,`caption-tag-20`),Zg()(),Jc(524,`li`),_u(525,`span`,57),Jc(526,`code`),Tk(527,`caption-tag-21`),Zg(),_u(528,`span`,58),Jc(529,`code`),Tk(530,`caption-tag-22`),Zg(),_u(531,`span`,59),Jc(532,`code`),Tk(533,`caption-tag-23`),Zg(),_u(534,`span`,60),Jc(535,`code`),Tk(536,`caption-tag-24`),Zg(),_u(537,`span`,61),Jc(538,`code`),Tk(539,`caption-tag-25`),Zg()(),Jc(540,`li`),_u(541,`span`,62),Jc(542,`code`),Tk(543,`caption-tag-26`),Zg(),_u(544,`span`,63),Jc(545,`code`),Tk(546,`caption-tag-27`),Zg(),_u(547,`span`,64),Jc(548,`code`),Tk(549,`caption-tag-28`),Zg(),_u(550,`span`,65),Jc(551,`code`),Tk(552,`caption-tag-29`),Zg(),_u(553,`span`,66),Jc(554,`code`),Tk(555,`caption-tag-30`),Zg()(),Jc(556,`li`),_u(557,`span`,67),Jc(558,`code`),Tk(559,`caption-tag-31`),Zg(),_u(560,`span`,68),Jc(561,`code`),Tk(562,`caption-tag-32`),Zg(),_u(563,`span`,69),Jc(564,`code`),Tk(565,`caption-tag-33`),Zg(),_u(566,`span`,70),Jc(567,`code`),Tk(568,`caption-tag-34`),Zg(),_u(569,`span`,71),Jc(570,`code`),Tk(571,`caption-tag-35`),Zg()()(),Jc(572,`p`),Tk(573,`Exemplo de uso:`),Zg(),Jc(574,`pre`)(575,`code`),Tk(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),Zg()(),Jc(577,`ul`)(578,`li`),Tk(579,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background;`),Zg(),Jc(580,`li`),Tk(581,`Para as cores legacy (`),Jc(582,`code`),Tk(583,`color-01`),Zg(),Tk(584,` a `),Jc(585,`code`),Tk(586,`color-12`),Zg(),Tk(587,`) e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade.`),Zg(),Jc(588,`li`),Tk(589,`Para as cores `),Jc(590,`strong`),Tk(591,`Caption Tag Colors`),Zg(),Tk(592,` (`),Jc(593,`code`),Tk(594,`caption-tag-01`),Zg(),Tk(595,` a `),Jc(596,`code`),Tk(597,`caption-tag-35`),Zg(),Tk(598,`), a cor do texto é fixa e definida via token CSS, não sendo possível alterá-la via `),Jc(599,`code`),Tk(600,`p-text-color`),Zg(),Tk(601,`.`),Zg()(),Jc(602,`blockquote`)(603,`p`)(604,`strong`),Tk(605,`Atenção:`),Zg(),Tk(606,` A propriedade `),Jc(607,`code`),Tk(608,`p-type`),Zg(),Tk(609,` sobrepõe esta definição.`),Zg()()()(),Jc(610,`tr`,14)(611,`td`,15)(612,`div`,22)(613,`span`,23),Tk(614,` p-disabled`),_u(615,`br`),Zg()()(),Jc(616,`td`,18)(617,`code`,72),Tk(618,`boolean`),Zg()(),Jc(619,`td`,20)(620,`p`)(621,`code`),Tk(622,`false`),Zg()()(),Jc(623,`td`,21)(624,`em`)(625,`strong`),Tk(626,`(opcional)`),Zg()(),Jc(627,`p`),Tk(628,`Desabilita o `),Jc(629,`code`),Tk(630,`po-tag`),Zg(),Tk(631,` e não permite que o usuário interaja com o mesmo.`),Zg(),Jc(632,`blockquote`)(633,`p`),Tk(634,`A propriedade `),Jc(635,`code`),Tk(636,`p-disabled`),Zg(),Tk(637,` somente terá efeito caso a propriedade `),Jc(638,`code`),Tk(639,`p-removable`),Zg(),Tk(640,` esteja definida como `),Jc(641,`code`),Tk(642,`true`),Zg(),Tk(643,`.`),Zg()()()(),Jc(644,`tr`,14)(645,`td`,15)(646,`div`,22)(647,`span`,23),Tk(648,` p-icon`),_u(649,`br`),Zg()()(),Jc(650,`td`,18)(651,`code`,24),Tk(652,`string `),Zg(),Jc(653,`code`,72),Tk(654,` boolean `),Zg(),Jc(655,`code`,73),Tk(656,` TemplateRef<void>`),Zg()(),Jc(657,`td`,20)(658,`p`)(659,`code`),Tk(660,`false`),Zg()()(),Jc(661,`td`,21)(662,`em`)(663,`strong`),Tk(664,`(opcional)`),Zg()(),Jc(665,`p`),Tk(666,`Define ou ativa um ícone que será exibido ao lado do valor da `),Jc(667,`em`),Tk(668,`tag`),Zg(),Tk(669,`.`),Zg(),Jc(670,`p`),Tk(671,`Quando `),Jc(672,`code`),Tk(673,`p-type`),Zg(),Tk(674,` estiver definida, basta informar um valor igual a `),Jc(675,`code`),Tk(676,`true`),Zg(),Tk(677,` para que o ícone seja exibido conforme descrições abaixo:`),Zg(),Jc(678,`ul`)(679,`li`),_u(680,`span`,74),Tk(681,` - `),Jc(682,`code`),Tk(683,`success`),Zg()(),Jc(684,`li`),_u(685,`span`,75),Tk(686,` - `),Jc(687,`code`),Tk(688,`warning`),Zg()(),Jc(689,`li`),_u(690,`span`,76),Tk(691,` - `),Jc(692,`code`),Tk(693,`danger`),Zg()(),Jc(694,`li`),_u(695,`span`,77),Tk(696,` - `),Jc(697,`code`),Tk(698,`info`),Zg()()(),Jc(699,`p`),Tk(700,`Também É possível usar qualquer um dos ícones da `),Jc(701,`a`,78),Tk(702,`Biblioteca de ícones`),Zg(),Tk(703,`. conforme exemplo abaixo:`),Zg(),Jc(704,`pre`)(705,`code`),Tk(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),Zg()(),Jc(707,`p`),Tk(708,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(709,`em`),Tk(710,`Font Awesome`),Zg(),Tk(711,`, da seguinte forma:`),Zg(),Jc(712,`pre`)(713,`code`),Tk(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),Zg()(),Jc(715,`p`),Tk(716,`Outra opção seria a customização do ícone através do `),Jc(717,`code`),Tk(718,`TemplateRef`),Zg(),Tk(719,`, conforme exemplo abaixo:`),Zg(),Jc(720,`pre`)(721,`code`),Tk(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(723,`blockquote`)(724,`p`),Tk(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(726,`code`),Tk(727,`font-size: inherit`),Zg(),Tk(728,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(729,`tr`,14)(730,`td`,15)(731,`div`,22)(732,`span`,23),Tk(733,` p-label`),_u(734,`br`),Zg()()(),Jc(735,`td`,18)(736,`code`,24),Tk(737,`string`),Zg()(),Jc(738,`td`,20),Tk(739,`-`),Zg(),Jc(740,`td`,21)(741,`em`)(742,`strong`),Tk(743,`(opcional)`),Zg()(),Jc(744,`p`),Tk(745,`Define uma legenda que será exibida acima ou ao lado da `),Jc(746,`em`),Tk(747,`tag`),Zg(),Tk(748,`, de acordo com a `),Jc(749,`code`),Tk(750,`p-orientation`),Zg(),Tk(751,`.`),Zg()()(),Jc(752,`tr`,14)(753,`td`,15)(754,`div`,22)(755,`span`,23),Tk(756,` p-literals`),_u(757,`br`),Zg()()(),Jc(758,`td`,18)(759,`code`,79),Tk(760,`PoTagLiterals`),Zg()(),Jc(761,`td`,20),Tk(762,`-`),Zg(),Jc(763,`td`,21)(764,`em`)(765,`strong`),Tk(766,`(opcional)`),Zg()(),Jc(767,`p`),Tk(768,`Objeto com as literais usadas no `),Jc(769,`code`),Tk(770,`po-tag`),Zg(),Tk(771,`.`),Zg(),Jc(772,`p`),Tk(773,`Para utilizar, basta passar a literal customizada:`),Zg(),Jc(774,`pre`)(775,`code`),Tk(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),Zg()(),Jc(777,`p`),Tk(778,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Zg(),Jc(779,`pre`)(780,`code`),Tk(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),Zg()(),Jc(782,`blockquote`)(783,`p`),Tk(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(785,`a`,80)(786,`code`),Tk(787,`PoI18nService`),Zg()(),Tk(788,` ou do browser.`),Zg()()()(),Jc(789,`tr`,14)(790,`td`,15)(791,`div`,22)(792,`span`,23),Tk(793,` p-orientation`),_u(794,`br`),Zg()()(),Jc(795,`td`,18)(796,`code`,81),Tk(797,`PoTagOrientation`),Zg()(),Jc(798,`td`,20)(799,`p`)(800,`code`),Tk(801,`vertical`),Zg()()(),Jc(802,`td`,21)(803,`em`)(804,`strong`),Tk(805,`(opcional)`),Zg()(),Jc(806,`p`),Tk(807,`Define o `),Jc(808,`em`),Tk(809,`layout`),Zg(),Tk(810,` de exibição.`),Zg()()(),Jc(811,`tr`,14)(812,`td`,15)(813,`div`,22)(814,`span`,23),Tk(815,` p-removable`),_u(816,`br`),Zg()()(),Jc(817,`td`,18)(818,`code`,72),Tk(819,`boolean`),Zg()(),Jc(820,`td`,20)(821,`p`)(822,`code`),Tk(823,`false`),Zg()()(),Jc(824,`td`,21)(825,`em`)(826,`strong`),Tk(827,`(opcional)`),Zg()(),Jc(828,`p`),Tk(829,`Habilita a opção de remover a tag`),Zg()()(),Jc(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),Tk(834,` (p-close)`),_u(835,`br`),Zg()()(),Jc(836,`td`,18)(837,`code`,19),Tk(838,`EventEmitter`),Zg()(),Jc(839,`td`,20),Tk(840,`-`),Zg(),Jc(841,`td`,21)(842,`em`)(843,`strong`),Tk(844,`(opcional)`),Zg()(),Jc(845,`p`),Tk(846,`Ação que sera executada quando clicar sobre o ícone de remover no `),Jc(847,`code`),Tk(848,`po-tag`),Zg()()()(),Jc(849,`tr`,14)(850,`td`,15)(851,`div`,22)(852,`span`,23),Tk(853,` p-text-color`),_u(854,`br`),Zg()()(),Jc(855,`td`,18)(856,`code`,24),Tk(857,`string`),Zg()(),Jc(858,`td`,20),Tk(859,`-`),Zg(),Jc(860,`td`,21)(861,`em`)(862,`strong`),Tk(863,`(opcional)`),Zg()(),Jc(864,`p`),Tk(865,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Zg(),Jc(866,`ul`)(867,`li`)(868,`p`),Tk(869,`Hexadeximal, por exemplo `),Jc(870,`code`),Tk(871,`#c64840`),Zg(),Tk(872,`;`),Zg()(),Jc(873,`li`)(874,`p`),Tk(875,`RGB, como `),Jc(876,`code`),Tk(877,`rgb(0, 0, 165)`),Zg(),Tk(878,`;`),Zg()(),Jc(879,`li`)(880,`p`),Tk(881,`O nome da cor, por exemplo `),Jc(882,`code`),Tk(883,`blue`),Zg(),Tk(884,`;`),Zg()(),Jc(885,`li`)(886,`p`),Tk(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Zg(),Jc(888,`ul`)(889,`li`),_u(890,`span`,25),Jc(891,`code`),Tk(892,`color-01`),Zg()(),Jc(893,`li`),_u(894,`span`,26),Jc(895,`code`),Tk(896,`color-02`),Zg()(),Jc(897,`li`),_u(898,`span`,27),Jc(899,`code`),Tk(900,`color-03`),Zg()(),Jc(901,`li`),_u(902,`span`,28),Jc(903,`code`),Tk(904,`color-04`),Zg()(),Jc(905,`li`),_u(906,`span`,29),Jc(907,`code`),Tk(908,`color-05`),Zg()(),Jc(909,`li`),_u(910,`span`,30),Jc(911,`code`),Tk(912,`color-06`),Zg()(),Jc(913,`li`),_u(914,`span`,31),Jc(915,`code`),Tk(916,`color-07`),Zg()(),Jc(917,`li`),_u(918,`span`,32),Jc(919,`code`),Tk(920,`color-08`),Zg()(),Jc(921,`li`),_u(922,`span`,33),Jc(923,`code`),Tk(924,`color-09`),Zg()(),Jc(925,`li`),_u(926,`span`,34),Jc(927,`code`),Tk(928,`color-10`),Zg()(),Jc(929,`li`),_u(930,`span`,35),Jc(931,`code`),Tk(932,`color-11`),Zg()(),Jc(933,`li`),_u(934,`span`,36),Jc(935,`code`),Tk(936,`color-12`),Zg()()()(),Jc(937,`li`)(938,`p`),Tk(939,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),Zg()()(),Jc(940,`blockquote`)(941,`p`)(942,`strong`),Tk(943,`Atenção:`),Zg(),Tk(944,` A propriedade `),Jc(945,`code`),Tk(946,`p-type`),Zg(),Tk(947,` sobrepõe esta definição.`),Zg()(),Jc(948,`blockquote`)(949,`p`)(950,`strong`),Tk(951,`Atenção:`),Zg(),Tk(952,` As cores da paleta `),Jc(953,`strong`),Tk(954,`Caption Tag Colors`),Zg(),Tk(955,` (`),Jc(956,`code`),Tk(957,`caption-tag-01`),Zg(),Tk(958,` a `),Jc(959,`code`),Tk(960,`caption-tag-35`),Zg(),Tk(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),Zg()()()(),Jc(962,`tr`,14)(963,`td`,15)(964,`div`,22)(965,`span`,23),Tk(966,` p-type`),_u(967,`br`),Zg()()(),Jc(968,`td`,18)(969,`code`,82),Tk(970,`PoTagType`),Zg()(),Jc(971,`td`,20)(972,`p`)(973,`code`),Tk(974,`info`),Zg()()(),Jc(975,`td`,21)(976,`em`)(977,`strong`),Tk(978,`(opcional)`),Zg()(),Jc(979,`p`),Tk(980,`Define o tipo da `),Jc(981,`em`),Tk(982,`tag`),Zg(),Tk(983,`.`),Zg(),Jc(984,`p`),Tk(985,`Valores válidos:`),Zg(),Jc(986,`ul`)(987,`li`)(988,`code`),Tk(989,`success`),Zg(),Tk(990,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Zg(),Jc(991,`li`)(992,`code`),Tk(993,`warning`),Zg(),Tk(994,`: cor amarela que representa aviso ou advertência.`),Zg(),Jc(995,`li`)(996,`code`),Tk(997,`danger`),Zg(),Tk(998,`: cor vermelha para erro ou aviso crítico.`),Zg(),Jc(999,`li`)(1e3,`code`),Tk(1001,`info`),Zg(),Tk(1002,`: cor azul claro que caracteriza conteúdo informativo.`),Zg(),Jc(1003,`li`)(1004,`code`),Tk(1005,`neutral`),Zg(),Tk(1006,`: cor cinza claro para uso geral.`),Zg()(),Jc(1007,`blockquote`)(1008,`p`),Tk(1009,`Quando esta propriedade for definida, irá sobrepor a definição de `),Jc(1010,`code`),Tk(1011,`p-color`),Zg(),Tk(1012,` e `),Jc(1013,`code`),Tk(1014,`p-icon`),Zg(),Tk(1015,` somente será exibido caso seja `),Jc(1016,`code`),Tk(1017,`true`),Zg(),Tk(1018,`.`),Zg()()()(),Jc(1019,`tr`,14)(1020,`td`,15)(1021,`div`,22)(1022,`span`,23),Tk(1023,` p-value`),_u(1024,`br`),Zg()()(),Jc(1025,`td`,18)(1026,`code`,24),Tk(1027,`string`),Zg()(),Jc(1028,`td`,20),Tk(1029,`-`),Zg(),Jc(1030,`td`,21)(1031,`p`),Tk(1032,`Texto da tag.`),Zg()()()(),Jc(1033,`h3`),Tk(1034,`Interfaces`),Zg(),Jc(1035,`h4`,83)(1036,`code`,5),Tk(1037,`PoTagLiterals`),Zg()(),Jc(1038,`div`,2)(1039,`p`),Tk(1040,`Interface para definição das literais usadas no `),Jc(1041,`code`),Tk(1042,`po-tag`),Zg(),Tk(1043,`.`),Zg()(),Jc(1044,`h4`,10),Tk(1045,`Propriedades`),Zg(),Jc(1046,`table`,11)(1047,`tr`,12)(1048,`th`,13),Tk(1049,`Nome`),Zg(),Jc(1050,`th`,13),Tk(1051,`Tipo`),Zg(),Jc(1052,`th`,13),Tk(1053,`Descrição`),Zg()(),Jc(1054,`tr`,14)(1055,`td`,15)(1056,`div`,22)(1057,`span`,23),Tk(1058,` remove`),_u(1059,`br`),Zg()()(),Jc(1060,`td`,18)(1061,`code`,24),Tk(1062,`string`),Zg()(),Jc(1063,`td`,21)(1064,`em`)(1065,`strong`),Tk(1066,`(opcional)`),Zg()(),Jc(1067,`p`),Tk(1068,`Texto exibido no tooltip indicando remoção da tag.`),Zg()()()(),Jc(1069,`h3`),Tk(1070,`Enums`),Zg(),Jc(1071,`h4`,4)(1072,`code`,5),Tk(1073,`PoTagOrientation`),Zg()(),Jc(1074,`div`,2)(1075,`p`),Tk(1076,`Define os tipos de orientações disponíveis para o `),Jc(1077,`code`),Tk(1078,`po-tag`),Zg(),Tk(1079,`.`),Zg()(),Jc(1080,`h4`,10),Tk(1081,`Propriedades`),Zg(),Jc(1082,`table`,11)(1083,`tr`,12)(1084,`th`,13),Tk(1085,`Nome`),Zg(),Jc(1086,`th`,13),Tk(1087,`Descrição`),Zg()(),Jc(1088,`tr`,14)(1089,`td`,15)(1090,`div`,22)(1091,`span`,23),Tk(1092,` Horizontal`),_u(1093,`br`),Zg()()(),Jc(1094,`td`,21)(1095,`p`),Tk(1096,`A tag será exibida na horizontal, ao lado direito em relação ao label.`),Zg()()(),Jc(1097,`tr`,14)(1098,`td`,15)(1099,`div`,22)(1100,`span`,23),Tk(1101,` Vertical`),_u(1102,`br`),Zg()()(),Jc(1103,`td`,21)(1104,`p`),Tk(1105,`Exibe a tag na vertical, ou seja, abaixo do label.`),Zg()()()(),Jc(1106,`h4`,4)(1107,`code`,5),Tk(1108,`PoTagType`),Zg()(),Jc(1109,`div`,2)(1110,`p`),Tk(1111,`Define os tipos disponíveis para o `),Jc(1112,`code`),Tk(1113,`po-tag`),Zg(),Tk(1114,`.`),Zg()(),Jc(1115,`h4`,10),Tk(1116,`Propriedades`),Zg(),Jc(1117,`table`,11)(1118,`tr`,12)(1119,`th`,13),Tk(1120,`Nome`),Zg(),Jc(1121,`th`,13),Tk(1122,`Descrição`),Zg()(),Jc(1123,`tr`,14)(1124,`td`,15)(1125,`div`,22)(1126,`span`,23),Tk(1127,` Danger`),_u(1128,`br`),Zg()()(),Jc(1129,`td`,21)(1130,`p`),Tk(1131,`Erro, perigo, problema ou aviso crítico.`),Zg()()(),Jc(1132,`tr`,14)(1133,`td`,15)(1134,`div`,22)(1135,`span`,23),Tk(1136,` Info`),_u(1137,`br`),Zg()()(),Jc(1138,`td`,21)(1139,`p`),Tk(1140,`Informativo ou explicativo.`),Zg()()(),Jc(1141,`tr`,14)(1142,`td`,15)(1143,`div`,22)(1144,`span`,23),Tk(1145,` Success`),_u(1146,`br`),Zg()()(),Jc(1147,`td`,21)(1148,`p`),Tk(1149,`Confirmação, resultados positivos ou êxito.`),Zg()()(),Jc(1150,`tr`,14)(1151,`td`,15)(1152,`div`,22)(1153,`span`,23),Tk(1154,` Warning`),_u(1155,`br`),Zg()()(),Jc(1156,`td`,21)(1157,`p`),Tk(1158,`Aviso ou advertência.`),Zg()()(),Jc(1159,`tr`,14)(1160,`td`,15)(1161,`div`,22)(1162,`span`,23),Tk(1163,` Neutral`),_u(1164,`br`),Zg()()(),Jc(1165,`td`,21)(1166,`p`),Tk(1167,`De uso geral, quando os tipos Info, Warning, Success e Danger não atendem a necessidade.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ke(a,c){if(a&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(l);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-tag-basic-view`)(2,`sample-po-tag-labs-view`)(3,`sample-po-tag-bank-account-view`)(4,`sample-po-tag-caption-tag-colors-view`),Zg()}if(a&2){let l=nk();Ab(`p-active`,l.activeTab===`web`)}}var Xe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ke,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-tag-doc`),Zg()()()),r&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Xe),WV]})}return a})();var kt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,we]})}return a})();export{kt as DocPoTagModule};