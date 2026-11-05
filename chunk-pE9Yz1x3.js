import{$i as h,A as Hoe,Ai as _O,B as L4,Ci as Y,Cn as oi,Ct as Yoe,Da as pe,E as H4,Ea as pO,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,Ja as we$1,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Wa as vo,Xt as ere,Ya as wg,Za as xF,aa as iu,ai as Sn,dr as DO,dt as TP,et as P5,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,kr as He$1,ma as lO,mi as VE,mt as Tze,ni as SF,nr as Ag,o as Aze,qr as Ok,qt as dte,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,si as T,ui as UE,va as mt,wr as Fx,xa as nu,xi as Ww,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var Ve=()=>({label:`PO UI - Angular Framework`,link:`/`});var Re=a=>[a];var Me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(l,i){l&1&&nu(0,`po-menu`,0),l&2&&UE(`p-menus`,DO(2,Re,_O(1,Ve)))},dependencies:[P5],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Menu Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-menu-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Me],encapsulation:2,changeDetection:1})}return a})();function Be(a,F){if(a&1&&(jc(0,`div`),nu(1,`span`),jc(2,`span`,26),lO(3),wg()()),a&2){let m=F.$implicit;rg(),Xx(pO(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),rg(2),Ag(` `,m.label,` `)}}var we=(()=>{class a{changeDetector=h(He$1);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(l){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,l){let i;if(m){for(let s of m)if(s.id===l){i=s;break}else i||(i=this.getMenuParent(s.subItems,l));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(l=>{this.parentList.push({label:`- ${l.label}`,value:l.id}),l.subItems&&l.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(l,i){if(l&1&&iu(P5,7),l&2){let s;yo(s=vo())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(l,i){if(l&1){let s=Ax();jc(0,`div`,1),nu(1,`po-menu`,2),jc(2,`po-page-default`,3)(3,`div`,4),nu(4,`po-info`,5)(5,`po-button-group`,6),wg(),nu(6,`po-divider`),jc(7,`div`,4),nu(8,`po-info`,7),jc(9,`form`,null,0)(11,`po-switch`,8),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.filter,r)||(i.filter=r),__(r)}),mt(`ngModelChange`,function(r){return i.onFilterChange(r)}),wg(),jc(12,`po-switch`,9),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.searchTreeItems,r)||(i.searchTreeItems=r),__(r)}),wg(),jc(13,`po-select`,10),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.parent,r)||(i.parent=r),__(r)}),wg(),jc(14,`po-input`,11),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.label,r)||(i.label=r),__(r)}),wg(),jc(15,`po-input`,12),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.shortLabel,r)||(i.shortLabel=r),__(r)}),wg(),jc(16,`po-url`,13),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.link,r)||(i.link=r),__(r)}),wg(),jc(17,`po-select`,14),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.badgeColor,r)||(i.badgeColor=r),__(r)}),VE(18,Be,4,4,`ng-template`,15),wg(),jc(19,`po-number`,16),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.badgeValue,r)||(i.badgeValue=r),__(r)}),wg(),jc(20,`po-select`,17),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.icon,r)||(i.icon=r),__(r)}),wg(),jc(21,`div`,4)(22,`po-button`,18),mt(`p-click`,function(){return i.addMenuItem()}),wg()(),nu(23,`po-divider`),jc(24,`po-input`,19),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.service,r)||(i.service=r),__(r)}),wg(),jc(25,`po-input`,20),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.menuParams,r)||(i.menuParams=r),__(r)}),mt(`p-change-model`,function(r){return i.onChangeParams(r)}),wg(),jc(26,`po-input`,21),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.logo,r)||(i.logo=r),__(r)}),wg(),jc(27,`po-input`,22),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.shortLogo,r)||(i.shortLogo=r),__(r)}),wg(),jc(28,`po-input`,23),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.logoLink,r)||(i.logoLink=r),__(r)}),wg(),jc(29,`po-radio-group`,24),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(i.componentsSize,r)||(i.componentsSize=r),__(r)}),wg(),jc(30,`div`,4)(31,`po-button`,25),mt(`p-click`,function(){return i.restore()}),wg()()()()()()}l&2&&(rg(),UE(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),rg(4),UE(`p-buttons`,i.buttons),rg(3),UE(`p-value`,i.menuItemSelected),rg(3),sb(`ngModel`,i.filter),o0(),rg(),sb(`ngModel`,i.searchTreeItems),UE(`p-disabled`,!i.filter),o0(),rg(),sb(`ngModel`,i.parent),UE(`p-options`,i.parentList),o0(),rg(),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.shortLabel),o0(),rg(),sb(`ngModel`,i.link),o0(),rg(),sb(`ngModel`,i.badgeColor),UE(`p-options`,i.badgeColorList),o0(),rg(2),sb(`ngModel`,i.badgeValue),UE(`p-max`,i.maxBadgeValue),o0(),rg(),sb(`ngModel`,i.icon),UE(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),o0(),rg(4),sb(`ngModel`,i.service),o0(),rg(),sb(`ngModel`,i.menuParams),o0(),rg(),sb(`ngModel`,i.logo),o0(),rg(),sb(`ngModel`,i.shortLogo),o0(),rg(),sb(`ngModel`,i.logoLink),o0(),rg(),sb(`ngModel`,i.componentsSize),UE(`p-options`,i.componentsSizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,dte,Lf,U4,Hoe,Gte,Woe,L4,H4,Yoe,P5,Tze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Menu Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-wrapper">
  <po-menu
    [p-components-size]="componentsSize"
    [p-filter]="filter"
    [p-logo]="logo"
    [p-logo-link]="logoLink"
    [p-menus]="menuItems"
    [p-params]="params"
    [p-service]="service"
    [p-short-logo]="shortLogo"
    [p-search-tree-items]="searchTreeItems"
  >
  </po-menu>

  <po-page-default p-title="PO Menu">
    <div class="po-row">
      <po-info class="po-lg-12" p-label="Methods" p-value="Only if all menu items have icon and short label.">
      </po-info>

      <po-button-group class="po-lg-12" [p-buttons]="buttons"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>

      <form #f="ngForm">
        <po-switch
          class="po-lg-6"
          name="filterMenu"
          [(ngModel)]="filter"
          p-label="Filter"
          p-label-off="Disabled"
          p-label-on="Enabled"
          (ngModelChange)="onFilterChange($event)"
        >
        </po-switch>

        <po-switch
          class="po-lg-6"
          name="searchTreeItems"
          [(ngModel)]="searchTreeItems"
          p-label="Filter Search Tree Items"
          p-label-off="Disabled"
          p-label-on="Enabled"
          [p-disabled]="!filter"
        >
        </po-switch>

        <po-select
          class="po-md-4"
          name="parent"
          [(ngModel)]="parent"
          p-label="Parent"
          p-placeholder="Add new menu at root level"
          [p-options]="parentList"
        >
        </po-select>

        <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label" p-required> </po-input>

        <po-input class="po-md-4" name="shortLabel" [(ngModel)]="shortLabel" p-label="Short Label" p-required>
        </po-input>

        <po-url class="po-md-4" name="link" [(ngModel)]="link" p-label="External link" p-placeholder="http://">
        </po-url>

        <po-select
          class="po-md-4"
          name="badgeColor"
          [(ngModel)]="badgeColor"
          p-label="Badge color"
          p-placeholder="Select a color of badge"
          [p-options]="badgeColorList"
        >
          <ng-template p-select-option-template let-option>
            <div>
              <span class="sample-menu-circle sample-menu-vertical-middle po-{ { option.value }}"></span>
              <span class="sample-menu-vertical-middle"> { { option.label }} </span>
            </div>
          </ng-template>
        </po-select>

        <po-number
          class="po-md-4"
          name="badgeValue"
          [(ngModel)]="badgeValue"
          p-label="Badge value"
          p-required
          [p-max]="maxBadgeValue"
        >
        </po-number>

        <po-select
          class="po-md-4"
          name="icon"
          [(ngModel)]="icon"
          p-label="Icon"
          [p-disabled]="parent"
          [p-options]="iconsOptions"
        >
        </po-select>

        <div class="po-row">
          <po-button class="po-xl-2 po-md-4" p-label="Add" (p-click)="addMenuItem()"> </po-button>
        </div>

        <po-divider />

        <po-input
          class="po-md-6"
          name="service"
          [(ngModel)]="service"
          p-clean
          p-label="Service"
          p-help="https://po-sample-api.onrender.com/v1/menus"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="menuParams"
          [(ngModel)]="menuParams"
          p-clean
          p-label="Params"
          p-help='Enter a value to be sent as a parameter. Ex: { "departament": "technology" }'
          (p-change-model)="onChangeParams($event)"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="logo"
          [(ngModel)]="logo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/po.png"
          p-label="Logo"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="shortLogo"
          [(ngModel)]="shortLogo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/logo-dgeni.png"
          p-label="Short Logo"
        >
        </po-input>

        <po-input
          class="po-md-12"
          name="logo link"
          [(ngModel)]="logoLink"
          p-clean
          p-help="ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'"
          p-label="Logo link"
        >
        </po-input>

        <po-radio-group
          class="po-md-12"
          name="size"
          [(ngModel)]="componentsSize"
          p-columns="4"
          p-label="Components size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
          [p-options]="componentsSizeOptions"
        >
        </po-radio-group>

        <div class="po-row">
          <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore()"> </po-button>
        </div>
      </form>
    </div>
  </po-page-default>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoMenuComponent,
  PoMenuItem,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-labs',
  templateUrl: './sample-po-menu-labs.component.html',
  styleUrls: ['./sample-po-menu-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  badgeColor: string;
  badgeValue: number;
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Collapse', action: this.collapse.bind(this) },
    { label: 'Expand', action: this.expand.bind(this) },
    { label: 'Toggle', action: this.toggle.bind(this) }
  ];
  componentsSize: string;
  filter: boolean;
  icon: string;
  label: string;
  link: string;
  logo: string;
  logoLink: string;
  maxBadgeValue = 999999999999999;
  menuItems: Array<PoMenuItem>;
  menuItemSelected: string;
  menuParams: string;
  params: any;
  parent: string;
  parentList: Array<PoSelectOption>;
  service: string;
  shortLabel: string;
  shortLogo: string;
  searchTreeItems: boolean;

  public readonly badgeColorList: Array<PoSelectOption> = [
    { label: 'color-01', value: 'color-01' },
    { label: 'color-02', value: 'color-02' },
    { label: 'color-03', value: 'color-03' },
    { label: 'color-04', value: 'color-04' },
    { label: 'color-05', value: 'color-05' },
    { label: 'color-06', value: 'color-06' },
    { label: 'color-07', value: 'color-07' },
    { label: 'color-08', value: 'color-08' },
    { label: 'color-09', value: 'color-09' },
    { label: 'color-10', value: 'color-10' },
    { label: 'color-11', value: 'color-11' },
    { label: 'color-12', value: 'color-12' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconsOptions: Array<PoSelectOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected.bind(this),
        icon: this.icon,
        label: this.label,
        link: this.link,
        shortLabel: this.shortLabel,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected.bind(this),
        label: this.label,
        link: this.link,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  onChangeParams(params: any) {
    try {
      this.params = JSON.parse(params);
    } catch (e) {
      this.params = undefined;
    }
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.logo = undefined;
    this.logoLink = undefined;
    this.params = undefined;
    this.parentList = [];
    this.menuItems = [];
    this.menuParams = undefined;
    this.service = '';
    this.shortLogo = undefined;
    this.searchTreeItems = false;

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private collapse() {
    this.menu.collapse();
  }

  private expand() {
    this.menu.expand();
  }

  private formReset() {
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.componentsSize = 'medium';
    this.icon = undefined;
    this.label = 'PO Menu';
    this.link = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<PoMenuItem>, id: string): PoMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private toggle() {
    this.menu.toggle();
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push({ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push({ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push({ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

  onFilterChange(newValue: boolean) {
    this.filter = newValue;
    if (!this.filter && this.searchTreeItems) {
      this.searchTreeItems = false;
    }
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-menu-labs`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,we],encapsulation:2,changeDetection:1})}return a})();var N=(()=>{class a{http=h(Ww);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let l={search:m};return this.http.get(this.url,{params:l}).pipe(Y(i=>i.items))}static ɵfac=function(l){return new(l||a)};static ɵprov=T({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function He(a,F){a&1&&(jc(0,`div`,5)(1,`p`),lO(2,`Welcome,`),wg(),jc(3,`p`)(4,`b`),lO(5,` John Doe `),wg()()())}var Ie=(()=>{class a{samplePoMenuHumanResourcesService=h(N);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[we$1([N])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`po-menu`,1),VE(2,He,6,0,`div`,2),wg(),nu(3,`po-toolbar`,3)(4,`po-page-default`,4),wg()),l&2&&(rg(),UE(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),rg(2),UE(`p-show-notification`,!1),rg(),UE(`p-title`,i.menuItemSelected))},dependencies:[P5,TP,Tze,Aze],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Menu - Human Resources`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-wrapper">
  <po-menu
    p-collapsed
    p-filter
    [p-menus]="menus"
    [p-service]="samplePoMenuHumanResourcesService"
    [p-automatic-toggle]="true"
  >
    <div *p-menu-header-template class="po-p-2 po-font-title sample-menu-header-text-color">
      <p>Welcome,</p>
      <p>
        <b> John Doe </b>
      </p>
    </div>
  </po-menu>

  <po-toolbar p-title="PO - Human Resources" [p-show-notification]="false"></po-toolbar>

  <po-page-default [p-title]="menuItemSelected"></po-page-default>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';

@Component({
  selector: 'sample-po-menu-human-resources',
  templateUrl: './sample-po-menu-human-resources.component.html',
  providers: [SamplePoMenuHumanResourcesService],
  styleUrls: ['./sample-po-menu-human-resources.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuHumanResourcesComponent {
  samplePoMenuHumanResourcesService = inject(SamplePoMenuHumanResourcesService);

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Register user', action: this.printMenuAction.bind(this), icon: 'an an-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      action: this.printMenuAction.bind(this),
      icon: 'an an-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },
    {
      label: 'Useful links',
      icon: 'an an-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    },
    {
      label: 'Benefits',
      icon: 'an an-star',
      shortLabel: 'Benefits',
      subItems: [
        {
          label: 'Meal tickets',
          subItems: [
            { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
            {
              label: 'Extracts',
              action: this.printMenuAction.bind(this),
              subItems: [
                { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
                { label: 'Custom', action: this.printMenuAction.bind(this) }
              ]
            }
          ]
        },
        { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
      ]
    }
  ];

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
`),wg(),jc(21,`label`,6),lO(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMenuHumanResourcesService implements PoMenuFilter {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/menus';

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),lO(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),wg(),jc(29,`pre`,11),lO(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),wg()()()()(),jc(31,`po-container`),nu(32,`sample-po-menu-human-resources`),wg(),nu(33,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ne,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ie],encapsulation:2,changeDetection:1})}return a})();var Le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoMenuModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-menu.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoMenuComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),wg(),jc(15,`p`),lO(16,`O componente po-menu recebe uma lista de objetos do tipo `),jc(17,`code`),lO(18,`MenuItem`),wg(),lO(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),wg(),jc(20,`h4`),lO(21,`Tokens customizáveis`),wg(),jc(22,`p`),lO(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(24,`blockquote`)(25,`p`),lO(26,`Para maiores informações, acesse o guia `),jc(27,`a`,6),lO(28,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(29,`.`),wg()(),jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),lO(34,`Propriedade`),wg(),jc(35,`th`),lO(36,`Descrição`),wg(),jc(37,`th`),lO(38,`Valor Padrão`),wg()()(),jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),lO(43,`Default Values`),wg()(),nu(44,`td`)(45,`td`),wg(),jc(46,`tr`)(47,`td`)(48,`code`),lO(49,`--border-radius`),wg()(),jc(50,`td`),lO(51,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(52,`td`)(53,`code`),lO(54,`var(--border-radius-md)`),wg()()(),jc(55,`tr`)(56,`td`)(57,`code`),lO(58,`--border-color`),wg()(),jc(59,`td`),lO(60,`Cor da borda`),wg(),jc(61,`td`)(62,`code`),lO(63,`var(--color-neutral-light-20)`),wg()()(),jc(64,`tr`)(65,`td`)(66,`code`),lO(67,`--background-color`),wg()(),jc(68,`td`),lO(69,`Cor de background`),wg(),jc(70,`td`)(71,`code`),lO(72,`Var(----color-neutral-light-05)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`strong`),lO(76,`Menu Footer`),wg()(),nu(77,`td`)(78,`td`),wg(),jc(79,`tr`)(80,`td`)(81,`code`),lO(82,`--color`),wg()(),jc(83,`td`),lO(84,`Cor principla do menu footer`),wg(),jc(85,`td`)(86,`code`),lO(87,`var(--color-action-default)`),wg()()(),jc(88,`tr`)(89,`td`)(90,`code`),lO(91,`--font-size`),wg()(),jc(92,`td`),lO(93,`Tamanho da fonte`),wg(),jc(94,`td`)(95,`code`),lO(96,`var(--font-size-default)`),wg()()(),jc(97,`tr`)(98,`td`)(99,`code`),lO(100,`--line-height`),wg()(),jc(101,`td`),lO(102,`Tamanho da label`),wg(),jc(103,`td`)(104,`code`),lO(105,`var(--line-height-md)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),lO(109,`--outline-color-focused`),wg()(),jc(110,`td`),lO(111,`Cor do outline do estado de focus`),wg(),jc(112,`td`)(113,`code`),lO(114,`var(--color-action-focus)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),lO(118,`--font-weight-lvl0`),wg()(),jc(119,`td`),lO(120,`Peso da fonte`),wg(),jc(121,`td`)(122,`code`),lO(123,`var(--font-weight-bold)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`strong`),lO(127,`po-menu-item`),wg()(),nu(128,`td`)(129,`td`),wg(),jc(130,`tr`)(131,`td`)(132,`code`),lO(133,`--font-family`),wg()(),jc(134,`td`),lO(135,`Família tipográfica usada`),wg(),jc(136,`td`)(137,`code`),lO(138,`var(--font-family-theme)`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),lO(142,`--font-size`),wg()(),jc(143,`td`),lO(144,`Tamanho da fonte`),wg(),jc(145,`td`)(146,`code`),lO(147,`var(--font-size-default)`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),lO(151,`--line-height`),wg()(),jc(152,`td`),lO(153,`Tamanho da label`),wg(),jc(154,`td`)(155,`code`),lO(156,`var(--line-height-md)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`code`),lO(160,`--border-radius`),wg()(),jc(161,`td`),lO(162,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(163,`td`)(164,`code`),lO(165,`var(--border-radius-md)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),lO(169,`--color`),wg()(),jc(170,`td`),lO(171,`Cor principal do item`),wg(),jc(172,`td`)(173,`code`),lO(174,`var(--color-action-default)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),lO(178,`--background-color`),wg()(),jc(179,`td`),lO(180,`Cor do background`),wg(),jc(181,`td`)(182,`code`),lO(183,`transparent`),wg()()(),jc(184,`tr`)(185,`td`)(186,`strong`),lO(187,`Hover`),wg()(),nu(188,`td`)(189,`td`),wg(),jc(190,`tr`)(191,`td`)(192,`code`),lO(193,`--color-hover`),wg()(),jc(194,`td`),lO(195,`Cor principal no estado hover`),wg(),jc(196,`td`)(197,`code`),lO(198,`var(--color-brand-01-darkest)`),wg()()(),jc(199,`tr`)(200,`td`)(201,`code`),lO(202,`--background-color-hover`),wg()(),jc(203,`td`),lO(204,`Cor de background no estado hover`),wg(),jc(205,`td`)(206,`code`),lO(207,`var(--color-brand-01-lighter)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`strong`),lO(211,`Focused`),wg()(),nu(212,`td`)(213,`td`),wg(),jc(214,`tr`)(215,`td`)(216,`code`),lO(217,`--outline-color-focused`),wg()(),jc(218,`td`),lO(219,`Cor do outline do estado de focus`),wg(),jc(220,`td`)(221,`code`),lO(222,`var(--color-action-focus)`),wg()()(),jc(223,`tr`)(224,`td`)(225,`strong`),lO(226,`Pressed`),wg()(),nu(227,`td`)(228,`td`),wg(),jc(229,`tr`)(230,`td`)(231,`code`),lO(232,`--background-color-pressed`),wg(),lO(233,` \xA0`),wg(),jc(234,`td`),lO(235,`Cor de background no estado de pressionado\xA0`),wg(),jc(236,`td`)(237,`code`),lO(238,`var(--color-brand-01-light)`),wg()()(),jc(239,`tr`)(240,`td`)(241,`strong`),lO(242,`Actived`),wg()(),nu(243,`td`)(244,`td`),wg(),jc(245,`tr`)(246,`td`)(247,`code`),lO(248,`--background-color-actived`),wg()(),jc(249,`td`),lO(250,`Cor de background no estado actived`),wg(),jc(251,`td`)(252,`code`),lO(253,`var(--color-brand-01-darkest)`),wg()()(),jc(254,`tr`)(255,`td`)(256,`code`),lO(257,`--color-actived`),wg()(),jc(258,`td`),lO(259,`Cor principal no estado actived`),wg(),jc(260,`td`)(261,`code`),lO(262,`var(--color-brand-01-lighter)`),wg()()(),jc(263,`tr`)(264,`td`)(265,`strong`),lO(266,`Font`),wg()(),nu(267,`td`)(268,`td`),wg(),jc(269,`tr`)(270,`td`)(271,`code`),lO(272,`--font-weight-lvl0`),wg()(),jc(273,`td`),lO(274,`Peso da fonte bold`),wg(),jc(275,`td`)(276,`code`),lO(277,`var(--font-weight-bold)`),wg()()(),jc(278,`tr`)(279,`td`)(280,`code`),lO(281,`--font-weight-lvl1`),wg()(),jc(282,`td`),lO(283,`Peso da fonte`),wg(),jc(284,`td`)(285,`code`),lO(286,`var(--font-weight-normal)`),wg()()()()(),jc(287,`p`),nu(288,`br`),lO(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),wg(),jc(290,`p`),lO(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),wg(),jc(292,`p`),lO(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),wg(),jc(294,`p`),lO(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),jc(296,`a`,7)(297,`strong`),lO(298,`p-menu-header-template`),wg()(),lO(299,`.`),wg(),jc(300,`p`),lO(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),jc(302,`code`),lO(303,`PoMenuFilter`),wg(),lO(304,`.`),wg(),jc(305,`p`),lO(306,`Para o menu funcionar corretamente é necessário importar o `),jc(307,`code`),lO(308,`RouterModule`),wg(),lO(309,` e `),jc(310,`code`),lO(311,`Routes`),wg(),lO(312,` do módulo principal de sua aplicação:`),wg(),jc(313,`pre`)(314,`code`),lO(315,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),wg()(),jc(316,`p`),lO(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),wg(),jc(318,`pre`)(319,`code`),lO(320,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),wg()()(),jc(321,`div`,8)(322,`h4`,9),lO(323,`Seletor`),wg(),jc(324,`pre`,10),lO(325,`<po-menu
    p-automatic-toggle="boolean"
    p-collapsed="boolean"
    p-components-size="string"
    p-filter="boolean"
    p-logo="string"
    p-logo-alt="string"
    p-logo-link="boolean | string"
    p-menus="PoMenuItem[]"
    p-params="any"
    p-search-tree-items="boolean"
    p-service="string | PoMenuFilter"
    p-short-logo="string"
    (p-toggle)="EventEmitter" >
</po-menu>
`),wg()(),jc(326,`h4`,11),lO(327,`Propriedades`),wg(),jc(328,`table`,12)(329,`tr`,13)(330,`th`,14),lO(331,`Nome`),wg(),jc(332,`th`,14),lO(333,`Tipo`),wg(),jc(334,`th`,14),lO(335,`Padrão`),wg(),jc(336,`th`,14),lO(337,`Descrição`),wg()(),jc(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),lO(342,` p-automatic-toggle`),nu(343,`br`),wg()()(),jc(344,`td`,19)(345,`code`,20),lO(346,`boolean`),wg()(),jc(347,`td`,21)(348,`p`)(349,`code`),lO(350,`false`),wg()()(),jc(351,`td`,22)(352,`em`)(353,`strong`),lO(354,`(opcional)`),wg()(),jc(355,`p`),lO(356,`Expande e Colapsa (retrai) o menu automaticamente.`),wg()()(),jc(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),lO(361,` p-collapsed`),nu(362,`br`),wg()()(),jc(363,`td`,19)(364,`code`,20),lO(365,`boolean`),wg()(),jc(366,`td`,21)(367,`p`)(368,`code`),lO(369,`false`),wg()()(),jc(370,`td`,22)(371,`em`)(372,`strong`),lO(373,`(opcional)`),wg()(),jc(374,`p`),lO(375,`Colapsa (retrai) o menu e caso receba o valor `),jc(376,`code`),lO(377,`false`),wg(),lO(378,` expande o menu.`),wg(),jc(379,`blockquote`)(380,`p`),lO(381,`Utilize esta propriedade para iniciar o menu colapsado.`),wg()(),jc(382,`blockquote`)(383,`p`),lO(384,`Ao utilizar os métodos `),jc(385,`a`,23)(386,`code`),lO(387,`colapse`),wg()(),lO(388,`, `),jc(389,`a`,24)(390,`code`),lO(391,`expand`),wg()(),lO(392,` e
`),jc(393,`a`,25)(394,`code`),lO(395,`toggle`),wg()(),lO(396,` o valor desta propriedade não é alterado.`),wg()(),jc(397,`p`)(398,`strong`),lO(399,`Importante:`),wg()(),jc(400,`blockquote`)(401,`p`),lO(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),jc(403,`code`),lO(404,`icon`),wg(),lO(405,` e `),jc(406,`code`),lO(407,`shortLabel`),wg(),lO(408,`.`),wg()()()(),jc(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),lO(413,` p-components-size`),nu(414,`br`),wg()()(),jc(415,`td`,19)(416,`code`,26),lO(417,`string`),wg()(),jc(418,`td`,21)(419,`p`)(420,`code`),lO(421,`medium`),wg()()(),jc(422,`td`,22)(423,`em`)(424,`strong`),lO(425,`(opcional)`),wg()(),jc(426,`p`),lO(427,`Define o tamanho dos componentes de formulário no menu:`),wg(),jc(428,`ul`)(429,`li`)(430,`code`),lO(431,`small`),wg(),lO(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(433,`li`)(434,`code`),lO(435,`medium`),wg(),lO(436,`: aplica a medida medium de cada componente.`),wg()(),jc(437,`blockquote`)(438,`p`),lO(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(440,`code`),lO(441,`medium`),wg(),lO(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(443,`a`,27),lO(444,`po-theme`),wg(),lO(445,`.`),wg()()()(),jc(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),lO(450,` p-filter`),nu(451,`br`),wg()()(),jc(452,`td`,19)(453,`code`,20),lO(454,`boolean`),wg()(),jc(455,`td`,21)(456,`p`)(457,`code`),lO(458,`false`),wg()()(),jc(459,`td`,22)(460,`em`)(461,`strong`),lO(462,`(opcional)`),wg()(),jc(463,`p`),lO(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),jc(465,`code`),lO(466,`p-service`),wg(),lO(467,`.`),wg(),jc(468,`blockquote`)(469,`p`),lO(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),wg()()()(),jc(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),lO(475,` p-logo`),nu(476,`br`),wg()()(),jc(477,`td`,19)(478,`code`,26),lO(479,`string`),wg()(),jc(480,`td`,21),lO(481,`-`),wg(),jc(482,`td`,22)(483,`em`)(484,`strong`),lO(485,`(opcional)`),wg()(),jc(486,`p`),lO(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),wg(),jc(488,`blockquote`)(489,`p`)(490,`strong`),lO(491,`Importante:`),wg()()(),jc(492,`ul`)(493,`li`),lO(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),wg(),jc(495,`li`),lO(496,`Como boa prática, indica-se utilizar imagens com até `),jc(497,`code`),lO(498,`24px`),wg(),lO(499,` de altura e `),jc(500,`code`),lO(501,`224px`),wg(),lO(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),wg()()()(),jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),lO(507,` p-logo-alt`),nu(508,`br`),wg()()(),jc(509,`td`,19)(510,`code`,26),lO(511,`string`),wg()(),jc(512,`td`,21)(513,`p`)(514,`code`),lO(515,`Logomarca início`),wg()()(),jc(516,`td`,22)(517,`em`)(518,`strong`),lO(519,`(opcional)`),wg()(),jc(520,`p`),lO(521,`Define o texto alternativo para a logomarca.`),wg(),jc(522,`blockquote`)(523,`p`)(524,`strong`),lO(525,`Importante`),wg(),lO(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),wg()()()(),jc(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),lO(531,` p-logo-link`),nu(532,`br`),wg()()(),jc(533,`td`,19)(534,`code`,20),lO(535,`boolean `),wg(),jc(536,`code`,26),lO(537,` string`),wg()(),jc(538,`td`,21)(539,`p`)(540,`code`),lO(541,`true`),wg()()(),jc(542,`td`,22)(543,`em`)(544,`strong`),lO(545,`(opcional)`),wg()(),jc(546,`p`),lO(547,`Define o link para a rota ao clicar no logo do menu.`),wg(),jc(548,`ul`)(549,`li`),lO(550,`Se o valor for uma string, define a rota para o link informado.`),wg(),jc(551,`li`),lO(552,`Se for `),jc(553,`code`),lO(554,`false`),wg(),lO(555,`, o logo não terá link associado.`),wg(),jc(556,`li`),lO(557,`Se for `),jc(558,`code`),lO(559,`true`),wg(),lO(560,`, o logo terá a rota padrão `),jc(561,`code`),lO(562,`./`),wg(),lO(563,`.`),wg()()()(),jc(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),lO(568,` p-menus`),nu(569,`br`),wg()()(),jc(570,`td`,19)(571,`code`,28),lO(572,`PoMenuItem[]`),wg()(),jc(573,`td`,21),lO(574,`-`),wg(),jc(575,`td`,22)(576,`p`),lO(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),wg()()(),jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),lO(582,` p-params`),nu(583,`br`),wg()()(),jc(584,`td`,19)(585,`code`,29),lO(586,`any`),wg()(),jc(587,`td`,21),lO(588,`-`),wg(),jc(589,`td`,22)(590,`em`)(591,`strong`),lO(592,`(opcional)`),wg()(),jc(593,`p`),lO(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),wg(),jc(595,`p`),lO(596,`Caso utilizado um serviço customizado, implementando a interface `),jc(597,`code`),lO(598,`PoMenuFilter`),wg(),lO(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),jc(600,`code`),lO(601,`getFilteredData`),wg(),lO(602,`.`),wg(),jc(603,`p`),lO(604,`Quando utilizada uma URL de serviço, será realizado um `),jc(605,`em`),lO(606,`GET`),wg(),lO(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),jc(608,`code`),lO(609,`search`),wg(),lO(610,`, veja exemplo:`),wg(),jc(611,`pre`)(612,`code`),lO(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),wg()()()(),jc(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),lO(618,` p-search-tree-items`),nu(619,`br`),wg()()(),jc(620,`td`,19)(621,`code`,20),lO(622,`boolean`),wg()(),jc(623,`td`,21)(624,`p`)(625,`code`),lO(626,`false`),wg()()(),jc(627,`td`,22)(628,`em`)(629,`strong`),lO(630,`(opcional)`),wg()(),jc(631,`p`),lO(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),wg(),jc(633,`blockquote`)(634,`p`),lO(635,`É necessário que a propriedade `),jc(636,`code`),lO(637,`p-filter`),wg(),lO(638,` esteja habilitada.`),wg()()()(),jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),lO(643,` p-service`),nu(644,`br`),wg()()(),jc(645,`td`,19)(646,`code`,26),lO(647,`string `),wg(),jc(648,`code`,30),lO(649,` PoMenuFilter`),wg()(),jc(650,`td`,21),lO(651,`-`),wg(),jc(652,`td`,22)(653,`em`)(654,`strong`),lO(655,`(opcional)`),wg()(),jc(656,`p`),lO(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),jc(658,`code`),lO(659,`PoMenuFilter`),wg(),lO(660,`.`),wg(),jc(661,`p`),lO(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),jc(663,`a`,31),lO(664,`Guia de implementação de APIs`),wg(),lO(665,` do PO UI.`),wg(),jc(666,`p`),lO(667,`Quando utilizada uma URL de serviço, será realizado um `),jc(668,`em`),lO(669,`GET`),wg(),lO(670,` na URL informada, passando o valor digitado
no par\xE2metro `),jc(671,`code`),lO(672,`search`),wg(),lO(673,`, veja exemplo:`),wg(),jc(674,`blockquote`)(675,`p`),lO(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),jc(677,`code`),lO(678,`tot`),wg(),lO(679,`.`),wg()(),jc(680,`pre`)(681,`code`),lO(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),wg()(),jc(683,`blockquote`)(684,`p`),lO(685,`É necessário que propriedade `),jc(686,`code`),lO(687,`p-filter`),wg(),lO(688,` esteja habilitada.`),wg()()()(),jc(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),lO(693,` p-short-logo`),nu(694,`br`),wg()()(),jc(695,`td`,19)(696,`code`,26),lO(697,`string`),wg()(),jc(698,`td`,21),lO(699,`-`),wg(),jc(700,`td`,22)(701,`em`)(702,`strong`),lO(703,`(opcional)`),wg()(),jc(704,`p`),lO(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),wg(),jc(706,`blockquote`)(707,`p`)(708,`strong`),lO(709,`Importante:`),wg()()(),jc(710,`ul`)(711,`li`),lO(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),jc(713,`code`),lO(714,`p-logo`),wg(),lO(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),wg(),jc(716,`li`),lO(717,`Como boa prática, indica-se utilizar imagens com até `),jc(718,`code`),lO(719,`48px`),wg(),lO(720,` de altura e `),jc(721,`code`),lO(722,`48px`),wg(),lO(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),wg(),jc(724,`li`),lO(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),jc(726,`code`),lO(727,`p-logo`),wg(),lO(728,`.`),wg()()()(),jc(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),lO(733,` (p-toggle)`),nu(734,`br`),wg()()(),jc(735,`td`,19)(736,`code`,34),lO(737,`EventEmitter`),wg()(),jc(738,`td`,21),lO(739,`-`),wg(),jc(740,`td`,22)(741,`em`)(742,`strong`),lO(743,`(opcional)`),wg()(),jc(744,`p`),lO(745,`Evento emitido toda vez que o estado do menu muda, enviando `),jc(746,`code`),lO(747,`true`),wg(),lO(748,` quando expandido e `),jc(749,`code`),lO(750,`false`),wg(),lO(751,` quando colapsado.`),wg(),jc(752,`pre`)(753,`code`,35),lO(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),wg()()()()(),jc(755,`h3`,11),lO(756,`Métodos`),wg(),jc(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),lO(763,` collapse `),wg()()()()(),jc(764,`tr`,22)(765,`td`,22)(766,`p`),nu(767,`a`,38),wg(),jc(768,`p`),lO(769,`Método para colapsar (retrair) o menu.`),wg()()()(),nu(770,`br`),jc(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),lO(777,` expand `),wg()()()()(),jc(778,`tr`,22)(779,`td`,22)(780,`p`),nu(781,`a`,39),wg(),jc(782,`p`),lO(783,`Método para expandir (aumentar) o menu.`),wg()()()(),nu(784,`br`),jc(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),lO(791,` toggle `),wg()()()()(),jc(792,`tr`,22)(793,`td`,22)(794,`p`),nu(795,`a`,40),lO(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),wg(),jc(797,`blockquote`)(798,`p`),lO(799,`Os métodos apenas vão colapsar/expandir o menu se:`),wg()(),jc(800,`ul`)(801,`li`),lO(802,`Todos os itens de menu tiverem valor nas propriedades `),jc(803,`code`),lO(804,`icon`),wg(),lO(805,` e `),jc(806,`code`),lO(807,`shortLabel`),wg(),lO(808,`.`),wg()()()()(),nu(809,`br`),jc(810,`h3`),lO(811,`Interfaces`),wg(),jc(812,`h4`,41)(813,`code`,5),lO(814,`PoMenuFilter`),wg()(),jc(815,`div`,2)(816,`p`),lO(817,`Interface do serviço utilizado no componente `),jc(818,`code`),lO(819,`po-menu`),wg(),lO(820,`.`),wg()(),jc(821,`h4`,11),lO(822,`Métodos`),wg(),jc(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),lO(829,` getFilteredData `),wg()()()()(),jc(830,`tr`,22)(831,`td`,22)(832,`p`),lO(833,`Método responsável por retornar um `),jc(834,`em`),lO(835,`Observable`),wg(),lO(836,` que retorne uma lista de objetos que seguem a interface `),jc(837,`code`),lO(838,`PoMenuItemFiltered`),wg(),lO(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),jc(840,`code`),lO(841,`p-params`),wg(),lO(842,`.`),wg()()()(),jc(843,`h5`)(844,`b`),lO(845,`Parâmetros`),wg()(),jc(846,`table`,12)(847,`tr`,13)(848,`th`,14),lO(849,`Nome`),wg(),jc(850,`th`,14),lO(851,`Tipo`),wg(),jc(852,`th`,14),lO(853,`Descrição`),wg()(),jc(854,`tr`,15)(855,`td`,16),lO(856,` search`),wg(),jc(857,`td`,19)(858,`code`,42),lO(859,` string `),wg()(),jc(860,`td`,22)(861,`p`),lO(862,`Valor informado no campo de busca dos itens de menus.`),wg()()(),jc(863,`tr`,15)(864,`td`,16),lO(865,` params`),wg(),jc(866,`td`,19)(867,`code`,42),lO(868,` any `),wg()(),jc(869,`td`,22)(870,`p`),lO(871,`Valor informado através da propriedade `),jc(872,`code`),lO(873,`p-params`),wg(),lO(874,`.`),wg()()()(),nu(875,`br`),jc(876,`h4`,41)(877,`code`,5),lO(878,`PoMenuItemBadge`),wg()(),jc(879,`div`,2)(880,`p`),lO(881,`Interface do `),jc(882,`em`),lO(883,`badge`),wg(),lO(884,` utilizado no `),jc(885,`code`),lO(886,`po-menu`),wg(),lO(887,`.`),wg()(),jc(888,`h4`,11),lO(889,`Propriedades`),wg(),jc(890,`table`,12)(891,`tr`,13)(892,`th`,14),lO(893,`Nome`),wg(),jc(894,`th`,14),lO(895,`Tipo`),wg(),jc(896,`th`,14),lO(897,`Descrição`),wg()(),jc(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),lO(902,` color`),nu(903,`br`),wg()()(),jc(904,`td`,19)(905,`code`,26),lO(906,`string`),wg()(),jc(907,`td`,22)(908,`em`)(909,`strong`),lO(910,`(opcional)`),wg()(),jc(911,`p`),lO(912,`Define a cor do `),jc(913,`em`),lO(914,`badge`),wg(),lO(915,` e aceita os valores:`),wg(),jc(916,`p`),nu(917,`span`,43),jc(918,`code`),lO(919,`color-01`),wg()(),jc(920,`p`),nu(921,`span`,44),jc(922,`code`),lO(923,`color-02`),wg()(),jc(924,`p`),nu(925,`span`,45),jc(926,`code`),lO(927,`color-03`),wg()(),jc(928,`p`),nu(929,`span`,46),jc(930,`code`),lO(931,`color-04`),wg()(),jc(932,`p`),nu(933,`span`,47),jc(934,`code`),lO(935,`color-05`),wg()(),jc(936,`p`),nu(937,`span`,48),jc(938,`code`),lO(939,`color-06`),wg()(),jc(940,`p`),nu(941,`span`,49),jc(942,`code`),lO(943,`color-07`),wg()(),jc(944,`p`),nu(945,`span`,50),jc(946,`code`),lO(947,`color-08`),wg()(),jc(948,`p`),nu(949,`span`,51),jc(950,`code`),lO(951,`color-09`),wg()(),jc(952,`p`),nu(953,`span`,52),jc(954,`code`),lO(955,`color-10`),wg()(),jc(956,`p`),nu(957,`span`,53),jc(958,`code`),lO(959,`color-11`),wg()(),jc(960,`p`),nu(961,`span`,54),jc(962,`code`),lO(963,`color-12`),wg()()()(),jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),lO(968,` value`),nu(969,`br`),wg()()(),jc(970,`td`,19)(971,`code`,55),lO(972,`number`),wg()(),jc(973,`td`,22)(974,`p`),lO(975,`Número exibido no `),jc(976,`em`),lO(977,`badge`),wg(),lO(978,`, caso o mesmo seja maior que `),jc(979,`strong`),lO(980,`9`),wg(),lO(981,` o mesmo exibe `),jc(982,`strong`),lO(983,`9+`),wg(),lO(984,`.`),wg()()()(),jc(985,`h4`,41)(986,`code`,5),lO(987,`PoMenuItemFiltered`),wg()(),jc(988,`div`,2)(989,`p`),lO(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),jc(991,`code`),lO(992,`po-menu`),wg(),lO(993,`.`),wg()(),jc(994,`h4`,11),lO(995,`Propriedades`),wg(),jc(996,`table`,12)(997,`tr`,13)(998,`th`,14),lO(999,`Nome`),wg(),jc(1e3,`th`,14),lO(1001,`Tipo`),wg(),jc(1002,`th`,14),lO(1003,`Descrição`),wg()(),jc(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),lO(1008,` action`),nu(1009,`br`),wg()()(),jc(1010,`td`,19)(1011,`code`,56),lO(1012,`() => void`),wg()(),jc(1013,`td`,22)(1014,`p`),lO(1015,`Ação a ser executada quando o item de menu for clicado.`),wg()()(),jc(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),lO(1020,` label`),nu(1021,`br`),wg()()(),jc(1022,`td`,19)(1023,`code`,26),lO(1024,`string`),wg()(),jc(1025,`td`,22)(1026,`p`),lO(1027,`Texto do item de menu.`),wg()()(),jc(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),lO(1032,` link`),nu(1033,`br`),wg()()(),jc(1034,`td`,19)(1035,`code`,26),lO(1036,`string`),wg()(),jc(1037,`td`,22)(1038,`p`),lO(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),jc(1040,`em`),lO(1041,`link`),wg(),lO(1042,` interno ou externo.`),wg()()()(),jc(1043,`h4`,41)(1044,`code`,5),lO(1045,`PoMenuItem`),wg()(),jc(1046,`div`,2)(1047,`p`),lO(1048,`Interface para os itens de menu do componente po-menu.`),wg()(),jc(1049,`h4`,11),lO(1050,`Propriedades`),wg(),jc(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),lO(1054,`Nome`),wg(),jc(1055,`th`,14),lO(1056,`Tipo`),wg(),jc(1057,`th`,14),lO(1058,`Descrição`),wg()(),jc(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),lO(1063,` action`),nu(1064,`br`),wg()()(),jc(1065,`td`,19)(1066,`code`,57),lO(1067,`Function`),wg()(),jc(1068,`td`,22)(1069,`em`)(1070,`strong`),lO(1071,`(opcional)`),wg()(),jc(1072,`p`),lO(1073,`Ação personalizada para clique do item de menu.`),wg()()(),jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),lO(1078,` badge`),nu(1079,`br`),wg()()(),jc(1080,`td`,19)(1081,`code`,58),lO(1082,`PoMenuItemBadge`),wg()(),jc(1083,`td`,22)(1084,`em`)(1085,`strong`),lO(1086,`(opcional)`),wg()(),jc(1087,`p`),lO(1088,`Badge do item de menu.`),wg(),jc(1089,`p`),lO(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),wg(),jc(1091,`blockquote`)(1092,`p`),lO(1093,`O `),jc(1094,`code`),lO(1095,`po-badge`),wg(),lO(1096,` só será exibido caso o item do menu não possua `),jc(1097,`code`),lO(1098,`subItems`),wg(),lO(1099,` e seu valor seja maior ou igual a 0.`),wg()()()(),jc(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),lO(1104,` icon`),nu(1105,`br`),wg()()(),jc(1106,`td`,19)(1107,`code`,26),lO(1108,`string `),wg(),jc(1109,`code`,59),lO(1110,` TemplateRef<void>`),wg()(),jc(1111,`td`,22)(1112,`em`)(1113,`strong`),lO(1114,`(opcional)`),wg()(),jc(1115,`p`),lO(1116,`É possível usar qualquer um dos ícones da `),jc(1117,`a`,60),lO(1118,`Biblioteca de ícones`),wg(),lO(1119,`. conforme exemplo abaixo:`),wg(),jc(1120,`pre`)(1121,`code`),lO(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),wg()(),jc(1123,`p`),lO(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(1125,`pre`)(1126,`code`),lO(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),wg()(),jc(1128,`p`),lO(1129,`Outra opção seria a customização do ícone através do `),jc(1130,`code`),lO(1131,`TemplateRef`),wg(),lO(1132,`, conforme exemplo abaixo:
component.html:`),wg(),jc(1133,`pre`)(1134,`code`),lO(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),wg()(),jc(1136,`p`),lO(1137,`component.ts:`),wg(),jc(1138,`pre`)(1139,`code`),lO(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),wg()(),jc(1141,`blockquote`)(1142,`p`),lO(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),wg()()()(),jc(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),lO(1148,` label`),nu(1149,`br`),wg()()(),jc(1150,`td`,19)(1151,`code`,26),lO(1152,`string`),wg()(),jc(1153,`td`,22)(1154,`p`),lO(1155,`Texto do item de menu.`),wg()()(),jc(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),lO(1160,` link`),nu(1161,`br`),wg()()(),jc(1162,`td`,19)(1163,`code`,26),lO(1164,`string`),wg()(),jc(1165,`td`,22)(1166,`em`)(1167,`strong`),lO(1168,`(opcional)`),wg()(),jc(1169,`p`),lO(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),wg()()(),jc(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),lO(1175,` shortLabel`),nu(1176,`br`),wg()()(),jc(1177,`td`,19)(1178,`code`,26),lO(1179,`string`),wg()(),jc(1180,`td`,22)(1181,`em`)(1182,`strong`),lO(1183,`(opcional)`),wg()(),jc(1184,`p`),lO(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),wg()()(),jc(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),lO(1190,` subItems`),nu(1191,`br`),wg()()(),jc(1192,`td`,19)(1193,`code`,61),lO(1194,`Array<PoMenuItem>`),wg()(),jc(1195,`td`,22)(1196,`em`)(1197,`strong`),lO(1198,`(opcional)`),wg()(),jc(1199,`p`),lO(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Qe(a,F){if(a&1){let m=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(m);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-menu-basic-view`)(2,`sample-po-menu-labs-view`)(3,`sample-po-menu-human-resources-view`),wg()}if(a&2){let m=Fx();UE(`p-active`,m.activeTab===`web`)}}var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Qe,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-menu-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ye,_e,ke,Le],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Je),I1]})}return a})();var Vt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,De]})}return a})();export{Vt as DocPoMenuModule};