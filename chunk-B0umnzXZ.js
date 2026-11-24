import{m as P,p as M}from"./main-QQSPUZS3.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,E as G4,F as Joe,Fa as nm,Fr as H_,G as Nf,Hr as KO,Ki as Zb,L as Koe,Li as WL,Lr as I,Ni as Vk,Pn as tre,Pt as are,Si as Rk,St as Vze,Ti as TZ,Ur as Kb,Vi as Y,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,a as A5,ai as Ok,ar as Ab,bi as R,bn as oi,co as wg,da as ge,eo as tk,ho as xo,ja as mk,jr as GV,k as Goe,ki as U_,lr as B_,lt as Ss,mr as Cb,oo as vt,or as An,pi as QL,qr as LO,ra as de,ri as No,si as PI,sn as j4,so as we$1,ti as NZ,tn as gte,tt as R4,ur as Be,wa as jk,xa as j_,xi as RZ,y as EP,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var Ve=()=>({label:`PO UI - Angular Framework`,link:`/`});var Re=a=>[a];var Pe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(r,i){r&1&&_u(0,`po-menu`,0),r&2&&Ab(`p-menus`,jk(2,Re,Vk(1,Ve)))},dependencies:[A5],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-menu-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-basic/sample-po-menu-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-basic/sample-po-menu-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-menu-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();function ze(a,A){if(a&1&&(Jc(0,`div`),_u(1,`span`),Jc(2,`span`,26),Mk(3),Kg()()),a&2){let m=A.$implicit;wg(),mk(Ok(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),wg(2),nm(` `,m.label,` `)}}var we=(()=>{class a{changeDetector=p(Be);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(r){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,r){let i;if(m){for(let p of m)if(p.id===r){i=p;break}else i||(i=this.getMenuParent(p.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(r,i){if(r&1&&Cu(A5,7),r&2){let p;No(p=xo())&&(i.menu=p.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(r,i){if(r&1){let p=KO();Jc(0,`div`,1),_u(1,`po-menu`,2),Jc(2,`po-page-default`,3)(3,`div`,4),_u(4,`po-info`,5)(5,`po-button-group`,6),Kg(),_u(6,`po-divider`),Jc(7,`div`,4),_u(8,`po-info`,7),Jc(9,`form`,null,0)(11,`po-switch`,8),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.filter,l)||(i.filter=l),H_(l)}),vt(`ngModelChange`,function(l){return i.onFilterChange(l)}),Kg(),Jc(12,`po-switch`,9),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.searchTreeItems,l)||(i.searchTreeItems=l),H_(l)}),Kg(),Jc(13,`po-select`,10),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.parent,l)||(i.parent=l),H_(l)}),Kg(),Jc(14,`po-input`,11),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.label,l)||(i.label=l),H_(l)}),Kg(),Jc(15,`po-input`,12),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.shortLabel,l)||(i.shortLabel=l),H_(l)}),Kg(),Jc(16,`po-url`,13),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.link,l)||(i.link=l),H_(l)}),Kg(),Jc(17,`po-select`,14),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.badgeColor,l)||(i.badgeColor=l),H_(l)}),Cb(18,ze,4,4,`ng-template`,15),Kg(),Jc(19,`po-number`,16),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.badgeValue,l)||(i.badgeValue=l),H_(l)}),Kg(),Jc(20,`po-select`,17),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.icon,l)||(i.icon=l),H_(l)}),Kg(),Jc(21,`div`,4)(22,`po-button`,18),vt(`p-click`,function(){return i.addMenuItem()}),Kg()(),_u(23,`po-divider`),Jc(24,`po-input`,19),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.service,l)||(i.service=l),H_(l)}),Kg(),Jc(25,`po-input`,20),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.menuParams,l)||(i.menuParams=l),H_(l)}),vt(`p-change-model`,function(l){return i.onChangeParams(l)}),Kg(),Jc(26,`po-input`,21),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.logo,l)||(i.logo=l),H_(l)}),Kg(),Jc(27,`po-input`,22),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.shortLogo,l)||(i.shortLogo=l),H_(l)}),Kg(),Jc(28,`po-input`,23),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.logoLink,l)||(i.logoLink=l),H_(l)}),Kg(),Jc(29,`po-radio-group`,24),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(i.componentsSize,l)||(i.componentsSize=l),H_(l)}),Kg(),Jc(30,`div`,4)(31,`po-button`,25),vt(`p-click`,function(){return i.restore()}),Kg()()()()()()}r&2&&(wg(),Ab(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),wg(4),Ab(`p-buttons`,i.buttons),wg(3),Ab(`p-value`,i.menuItemSelected),wg(3),Kb(`ngModel`,i.filter),q0(),wg(),Kb(`ngModel`,i.searchTreeItems),Ab(`p-disabled`,!i.filter),q0(),wg(),Kb(`ngModel`,i.parent),Ab(`p-options`,i.parentList),q0(),wg(),Kb(`ngModel`,i.label),q0(),wg(),Kb(`ngModel`,i.shortLabel),q0(),wg(),Kb(`ngModel`,i.link),q0(),wg(),Kb(`ngModel`,i.badgeColor),Ab(`p-options`,i.badgeColorList),q0(),wg(2),Kb(`ngModel`,i.badgeValue),Ab(`p-max`,i.maxBadgeValue),q0(),wg(),Kb(`ngModel`,i.icon),Ab(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),q0(),wg(4),Kb(`ngModel`,i.service),q0(),wg(),Kb(`ngModel`,i.menuParams),q0(),wg(),Kb(`ngModel`,i.logo),q0(),wg(),Kb(`ngModel`,i.shortLogo),q0(),wg(),Kb(`ngModel`,i.logoLink),q0(),wg(),Kb(`ngModel`,i.componentsSize),Ab(`p-options`,i.componentsSizeOptions),q0())},dependencies:[NZ,TZ,RZ,QL,WL,oi,gte,Nf,j4,Goe,Zte,Koe,R4,G4,Joe,A5,Mze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var ke=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:43,vars:0,consts:[[`id`,`sample-po-menu-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-labs/sample-po-menu-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-labs/sample-po-menu-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-menu-labs/sample-po-menu-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-menu-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-wrapper">
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
              <span class="sample-menu-circle sample-menu-vertical-middle po-`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` option.value `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`"></span>
              <span class="sample-menu-vertical-middle"> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` option.label `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,` </span>
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
`),Kg()()()(),Jc(28,`po-tab`,9)(29,`div`)(30,`label`,6),Mk(31,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),Kg(),Jc(32,`div`,10)(33,`pre`,11),Mk(34,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Jc(35,`po-tab`,12)(36,`div`)(37,`label`,6),Mk(38,`sample-po-menu-labs/sample-po-menu-labs.component.css`),Kg(),Jc(39,`div`,13)(40,`pre`,14),Mk(41,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),Kg()()()()()(),_u(42,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{http=p(PI);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(Y(i=>i.items))}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Oe(a,A){a&1&&(Jc(0,`div`,5)(1,`p`),Mk(2,`Welcome,`),Kg(),Jc(3,`p`)(4,`b`),Mk(5,` John Doe `),Kg()()())}var Ie=(()=>{class a{samplePoMenuHumanResourcesService=p(O);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[we$1([O])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`po-menu`,1),Cb(2,Oe,6,0,`div`,2),Kg(),_u(3,`po-toolbar`,3)(4,`po-page-default`,4),Kg()),r&2&&(wg(),Ab(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),wg(2),Ab(`p-show-notification`,!1),wg(),Ab(`p-title`,i.menuItemSelected))},dependencies:[A5,EP,Mze,Vze],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var Le=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:36,vars:0,consts:[[`id`,`sample-po-menu-human-resources`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu - Human Resources`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-menu-human-resources`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-wrapper">
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,6),Mk(24,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),Kg(),Jc(25,`div`,12)(26,`pre`,11),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()(),Jc(28,`po-tab`,13)(29,`div`)(30,`label`,6),Mk(31,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),Kg(),Jc(32,`div`,14)(33,`pre`,15),Mk(34,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),Kg()()()()()(),_u(35,`hr`))},dependencies:[P,tre,are,Ie],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{router=p(An);openDoc(m){this.router.navigate([`/documentation`,m],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1205,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Menu Header Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-menu-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-automatic-toggle`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-collapsed`,1,`docs-api-properties-row`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-logo-alt`,1,`docs-api-properties-row`],[`id`,`prop-p-logo-link`,1,`docs-api-properties-row`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`id`,`prop-p-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-search-tree-items`,1,`docs-api-properties-row`],[`id`,`prop-p-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-short-logo`,1,`docs-api-properties-row`],[`id`,`event-p-toggle`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[`id`,`method-collapse`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`method-expand`,1,`docs-api-method-table`],[`id`,`expandMethod`],[`id`,`method-toggle`,1,`docs-api-method-table`],[`id`,`toggleMethod`],[`id`,`interface-po-menu-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-menu-item-badge`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-badge-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`id`,`interface-po-menu-item-badge-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-menu-item-filtered`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-filtered-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`id`,`interface-po-menu-item-filtered-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-filtered-link`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-menu-item-badge`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`id`,`interface-po-menu-item-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-menu-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-link`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-short-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-item-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoMenuModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-menu.`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Subcomponentes:`),Kg(),Jc(10,`po-tag`,4),vt(`p-click`,function(){return i.openDoc(`po-menu-header-template`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoMenuComponent`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),Kg(),Jc(19,`p`),Mk(20,`O componente po-menu recebe uma lista de objetos do tipo `),Jc(21,`code`),Mk(22,`MenuItem`),Kg(),Mk(23,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),Kg(),Jc(24,`h4`),Mk(25,`Tokens customizáveis`),Kg(),Jc(26,`p`),Mk(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(28,`blockquote`)(29,`p`),Mk(30,`Para maiores informações, acesse o guia `),Jc(31,`a`,8),Mk(32,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(33,`.`),Kg()(),Jc(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),Mk(38,`Propriedade`),Kg(),Jc(39,`th`),Mk(40,`Descrição`),Kg(),Jc(41,`th`),Mk(42,`Valor Padrão`),Kg()()(),Jc(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),Mk(47,`Default Values`),Kg()(),_u(48,`td`)(49,`td`),Kg(),Jc(50,`tr`)(51,`td`)(52,`code`),Mk(53,`--border-radius`),Kg()(),Jc(54,`td`),Mk(55,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(56,`td`)(57,`code`),Mk(58,`var(--border-radius-md)`),Kg()()(),Jc(59,`tr`)(60,`td`)(61,`code`),Mk(62,`--border-color`),Kg()(),Jc(63,`td`),Mk(64,`Cor da borda`),Kg(),Jc(65,`td`)(66,`code`),Mk(67,`var(--color-neutral-light-20)`),Kg()()(),Jc(68,`tr`)(69,`td`)(70,`code`),Mk(71,`--background-color`),Kg()(),Jc(72,`td`),Mk(73,`Cor de background`),Kg(),Jc(74,`td`)(75,`code`),Mk(76,`Var(----color-neutral-light-05)`),Kg()()(),Jc(77,`tr`)(78,`td`)(79,`strong`),Mk(80,`Menu Footer`),Kg()(),_u(81,`td`)(82,`td`),Kg(),Jc(83,`tr`)(84,`td`)(85,`code`),Mk(86,`--color`),Kg()(),Jc(87,`td`),Mk(88,`Cor principla do menu footer`),Kg(),Jc(89,`td`)(90,`code`),Mk(91,`var(--color-action-default)`),Kg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Mk(95,`--font-size`),Kg()(),Jc(96,`td`),Mk(97,`Tamanho da fonte`),Kg(),Jc(98,`td`)(99,`code`),Mk(100,`var(--font-size-default)`),Kg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--line-height`),Kg()(),Jc(105,`td`),Mk(106,`Tamanho da label`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--line-height-md)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Mk(113,`--outline-color-focused`),Kg()(),Jc(114,`td`),Mk(115,`Cor do outline do estado de focus`),Kg(),Jc(116,`td`)(117,`code`),Mk(118,`var(--color-action-focus)`),Kg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Mk(122,`--font-weight-lvl0`),Kg()(),Jc(123,`td`),Mk(124,`Peso da fonte`),Kg(),Jc(125,`td`)(126,`code`),Mk(127,`var(--font-weight-bold)`),Kg()()(),Jc(128,`tr`)(129,`td`)(130,`strong`),Mk(131,`po-menu-item`),Kg()(),_u(132,`td`)(133,`td`),Kg(),Jc(134,`tr`)(135,`td`)(136,`code`),Mk(137,`--font-family`),Kg()(),Jc(138,`td`),Mk(139,`Família tipográfica usada`),Kg(),Jc(140,`td`)(141,`code`),Mk(142,`var(--font-family-theme)`),Kg()()(),Jc(143,`tr`)(144,`td`)(145,`code`),Mk(146,`--font-size`),Kg()(),Jc(147,`td`),Mk(148,`Tamanho da fonte`),Kg(),Jc(149,`td`)(150,`code`),Mk(151,`var(--font-size-default)`),Kg()()(),Jc(152,`tr`)(153,`td`)(154,`code`),Mk(155,`--line-height`),Kg()(),Jc(156,`td`),Mk(157,`Tamanho da label`),Kg(),Jc(158,`td`)(159,`code`),Mk(160,`var(--line-height-md)`),Kg()()(),Jc(161,`tr`)(162,`td`)(163,`code`),Mk(164,`--border-radius`),Kg()(),Jc(165,`td`),Mk(166,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(167,`td`)(168,`code`),Mk(169,`var(--border-radius-md)`),Kg()()(),Jc(170,`tr`)(171,`td`)(172,`code`),Mk(173,`--color`),Kg()(),Jc(174,`td`),Mk(175,`Cor principal do item`),Kg(),Jc(176,`td`)(177,`code`),Mk(178,`var(--color-action-default)`),Kg()()(),Jc(179,`tr`)(180,`td`)(181,`code`),Mk(182,`--background-color`),Kg()(),Jc(183,`td`),Mk(184,`Cor do background`),Kg(),Jc(185,`td`)(186,`code`),Mk(187,`transparent`),Kg()()(),Jc(188,`tr`)(189,`td`)(190,`strong`),Mk(191,`Hover`),Kg()(),_u(192,`td`)(193,`td`),Kg(),Jc(194,`tr`)(195,`td`)(196,`code`),Mk(197,`--color-hover`),Kg()(),Jc(198,`td`),Mk(199,`Cor principal no estado hover`),Kg(),Jc(200,`td`)(201,`code`),Mk(202,`var(--color-brand-01-darkest)`),Kg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Mk(206,`--background-color-hover`),Kg()(),Jc(207,`td`),Mk(208,`Cor de background no estado hover`),Kg(),Jc(209,`td`)(210,`code`),Mk(211,`var(--color-brand-01-lighter)`),Kg()()(),Jc(212,`tr`)(213,`td`)(214,`strong`),Mk(215,`Focused`),Kg()(),_u(216,`td`)(217,`td`),Kg(),Jc(218,`tr`)(219,`td`)(220,`code`),Mk(221,`--outline-color-focused`),Kg()(),Jc(222,`td`),Mk(223,`Cor do outline do estado de focus`),Kg(),Jc(224,`td`)(225,`code`),Mk(226,`var(--color-action-focus)`),Kg()()(),Jc(227,`tr`)(228,`td`)(229,`strong`),Mk(230,`Pressed`),Kg()(),_u(231,`td`)(232,`td`),Kg(),Jc(233,`tr`)(234,`td`)(235,`code`),Mk(236,`--background-color-pressed`),Kg(),Mk(237,` \xA0`),Kg(),Jc(238,`td`),Mk(239,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(240,`td`)(241,`code`),Mk(242,`var(--color-brand-01-light)`),Kg()()(),Jc(243,`tr`)(244,`td`)(245,`strong`),Mk(246,`Actived`),Kg()(),_u(247,`td`)(248,`td`),Kg(),Jc(249,`tr`)(250,`td`)(251,`code`),Mk(252,`--background-color-actived`),Kg()(),Jc(253,`td`),Mk(254,`Cor de background no estado actived`),Kg(),Jc(255,`td`)(256,`code`),Mk(257,`var(--color-brand-01-darkest)`),Kg()()(),Jc(258,`tr`)(259,`td`)(260,`code`),Mk(261,`--color-actived`),Kg()(),Jc(262,`td`),Mk(263,`Cor principal no estado actived`),Kg(),Jc(264,`td`)(265,`code`),Mk(266,`var(--color-brand-01-lighter)`),Kg()()(),Jc(267,`tr`)(268,`td`)(269,`strong`),Mk(270,`Font`),Kg()(),_u(271,`td`)(272,`td`),Kg(),Jc(273,`tr`)(274,`td`)(275,`code`),Mk(276,`--font-weight-lvl0`),Kg()(),Jc(277,`td`),Mk(278,`Peso da fonte bold`),Kg(),Jc(279,`td`)(280,`code`),Mk(281,`var(--font-weight-bold)`),Kg()()(),Jc(282,`tr`)(283,`td`)(284,`code`),Mk(285,`--font-weight-lvl1`),Kg()(),Jc(286,`td`),Mk(287,`Peso da fonte`),Kg(),Jc(288,`td`)(289,`code`),Mk(290,`var(--font-weight-normal)`),Kg()()()()(),Jc(291,`p`),_u(292,`br`),Mk(293,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),Kg(),Jc(294,`p`),Mk(295,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),Kg(),Jc(296,`p`),Mk(297,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),Kg(),Jc(298,`p`),Mk(299,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Jc(300,`a`,9)(301,`strong`),Mk(302,`p-menu-header-template`),Kg()(),Mk(303,`.`),Kg(),Jc(304,`p`),Mk(305,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Jc(306,`code`),Mk(307,`PoMenuFilter`),Kg(),Mk(308,`.`),Kg(),Jc(309,`p`),Mk(310,`Para o menu funcionar corretamente é necessário importar o `),Jc(311,`code`),Mk(312,`RouterModule`),Kg(),Mk(313,` e `),Jc(314,`code`),Mk(315,`Routes`),Kg(),Mk(316,` do módulo principal de sua aplicação:`),Kg(),Jc(317,`pre`)(318,`code`),Mk(319,`import { RouterModule, Routes } from '@angular/router';

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
`),Kg()(),Jc(320,`p`),Mk(321,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Kg(),Jc(322,`pre`)(323,`code`),Mk(324,`import { NgModule } from '@angular/core';

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
`),Kg()()(),Jc(325,`div`,10)(326,`h4`,11),Mk(327,`Seletor`),Kg(),Jc(328,`pre`,12),Mk(329,`<po-menu
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
`),Kg()(),Jc(330,`h4`,13),Mk(331,`Propriedades`),Kg(),Jc(332,`table`,14)(333,`tr`,15)(334,`th`,16),Mk(335,`Nome`),Kg(),Jc(336,`th`,16),Mk(337,`Tipo`),Kg(),Jc(338,`th`,16),Mk(339,`Padrão`),Kg(),Jc(340,`th`,16),Mk(341,`Descrição`),Kg()(),Jc(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),Mk(346,` p-automatic-toggle`),_u(347,`br`),Kg()()(),Jc(348,`td`,21)(349,`code`,22),Mk(350,`boolean`),Kg()(),Jc(351,`td`,23)(352,`p`)(353,`code`),Mk(354,`false`),Kg()()(),Jc(355,`td`,24)(356,`em`)(357,`strong`),Mk(358,`(opcional)`),Kg()(),Jc(359,`p`),Mk(360,`Expande e Colapsa (retrai) o menu automaticamente.`),Kg()()(),Jc(361,`tr`,25)(362,`td`,18)(363,`div`,19)(364,`span`,20),Mk(365,` p-collapsed`),_u(366,`br`),Kg()()(),Jc(367,`td`,21)(368,`code`,22),Mk(369,`boolean`),Kg()(),Jc(370,`td`,23)(371,`p`)(372,`code`),Mk(373,`false`),Kg()()(),Jc(374,`td`,24)(375,`em`)(376,`strong`),Mk(377,`(opcional)`),Kg()(),Jc(378,`p`),Mk(379,`Colapsa (retrai) o menu e caso receba o valor `),Jc(380,`code`),Mk(381,`false`),Kg(),Mk(382,` expande o menu.`),Kg(),Jc(383,`blockquote`)(384,`p`),Mk(385,`Utilize esta propriedade para iniciar o menu colapsado.`),Kg()(),Jc(386,`blockquote`)(387,`p`),Mk(388,`Ao utilizar os métodos `),Jc(389,`a`,26)(390,`code`),Mk(391,`colapse`),Kg()(),Mk(392,`, `),Jc(393,`a`,27)(394,`code`),Mk(395,`expand`),Kg()(),Mk(396,` e
`),Jc(397,`a`,28)(398,`code`),Mk(399,`toggle`),Kg()(),Mk(400,` o valor desta propriedade não é alterado.`),Kg()(),Jc(401,`p`)(402,`strong`),Mk(403,`Importante:`),Kg()(),Jc(404,`blockquote`)(405,`p`),Mk(406,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Jc(407,`code`),Mk(408,`icon`),Kg(),Mk(409,` e `),Jc(410,`code`),Mk(411,`shortLabel`),Kg(),Mk(412,`.`),Kg()()()(),Jc(413,`tr`,29)(414,`td`,18)(415,`div`,19)(416,`span`,20),Mk(417,` p-components-size`),_u(418,`br`),Kg()()(),Jc(419,`td`,21)(420,`code`,30),Mk(421,`string`),Kg()(),Jc(422,`td`,23)(423,`p`)(424,`code`),Mk(425,`medium`),Kg()()(),Jc(426,`td`,24)(427,`em`)(428,`strong`),Mk(429,`(opcional)`),Kg()(),Jc(430,`p`),Mk(431,`Define o tamanho dos componentes de formulário no menu:`),Kg(),Jc(432,`ul`)(433,`li`)(434,`code`),Mk(435,`small`),Kg(),Mk(436,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(437,`li`)(438,`code`),Mk(439,`medium`),Kg(),Mk(440,`: aplica a medida medium de cada componente.`),Kg()(),Jc(441,`blockquote`)(442,`p`),Mk(443,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(444,`code`),Mk(445,`medium`),Kg(),Mk(446,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(447,`a`,31),Mk(448,`po-theme`),Kg(),Mk(449,`.`),Kg()()()(),Jc(450,`tr`,32)(451,`td`,18)(452,`div`,19)(453,`span`,20),Mk(454,` p-filter`),_u(455,`br`),Kg()()(),Jc(456,`td`,21)(457,`code`,22),Mk(458,`boolean`),Kg()(),Jc(459,`td`,23)(460,`p`)(461,`code`),Mk(462,`false`),Kg()()(),Jc(463,`td`,24)(464,`em`)(465,`strong`),Mk(466,`(opcional)`),Kg()(),Jc(467,`p`),Mk(468,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Jc(469,`code`),Mk(470,`p-service`),Kg(),Mk(471,`.`),Kg(),Jc(472,`blockquote`)(473,`p`),Mk(474,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),Kg()()()(),Jc(475,`tr`,33)(476,`td`,18)(477,`div`,19)(478,`span`,20),Mk(479,` p-logo`),_u(480,`br`),Kg()()(),Jc(481,`td`,21)(482,`code`,30),Mk(483,`string`),Kg()(),Jc(484,`td`,23),Mk(485,`-`),Kg(),Jc(486,`td`,24)(487,`em`)(488,`strong`),Mk(489,`(opcional)`),Kg()(),Jc(490,`p`),Mk(491,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),Kg(),Jc(492,`blockquote`)(493,`p`)(494,`strong`),Mk(495,`Importante:`),Kg()()(),Jc(496,`ul`)(497,`li`),Mk(498,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),Kg(),Jc(499,`li`),Mk(500,`Como boa prática, indica-se utilizar imagens com até `),Jc(501,`code`),Mk(502,`24px`),Kg(),Mk(503,` de altura e `),Jc(504,`code`),Mk(505,`224px`),Kg(),Mk(506,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Kg()()()(),Jc(507,`tr`,34)(508,`td`,18)(509,`div`,19)(510,`span`,20),Mk(511,` p-logo-alt`),_u(512,`br`),Kg()()(),Jc(513,`td`,21)(514,`code`,30),Mk(515,`string`),Kg()(),Jc(516,`td`,23)(517,`p`)(518,`code`),Mk(519,`Logomarca início`),Kg()()(),Jc(520,`td`,24)(521,`em`)(522,`strong`),Mk(523,`(opcional)`),Kg()(),Jc(524,`p`),Mk(525,`Define o texto alternativo para a logomarca.`),Kg(),Jc(526,`blockquote`)(527,`p`)(528,`strong`),Mk(529,`Importante`),Kg(),Mk(530,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Kg()()()(),Jc(531,`tr`,35)(532,`td`,18)(533,`div`,19)(534,`span`,20),Mk(535,` p-logo-link`),_u(536,`br`),Kg()()(),Jc(537,`td`,21)(538,`code`,22),Mk(539,`boolean `),Kg(),Jc(540,`code`,30),Mk(541,` string`),Kg()(),Jc(542,`td`,23)(543,`p`)(544,`code`),Mk(545,`true`),Kg()()(),Jc(546,`td`,24)(547,`em`)(548,`strong`),Mk(549,`(opcional)`),Kg()(),Jc(550,`p`),Mk(551,`Define o link para a rota ao clicar no logo do menu.`),Kg(),Jc(552,`ul`)(553,`li`),Mk(554,`Se o valor for uma string, define a rota para o link informado.`),Kg(),Jc(555,`li`),Mk(556,`Se for `),Jc(557,`code`),Mk(558,`false`),Kg(),Mk(559,`, o logo não terá link associado.`),Kg(),Jc(560,`li`),Mk(561,`Se for `),Jc(562,`code`),Mk(563,`true`),Kg(),Mk(564,`, o logo terá a rota padrão `),Jc(565,`code`),Mk(566,`./`),Kg(),Mk(567,`.`),Kg()()()(),Jc(568,`tr`,36)(569,`td`,18)(570,`div`,19)(571,`span`,20),Mk(572,` p-menus`),_u(573,`br`),Kg()()(),Jc(574,`td`,21)(575,`code`,37),Mk(576,`PoMenuItem[]`),Kg()(),Jc(577,`td`,23),Mk(578,`-`),Kg(),Jc(579,`td`,24)(580,`p`),Mk(581,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg()()(),Jc(582,`tr`,38)(583,`td`,18)(584,`div`,19)(585,`span`,20),Mk(586,` p-params`),_u(587,`br`),Kg()()(),Jc(588,`td`,21)(589,`code`,39),Mk(590,`any`),Kg()(),Jc(591,`td`,23),Mk(592,`-`),Kg(),Jc(593,`td`,24)(594,`em`)(595,`strong`),Mk(596,`(opcional)`),Kg()(),Jc(597,`p`),Mk(598,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),Kg(),Jc(599,`p`),Mk(600,`Caso utilizado um serviço customizado, implementando a interface `),Jc(601,`code`),Mk(602,`PoMenuFilter`),Kg(),Mk(603,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Jc(604,`code`),Mk(605,`getFilteredData`),Kg(),Mk(606,`.`),Kg(),Jc(607,`p`),Mk(608,`Quando utilizada uma URL de serviço, será realizado um `),Jc(609,`em`),Mk(610,`GET`),Kg(),Mk(611,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Jc(612,`code`),Mk(613,`search`),Kg(),Mk(614,`, veja exemplo:`),Kg(),Jc(615,`pre`)(616,`code`),Mk(617,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),Kg()()()(),Jc(618,`tr`,40)(619,`td`,18)(620,`div`,19)(621,`span`,20),Mk(622,` p-search-tree-items`),_u(623,`br`),Kg()()(),Jc(624,`td`,21)(625,`code`,22),Mk(626,`boolean`),Kg()(),Jc(627,`td`,23)(628,`p`)(629,`code`),Mk(630,`false`),Kg()()(),Jc(631,`td`,24)(632,`em`)(633,`strong`),Mk(634,`(opcional)`),Kg()(),Jc(635,`p`),Mk(636,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),Kg(),Jc(637,`blockquote`)(638,`p`),Mk(639,`É necessário que a propriedade `),Jc(640,`code`),Mk(641,`p-filter`),Kg(),Mk(642,` esteja habilitada.`),Kg()()()(),Jc(643,`tr`,41)(644,`td`,18)(645,`div`,19)(646,`span`,20),Mk(647,` p-service`),_u(648,`br`),Kg()()(),Jc(649,`td`,21)(650,`code`,30),Mk(651,`string `),Kg(),Jc(652,`code`,42),Mk(653,` PoMenuFilter`),Kg()(),Jc(654,`td`,23),Mk(655,`-`),Kg(),Jc(656,`td`,24)(657,`em`)(658,`strong`),Mk(659,`(opcional)`),Kg()(),Jc(660,`p`),Mk(661,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Jc(662,`code`),Mk(663,`PoMenuFilter`),Kg(),Mk(664,`.`),Kg(),Jc(665,`p`),Mk(666,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Jc(667,`a`,43),Mk(668,`Guia de implementação de APIs`),Kg(),Mk(669,` do PO UI.`),Kg(),Jc(670,`p`),Mk(671,`Quando utilizada uma URL de serviço, será realizado um `),Jc(672,`em`),Mk(673,`GET`),Kg(),Mk(674,` na URL informada, passando o valor digitado
no par\xE2metro `),Jc(675,`code`),Mk(676,`search`),Kg(),Mk(677,`, veja exemplo:`),Kg(),Jc(678,`blockquote`)(679,`p`),Mk(680,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Jc(681,`code`),Mk(682,`tot`),Kg(),Mk(683,`.`),Kg()(),Jc(684,`pre`)(685,`code`),Mk(686,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),Kg()(),Jc(687,`blockquote`)(688,`p`),Mk(689,`É necessário que propriedade `),Jc(690,`code`),Mk(691,`p-filter`),Kg(),Mk(692,` esteja habilitada.`),Kg()()()(),Jc(693,`tr`,44)(694,`td`,18)(695,`div`,19)(696,`span`,20),Mk(697,` p-short-logo`),_u(698,`br`),Kg()()(),Jc(699,`td`,21)(700,`code`,30),Mk(701,`string`),Kg()(),Jc(702,`td`,23),Mk(703,`-`),Kg(),Jc(704,`td`,24)(705,`em`)(706,`strong`),Mk(707,`(opcional)`),Kg()(),Jc(708,`p`),Mk(709,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),Kg(),Jc(710,`blockquote`)(711,`p`)(712,`strong`),Mk(713,`Importante:`),Kg()()(),Jc(714,`ul`)(715,`li`),Mk(716,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Jc(717,`code`),Mk(718,`p-logo`),Kg(),Mk(719,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),Kg(),Jc(720,`li`),Mk(721,`Como boa prática, indica-se utilizar imagens com até `),Jc(722,`code`),Mk(723,`48px`),Kg(),Mk(724,` de altura e `),Jc(725,`code`),Mk(726,`48px`),Kg(),Mk(727,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Kg(),Jc(728,`li`),Mk(729,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Jc(730,`code`),Mk(731,`p-logo`),Kg(),Mk(732,`.`),Kg()()()(),Jc(733,`tr`,45)(734,`td`,18)(735,`div`,46)(736,`span`,47),Mk(737,` (p-toggle)`),_u(738,`br`),Kg()()(),Jc(739,`td`,21)(740,`code`,48),Mk(741,`EventEmitter`),Kg()(),Jc(742,`td`,23),Mk(743,`-`),Kg(),Jc(744,`td`,24)(745,`em`)(746,`strong`),Mk(747,`(opcional)`),Kg()(),Jc(748,`p`),Mk(749,`Evento emitido toda vez que o estado do menu muda, enviando `),Jc(750,`code`),Mk(751,`true`),Kg(),Mk(752,` quando expandido e `),Jc(753,`code`),Mk(754,`false`),Kg(),Mk(755,` quando colapsado.`),Kg(),Jc(756,`pre`)(757,`code`,49),Mk(758,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),Kg()()()()(),Jc(759,`h3`,13),Mk(760,`Métodos`),Kg(),Jc(761,`table`,50)(762,`tr`,51)(763,`th`,52)(764,`div`,19)(765,`h4`)(766,`span`,20),Mk(767,` collapse `),Kg()()()()(),Jc(768,`tr`,24)(769,`td`,24)(770,`p`),_u(771,`a`,53),Kg(),Jc(772,`p`),Mk(773,`Método para colapsar (retrair) o menu.`),Kg()()()(),_u(774,`br`),Jc(775,`table`,54)(776,`tr`,51)(777,`th`,52)(778,`div`,19)(779,`h4`)(780,`span`,20),Mk(781,` expand `),Kg()()()()(),Jc(782,`tr`,24)(783,`td`,24)(784,`p`),_u(785,`a`,55),Kg(),Jc(786,`p`),Mk(787,`Método para expandir (aumentar) o menu.`),Kg()()()(),_u(788,`br`),Jc(789,`table`,56)(790,`tr`,51)(791,`th`,52)(792,`div`,19)(793,`h4`)(794,`span`,20),Mk(795,` toggle `),Kg()()()()(),Jc(796,`tr`,24)(797,`td`,24)(798,`p`),_u(799,`a`,57),Mk(800,`
M\xE9todo que colapsa e expande o menu alternadamente.`),Kg(),Jc(801,`blockquote`)(802,`p`),Mk(803,`Os métodos apenas vão colapsar/expandir o menu se:`),Kg()(),Jc(804,`ul`)(805,`li`),Mk(806,`Todos os itens de menu tiverem valor nas propriedades `),Jc(807,`code`),Mk(808,`icon`),Kg(),Mk(809,` e `),Jc(810,`code`),Mk(811,`shortLabel`),Kg(),Mk(812,`.`),Kg()()()()(),_u(813,`br`),Jc(814,`h3`),Mk(815,`Interfaces`),Kg(),Jc(816,`h4`,58)(817,`code`,7),Mk(818,`PoMenuFilter`),Kg()(),Jc(819,`div`,2)(820,`p`),Mk(821,`Interface do serviço utilizado no componente `),Jc(822,`code`),Mk(823,`po-menu`),Kg(),Mk(824,`.`),Kg()(),Jc(825,`h4`,13),Mk(826,`Métodos`),Kg(),Jc(827,`table`,59)(828,`tr`,51)(829,`th`,52)(830,`div`,19)(831,`h4`)(832,`span`,20),Mk(833,` getFilteredData `),Kg()()()()(),Jc(834,`tr`,24)(835,`td`,24)(836,`p`),Mk(837,`Método responsável por retornar um `),Jc(838,`em`),Mk(839,`Observable`),Kg(),Mk(840,` que retorne uma lista de objetos que seguem a interface `),Jc(841,`code`),Mk(842,`PoMenuItemFiltered`),Kg(),Mk(843,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Jc(844,`code`),Mk(845,`p-params`),Kg(),Mk(846,`.`),Kg()()()(),Jc(847,`h5`)(848,`b`),Mk(849,`Parâmetros`),Kg()(),Jc(850,`table`,14)(851,`tr`,15)(852,`th`,16),Mk(853,`Nome`),Kg(),Jc(854,`th`,16),Mk(855,`Tipo`),Kg(),Jc(856,`th`,16),Mk(857,`Descrição`),Kg()(),Jc(858,`tr`,51)(859,`td`,18),Mk(860,` search`),Kg(),Jc(861,`td`,21)(862,`code`,60),Mk(863,` string `),Kg()(),Jc(864,`td`,24)(865,`p`),Mk(866,`Valor informado no campo de busca dos itens de menus.`),Kg()()(),Jc(867,`tr`,51)(868,`td`,18),Mk(869,` params`),Kg(),Jc(870,`td`,21)(871,`code`,60),Mk(872,` any `),Kg()(),Jc(873,`td`,24)(874,`p`),Mk(875,`Valor informado através da propriedade `),Jc(876,`code`),Mk(877,`p-params`),Kg(),Mk(878,`.`),Kg()()()(),_u(879,`br`),Jc(880,`h4`,61)(881,`code`,7),Mk(882,`PoMenuItemBadge`),Kg()(),Jc(883,`div`,2)(884,`p`),Mk(885,`Interface do `),Jc(886,`em`),Mk(887,`badge`),Kg(),Mk(888,` utilizado no `),Jc(889,`code`),Mk(890,`po-menu`),Kg(),Mk(891,`.`),Kg()(),Jc(892,`h4`,13),Mk(893,`Propriedades`),Kg(),Jc(894,`table`,14)(895,`tr`,15)(896,`th`,16),Mk(897,`Nome`),Kg(),Jc(898,`th`,16),Mk(899,`Tipo`),Kg(),Jc(900,`th`,16),Mk(901,`Descrição`),Kg()(),Jc(902,`tr`,62)(903,`td`,18)(904,`div`,19)(905,`span`,20),Mk(906,` color`),_u(907,`br`),Kg()()(),Jc(908,`td`,21)(909,`code`,30),Mk(910,`string`),Kg()(),Jc(911,`td`,24)(912,`em`)(913,`strong`),Mk(914,`(opcional)`),Kg()(),Jc(915,`p`),Mk(916,`Define a cor do `),Jc(917,`em`),Mk(918,`badge`),Kg(),Mk(919,` e aceita os valores:`),Kg(),Jc(920,`p`),_u(921,`span`,63),Jc(922,`code`),Mk(923,`color-01`),Kg()(),Jc(924,`p`),_u(925,`span`,64),Jc(926,`code`),Mk(927,`color-02`),Kg()(),Jc(928,`p`),_u(929,`span`,65),Jc(930,`code`),Mk(931,`color-03`),Kg()(),Jc(932,`p`),_u(933,`span`,66),Jc(934,`code`),Mk(935,`color-04`),Kg()(),Jc(936,`p`),_u(937,`span`,67),Jc(938,`code`),Mk(939,`color-05`),Kg()(),Jc(940,`p`),_u(941,`span`,68),Jc(942,`code`),Mk(943,`color-06`),Kg()(),Jc(944,`p`),_u(945,`span`,69),Jc(946,`code`),Mk(947,`color-07`),Kg()(),Jc(948,`p`),_u(949,`span`,70),Jc(950,`code`),Mk(951,`color-08`),Kg()(),Jc(952,`p`),_u(953,`span`,71),Jc(954,`code`),Mk(955,`color-09`),Kg()(),Jc(956,`p`),_u(957,`span`,72),Jc(958,`code`),Mk(959,`color-10`),Kg()(),Jc(960,`p`),_u(961,`span`,73),Jc(962,`code`),Mk(963,`color-11`),Kg()(),Jc(964,`p`),_u(965,`span`,74),Jc(966,`code`),Mk(967,`color-12`),Kg()()()(),Jc(968,`tr`,75)(969,`td`,18)(970,`div`,19)(971,`span`,20),Mk(972,` value`),_u(973,`br`),Kg()()(),Jc(974,`td`,21)(975,`code`,76),Mk(976,`number`),Kg()(),Jc(977,`td`,24)(978,`p`),Mk(979,`Número exibido no `),Jc(980,`em`),Mk(981,`badge`),Kg(),Mk(982,`, caso o mesmo seja maior que `),Jc(983,`strong`),Mk(984,`9`),Kg(),Mk(985,` o mesmo exibe `),Jc(986,`strong`),Mk(987,`9+`),Kg(),Mk(988,`.`),Kg()()()(),Jc(989,`h4`,77)(990,`code`,7),Mk(991,`PoMenuItemFiltered`),Kg()(),Jc(992,`div`,2)(993,`p`),Mk(994,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Jc(995,`code`),Mk(996,`po-menu`),Kg(),Mk(997,`.`),Kg()(),Jc(998,`h4`,13),Mk(999,`Propriedades`),Kg(),Jc(1e3,`table`,14)(1001,`tr`,15)(1002,`th`,16),Mk(1003,`Nome`),Kg(),Jc(1004,`th`,16),Mk(1005,`Tipo`),Kg(),Jc(1006,`th`,16),Mk(1007,`Descrição`),Kg()(),Jc(1008,`tr`,78)(1009,`td`,18)(1010,`div`,19)(1011,`span`,20),Mk(1012,` action`),_u(1013,`br`),Kg()()(),Jc(1014,`td`,21)(1015,`code`,79),Mk(1016,`() => void`),Kg()(),Jc(1017,`td`,24)(1018,`p`),Mk(1019,`Ação a ser executada quando o item de menu for clicado.`),Kg()()(),Jc(1020,`tr`,80)(1021,`td`,18)(1022,`div`,19)(1023,`span`,20),Mk(1024,` label`),_u(1025,`br`),Kg()()(),Jc(1026,`td`,21)(1027,`code`,30),Mk(1028,`string`),Kg()(),Jc(1029,`td`,24)(1030,`p`),Mk(1031,`Texto do item de menu.`),Kg()()(),Jc(1032,`tr`,81)(1033,`td`,18)(1034,`div`,19)(1035,`span`,20),Mk(1036,` link`),_u(1037,`br`),Kg()()(),Jc(1038,`td`,21)(1039,`code`,30),Mk(1040,`string`),Kg()(),Jc(1041,`td`,24)(1042,`p`),Mk(1043,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Jc(1044,`em`),Mk(1045,`link`),Kg(),Mk(1046,` interno ou externo.`),Kg()()()(),Jc(1047,`h4`,82)(1048,`code`,7),Mk(1049,`PoMenuItem`),Kg()(),Jc(1050,`div`,2)(1051,`p`),Mk(1052,`Interface para os itens de menu do componente po-menu.`),Kg()(),Jc(1053,`h4`,13),Mk(1054,`Propriedades`),Kg(),Jc(1055,`table`,14)(1056,`tr`,15)(1057,`th`,16),Mk(1058,`Nome`),Kg(),Jc(1059,`th`,16),Mk(1060,`Tipo`),Kg(),Jc(1061,`th`,16),Mk(1062,`Descrição`),Kg()(),Jc(1063,`tr`,83)(1064,`td`,18)(1065,`div`,19)(1066,`span`,20),Mk(1067,` action`),_u(1068,`br`),Kg()()(),Jc(1069,`td`,21)(1070,`code`,84),Mk(1071,`Function`),Kg()(),Jc(1072,`td`,24)(1073,`em`)(1074,`strong`),Mk(1075,`(opcional)`),Kg()(),Jc(1076,`p`),Mk(1077,`Ação personalizada para clique do item de menu.`),Kg()()(),Jc(1078,`tr`,85)(1079,`td`,18)(1080,`div`,19)(1081,`span`,20),Mk(1082,` badge`),_u(1083,`br`),Kg()()(),Jc(1084,`td`,21)(1085,`code`,86),Mk(1086,`PoMenuItemBadge`),Kg()(),Jc(1087,`td`,24)(1088,`em`)(1089,`strong`),Mk(1090,`(opcional)`),Kg()(),Jc(1091,`p`),Mk(1092,`Badge do item de menu.`),Kg(),Jc(1093,`p`),Mk(1094,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),Kg(),Jc(1095,`blockquote`)(1096,`p`),Mk(1097,`O `),Jc(1098,`code`),Mk(1099,`po-badge`),Kg(),Mk(1100,` só será exibido caso o item do menu não possua `),Jc(1101,`code`),Mk(1102,`subItems`),Kg(),Mk(1103,` e seu valor seja maior ou igual a 0.`),Kg()()()(),Jc(1104,`tr`,87)(1105,`td`,18)(1106,`div`,19)(1107,`span`,20),Mk(1108,` icon`),_u(1109,`br`),Kg()()(),Jc(1110,`td`,21)(1111,`code`,30),Mk(1112,`string `),Kg(),Jc(1113,`code`,88),Mk(1114,` TemplateRef<void>`),Kg()(),Jc(1115,`td`,24)(1116,`em`)(1117,`strong`),Mk(1118,`(opcional)`),Kg()(),Jc(1119,`p`),Mk(1120,`É possível usar qualquer um dos ícones da `),Jc(1121,`a`,89),Mk(1122,`Biblioteca de ícones`),Kg(),Mk(1123,`. conforme exemplo abaixo:`),Kg(),Jc(1124,`pre`)(1125,`code`),Mk(1126,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),Kg()(),Jc(1127,`p`),Mk(1128,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Jc(1129,`pre`)(1130,`code`),Mk(1131,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),Kg()(),Jc(1132,`p`),Mk(1133,`Outra opção seria a customização do ícone através do `),Jc(1134,`code`),Mk(1135,`TemplateRef`),Kg(),Mk(1136,`, conforme exemplo abaixo:
component.html:`),Kg(),Jc(1137,`pre`)(1138,`code`),Mk(1139,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),Kg()(),Jc(1140,`p`),Mk(1141,`component.ts:`),Kg(),Jc(1142,`pre`)(1143,`code`),Mk(1144,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),Kg()(),Jc(1145,`blockquote`)(1146,`p`),Mk(1147,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),Kg()()()(),Jc(1148,`tr`,90)(1149,`td`,18)(1150,`div`,19)(1151,`span`,20),Mk(1152,` label`),_u(1153,`br`),Kg()()(),Jc(1154,`td`,21)(1155,`code`,30),Mk(1156,`string`),Kg()(),Jc(1157,`td`,24)(1158,`p`),Mk(1159,`Texto do item de menu.`),Kg()()(),Jc(1160,`tr`,91)(1161,`td`,18)(1162,`div`,19)(1163,`span`,20),Mk(1164,` link`),_u(1165,`br`),Kg()()(),Jc(1166,`td`,21)(1167,`code`,30),Mk(1168,`string`),Kg()(),Jc(1169,`td`,24)(1170,`em`)(1171,`strong`),Mk(1172,`(opcional)`),Kg()(),Jc(1173,`p`),Mk(1174,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Kg()()(),Jc(1175,`tr`,92)(1176,`td`,18)(1177,`div`,19)(1178,`span`,20),Mk(1179,` shortLabel`),_u(1180,`br`),Kg()()(),Jc(1181,`td`,21)(1182,`code`,30),Mk(1183,`string`),Kg()(),Jc(1184,`td`,24)(1185,`em`)(1186,`strong`),Mk(1187,`(opcional)`),Kg()(),Jc(1188,`p`),Mk(1189,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),Kg()()(),Jc(1190,`tr`,93)(1191,`td`,18)(1192,`div`,19)(1193,`span`,20),Mk(1194,` subItems`),_u(1195,`br`),Kg()()(),Jc(1196,`td`,21)(1197,`code`,94),Mk(1198,`Array<PoMenuItem>`),Kg()(),Jc(1199,`td`,24)(1200,`em`)(1201,`strong`),Mk(1202,`(opcional)`),Kg()(),Jc(1203,`p`),Mk(1204,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function Ne(a,A){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-menu-basic-view`)(2,`sample-po-menu-labs-view`)(3,`sample-po-menu-human-resources-view`),Kg()),a&2){let m=tk();Ab(`hidden`,m.activeTab!==`web`)}}var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Menu`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Menu · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0),LO(1,Ne,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-menu-doc`),Kg()()),r&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,ye,ke,Le,_e],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Ue),GV]})}return a})();var Rt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Te]})}return a})();export{Rt as DocPoMenuModule};