import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,$t as gte,E as G4,Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ii as ZO,Ja as we$1,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,Zr as No,a as A5,an as j4,bt as Vze,cr as Bk,di as R,ea as ge,eo as xo,er as Ab,fa as kk,fi as RZ,gi as Tk,hi as TZ,ir as BO,ji as Y,jr as I,k as Goe,ni as PI,no as yk,nr as An,pr as Cu,qa as vt,qi as de,sa as jk,tr as Ak,ur as Cb,va as nk,vn as oi,wa as p,wr as Ge$1,xi as VO,y as EP,ya as nm}from"./chunk-BJubg121.js";var De=()=>({label:`PO UI - Angular Framework`,link:`/`});var Ve=a=>[a];var Ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(l,i){l&1&&_u(0,`po-menu`,0),l&2&&Ab(`p-menus`,Bk(2,Ve,jk(1,De)))},dependencies:[A5],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-basic/sample-po-menu-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-basic/sample-po-menu-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-menu-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();function ze(a,B){if(a&1&&(Jc(0,`div`),_u(1,`span`),Jc(2,`span`,26),Tk(3),Zg()()),a&2){let m=B.$implicit;Ig(),yk(kk(`sample-menu-circle sample-menu-vertical-middle po-`,m.value)),Ig(2),nm(` `,m.label,` `)}}var ye=(()=>{class a{changeDetector=p(Ge$1);menu;badgeColor;badgeValue;buttons=[{label:`Collapse`,action:this.collapse.bind(this)},{label:`Expand`,action:this.expand.bind(this)},{label:`Toggle`,action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:`color-01`,value:`color-01`},{label:`color-02`,value:`color-02`},{label:`color-03`,value:`color-03`},{label:`color-04`,value:`color-04`},{label:`color-05`,value:`color-05`},{label:`color-06`,value:`color-06`},{label:`color-07`,value:`color-07`},{label:`color-08`,value:`color-08`},{label:`color-09`,value:`color-09`},{label:`color-10`,value:`color-10`},{label:`color-11`,value:`color-11`},{label:`color-12`,value:`color-12`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch(l){this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service=``,this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize=`medium`,this.icon=void 0,this.label=`PO Menu`,this.link=void 0,this.parent=void 0,this.shortLabel=`Menu`}getMenuParent(m,l){let i;if(m){for(let s of m)if(s.id===l){i=s;break}else i||(i=this.getMenuParent(s.subItems,l));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(l=>{this.parentList.push({label:`- ${l.label}`,value:l.id}),l.subItems&&l.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs`]],viewQuery:function(l,i){if(l&1&&Cu(A5,7),l&2){let s;No(s=xo())&&(i.menu=s.first)}},standalone:!1,decls:32,vars:33,consts:[[`f`,`ngForm`],[1,`po-wrapper`],[3,`p-components-size`,`p-filter`,`p-logo`,`p-logo-link`,`p-menus`,`p-params`,`p-service`,`p-short-logo`,`p-search-tree-items`],[`p-title`,`PO Menu`],[1,`po-row`],[`p-label`,`Methods`,`p-value`,`Only if all menu items have icon and short label.`,1,`po-lg-12`],[1,`po-lg-12`,3,`p-buttons`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`filterMenu`,`p-label`,`Filter`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`searchTreeItems`,`p-label`,`Filter Search Tree Items`,`p-label-off`,`Disabled`,`p-label-on`,`Enabled`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`parent`,`p-label`,`Parent`,`p-placeholder`,`Add new menu at root level`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`shortLabel`,`p-label`,`Short Label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`badgeColor`,`p-label`,`Badge color`,`p-placeholder`,`Select a color of badge`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`badgeValue`,`p-label`,`Badge value`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`],[`name`,`service`,`p-clean`,``,`p-label`,`Service`,`p-help`,`https://po-sample-api.onrender.com/v1/menus`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`menuParams`,`p-clean`,``,`p-label`,`Params`,`p-help`,`Enter a value to be sent as a parameter. Ex: { "departament": "technology" }`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/po.png`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`shortLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/graphics/logo-dgeni.png`,`p-label`,`Short Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo link`,`p-clean`,``,`p-help`,`ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'`,`p-label`,`Logo link`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`],[1,`sample-menu-vertical-middle`]],template:function(l,i){if(l&1){let s=ZO();Jc(0,`div`,1),_u(1,`po-menu`,2),Jc(2,`po-page-default`,3)(3,`div`,4),_u(4,`po-info`,5)(5,`po-button-group`,6),Zg(),_u(6,`po-divider`),Jc(7,`div`,4),_u(8,`po-info`,7),Jc(9,`form`,null,0)(11,`po-switch`,8),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.filter,r)||(i.filter=r),$_(r)}),vt(`ngModelChange`,function(r){return i.onFilterChange(r)}),Zg(),Jc(12,`po-switch`,9),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.searchTreeItems,r)||(i.searchTreeItems=r),$_(r)}),Zg(),Jc(13,`po-select`,10),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.parent,r)||(i.parent=r),$_(r)}),Zg(),Jc(14,`po-input`,11),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.label,r)||(i.label=r),$_(r)}),Zg(),Jc(15,`po-input`,12),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.shortLabel,r)||(i.shortLabel=r),$_(r)}),Zg(),Jc(16,`po-url`,13),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.link,r)||(i.link=r),$_(r)}),Zg(),Jc(17,`po-select`,14),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.badgeColor,r)||(i.badgeColor=r),$_(r)}),Cb(18,ze,4,4,`ng-template`,15),Zg(),Jc(19,`po-number`,16),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.badgeValue,r)||(i.badgeValue=r),$_(r)}),Zg(),Jc(20,`po-select`,17),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.icon,r)||(i.icon=r),$_(r)}),Zg(),Jc(21,`div`,4)(22,`po-button`,18),vt(`p-click`,function(){return i.addMenuItem()}),Zg()(),_u(23,`po-divider`),Jc(24,`po-input`,19),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.service,r)||(i.service=r),$_(r)}),Zg(),Jc(25,`po-input`,20),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.menuParams,r)||(i.menuParams=r),$_(r)}),vt(`p-change-model`,function(r){return i.onChangeParams(r)}),Zg(),Jc(26,`po-input`,21),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.logo,r)||(i.logo=r),$_(r)}),Zg(),Jc(27,`po-input`,22),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.shortLogo,r)||(i.shortLogo=r),$_(r)}),Zg(),Jc(28,`po-input`,23),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.logoLink,r)||(i.logoLink=r),$_(r)}),Zg(),Jc(29,`po-radio-group`,24),W0(),Zb(`ngModelChange`,function(r){return H_(s),Ak(i.componentsSize,r)||(i.componentsSize=r),$_(r)}),Zg(),Jc(30,`div`,4)(31,`po-button`,25),vt(`p-click`,function(){return i.restore()}),Zg()()()()()()}l&2&&(Ig(),Ab(`p-components-size`,i.componentsSize)(`p-filter`,i.filter)(`p-logo`,i.logo)(`p-logo-link`,i.logoLink)(`p-menus`,i.menuItems)(`p-params`,i.params)(`p-service`,i.service)(`p-short-logo`,i.shortLogo)(`p-search-tree-items`,i.searchTreeItems),Ig(4),Ab(`p-buttons`,i.buttons),Ig(3),Ab(`p-value`,i.menuItemSelected),Ig(3),Kb(`ngModel`,i.filter),Y0(),Ig(),Kb(`ngModel`,i.searchTreeItems),Ab(`p-disabled`,!i.filter),Y0(),Ig(),Kb(`ngModel`,i.parent),Ab(`p-options`,i.parentList),Y0(),Ig(),Kb(`ngModel`,i.label),Y0(),Ig(),Kb(`ngModel`,i.shortLabel),Y0(),Ig(),Kb(`ngModel`,i.link),Y0(),Ig(),Kb(`ngModel`,i.badgeColor),Ab(`p-options`,i.badgeColorList),Y0(),Ig(2),Kb(`ngModel`,i.badgeValue),Ab(`p-max`,i.maxBadgeValue),Y0(),Ig(),Kb(`ngModel`,i.icon),Ab(`p-disabled`,i.parent)(`p-options`,i.iconsOptions),Y0(),Ig(4),Kb(`ngModel`,i.service),Y0(),Ig(),Kb(`ngModel`,i.menuParams),Y0(),Ig(),Kb(`ngModel`,i.logo),Y0(),Ig(),Kb(`ngModel`,i.shortLogo),Y0(),Ig(),Kb(`ngModel`,i.logoLink),Y0(),Ig(),Kb(`ngModel`,i.componentsSize),Ab(`p-options`,i.componentsSizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,gte,Nf,j4,Goe,Zte,Koe,R4,G4,Joe,A5,Mze],styles:[`.sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}`],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-labs/sample-po-menu-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-wrapper">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-labs/sample-po-menu-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-menu-labs/sample-po-menu-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-menu-labs`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var j=(()=>{class a{http=p(PI);url=`https://po-sample-api.onrender.com/v1/menus`;getFilteredData(m){let l={search:m};return this.http.get(this.url,{params:l}).pipe(Y(i=>i.items))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function We(a,B){a&1&&(Jc(0,`div`,5)(1,`p`),Tk(2,`Welcome,`),Zg(),Jc(3,`p`)(4,`b`),Tk(5,` John Doe `),Zg()()())}var _e=(()=>{class a{samplePoMenuHumanResourcesService=p(j);menuItemSelected;menus=[{label:`Register user`,action:this.printMenuAction.bind(this),icon:`an an-user`,shortLabel:`Register`},{label:`Timekeeping`,action:this.printMenuAction.bind(this),icon:`an an-clock`,shortLabel:`Timekeeping`,badge:{value:1}},{label:`Useful links`,icon:`an an-share`,shortLabel:`Links`,subItems:[{label:`Ministry of Labour`,action:this.printMenuAction.bind(this),link:`http://trabalho.gov.br/`},{label:`SindPD Syndicate`,action:this.printMenuAction.bind(this),link:`http://www.sindpd.com.br/`}]},{label:`Benefits`,icon:`an an-star`,shortLabel:`Benefits`,subItems:[{label:`Meal tickets`,subItems:[{label:`Acceptance network `,action:this.printMenuAction.bind(this)},{label:`Extracts`,action:this.printMenuAction.bind(this),subItems:[{label:`Monthly`,action:this.printMenuAction.bind(this),badge:{value:3,color:`color-03`}},{label:`Custom`,action:this.printMenuAction.bind(this)}]}]},{label:`Transportation tickets`,action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources`]],standalone:!1,features:[we$1([j])],decls:5,vars:5,consts:[[1,`po-wrapper`],[`p-collapsed`,``,`p-filter`,``,3,`p-menus`,`p-service`,`p-automatic-toggle`],[`class`,`po-p-2 po-font-title sample-menu-header-text-color`,4,`p-menu-header-template`],[`p-title`,`PO - Human Resources`,3,`p-show-notification`],[3,`p-title`],[1,`po-p-2`,`po-font-title`,`sample-menu-header-text-color`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`po-menu`,1),Cb(2,We,6,0,`div`,2),Zg(),_u(3,`po-toolbar`,3)(4,`po-page-default`,4),Zg()),l&2&&(Ig(),Ab(`p-menus`,i.menus)(`p-service`,i.samplePoMenuHumanResourcesService)(`p-automatic-toggle`,!0),Ig(2),Ab(`p-show-notification`,!1),Ig(),Ab(`p-title`,i.menuItemSelected))},dependencies:[A5,EP,Mze,Vze],styles:[`.sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-human-resources-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu - Human Resources`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-wrapper">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-menu-human-resources/sample-po-menu-human-resources.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-menu-human-resources`),Zg(),_u(33,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,je,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,_e],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-menu-doc`]],standalone:!1,decls:1201,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-menu-header-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`documentation/po-menu#colapseMethod`],[`href`,`documentation/po-menu#expandMethod`],[`href`,`documentation/po-menu#toggleMethod`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItem[]`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoMenuFilter`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`colapseMethod`],[`id`,`expandMethod`],[`id`,`toggleMethod`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoMenuItemBadge`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoMenuModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-menu.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoMenuComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Este é um componente de menu lateral que é utilizado para navegação nas páginas de uma aplicação.`),Zg(),Jc(15,`p`),Tk(16,`O componente po-menu recebe uma lista de objetos do tipo `),Jc(17,`code`),Tk(18,`MenuItem`),Zg(),Tk(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),Zg(),Jc(20,`h4`),Tk(21,`Tokens customizáveis`),Zg(),Jc(22,`p`),Tk(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(24,`blockquote`)(25,`p`),Tk(26,`Para maiores informações, acesse o guia `),Jc(27,`a`,6),Tk(28,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(29,`.`),Zg()(),Jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),Tk(34,`Propriedade`),Zg(),Jc(35,`th`),Tk(36,`Descrição`),Zg(),Jc(37,`th`),Tk(38,`Valor Padrão`),Zg()()(),Jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),Tk(43,`Default Values`),Zg()(),_u(44,`td`)(45,`td`),Zg(),Jc(46,`tr`)(47,`td`)(48,`code`),Tk(49,`--border-radius`),Zg()(),Jc(50,`td`),Tk(51,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(52,`td`)(53,`code`),Tk(54,`var(--border-radius-md)`),Zg()()(),Jc(55,`tr`)(56,`td`)(57,`code`),Tk(58,`--border-color`),Zg()(),Jc(59,`td`),Tk(60,`Cor da borda`),Zg(),Jc(61,`td`)(62,`code`),Tk(63,`var(--color-neutral-light-20)`),Zg()()(),Jc(64,`tr`)(65,`td`)(66,`code`),Tk(67,`--background-color`),Zg()(),Jc(68,`td`),Tk(69,`Cor de background`),Zg(),Jc(70,`td`)(71,`code`),Tk(72,`Var(----color-neutral-light-05)`),Zg()()(),Jc(73,`tr`)(74,`td`)(75,`strong`),Tk(76,`Menu Footer`),Zg()(),_u(77,`td`)(78,`td`),Zg(),Jc(79,`tr`)(80,`td`)(81,`code`),Tk(82,`--color`),Zg()(),Jc(83,`td`),Tk(84,`Cor principla do menu footer`),Zg(),Jc(85,`td`)(86,`code`),Tk(87,`var(--color-action-default)`),Zg()()(),Jc(88,`tr`)(89,`td`)(90,`code`),Tk(91,`--font-size`),Zg()(),Jc(92,`td`),Tk(93,`Tamanho da fonte`),Zg(),Jc(94,`td`)(95,`code`),Tk(96,`var(--font-size-default)`),Zg()()(),Jc(97,`tr`)(98,`td`)(99,`code`),Tk(100,`--line-height`),Zg()(),Jc(101,`td`),Tk(102,`Tamanho da label`),Zg(),Jc(103,`td`)(104,`code`),Tk(105,`var(--line-height-md)`),Zg()()(),Jc(106,`tr`)(107,`td`)(108,`code`),Tk(109,`--outline-color-focused`),Zg()(),Jc(110,`td`),Tk(111,`Cor do outline do estado de focus`),Zg(),Jc(112,`td`)(113,`code`),Tk(114,`var(--color-action-focus)`),Zg()()(),Jc(115,`tr`)(116,`td`)(117,`code`),Tk(118,`--font-weight-lvl0`),Zg()(),Jc(119,`td`),Tk(120,`Peso da fonte`),Zg(),Jc(121,`td`)(122,`code`),Tk(123,`var(--font-weight-bold)`),Zg()()(),Jc(124,`tr`)(125,`td`)(126,`strong`),Tk(127,`po-menu-item`),Zg()(),_u(128,`td`)(129,`td`),Zg(),Jc(130,`tr`)(131,`td`)(132,`code`),Tk(133,`--font-family`),Zg()(),Jc(134,`td`),Tk(135,`Família tipográfica usada`),Zg(),Jc(136,`td`)(137,`code`),Tk(138,`var(--font-family-theme)`),Zg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Tk(142,`--font-size`),Zg()(),Jc(143,`td`),Tk(144,`Tamanho da fonte`),Zg(),Jc(145,`td`)(146,`code`),Tk(147,`var(--font-size-default)`),Zg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Tk(151,`--line-height`),Zg()(),Jc(152,`td`),Tk(153,`Tamanho da label`),Zg(),Jc(154,`td`)(155,`code`),Tk(156,`var(--line-height-md)`),Zg()()(),Jc(157,`tr`)(158,`td`)(159,`code`),Tk(160,`--border-radius`),Zg()(),Jc(161,`td`),Tk(162,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`var(--border-radius-md)`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--color`),Zg()(),Jc(170,`td`),Tk(171,`Cor principal do item`),Zg(),Jc(172,`td`)(173,`code`),Tk(174,`var(--color-action-default)`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Tk(178,`--background-color`),Zg()(),Jc(179,`td`),Tk(180,`Cor do background`),Zg(),Jc(181,`td`)(182,`code`),Tk(183,`transparent`),Zg()()(),Jc(184,`tr`)(185,`td`)(186,`strong`),Tk(187,`Hover`),Zg()(),_u(188,`td`)(189,`td`),Zg(),Jc(190,`tr`)(191,`td`)(192,`code`),Tk(193,`--color-hover`),Zg()(),Jc(194,`td`),Tk(195,`Cor principal no estado hover`),Zg(),Jc(196,`td`)(197,`code`),Tk(198,`var(--color-brand-01-darkest)`),Zg()()(),Jc(199,`tr`)(200,`td`)(201,`code`),Tk(202,`--background-color-hover`),Zg()(),Jc(203,`td`),Tk(204,`Cor de background no estado hover`),Zg(),Jc(205,`td`)(206,`code`),Tk(207,`var(--color-brand-01-lighter)`),Zg()()(),Jc(208,`tr`)(209,`td`)(210,`strong`),Tk(211,`Focused`),Zg()(),_u(212,`td`)(213,`td`),Zg(),Jc(214,`tr`)(215,`td`)(216,`code`),Tk(217,`--outline-color-focused`),Zg()(),Jc(218,`td`),Tk(219,`Cor do outline do estado de focus`),Zg(),Jc(220,`td`)(221,`code`),Tk(222,`var(--color-action-focus)`),Zg()()(),Jc(223,`tr`)(224,`td`)(225,`strong`),Tk(226,`Pressed`),Zg()(),_u(227,`td`)(228,`td`),Zg(),Jc(229,`tr`)(230,`td`)(231,`code`),Tk(232,`--background-color-pressed`),Zg(),Tk(233,` \xA0`),Zg(),Jc(234,`td`),Tk(235,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(236,`td`)(237,`code`),Tk(238,`var(--color-brand-01-light)`),Zg()()(),Jc(239,`tr`)(240,`td`)(241,`strong`),Tk(242,`Actived`),Zg()(),_u(243,`td`)(244,`td`),Zg(),Jc(245,`tr`)(246,`td`)(247,`code`),Tk(248,`--background-color-actived`),Zg()(),Jc(249,`td`),Tk(250,`Cor de background no estado actived`),Zg(),Jc(251,`td`)(252,`code`),Tk(253,`var(--color-brand-01-darkest)`),Zg()()(),Jc(254,`tr`)(255,`td`)(256,`code`),Tk(257,`--color-actived`),Zg()(),Jc(258,`td`),Tk(259,`Cor principal no estado actived`),Zg(),Jc(260,`td`)(261,`code`),Tk(262,`var(--color-brand-01-lighter)`),Zg()()(),Jc(263,`tr`)(264,`td`)(265,`strong`),Tk(266,`Font`),Zg()(),_u(267,`td`)(268,`td`),Zg(),Jc(269,`tr`)(270,`td`)(271,`code`),Tk(272,`--font-weight-lvl0`),Zg()(),Jc(273,`td`),Tk(274,`Peso da fonte bold`),Zg(),Jc(275,`td`)(276,`code`),Tk(277,`var(--font-weight-bold)`),Zg()()(),Jc(278,`tr`)(279,`td`)(280,`code`),Tk(281,`--font-weight-lvl1`),Zg()(),Jc(282,`td`),Tk(283,`Peso da fonte`),Zg(),Jc(284,`td`)(285,`code`),Tk(286,`var(--font-weight-normal)`),Zg()()()()(),Jc(287,`p`),_u(288,`br`),Tk(289,` Aparece completo em telas com largura maior que 1200px, caso contrário o menu é escondido e chamado por meio de um botão.`),Zg(),Jc(290,`p`),Tk(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),Zg(),Jc(292,`p`),Tk(293,`Existe a possibilidade de customizar a logomarca, que é exibida na parte superior do componente.`),Zg(),Jc(294,`p`),Tk(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Jc(296,`a`,7)(297,`strong`),Tk(298,`p-menu-header-template`),Zg()(),Tk(299,`.`),Zg(),Jc(300,`p`),Tk(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Jc(302,`code`),Tk(303,`PoMenuFilter`),Zg(),Tk(304,`.`),Zg(),Jc(305,`p`),Tk(306,`Para o menu funcionar corretamente é necessário importar o `),Jc(307,`code`),Tk(308,`RouterModule`),Zg(),Tk(309,` e `),Jc(310,`code`),Tk(311,`Routes`),Zg(),Tk(312,` do módulo principal de sua aplicação:`),Zg(),Jc(313,`pre`)(314,`code`),Tk(315,`import { RouterModule, Routes } from '@angular/router';

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
`),Zg()(),Jc(316,`p`),Tk(317,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Zg(),Jc(318,`pre`)(319,`code`),Tk(320,`import { NgModule } from '@angular/core';

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
`),Zg()()(),Jc(321,`div`,8)(322,`h4`,9),Tk(323,`Seletor`),Zg(),Jc(324,`pre`,10),Tk(325,`<po-menu
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
`),Zg()(),Jc(326,`h4`,11),Tk(327,`Propriedades`),Zg(),Jc(328,`table`,12)(329,`tr`,13)(330,`th`,14),Tk(331,`Nome`),Zg(),Jc(332,`th`,14),Tk(333,`Tipo`),Zg(),Jc(334,`th`,14),Tk(335,`Padrão`),Zg(),Jc(336,`th`,14),Tk(337,`Descrição`),Zg()(),Jc(338,`tr`,15)(339,`td`,16)(340,`div`,17)(341,`span`,18),Tk(342,` p-automatic-toggle`),_u(343,`br`),Zg()()(),Jc(344,`td`,19)(345,`code`,20),Tk(346,`boolean`),Zg()(),Jc(347,`td`,21)(348,`p`)(349,`code`),Tk(350,`false`),Zg()()(),Jc(351,`td`,22)(352,`em`)(353,`strong`),Tk(354,`(opcional)`),Zg()(),Jc(355,`p`),Tk(356,`Expande e Colapsa (retrai) o menu automaticamente.`),Zg()()(),Jc(357,`tr`,15)(358,`td`,16)(359,`div`,17)(360,`span`,18),Tk(361,` p-collapsed`),_u(362,`br`),Zg()()(),Jc(363,`td`,19)(364,`code`,20),Tk(365,`boolean`),Zg()(),Jc(366,`td`,21)(367,`p`)(368,`code`),Tk(369,`false`),Zg()()(),Jc(370,`td`,22)(371,`em`)(372,`strong`),Tk(373,`(opcional)`),Zg()(),Jc(374,`p`),Tk(375,`Colapsa (retrai) o menu e caso receba o valor `),Jc(376,`code`),Tk(377,`false`),Zg(),Tk(378,` expande o menu.`),Zg(),Jc(379,`blockquote`)(380,`p`),Tk(381,`Utilize esta propriedade para iniciar o menu colapsado.`),Zg()(),Jc(382,`blockquote`)(383,`p`),Tk(384,`Ao utilizar os métodos `),Jc(385,`a`,23)(386,`code`),Tk(387,`colapse`),Zg()(),Tk(388,`, `),Jc(389,`a`,24)(390,`code`),Tk(391,`expand`),Zg()(),Tk(392,` e
`),Jc(393,`a`,25)(394,`code`),Tk(395,`toggle`),Zg()(),Tk(396,` o valor desta propriedade não é alterado.`),Zg()(),Jc(397,`p`)(398,`strong`),Tk(399,`Importante:`),Zg()(),Jc(400,`blockquote`)(401,`p`),Tk(402,`O menu será colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades `),Jc(403,`code`),Tk(404,`icon`),Zg(),Tk(405,` e `),Jc(406,`code`),Tk(407,`shortLabel`),Zg(),Tk(408,`.`),Zg()()()(),Jc(409,`tr`,15)(410,`td`,16)(411,`div`,17)(412,`span`,18),Tk(413,` p-components-size`),_u(414,`br`),Zg()()(),Jc(415,`td`,19)(416,`code`,26),Tk(417,`string`),Zg()(),Jc(418,`td`,21)(419,`p`)(420,`code`),Tk(421,`medium`),Zg()()(),Jc(422,`td`,22)(423,`em`)(424,`strong`),Tk(425,`(opcional)`),Zg()(),Jc(426,`p`),Tk(427,`Define o tamanho dos componentes de formulário no menu:`),Zg(),Jc(428,`ul`)(429,`li`)(430,`code`),Tk(431,`small`),Zg(),Tk(432,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(433,`li`)(434,`code`),Tk(435,`medium`),Zg(),Tk(436,`: aplica a medida medium de cada componente.`),Zg()(),Jc(437,`blockquote`)(438,`p`),Tk(439,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(440,`code`),Tk(441,`medium`),Zg(),Tk(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(443,`a`,27),Tk(444,`po-theme`),Zg(),Tk(445,`.`),Zg()()()(),Jc(446,`tr`,15)(447,`td`,16)(448,`div`,17)(449,`span`,18),Tk(450,` p-filter`),_u(451,`br`),Zg()()(),Jc(452,`td`,19)(453,`code`,20),Tk(454,`boolean`),Zg()(),Jc(455,`td`,21)(456,`p`)(457,`code`),Tk(458,`false`),Zg()()(),Jc(459,`td`,22)(460,`em`)(461,`strong`),Tk(462,`(opcional)`),Zg()(),Jc(463,`p`),Tk(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Jc(465,`code`),Tk(466,`p-service`),Zg(),Tk(467,`.`),Zg(),Jc(468,`blockquote`)(469,`p`),Tk(470,`O campo de pesquisa é desabilitado se o menu estiver colapsado.`),Zg()()()(),Jc(471,`tr`,15)(472,`td`,16)(473,`div`,17)(474,`span`,18),Tk(475,` p-logo`),_u(476,`br`),Zg()()(),Jc(477,`td`,19)(478,`code`,26),Tk(479,`string`),Zg()(),Jc(480,`td`,21),Tk(481,`-`),Zg(),Jc(482,`td`,22)(483,`em`)(484,`strong`),Tk(485,`(opcional)`),Zg()(),Jc(486,`p`),Tk(487,`Caminho para a logomarca, que será exibida quando o componente estiver expandido, localizada na parte superior.`),Zg(),Jc(488,`blockquote`)(489,`p`)(490,`strong`),Tk(491,`Importante:`),Zg()()(),Jc(492,`ul`)(493,`li`),Tk(494,`Caso esta propriedade estiver indefinida ou inválida o espaço para logomarca será removido.`),Zg(),Jc(495,`li`),Tk(496,`Como boa prática, indica-se utilizar imagens com até `),Jc(497,`code`),Tk(498,`24px`),Zg(),Tk(499,` de altura e `),Jc(500,`code`),Tk(501,`224px`),Zg(),Tk(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Zg()()()(),Jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),Tk(507,` p-logo-alt`),_u(508,`br`),Zg()()(),Jc(509,`td`,19)(510,`code`,26),Tk(511,`string`),Zg()(),Jc(512,`td`,21)(513,`p`)(514,`code`),Tk(515,`Logomarca início`),Zg()()(),Jc(516,`td`,22)(517,`em`)(518,`strong`),Tk(519,`(opcional)`),Zg()(),Jc(520,`p`),Tk(521,`Define o texto alternativo para a logomarca.`),Zg(),Jc(522,`blockquote`)(523,`p`)(524,`strong`),Tk(525,`Importante`),Zg(),Tk(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Zg()()()(),Jc(527,`tr`,15)(528,`td`,16)(529,`div`,17)(530,`span`,18),Tk(531,` p-logo-link`),_u(532,`br`),Zg()()(),Jc(533,`td`,19)(534,`code`,20),Tk(535,`boolean `),Zg(),Jc(536,`code`,26),Tk(537,` string`),Zg()(),Jc(538,`td`,21)(539,`p`)(540,`code`),Tk(541,`true`),Zg()()(),Jc(542,`td`,22)(543,`em`)(544,`strong`),Tk(545,`(opcional)`),Zg()(),Jc(546,`p`),Tk(547,`Define o link para a rota ao clicar no logo do menu.`),Zg(),Jc(548,`ul`)(549,`li`),Tk(550,`Se o valor for uma string, define a rota para o link informado.`),Zg(),Jc(551,`li`),Tk(552,`Se for `),Jc(553,`code`),Tk(554,`false`),Zg(),Tk(555,`, o logo não terá link associado.`),Zg(),Jc(556,`li`),Tk(557,`Se for `),Jc(558,`code`),Tk(559,`true`),Zg(),Tk(560,`, o logo terá a rota padrão `),Jc(561,`code`),Tk(562,`./`),Zg(),Tk(563,`.`),Zg()()()(),Jc(564,`tr`,15)(565,`td`,16)(566,`div`,17)(567,`span`,18),Tk(568,` p-menus`),_u(569,`br`),Zg()()(),Jc(570,`td`,19)(571,`code`,28),Tk(572,`PoMenuItem[]`),Zg()(),Jc(573,`td`,21),Tk(574,`-`),Zg(),Jc(575,`td`,22)(576,`p`),Tk(577,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Zg()()(),Jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),Tk(582,` p-params`),_u(583,`br`),Zg()()(),Jc(584,`td`,19)(585,`code`,29),Tk(586,`any`),Zg()(),Jc(587,`td`,21),Tk(588,`-`),Zg(),Jc(589,`td`,22)(590,`em`)(591,`strong`),Tk(592,`(opcional)`),Zg()(),Jc(593,`p`),Tk(594,`Deve ser informado um objeto que deseja-se utilizar na requisição de filtro dos itens de menu.`),Zg(),Jc(595,`p`),Tk(596,`Caso utilizado um serviço customizado, implementando a interface `),Jc(597,`code`),Tk(598,`PoMenuFilter`),Zg(),Tk(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Jc(600,`code`),Tk(601,`getFilteredData`),Zg(),Tk(602,`.`),Zg(),Jc(603,`p`),Tk(604,`Quando utilizada uma URL de serviço, será realizado um `),Jc(605,`em`),Tk(606,`GET`),Zg(),Tk(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Jc(608,`code`),Tk(609,`search`),Zg(),Tk(610,`, veja exemplo:`),Zg(),Jc(611,`pre`)(612,`code`),Tk(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),Zg()()()(),Jc(614,`tr`,15)(615,`td`,16)(616,`div`,17)(617,`span`,18),Tk(618,` p-search-tree-items`),_u(619,`br`),Zg()()(),Jc(620,`td`,19)(621,`code`,20),Tk(622,`boolean`),Zg()(),Jc(623,`td`,21)(624,`p`)(625,`code`),Tk(626,`false`),Zg()()(),Jc(627,`td`,22)(628,`em`)(629,`strong`),Tk(630,`(opcional)`),Zg()(),Jc(631,`p`),Tk(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),Zg(),Jc(633,`blockquote`)(634,`p`),Tk(635,`É necessário que a propriedade `),Jc(636,`code`),Tk(637,`p-filter`),Zg(),Tk(638,` esteja habilitada.`),Zg()()()(),Jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),Tk(643,` p-service`),_u(644,`br`),Zg()()(),Jc(645,`td`,19)(646,`code`,26),Tk(647,`string `),Zg(),Jc(648,`code`,30),Tk(649,` PoMenuFilter`),Zg()(),Jc(650,`td`,21),Tk(651,`-`),Zg(),Jc(652,`td`,22)(653,`em`)(654,`strong`),Tk(655,`(opcional)`),Zg()(),Jc(656,`p`),Tk(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Jc(658,`code`),Tk(659,`PoMenuFilter`),Zg(),Tk(660,`.`),Zg(),Jc(661,`p`),Tk(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Jc(663,`a`,31),Tk(664,`Guia de implementação de APIs`),Zg(),Tk(665,` do PO UI.`),Zg(),Jc(666,`p`),Tk(667,`Quando utilizada uma URL de serviço, será realizado um `),Jc(668,`em`),Tk(669,`GET`),Zg(),Tk(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Jc(671,`code`),Tk(672,`search`),Zg(),Tk(673,`, veja exemplo:`),Zg(),Jc(674,`blockquote`)(675,`p`),Tk(676,`O filtro no serviço será realizado caso contenha no mínimo três caracteres no campo de busca, por exemplo `),Jc(677,`code`),Tk(678,`tot`),Zg(),Tk(679,`.`),Zg()(),Jc(680,`pre`)(681,`code`),Tk(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),Zg()(),Jc(683,`blockquote`)(684,`p`),Tk(685,`É necessário que propriedade `),Jc(686,`code`),Tk(687,`p-filter`),Zg(),Tk(688,` esteja habilitada.`),Zg()()()(),Jc(689,`tr`,15)(690,`td`,16)(691,`div`,17)(692,`span`,18),Tk(693,` p-short-logo`),_u(694,`br`),Zg()()(),Jc(695,`td`,19)(696,`code`,26),Tk(697,`string`),Zg()(),Jc(698,`td`,21),Tk(699,`-`),Zg(),Jc(700,`td`,22)(701,`em`)(702,`strong`),Tk(703,`(opcional)`),Zg()(),Jc(704,`p`),Tk(705,`Caminho para a logomarca, que será exibida quando o componente estiver colapsado, localizada na parte superior.`),Zg(),Jc(706,`blockquote`)(707,`p`)(708,`strong`),Tk(709,`Importante:`),Zg()()(),Jc(710,`ul`)(711,`li`),Tk(712,`Caso esta propriedade estiver indefinida ou inválida passa a assumir o valor informado na propriedade `),Jc(713,`code`),Tk(714,`p-logo`),Zg(),Tk(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),Zg(),Jc(716,`li`),Tk(717,`Como boa prática, indica-se utilizar imagens com até `),Jc(718,`code`),Tk(719,`48px`),Zg(),Tk(720,` de altura e `),Jc(721,`code`),Tk(722,`48px`),Zg(),Tk(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),Zg(),Jc(724,`li`),Tk(725,`Caso não informar um valor, esta propriedade passa a assumir o valor informado na propriedade `),Jc(726,`code`),Tk(727,`p-logo`),Zg(),Tk(728,`.`),Zg()()()(),Jc(729,`tr`,15)(730,`td`,16)(731,`div`,32)(732,`span`,33),Tk(733,` (p-toggle)`),_u(734,`br`),Zg()()(),Jc(735,`td`,19)(736,`code`,34),Tk(737,`EventEmitter`),Zg()(),Jc(738,`td`,21),Tk(739,`-`),Zg(),Jc(740,`td`,22)(741,`em`)(742,`strong`),Tk(743,`(opcional)`),Zg()(),Jc(744,`p`),Tk(745,`Evento emitido toda vez que o estado do menu muda, enviando `),Jc(746,`code`),Tk(747,`true`),Zg(),Tk(748,` quando expandido e `),Jc(749,`code`),Tk(750,`false`),Zg(),Tk(751,` quando colapsado.`),Zg(),Jc(752,`pre`)(753,`code`,35),Tk(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),Zg()()()()(),Jc(755,`h3`,11),Tk(756,`Métodos`),Zg(),Jc(757,`table`,36)(758,`tr`,15)(759,`th`,37)(760,`div`,17)(761,`h4`)(762,`span`,18),Tk(763,` collapse `),Zg()()()()(),Jc(764,`tr`,22)(765,`td`,22)(766,`p`),_u(767,`a`,38),Zg(),Jc(768,`p`),Tk(769,`Método para colapsar (retrair) o menu.`),Zg()()()(),_u(770,`br`),Jc(771,`table`,36)(772,`tr`,15)(773,`th`,37)(774,`div`,17)(775,`h4`)(776,`span`,18),Tk(777,` expand `),Zg()()()()(),Jc(778,`tr`,22)(779,`td`,22)(780,`p`),_u(781,`a`,39),Zg(),Jc(782,`p`),Tk(783,`Método para expandir (aumentar) o menu.`),Zg()()()(),_u(784,`br`),Jc(785,`table`,36)(786,`tr`,15)(787,`th`,37)(788,`div`,17)(789,`h4`)(790,`span`,18),Tk(791,` toggle `),Zg()()()()(),Jc(792,`tr`,22)(793,`td`,22)(794,`p`),_u(795,`a`,40),Tk(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),Zg(),Jc(797,`blockquote`)(798,`p`),Tk(799,`Os métodos apenas vão colapsar/expandir o menu se:`),Zg()(),Jc(800,`ul`)(801,`li`),Tk(802,`Todos os itens de menu tiverem valor nas propriedades `),Jc(803,`code`),Tk(804,`icon`),Zg(),Tk(805,` e `),Jc(806,`code`),Tk(807,`shortLabel`),Zg(),Tk(808,`.`),Zg()()()()(),_u(809,`br`),Jc(810,`h3`),Tk(811,`Interfaces`),Zg(),Jc(812,`h4`,41)(813,`code`,5),Tk(814,`PoMenuFilter`),Zg()(),Jc(815,`div`,2)(816,`p`),Tk(817,`Interface do serviço utilizado no componente `),Jc(818,`code`),Tk(819,`po-menu`),Zg(),Tk(820,`.`),Zg()(),Jc(821,`h4`,11),Tk(822,`Métodos`),Zg(),Jc(823,`table`,36)(824,`tr`,15)(825,`th`,37)(826,`div`,17)(827,`h4`)(828,`span`,18),Tk(829,` getFilteredData `),Zg()()()()(),Jc(830,`tr`,22)(831,`td`,22)(832,`p`),Tk(833,`Método responsável por retornar um `),Jc(834,`em`),Tk(835,`Observable`),Zg(),Tk(836,` que retorne uma lista de objetos que seguem a interface `),Jc(837,`code`),Tk(838,`PoMenuItemFiltered`),Zg(),Tk(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Jc(840,`code`),Tk(841,`p-params`),Zg(),Tk(842,`.`),Zg()()()(),Jc(843,`h5`)(844,`b`),Tk(845,`Parâmetros`),Zg()(),Jc(846,`table`,12)(847,`tr`,13)(848,`th`,14),Tk(849,`Nome`),Zg(),Jc(850,`th`,14),Tk(851,`Tipo`),Zg(),Jc(852,`th`,14),Tk(853,`Descrição`),Zg()(),Jc(854,`tr`,15)(855,`td`,16),Tk(856,` search`),Zg(),Jc(857,`td`,19)(858,`code`,42),Tk(859,` string `),Zg()(),Jc(860,`td`,22)(861,`p`),Tk(862,`Valor informado no campo de busca dos itens de menus.`),Zg()()(),Jc(863,`tr`,15)(864,`td`,16),Tk(865,` params`),Zg(),Jc(866,`td`,19)(867,`code`,42),Tk(868,` any `),Zg()(),Jc(869,`td`,22)(870,`p`),Tk(871,`Valor informado através da propriedade `),Jc(872,`code`),Tk(873,`p-params`),Zg(),Tk(874,`.`),Zg()()()(),_u(875,`br`),Jc(876,`h4`,41)(877,`code`,5),Tk(878,`PoMenuItemBadge`),Zg()(),Jc(879,`div`,2)(880,`p`),Tk(881,`Interface do `),Jc(882,`em`),Tk(883,`badge`),Zg(),Tk(884,` utilizado no `),Jc(885,`code`),Tk(886,`po-menu`),Zg(),Tk(887,`.`),Zg()(),Jc(888,`h4`,11),Tk(889,`Propriedades`),Zg(),Jc(890,`table`,12)(891,`tr`,13)(892,`th`,14),Tk(893,`Nome`),Zg(),Jc(894,`th`,14),Tk(895,`Tipo`),Zg(),Jc(896,`th`,14),Tk(897,`Descrição`),Zg()(),Jc(898,`tr`,15)(899,`td`,16)(900,`div`,17)(901,`span`,18),Tk(902,` color`),_u(903,`br`),Zg()()(),Jc(904,`td`,19)(905,`code`,26),Tk(906,`string`),Zg()(),Jc(907,`td`,22)(908,`em`)(909,`strong`),Tk(910,`(opcional)`),Zg()(),Jc(911,`p`),Tk(912,`Define a cor do `),Jc(913,`em`),Tk(914,`badge`),Zg(),Tk(915,` e aceita os valores:`),Zg(),Jc(916,`p`),_u(917,`span`,43),Jc(918,`code`),Tk(919,`color-01`),Zg()(),Jc(920,`p`),_u(921,`span`,44),Jc(922,`code`),Tk(923,`color-02`),Zg()(),Jc(924,`p`),_u(925,`span`,45),Jc(926,`code`),Tk(927,`color-03`),Zg()(),Jc(928,`p`),_u(929,`span`,46),Jc(930,`code`),Tk(931,`color-04`),Zg()(),Jc(932,`p`),_u(933,`span`,47),Jc(934,`code`),Tk(935,`color-05`),Zg()(),Jc(936,`p`),_u(937,`span`,48),Jc(938,`code`),Tk(939,`color-06`),Zg()(),Jc(940,`p`),_u(941,`span`,49),Jc(942,`code`),Tk(943,`color-07`),Zg()(),Jc(944,`p`),_u(945,`span`,50),Jc(946,`code`),Tk(947,`color-08`),Zg()(),Jc(948,`p`),_u(949,`span`,51),Jc(950,`code`),Tk(951,`color-09`),Zg()(),Jc(952,`p`),_u(953,`span`,52),Jc(954,`code`),Tk(955,`color-10`),Zg()(),Jc(956,`p`),_u(957,`span`,53),Jc(958,`code`),Tk(959,`color-11`),Zg()(),Jc(960,`p`),_u(961,`span`,54),Jc(962,`code`),Tk(963,`color-12`),Zg()()()(),Jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),Tk(968,` value`),_u(969,`br`),Zg()()(),Jc(970,`td`,19)(971,`code`,55),Tk(972,`number`),Zg()(),Jc(973,`td`,22)(974,`p`),Tk(975,`Número exibido no `),Jc(976,`em`),Tk(977,`badge`),Zg(),Tk(978,`, caso o mesmo seja maior que `),Jc(979,`strong`),Tk(980,`9`),Zg(),Tk(981,` o mesmo exibe `),Jc(982,`strong`),Tk(983,`9+`),Zg(),Tk(984,`.`),Zg()()()(),Jc(985,`h4`,41)(986,`code`,5),Tk(987,`PoMenuItemFiltered`),Zg()(),Jc(988,`div`,2)(989,`p`),Tk(990,`Interface do objeto que deve conter na coleção de itens filtrados no componente `),Jc(991,`code`),Tk(992,`po-menu`),Zg(),Tk(993,`.`),Zg()(),Jc(994,`h4`,11),Tk(995,`Propriedades`),Zg(),Jc(996,`table`,12)(997,`tr`,13)(998,`th`,14),Tk(999,`Nome`),Zg(),Jc(1e3,`th`,14),Tk(1001,`Tipo`),Zg(),Jc(1002,`th`,14),Tk(1003,`Descrição`),Zg()(),Jc(1004,`tr`,15)(1005,`td`,16)(1006,`div`,17)(1007,`span`,18),Tk(1008,` action`),_u(1009,`br`),Zg()()(),Jc(1010,`td`,19)(1011,`code`,56),Tk(1012,`() => void`),Zg()(),Jc(1013,`td`,22)(1014,`p`),Tk(1015,`Ação a ser executada quando o item de menu for clicado.`),Zg()()(),Jc(1016,`tr`,15)(1017,`td`,16)(1018,`div`,17)(1019,`span`,18),Tk(1020,` label`),_u(1021,`br`),Zg()()(),Jc(1022,`td`,19)(1023,`code`,26),Tk(1024,`string`),Zg()(),Jc(1025,`td`,22)(1026,`p`),Tk(1027,`Texto do item de menu.`),Zg()()(),Jc(1028,`tr`,15)(1029,`td`,16)(1030,`div`,17)(1031,`span`,18),Tk(1032,` link`),_u(1033,`br`),Zg()()(),Jc(1034,`td`,19)(1035,`code`,26),Tk(1036,`string`),Zg()(),Jc(1037,`td`,22)(1038,`p`),Tk(1039,`Link* para redirecionamento no clique do item do menu, podendo ser um `),Jc(1040,`em`),Tk(1041,`link`),Zg(),Tk(1042,` interno ou externo.`),Zg()()()(),Jc(1043,`h4`,41)(1044,`code`,5),Tk(1045,`PoMenuItem`),Zg()(),Jc(1046,`div`,2)(1047,`p`),Tk(1048,`Interface para os itens de menu do componente po-menu.`),Zg()(),Jc(1049,`h4`,11),Tk(1050,`Propriedades`),Zg(),Jc(1051,`table`,12)(1052,`tr`,13)(1053,`th`,14),Tk(1054,`Nome`),Zg(),Jc(1055,`th`,14),Tk(1056,`Tipo`),Zg(),Jc(1057,`th`,14),Tk(1058,`Descrição`),Zg()(),Jc(1059,`tr`,15)(1060,`td`,16)(1061,`div`,17)(1062,`span`,18),Tk(1063,` action`),_u(1064,`br`),Zg()()(),Jc(1065,`td`,19)(1066,`code`,57),Tk(1067,`Function`),Zg()(),Jc(1068,`td`,22)(1069,`em`)(1070,`strong`),Tk(1071,`(opcional)`),Zg()(),Jc(1072,`p`),Tk(1073,`Ação personalizada para clique do item de menu.`),Zg()()(),Jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,17)(1077,`span`,18),Tk(1078,` badge`),_u(1079,`br`),Zg()()(),Jc(1080,`td`,19)(1081,`code`,58),Tk(1082,`PoMenuItemBadge`),Zg()(),Jc(1083,`td`,22)(1084,`em`)(1085,`strong`),Tk(1086,`(opcional)`),Zg()(),Jc(1087,`p`),Tk(1088,`Badge do item de menu.`),Zg(),Jc(1089,`p`),Tk(1090,`Ao adicioná-lo em um subitem (filho) todos os itens ascendentes (pai) serão marcados com um ponto vermelho.`),Zg(),Jc(1091,`blockquote`)(1092,`p`),Tk(1093,`O `),Jc(1094,`code`),Tk(1095,`po-badge`),Zg(),Tk(1096,` só será exibido caso o item do menu não possua `),Jc(1097,`code`),Tk(1098,`subItems`),Zg(),Tk(1099,` e seu valor seja maior ou igual a 0.`),Zg()()()(),Jc(1100,`tr`,15)(1101,`td`,16)(1102,`div`,17)(1103,`span`,18),Tk(1104,` icon`),_u(1105,`br`),Zg()()(),Jc(1106,`td`,19)(1107,`code`,26),Tk(1108,`string `),Zg(),Jc(1109,`code`,59),Tk(1110,` TemplateRef<void>`),Zg()(),Jc(1111,`td`,22)(1112,`em`)(1113,`strong`),Tk(1114,`(opcional)`),Zg()(),Jc(1115,`p`),Tk(1116,`É possível usar qualquer um dos ícones da `),Jc(1117,`a`,60),Tk(1118,`Biblioteca de ícones`),Zg(),Tk(1119,`. conforme exemplo abaixo:`),Zg(),Jc(1120,`pre`)(1121,`code`),Tk(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),Zg()(),Jc(1123,`p`),Tk(1124,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Zg(),Jc(1125,`pre`)(1126,`code`),Tk(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),Zg()(),Jc(1128,`p`),Tk(1129,`Outra opção seria a customização do ícone através do `),Jc(1130,`code`),Tk(1131,`TemplateRef`),Zg(),Tk(1132,`, conforme exemplo abaixo:
component.html:`),Zg(),Jc(1133,`pre`)(1134,`code`),Tk(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),Zg()(),Jc(1136,`p`),Tk(1137,`component.ts:`),Zg(),Jc(1138,`pre`)(1139,`code`),Tk(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),Zg()(),Jc(1141,`blockquote`)(1142,`p`),Tk(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),Zg()()()(),Jc(1144,`tr`,15)(1145,`td`,16)(1146,`div`,17)(1147,`span`,18),Tk(1148,` label`),_u(1149,`br`),Zg()()(),Jc(1150,`td`,19)(1151,`code`,26),Tk(1152,`string`),Zg()(),Jc(1153,`td`,22)(1154,`p`),Tk(1155,`Texto do item de menu.`),Zg()()(),Jc(1156,`tr`,15)(1157,`td`,16)(1158,`div`,17)(1159,`span`,18),Tk(1160,` link`),_u(1161,`br`),Zg()()(),Jc(1162,`td`,19)(1163,`code`,26),Tk(1164,`string`),Zg()(),Jc(1165,`td`,22)(1166,`em`)(1167,`strong`),Tk(1168,`(opcional)`),Zg()(),Jc(1169,`p`),Tk(1170,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Zg()()(),Jc(1171,`tr`,15)(1172,`td`,16)(1173,`div`,17)(1174,`span`,18),Tk(1175,` shortLabel`),_u(1176,`br`),Zg()()(),Jc(1177,`td`,19)(1178,`code`,26),Tk(1179,`string`),Zg()(),Jc(1180,`td`,22)(1181,`em`)(1182,`strong`),Tk(1183,`(opcional)`),Zg()(),Jc(1184,`p`),Tk(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),Zg()()(),Jc(1186,`tr`,15)(1187,`td`,16)(1188,`div`,17)(1189,`span`,18),Tk(1190,` subItems`),_u(1191,`br`),Zg()()(),Jc(1192,`td`,19)(1193,`code`,61),Tk(1194,`Array<PoMenuItem>`),Zg()(),Jc(1195,`td`,22)(1196,`em`)(1197,`strong`),Tk(1198,`(opcional)`),Zg()(),Jc(1199,`p`),Tk(1200,`Lista de sub-items, criando novos níveis dentro do menu. O número máximo de níveis do menu é igual a 4.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ge(a,B){if(a&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(m);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-menu-basic-view`)(2,`sample-po-menu-labs-view`)(3,`sample-po-menu-human-resources-view`),Zg()}if(a&2){let m=nk();Ab(`p-active`,m.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ge,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-menu-doc`),Zg()()()),l&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Pe,we,Ie,ke],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Qe),WV]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Te]})}return a})();export{Dt as DocPoMenuModule};