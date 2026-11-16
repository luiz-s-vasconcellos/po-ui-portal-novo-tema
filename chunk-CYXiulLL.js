import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,Da as kI,E as G4,F as Joe,G as Nf,Hi as Y,Hr as Lk,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,St as Vze,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,a as A5,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,hr as Db,io as vu,ji as Vk,k as Goe,li as Qc,lr as Be$1,na as de,oo as wg,pi as R,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tn as gte,tt as R4,ua as ge,uo as xk,vi as Sk,wr as GV,xi as Tk,xr as FO,y as EP,yr as Du}from"./chunk-DtUf9FxZ.js";var De=()=>({label:`PO UI - Angular Framework`,link:`/`});var Ve=a=>[a];var Ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(l,i){l&1&&vu(0,`po-menu`,0),l&2&&Rb(`p-menus`,Vk(2,Ve,Lk(1,De)))},dependencies:[A5],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-menu-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-menu-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();function ze(a,F){if(a&1&&(Qc(0,`div`),vu(1,`span`),Qc(2,`span`,26),Sk(3),Kg()()),a&2){let m=F.$implicit;wg(),gk(xk(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),wg(2),tm(` `,m.label,` `)}}var ye=(()=>{class a{changeDetector=p(Be$1);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(l){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,l){let i;if(m){for(let p of m)if(p.id===l){i=p;break}else i||(i=this.getMenuParent(p.subItems,l));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(l=>{this.parentList.push({label:`- ${l.label}`,value:l.id}),l.subItems&&l.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(l,i){if(l&1&&Du(A5,7),l&2){let p;No(p=xo())&&(i.menu=p.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(l,i){if(l&1){let p=YO();Qc(0,`div`,1),vu(1,`po-menu`,2),Qc(2,`po-page-default`,3)(3,`div`,4),vu(4,`po-info`,5)(5,`po-button-group`,6),Kg(),vu(6,`po-divider`),Qc(7,`div`,4),vu(8,`po-info`,7),Qc(9,`form`,null,0)(11,`po-switch`,8),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.filter,r)||(i.filter=r),U_(r)}),vt(`ngModelChange`,function(r){return i.onFilterChange(r)}),Kg(),Qc(12,`po-switch`,9),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.searchTreeItems,r)||(i.searchTreeItems=r),U_(r)}),Kg(),Qc(13,`po-select`,10),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.parent,r)||(i.parent=r),U_(r)}),Kg(),Qc(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.label,r)||(i.label=r),U_(r)}),Kg(),Qc(15,`po-input`,12),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.shortLabel,r)||(i.shortLabel=r),U_(r)}),Kg(),Qc(16,`po-url`,13),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.link,r)||(i.link=r),U_(r)}),Kg(),Qc(17,`po-select`,14),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.badgeColor,r)||(i.badgeColor=r),U_(r)}),Db(18,ze,4,4,`ng-template`,15),Kg(),Qc(19,`po-number`,16),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.badgeValue,r)||(i.badgeValue=r),U_(r)}),Kg(),Qc(20,`po-select`,17),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.icon,r)||(i.icon=r),U_(r)}),Kg(),Qc(21,`div`,4)(22,`po-button`,18),vt(`p-click`,function(){return i.addMenuItem()}),Kg()(),vu(23,`po-divider`),Qc(24,`po-input`,19),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.service,r)||(i.service=r),U_(r)}),Kg(),Qc(25,`po-input`,20),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.menuParams,r)||(i.menuParams=r),U_(r)}),vt(`p-change-model`,function(r){return i.onChangeParams(r)}),Kg(),Qc(26,`po-input`,21),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.logo,r)||(i.logo=r),U_(r)}),Kg(),Qc(27,`po-input`,22),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.shortLogo,r)||(i.shortLogo=r),U_(r)}),Kg(),Qc(28,`po-input`,23),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.logoLink,r)||(i.logoLink=r),U_(r)}),Kg(),Qc(29,`po-radio-group`,24),z0(),Kb(`ngModelChange`,function(r){return B_(p),Tk(i.componentsSize,r)||(i.componentsSize=r),U_(r)}),Kg(),Qc(30,`div`,4)(31,`po-button`,25),vt(`p-click`,function(){return i.restore()}),Kg()()()()()()}l&2&&(wg(),Rb(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),wg(4),Rb(`p-buttons`,i.buttons),wg(3),Rb(`p-value`,i.menuItemSelected),wg(3),Yb(`ngModel`,i.filter),W0(),wg(),Yb(`ngModel`,i.searchTreeItems),Rb(`p-disabled`,!i.filter),W0(),wg(),Yb(`ngModel`,i.parent),Rb(`p-options`,i.parentList),W0(),wg(),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.shortLabel),W0(),wg(),Yb(`ngModel`,i.link),W0(),wg(),Yb(`ngModel`,i.badgeColor),Rb(`p-options`,i.badgeColorList),W0(),wg(2),Yb(`ngModel`,i.badgeValue),Rb(`p-max`,i.maxBadgeValue),W0(),wg(),Yb(`ngModel`,i.icon),Rb(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),W0(),wg(4),Yb(`ngModel`,i.service),W0(),wg(),Yb(`ngModel`,i.menuParams),W0(),wg(),Yb(`ngModel`,i.logo),W0(),wg(),Yb(`ngModel`,i.shortLogo),W0(),wg(),Yb(`ngModel`,i.logoLink),W0(),wg(),Yb(`ngModel`,i.componentsSize),Rb(`p-options`,i.componentsSizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,gte,Nf,j4,Goe,Zte,Koe,R4,G4,Joe,A5,Mze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-menu-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-wrapper">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-menu-labs`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var j=(()=>{class a{http=p(kI);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let l={search:m};return this.http.get(this.url,{params:l}).pipe(Y(i=>i.items))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function We(a,F){a&1&&(Qc(0,`div`,5)(1,`p`),Sk(2,`Welcome,`),Kg(),Qc(3,`p`)(4,`b`),Sk(5,` John Doe `),Kg()()())}var _e=(()=>{class a{samplePoMenuHumanResourcesService=p(j);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[we$1([j])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`po-menu`,1),Db(2,We,6,0,`div`,2),Kg(),vu(3,`po-toolbar`,3)(4,`po-page-default`,4),Kg()),l&2&&(wg(),Rb(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),wg(2),Rb(`p-show-notification`,!1),wg(),Rb(`p-title`,i.menuItemSelected))},dependencies:[A5,EP,Mze,Vze],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[`id`,`sample-po-menu-human-resources`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu - Human Resources`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-wrapper">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()(),Qc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Sk(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),Kg(),Qc(29,`pre`,11),Sk(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),Kg()()()()(),Qc(31,`div`,12),vu(32,`sample-po-menu-human-resources`),Kg(),vu(33,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,je,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,_e],encapsulation:2,changeDetection:1})}return a})();var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1207,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-menu-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-automatic-toggle`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-collapsed`,1,`docs-api-properties-row`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-logo-alt`,1,`docs-api-properties-row`],[`id`,`prop-p-logo-link`,1,`docs-api-properties-row`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`id`,`prop-p-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-search-tree-items`,1,`docs-api-properties-row`],[`id`,`prop-p-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-short-logo`,1,`docs-api-properties-row`],[`id`,`event-p-toggle`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[`id`,`method-collapse`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`method-expand`,1,`docs-api-method-table`],[`id`,`expandMethod`],[`id`,`method-toggle`,1,`docs-api-method-table`],[`id`,`toggleMethod`],[`id`,`interface-po-menu-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-menu-item-badge`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-badge-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`id`,`interface-po-menu-item-badge-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-menu-item-filtered`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-filtered-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`id`,`interface-po-menu-item-filtered-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-filtered-link`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-menu-item-badge`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`id`,`interface-po-menu-item-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-menu-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-link`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-short-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-menu-header-template?view=doc`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoMenuModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-menu.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoMenuComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),Kg(),Qc(15,`p`),Sk(16,`O componente po-menu recebe uma lista de objetos do tipo `),Qc(17,`code`),Sk(18,`MenuItem`),Kg(),Sk(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),Kg(),Qc(20,`h4`),Sk(21,`Tokens customizáveis`),Kg(),Qc(22,`p`),Sk(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(24,`blockquote`)(25,`p`),Sk(26,`Para maiores informações, acesse o guia `),Qc(27,`a`,6),Sk(28,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(29,`.`),Kg()(),Qc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),Sk(34,`Propriedade`),Kg(),Qc(35,`th`),Sk(36,`Descrição`),Kg(),Qc(37,`th`),Sk(38,`Valor Padrão`),Kg()()(),Qc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),Sk(43,`Default Values`),Kg()(),vu(44,`td`)(45,`td`),Kg(),Qc(46,`tr`)(47,`td`)(48,`code`),Sk(49,`--border-radius`),Kg()(),Qc(50,`td`),Sk(51,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(52,`td`)(53,`code`),Sk(54,`var(--border-radius-md)`),Kg()()(),Qc(55,`tr`)(56,`td`)(57,`code`),Sk(58,`--border-color`),Kg()(),Qc(59,`td`),Sk(60,`Cor da borda`),Kg(),Qc(61,`td`)(62,`code`),Sk(63,`var(--color-neutral-light-20)`),Kg()()(),Qc(64,`tr`)(65,`td`)(66,`code`),Sk(67,`--background-color`),Kg()(),Qc(68,`td`),Sk(69,`Cor de background`),Kg(),Qc(70,`td`)(71,`code`),Sk(72,`Var(----color-neutral-light-05)`),Kg()()(),Qc(73,`tr`)(74,`td`)(75,`strong`),Sk(76,`Menu Footer`),Kg()(),vu(77,`td`)(78,`td`),Kg(),Qc(79,`tr`)(80,`td`)(81,`code`),Sk(82,`--color`),Kg()(),Qc(83,`td`),Sk(84,`Cor principla do menu footer`),Kg(),Qc(85,`td`)(86,`code`),Sk(87,`var(--color-action-default)`),Kg()()(),Qc(88,`tr`)(89,`td`)(90,`code`),Sk(91,`--font-size`),Kg()(),Qc(92,`td`),Sk(93,`Tamanho da fonte`),Kg(),Qc(94,`td`)(95,`code`),Sk(96,`var(--font-size-default)`),Kg()()(),Qc(97,`tr`)(98,`td`)(99,`code`),Sk(100,`--line-height`),Kg()(),Qc(101,`td`),Sk(102,`Tamanho da label`),Kg(),Qc(103,`td`)(104,`code`),Sk(105,`var(--line-height-md)`),Kg()()(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--outline-color-focused`),Kg()(),Qc(110,`td`),Sk(111,`Cor do outline do estado de focus`),Kg(),Qc(112,`td`)(113,`code`),Sk(114,`var(--color-action-focus)`),Kg()()(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--font-weight-lvl0`),Kg()(),Qc(119,`td`),Sk(120,`Peso da fonte`),Kg(),Qc(121,`td`)(122,`code`),Sk(123,`var(--font-weight-bold)`),Kg()()(),Qc(124,`tr`)(125,`td`)(126,`strong`),Sk(127,`po-menu-item`),Kg()(),vu(128,`td`)(129,`td`),Kg(),Qc(130,`tr`)(131,`td`)(132,`code`),Sk(133,`--font-family`),Kg()(),Qc(134,`td`),Sk(135,`Família tipográfica usada`),Kg(),Qc(136,`td`)(137,`code`),Sk(138,`var(--font-family-theme)`),Kg()()(),Qc(139,`tr`)(140,`td`)(141,`code`),Sk(142,`--font-size`),Kg()(),Qc(143,`td`),Sk(144,`Tamanho da fonte`),Kg(),Qc(145,`td`)(146,`code`),Sk(147,`var(--font-size-default)`),Kg()()(),Qc(148,`tr`)(149,`td`)(150,`code`),Sk(151,`--line-height`),Kg()(),Qc(152,`td`),Sk(153,`Tamanho da label`),Kg(),Qc(154,`td`)(155,`code`),Sk(156,`var(--line-height-md)`),Kg()()(),Qc(157,`tr`)(158,`td`)(159,`code`),Sk(160,`--border-radius`),Kg()(),Qc(161,`td`),Sk(162,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`var(--border-radius-md)`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--color`),Kg()(),Qc(170,`td`),Sk(171,`Cor principal do item`),Kg(),Qc(172,`td`)(173,`code`),Sk(174,`var(--color-action-default)`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`--background-color`),Kg()(),Qc(179,`td`),Sk(180,`Cor do background`),Kg(),Qc(181,`td`)(182,`code`),Sk(183,`transparent`),Kg()()(),Qc(184,`tr`)(185,`td`)(186,`strong`),Sk(187,`Hover`),Kg()(),vu(188,`td`)(189,`td`),Kg(),Qc(190,`tr`)(191,`td`)(192,`code`),Sk(193,`--color-hover`),Kg()(),Qc(194,`td`),Sk(195,`Cor principal no estado hover`),Kg(),Qc(196,`td`)(197,`code`),Sk(198,`var(--color-brand-01-darkest)`),Kg()()(),Qc(199,`tr`)(200,`td`)(201,`code`),Sk(202,`--background-color-hover`),Kg()(),Qc(203,`td`),Sk(204,`Cor de background no estado hover`),Kg(),Qc(205,`td`)(206,`code`),Sk(207,`var(--color-brand-01-lighter)`),Kg()()(),Qc(208,`tr`)(209,`td`)(210,`strong`),Sk(211,`Focused`),Kg()(),vu(212,`td`)(213,`td`),Kg(),Qc(214,`tr`)(215,`td`)(216,`code`),Sk(217,`--outline-color-focused`),Kg()(),Qc(218,`td`),Sk(219,`Cor do outline do estado de focus`),Kg(),Qc(220,`td`)(221,`code`),Sk(222,`var(--color-action-focus)`),Kg()()(),Qc(223,`tr`)(224,`td`)(225,`strong`),Sk(226,`Pressed`),Kg()(),vu(227,`td`)(228,`td`),Kg(),Qc(229,`tr`)(230,`td`)(231,`code`),Sk(232,`--background-color-pressed`),Kg(),Sk(233,` \xA0`),Kg(),Qc(234,`td`),Sk(235,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(236,`td`)(237,`code`),Sk(238,`var(--color-brand-01-light)`),Kg()()(),Qc(239,`tr`)(240,`td`)(241,`strong`),Sk(242,`Actived`),Kg()(),vu(243,`td`)(244,`td`),Kg(),Qc(245,`tr`)(246,`td`)(247,`code`),Sk(248,`--background-color-actived`),Kg()(),Qc(249,`td`),Sk(250,`Cor de background no estado actived`),Kg(),Qc(251,`td`)(252,`code`),Sk(253,`var(--color-brand-01-darkest)`),Kg()()(),Qc(254,`tr`)(255,`td`)(256,`code`),Sk(257,`--color-actived`),Kg()(),Qc(258,`td`),Sk(259,`Cor principal no estado actived`),Kg(),Qc(260,`td`)(261,`code`),Sk(262,`var(--color-brand-01-lighter)`),Kg()()(),Qc(263,`tr`)(264,`td`)(265,`strong`),Sk(266,`Font`),Kg()(),vu(267,`td`)(268,`td`),Kg(),Qc(269,`tr`)(270,`td`)(271,`code`),Sk(272,`--font-weight-lvl0`),Kg()(),Qc(273,`td`),Sk(274,`Peso da fonte bold`),Kg(),Qc(275,`td`)(276,`code`),Sk(277,`var(--font-weight-bold)`),Kg()()(),Qc(278,`tr`)(279,`td`)(280,`code`),Sk(281,`--font-weight-lvl1`),Kg()(),Qc(282,`td`),Sk(283,`Peso da fonte`),Kg(),Qc(284,`td`)(285,`code`),Sk(286,`var(--font-weight-normal)`),Kg()()()()(),Qc(287,`p`),vu(288,`br`),Sk(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),Kg(),Qc(290,`p`),Sk(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),Kg(),Qc(292,`p`),Sk(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),Kg(),Qc(294,`p`),Sk(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Qc(296,`a`,7)(297,`strong`),Sk(298,`p-menu-header-template`),Kg()(),Sk(299,`.`),Kg(),Qc(300,`p`),Sk(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Qc(302,`code`),Sk(303,`PoMenuFilter`),Kg(),Sk(304,`.`),Kg(),Qc(305,`p`),Sk(306,`Para o menu funcionar corretamente é necessário importar o `),Qc(307,`code`),Sk(308,`RouterModule`),Kg(),Sk(309,` e `),Qc(310,`code`),Sk(311,`Routes`),Kg(),Sk(312,` do módulo principal de sua aplicação:`),Kg(),Qc(313,`pre`)(314,`code`),Sk(315,`import { RouterModule, Routes } from '@angular/router';

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
`),Kg()(),Qc(316,`p`),Sk(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Kg(),Qc(318,`pre`)(319,`code`),Sk(320,`import { NgModule } from '@angular/core';

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
`),Kg()()(),Qc(321,`div`,8)(322,`h4`,9),Sk(323,`Seletor`),Kg(),Qc(324,`pre`,10),Sk(325,`<po-menu
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
`),Kg()(),Qc(326,`h4`,11),Sk(327,`Propriedades`),Kg(),Qc(328,`table`,12)(329,`tr`,13)(330,`th`,14),Sk(331,`Nome`),Kg(),Qc(332,`th`,14),Sk(333,`Tipo`),Kg(),Qc(334,`th`,14),Sk(335,`Padrão`),Kg(),Qc(336,`th`,14),Sk(337,`Descrição`),Kg()(),Qc(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),Sk(342,` p-automatic-toggle`),vu(343,`br`),Kg()()(),Qc(344,`td`,19)(345,`code`,20),Sk(346,`boolean`),Kg()(),Qc(347,`td`,21)(348,`p`)(349,`code`),Sk(350,`false`),Kg()()(),Qc(351,`td`,22)(352,`em`)(353,`strong`),Sk(354,`(opcional)`),Kg()(),Qc(355,`p`),Sk(356,`Expande e Colapsa (retrai) o menu automaticamente.`),Kg()()(),Qc(357,`tr`,23)(358,`td`,16)(359,`div`,17)(360,`span`,18),Sk(361,` p-collapsed`),vu(362,`br`),Kg()()(),Qc(363,`td`,19)(364,`code`,20),Sk(365,`boolean`),Kg()(),Qc(366,`td`,21)(367,`p`)(368,`code`),Sk(369,`false`),Kg()()(),Qc(370,`td`,22)(371,`em`)(372,`strong`),Sk(373,`(opcional)`),Kg()(),Qc(374,`p`),Sk(375,`Colapsa (retrai) o menu e caso receba o valor `),Qc(376,`code`),Sk(377,`false`),Kg(),Sk(378,` expande o menu.`),Kg(),Qc(379,`blockquote`)(380,`p`),Sk(381,`Utilize esta propriedade para iniciar o menu colapsado.`),Kg()(),Qc(382,`blockquote`)(383,`p`),Sk(384,`Ao utilizar os métodos `),Qc(385,`a`,24)(386,`code`),Sk(387,`colapse`),Kg()(),Sk(388,`, `),Qc(389,`a`,25)(390,`code`),Sk(391,`expand`),Kg()(),Sk(392,` e
`),Qc(393,`a`,26)(394,`code`),Sk(395,`toggle`),Kg()(),Sk(396,` o valor desta propriedade não é alterado.`),Kg()(),Qc(397,`p`)(398,`strong`),Sk(399,`Importante:`),Kg()(),Qc(400,`blockquote`)(401,`p`),Sk(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Qc(403,`code`),Sk(404,`icon`),Kg(),Sk(405,` e `),Qc(406,`code`),Sk(407,`shortLabel`),Kg(),Sk(408,`.`),Kg()()()(),Qc(409,`tr`,27)(410,`td`,16)(411,`div`,17)(412,`span`,18),Sk(413,` p-components-size`),vu(414,`br`),Kg()()(),Qc(415,`td`,19)(416,`code`,28),Sk(417,`string`),Kg()(),Qc(418,`td`,21)(419,`p`)(420,`code`),Sk(421,`medium`),Kg()()(),Qc(422,`td`,22)(423,`em`)(424,`strong`),Sk(425,`(opcional)`),Kg()(),Qc(426,`p`),Sk(427,`Define o tamanho dos componentes de formulário no menu:`),Kg(),Qc(428,`ul`)(429,`li`)(430,`code`),Sk(431,`small`),Kg(),Sk(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(433,`li`)(434,`code`),Sk(435,`medium`),Kg(),Sk(436,`: aplica a medida medium de cada componente.`),Kg()(),Qc(437,`blockquote`)(438,`p`),Sk(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(440,`code`),Sk(441,`medium`),Kg(),Sk(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(443,`a`,29),Sk(444,`po-theme`),Kg(),Sk(445,`.`),Kg()()()(),Qc(446,`tr`,30)(447,`td`,16)(448,`div`,17)(449,`span`,18),Sk(450,` p-filter`),vu(451,`br`),Kg()()(),Qc(452,`td`,19)(453,`code`,20),Sk(454,`boolean`),Kg()(),Qc(455,`td`,21)(456,`p`)(457,`code`),Sk(458,`false`),Kg()()(),Qc(459,`td`,22)(460,`em`)(461,`strong`),Sk(462,`(opcional)`),Kg()(),Qc(463,`p`),Sk(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Qc(465,`code`),Sk(466,`p-service`),Kg(),Sk(467,`.`),Kg(),Qc(468,`blockquote`)(469,`p`),Sk(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),Kg()()()(),Qc(471,`tr`,31)(472,`td`,16)(473,`div`,17)(474,`span`,18),Sk(475,` p-logo`),vu(476,`br`),Kg()()(),Qc(477,`td`,19)(478,`code`,28),Sk(479,`string`),Kg()(),Qc(480,`td`,21),Sk(481,`-`),Kg(),Qc(482,`td`,22)(483,`em`)(484,`strong`),Sk(485,`(opcional)`),Kg()(),Qc(486,`p`),Sk(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),Kg(),Qc(488,`blockquote`)(489,`p`)(490,`strong`),Sk(491,`Importante:`),Kg()()(),Qc(492,`ul`)(493,`li`),Sk(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),Kg(),Qc(495,`li`),Sk(496,`Como boa prática, indica-se utilizar imagens com até `),Qc(497,`code`),Sk(498,`24px`),Kg(),Sk(499,` de altura e `),Qc(500,`code`),Sk(501,`224px`),Kg(),Sk(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Kg()()()(),Qc(503,`tr`,32)(504,`td`,16)(505,`div`,17)(506,`span`,18),Sk(507,` p-logo-alt`),vu(508,`br`),Kg()()(),Qc(509,`td`,19)(510,`code`,28),Sk(511,`string`),Kg()(),Qc(512,`td`,21)(513,`p`)(514,`code`),Sk(515,`Logomarca início`),Kg()()(),Qc(516,`td`,22)(517,`em`)(518,`strong`),Sk(519,`(opcional)`),Kg()(),Qc(520,`p`),Sk(521,`Define o texto alternativo para a logomarca.`),Kg(),Qc(522,`blockquote`)(523,`p`)(524,`strong`),Sk(525,`Importante`),Kg(),Sk(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Kg()()()(),Qc(527,`tr`,33)(528,`td`,16)(529,`div`,17)(530,`span`,18),Sk(531,` p-logo-link`),vu(532,`br`),Kg()()(),Qc(533,`td`,19)(534,`code`,20),Sk(535,`boolean `),Kg(),Qc(536,`code`,28),Sk(537,` string`),Kg()(),Qc(538,`td`,21)(539,`p`)(540,`code`),Sk(541,`true`),Kg()()(),Qc(542,`td`,22)(543,`em`)(544,`strong`),Sk(545,`(opcional)`),Kg()(),Qc(546,`p`),Sk(547,`Define o link para a rota ao clicar no logo do menu.`),Kg(),Qc(548,`ul`)(549,`li`),Sk(550,`Se o valor for uma string, define a rota para o link informado.`),Kg(),Qc(551,`li`),Sk(552,`Se for `),Qc(553,`code`),Sk(554,`false`),Kg(),Sk(555,`, o logo não terá link associado.`),Kg(),Qc(556,`li`),Sk(557,`Se for `),Qc(558,`code`),Sk(559,`true`),Kg(),Sk(560,`, o logo terá a rota padrão `),Qc(561,`code`),Sk(562,`./`),Kg(),Sk(563,`.`),Kg()()()(),Qc(564,`tr`,34)(565,`td`,16)(566,`div`,17)(567,`span`,18),Sk(568,` p-menus`),vu(569,`br`),Kg()()(),Qc(570,`td`,19)(571,`code`,35),Sk(572,`PoMenuItem[]`),Kg()(),Qc(573,`td`,21),Sk(574,`-`),Kg(),Qc(575,`td`,22)(576,`p`),Sk(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg()()(),Qc(578,`tr`,36)(579,`td`,16)(580,`div`,17)(581,`span`,18),Sk(582,` p-params`),vu(583,`br`),Kg()()(),Qc(584,`td`,19)(585,`code`,37),Sk(586,`any`),Kg()(),Qc(587,`td`,21),Sk(588,`-`),Kg(),Qc(589,`td`,22)(590,`em`)(591,`strong`),Sk(592,`(opcional)`),Kg()(),Qc(593,`p`),Sk(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),Kg(),Qc(595,`p`),Sk(596,`Caso utilizado um serviço customizado, implementando a interface `),Qc(597,`code`),Sk(598,`PoMenuFilter`),Kg(),Sk(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Qc(600,`code`),Sk(601,`getFilteredData`),Kg(),Sk(602,`.`),Kg(),Qc(603,`p`),Sk(604,`Quando utilizada uma URL de serviço, será realizado um `),Qc(605,`em`),Sk(606,`GET`),Kg(),Sk(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Qc(608,`code`),Sk(609,`search`),Kg(),Sk(610,`, veja exemplo:`),Kg(),Qc(611,`pre`)(612,`code`),Sk(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),Kg()()()(),Qc(614,`tr`,38)(615,`td`,16)(616,`div`,17)(617,`span`,18),Sk(618,` p-search-tree-items`),vu(619,`br`),Kg()()(),Qc(620,`td`,19)(621,`code`,20),Sk(622,`boolean`),Kg()(),Qc(623,`td`,21)(624,`p`)(625,`code`),Sk(626,`false`),Kg()()(),Qc(627,`td`,22)(628,`em`)(629,`strong`),Sk(630,`(opcional)`),Kg()(),Qc(631,`p`),Sk(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),Kg(),Qc(633,`blockquote`)(634,`p`),Sk(635,`É necessário que a propriedade `),Qc(636,`code`),Sk(637,`p-filter`),Kg(),Sk(638,` esteja habilitada.`),Kg()()()(),Qc(639,`tr`,39)(640,`td`,16)(641,`div`,17)(642,`span`,18),Sk(643,` p-service`),vu(644,`br`),Kg()()(),Qc(645,`td`,19)(646,`code`,28),Sk(647,`string `),Kg(),Qc(648,`code`,40),Sk(649,` PoMenuFilter`),Kg()(),Qc(650,`td`,21),Sk(651,`-`),Kg(),Qc(652,`td`,22)(653,`em`)(654,`strong`),Sk(655,`(opcional)`),Kg()(),Qc(656,`p`),Sk(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Qc(658,`code`),Sk(659,`PoMenuFilter`),Kg(),Sk(660,`.`),Kg(),Qc(661,`p`),Sk(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Qc(663,`a`,41),Sk(664,`Guia de implementação de APIs`),Kg(),Sk(665,` do PO UI.`),Kg(),Qc(666,`p`),Sk(667,`Quando utilizada uma URL de serviço, será realizado um `),Qc(668,`em`),Sk(669,`GET`),Kg(),Sk(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Qc(671,`code`),Sk(672,`search`),Kg(),Sk(673,`, veja exemplo:`),Kg(),Qc(674,`blockquote`)(675,`p`),Sk(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Qc(677,`code`),Sk(678,`tot`),Kg(),Sk(679,`.`),Kg()(),Qc(680,`pre`)(681,`code`),Sk(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),Kg()(),Qc(683,`blockquote`)(684,`p`),Sk(685,`É necessário que propriedade `),Qc(686,`code`),Sk(687,`p-filter`),Kg(),Sk(688,` esteja habilitada.`),Kg()()()(),Qc(689,`tr`,42)(690,`td`,16)(691,`div`,17)(692,`span`,18),Sk(693,` p-short-logo`),vu(694,`br`),Kg()()(),Qc(695,`td`,19)(696,`code`,28),Sk(697,`string`),Kg()(),Qc(698,`td`,21),Sk(699,`-`),Kg(),Qc(700,`td`,22)(701,`em`)(702,`strong`),Sk(703,`(opcional)`),Kg()(),Qc(704,`p`),Sk(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),Kg(),Qc(706,`blockquote`)(707,`p`)(708,`strong`),Sk(709,`Importante:`),Kg()()(),Qc(710,`ul`)(711,`li`),Sk(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Qc(713,`code`),Sk(714,`p-logo`),Kg(),Sk(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),Kg(),Qc(716,`li`),Sk(717,`Como boa prática, indica-se utilizar imagens com até `),Qc(718,`code`),Sk(719,`48px`),Kg(),Sk(720,` de altura e `),Qc(721,`code`),Sk(722,`48px`),Kg(),Sk(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Kg(),Qc(724,`li`),Sk(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Qc(726,`code`),Sk(727,`p-logo`),Kg(),Sk(728,`.`),Kg()()()(),Qc(729,`tr`,43)(730,`td`,16)(731,`div`,44)(732,`span`,45),Sk(733,` (p-toggle)`),vu(734,`br`),Kg()()(),Qc(735,`td`,19)(736,`code`,46),Sk(737,`EventEmitter`),Kg()(),Qc(738,`td`,21),Sk(739,`-`),Kg(),Qc(740,`td`,22)(741,`em`)(742,`strong`),Sk(743,`(opcional)`),Kg()(),Qc(744,`p`),Sk(745,`Evento emitido toda vez que o estado do menu muda, enviando `),Qc(746,`code`),Sk(747,`true`),Kg(),Sk(748,` quando expandido e `),Qc(749,`code`),Sk(750,`false`),Kg(),Sk(751,` quando colapsado.`),Kg(),Qc(752,`pre`)(753,`code`,47),Sk(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),Kg()()()()(),Qc(755,`h3`,11),Sk(756,`Métodos`),Kg(),Qc(757,`table`,48)(758,`tr`,49)(759,`th`,50)(760,`div`,17)(761,`h4`)(762,`span`,18),Sk(763,` collapse `),Kg()()()()(),Qc(764,`tr`,22)(765,`td`,22)(766,`p`),vu(767,`a`,51),Kg(),Qc(768,`p`),Sk(769,`Método para colapsar (retrair) o menu.`),Kg()()()(),vu(770,`br`),Qc(771,`table`,52)(772,`tr`,49)(773,`th`,50)(774,`div`,17)(775,`h4`)(776,`span`,18),Sk(777,` expand `),Kg()()()()(),Qc(778,`tr`,22)(779,`td`,22)(780,`p`),vu(781,`a`,53),Kg(),Qc(782,`p`),Sk(783,`Método para expandir (aumentar) o menu.`),Kg()()()(),vu(784,`br`),Qc(785,`table`,54)(786,`tr`,49)(787,`th`,50)(788,`div`,17)(789,`h4`)(790,`span`,18),Sk(791,` toggle `),Kg()()()()(),Qc(792,`tr`,22)(793,`td`,22)(794,`p`),vu(795,`a`,55),Sk(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),Kg(),Qc(797,`blockquote`)(798,`p`),Sk(799,`Os métodos apenas vão colapsar/expandir o menu se:`),Kg()(),Qc(800,`ul`)(801,`li`),Sk(802,`Todos os itens de menu tiverem valor nas propriedades `),Qc(803,`code`),Sk(804,`icon`),Kg(),Sk(805,` e `),Qc(806,`code`),Sk(807,`shortLabel`),Kg(),Sk(808,`.`),Kg()()()()(),vu(809,`br`),Qc(810,`h3`),Sk(811,`Interfaces`),Kg(),Qc(812,`h4`,56)(813,`code`,5),Sk(814,`PoMenuFilter`),Kg()(),Qc(815,`div`,2)(816,`p`),Sk(817,`Interface do serviço utilizado no componente `),Qc(818,`code`),Sk(819,`po-menu`),Kg(),Sk(820,`.`),Kg()(),Qc(821,`h4`,11),Sk(822,`Métodos`),Kg(),Qc(823,`table`,57)(824,`tr`,49)(825,`th`,50)(826,`div`,17)(827,`h4`)(828,`span`,18),Sk(829,` getFilteredData `),Kg()()()()(),Qc(830,`tr`,22)(831,`td`,22)(832,`p`),Sk(833,`Método responsável por retornar um `),Qc(834,`em`),Sk(835,`Observable`),Kg(),Sk(836,` que retorne uma lista de objetos que seguem a interface `),Qc(837,`code`),Sk(838,`PoMenuItemFiltered`),Kg(),Sk(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Qc(840,`code`),Sk(841,`p-params`),Kg(),Sk(842,`.`),Kg()()()(),Qc(843,`h5`)(844,`b`),Sk(845,`Parâmetros`),Kg()(),Qc(846,`table`,12)(847,`tr`,13)(848,`th`,14),Sk(849,`Nome`),Kg(),Qc(850,`th`,14),Sk(851,`Tipo`),Kg(),Qc(852,`th`,14),Sk(853,`Descrição`),Kg()(),Qc(854,`tr`,49)(855,`td`,16),Sk(856,` search`),Kg(),Qc(857,`td`,19)(858,`code`,58),Sk(859,` string `),Kg()(),Qc(860,`td`,22)(861,`p`),Sk(862,`Valor informado no campo de busca dos itens de menus.`),Kg()()(),Qc(863,`tr`,49)(864,`td`,16),Sk(865,` params`),Kg(),Qc(866,`td`,19)(867,`code`,58),Sk(868,` any `),Kg()(),Qc(869,`td`,22)(870,`p`),Sk(871,`Valor informado através da propriedade `),Qc(872,`code`),Sk(873,`p-params`),Kg(),Sk(874,`.`),Kg()()()(),vu(875,`br`),Qc(876,`h4`,59)(877,`code`,5),Sk(878,`PoMenuItemBadge`),Kg()(),Qc(879,`div`,2)(880,`p`),Sk(881,`Interface do `),Qc(882,`em`),Sk(883,`badge`),Kg(),Sk(884,` utilizado no `),Qc(885,`code`),Sk(886,`po-menu`),Kg(),Sk(887,`.`),Kg()(),Qc(888,`h4`,11),Sk(889,`Propriedades`),Kg(),Qc(890,`table`,12)(891,`tr`,13)(892,`th`,14),Sk(893,`Nome`),Kg(),Qc(894,`th`,14),Sk(895,`Tipo`),Kg(),Qc(896,`th`,14),Sk(897,`Descrição`),Kg()(),Qc(898,`tr`,60)(899,`td`,16)(900,`div`,17)(901,`span`,18),Sk(902,` color`),vu(903,`br`),Kg()()(),Qc(904,`td`,19)(905,`code`,28),Sk(906,`string`),Kg()(),Qc(907,`td`,22)(908,`em`)(909,`strong`),Sk(910,`(opcional)`),Kg()(),Qc(911,`p`),Sk(912,`Define a cor do `),Qc(913,`em`),Sk(914,`badge`),Kg(),Sk(915,` e aceita os valores:`),Kg(),Qc(916,`p`),vu(917,`span`,61),Qc(918,`code`),Sk(919,`color-01`),Kg()(),Qc(920,`p`),vu(921,`span`,62),Qc(922,`code`),Sk(923,`color-02`),Kg()(),Qc(924,`p`),vu(925,`span`,63),Qc(926,`code`),Sk(927,`color-03`),Kg()(),Qc(928,`p`),vu(929,`span`,64),Qc(930,`code`),Sk(931,`color-04`),Kg()(),Qc(932,`p`),vu(933,`span`,65),Qc(934,`code`),Sk(935,`color-05`),Kg()(),Qc(936,`p`),vu(937,`span`,66),Qc(938,`code`),Sk(939,`color-06`),Kg()(),Qc(940,`p`),vu(941,`span`,67),Qc(942,`code`),Sk(943,`color-07`),Kg()(),Qc(944,`p`),vu(945,`span`,68),Qc(946,`code`),Sk(947,`color-08`),Kg()(),Qc(948,`p`),vu(949,`span`,69),Qc(950,`code`),Sk(951,`color-09`),Kg()(),Qc(952,`p`),vu(953,`span`,70),Qc(954,`code`),Sk(955,`color-10`),Kg()(),Qc(956,`p`),vu(957,`span`,71),Qc(958,`code`),Sk(959,`color-11`),Kg()(),Qc(960,`p`),vu(961,`span`,72),Qc(962,`code`),Sk(963,`color-12`),Kg()()()(),Qc(964,`tr`,73)(965,`td`,16)(966,`div`,17)(967,`span`,18),Sk(968,` value`),vu(969,`br`),Kg()()(),Qc(970,`td`,19)(971,`code`,74),Sk(972,`number`),Kg()(),Qc(973,`td`,22)(974,`p`),Sk(975,`Número exibido no `),Qc(976,`em`),Sk(977,`badge`),Kg(),Sk(978,`, caso o mesmo seja maior que `),Qc(979,`strong`),Sk(980,`9`),Kg(),Sk(981,` o mesmo exibe `),Qc(982,`strong`),Sk(983,`9+`),Kg(),Sk(984,`.`),Kg()()()(),Qc(985,`h4`,75)(986,`code`,5),Sk(987,`PoMenuItemFiltered`),Kg()(),Qc(988,`div`,2)(989,`p`),Sk(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Qc(991,`code`),Sk(992,`po-menu`),Kg(),Sk(993,`.`),Kg()(),Qc(994,`h4`,11),Sk(995,`Propriedades`),Kg(),Qc(996,`table`,12)(997,`tr`,13)(998,`th`,14),Sk(999,`Nome`),Kg(),Qc(1e3,`th`,14),Sk(1001,`Tipo`),Kg(),Qc(1002,`th`,14),Sk(1003,`Descrição`),Kg()(),Qc(1004,`tr`,76)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),Sk(1008,` action`),vu(1009,`br`),Kg()()(),Qc(1010,`td`,19)(1011,`code`,77),Sk(1012,`() => void`),Kg()(),Qc(1013,`td`,22)(1014,`p`),Sk(1015,`Ação a ser executada quando o item de menu for clicado.`),Kg()()(),Qc(1016,`tr`,78)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),Sk(1020,` label`),vu(1021,`br`),Kg()()(),Qc(1022,`td`,19)(1023,`code`,28),Sk(1024,`string`),Kg()(),Qc(1025,`td`,22)(1026,`p`),Sk(1027,`Texto do item de menu.`),Kg()()(),Qc(1028,`tr`,79)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),Sk(1032,` link`),vu(1033,`br`),Kg()()(),Qc(1034,`td`,19)(1035,`code`,28),Sk(1036,`string`),Kg()(),Qc(1037,`td`,22)(1038,`p`),Sk(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Qc(1040,`em`),Sk(1041,`link`),Kg(),Sk(1042,` interno ou externo.`),Kg()()()(),Qc(1043,`h4`,80)(1044,`code`,5),Sk(1045,`PoMenuItem`),Kg()(),Qc(1046,`div`,2)(1047,`p`),Sk(1048,`Interface para os itens de menu do componente po-menu.`),Kg()(),Qc(1049,`h4`,11),Sk(1050,`Propriedades`),Kg(),Qc(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),Sk(1054,`Nome`),Kg(),Qc(1055,`th`,14),Sk(1056,`Tipo`),Kg(),Qc(1057,`th`,14),Sk(1058,`Descrição`),Kg()(),Qc(1059,`tr`,81)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),Sk(1063,` action`),vu(1064,`br`),Kg()()(),Qc(1065,`td`,19)(1066,`code`,82),Sk(1067,`Function`),Kg()(),Qc(1068,`td`,22)(1069,`em`)(1070,`strong`),Sk(1071,`(opcional)`),Kg()(),Qc(1072,`p`),Sk(1073,`Ação personalizada para clique do item de menu.`),Kg()()(),Qc(1074,`tr`,83)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),Sk(1078,` badge`),vu(1079,`br`),Kg()()(),Qc(1080,`td`,19)(1081,`code`,84),Sk(1082,`PoMenuItemBadge`),Kg()(),Qc(1083,`td`,22)(1084,`em`)(1085,`strong`),Sk(1086,`(opcional)`),Kg()(),Qc(1087,`p`),Sk(1088,`Badge do item de menu.`),Kg(),Qc(1089,`p`),Sk(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),Kg(),Qc(1091,`blockquote`)(1092,`p`),Sk(1093,`O `),Qc(1094,`code`),Sk(1095,`po-badge`),Kg(),Sk(1096,` só será exibido caso o item do menu não possua `),Qc(1097,`code`),Sk(1098,`subItems`),Kg(),Sk(1099,` e seu valor seja maior ou igual a 0.`),Kg()()()(),Qc(1100,`tr`,85)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),Sk(1104,` icon`),vu(1105,`br`),Kg()()(),Qc(1106,`td`,19)(1107,`code`,28),Sk(1108,`string `),Kg(),Qc(1109,`code`,86),Sk(1110,` TemplateRef<void>`),Kg()(),Qc(1111,`td`,22)(1112,`em`)(1113,`strong`),Sk(1114,`(opcional)`),Kg()(),Qc(1115,`p`),Sk(1116,`É possível usar qualquer um dos ícones da `),Qc(1117,`a`,87),Sk(1118,`Biblioteca de ícones`),Kg(),Sk(1119,`. conforme exemplo abaixo:`),Kg(),Qc(1120,`pre`)(1121,`code`),Sk(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),Kg()(),Qc(1123,`p`),Sk(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Qc(1125,`pre`)(1126,`code`),Sk(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),Kg()(),Qc(1128,`p`),Sk(1129,`Outra opção seria a customização do ícone através do `),Qc(1130,`code`),Sk(1131,`TemplateRef`),Kg(),Sk(1132,`, conforme exemplo abaixo:
component.html:`),Kg(),Qc(1133,`pre`)(1134,`code`),Sk(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),Kg()(),Qc(1136,`p`),Sk(1137,`component.ts:`),Kg(),Qc(1138,`pre`)(1139,`code`),Sk(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),Kg()(),Qc(1141,`blockquote`)(1142,`p`),Sk(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),Kg()()()(),Qc(1144,`tr`,88)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),Sk(1148,` label`),vu(1149,`br`),Kg()()(),Qc(1150,`td`,19)(1151,`code`,28),Sk(1152,`string`),Kg()(),Qc(1153,`td`,22)(1154,`p`),Sk(1155,`Texto do item de menu.`),Kg()()(),Qc(1156,`tr`,89)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),Sk(1160,` link`),vu(1161,`br`),Kg()()(),Qc(1162,`td`,19)(1163,`code`,28),Sk(1164,`string`),Kg()(),Qc(1165,`td`,22)(1166,`em`)(1167,`strong`),Sk(1168,`(opcional)`),Kg()(),Qc(1169,`p`),Sk(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Kg()()(),Qc(1171,`tr`,90)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),Sk(1175,` shortLabel`),vu(1176,`br`),Kg()()(),Qc(1177,`td`,19)(1178,`code`,28),Sk(1179,`string`),Kg()(),Qc(1180,`td`,22)(1181,`em`)(1182,`strong`),Sk(1183,`(opcional)`),Kg()(),Qc(1184,`p`),Sk(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),Kg()()(),Qc(1186,`tr`,91)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),Sk(1190,` subItems`),vu(1191,`br`),Kg()()(),Qc(1192,`td`,19)(1193,`code`,92),Sk(1194,`Array<PoMenuItem>`),Kg()(),Qc(1195,`td`,22)(1196,`em`)(1197,`strong`),Sk(1198,`(opcional)`),Kg()(),Qc(1199,`p`),Sk(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),Kg()()()(),Qc(1201,`h3`,93),Sk(1202,`Subcomponentes`),Kg(),Qc(1203,`ul`,94)(1204,`li`)(1205,`a`,95),Sk(1206,`Menu Header Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ge(a,F){if(a&1){let m=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(m);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-menu-basic-view`)(2,`sample-po-menu-labs-view`)(3,`sample-po-menu-human-resources-view`),Kg()}if(a&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ge,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-menu-doc`),Kg()()()),l&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Pe,we,ke,Ie],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Qe),GV]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Te]})}return a})();export{Dt as DocPoMenuModule};