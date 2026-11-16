import{m as P,p as M}from"./main-5ZHUK4IE.js";import{$ as Pze,Ar as I,At as Zte,Bn as wae,Dr as Gk,F as Joe,G as Nf,H as Lze,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ka as qk,L as Koe,Lr as Kg,Ma as lF,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ta as jk,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Zi as ar,Zr as No,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,hr as Db,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,lt as Ss,na as de,oo as wg,pi as R,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,st as Sae,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var Ne=()=>({title:`name`});var We=()=>({name:`Register 1`,email:`register@po-ui.com`});var $e=()=>({name:`Register 2`,email:`register2@po-ui.com`});var Ue=(a,v)=>[a,v];function Ge(a,v){if(a&1&&(Qc(0,`div`,2),vu(1,`po-info`,3),Kg()),a&2){let o=v.$implicit;wg(),Rb(`p-value`,o.email)}}var Ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:8,consts:[[3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(r,n){r&1&&(Qc(0,`po-list-view`,0),Db(1,Ge,2,1,`ng-template`,1),Kg()),r&2&&Rb(`p-field-properties`,Lk(2,Ne))(`p-items`,jk(5,Ue,Lk(3,We),Lk(4,$e)))},dependencies:[Joe,Pze,wae],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-list-view-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO List View Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-list-view
  [p-field-properties]="{ title: 'name' }"
  [p-items]="[
    { name: 'Register 1', email: 'register@po-ui.com' },
    { name: 'Register 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-list-view-basic/sample-po-list-view-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-list-view-basic`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Qe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();function Ze(a,v){if(a&1&&(Qc(0,`div`,2)(1,`span`,3),Sk(2),Kg()()),a&2){let o=v.$implicit;wg(2),Gb(o.subtitle)}}var Fe=(()=>{class a{fieldProperties={title:`name`,subtitle:`subtitle`,avatar:`avatar`,tag:{value:`tag`,type:`tagType`}};items=[{name:`Billing report`,subtitle:`5 min ago`,tag:`Completed`,tagType:`success`,avatar:`https://i.pravatar.cc/150?img=1`},{name:`Vacation request`,subtitle:`12 min ago`,tag:`In progress`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=2`},{name:`System update`,subtitle:`30 min ago`,tag:`Warning`,tagType:`warning`,avatar:`https://i.pravatar.cc/150?img=3`}];static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-field-properties`]],standalone:!1,decls:2,vars:2,consts:[[`p-tag-position`,`bottom`,3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[1,`po-font-text-small`]],template:function(r,n){r&1&&(Qc(0,`po-list-view`,0),Db(1,Ze,3,1,`ng-template`,1),Kg()),r&2&&Rb(`p-field-properties`,n.fieldProperties)(`p-items`,n.items)},dependencies:[Pze,wae],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-field-properties-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-list-view-field-properties`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO List View - Field Properties`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-list-view p-tag-position="bottom" [p-field-properties]="fieldProperties" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <span class="po-font-text-small">{ { item.subtitle }}</span>
    </div>
  </ng-template>
</po-list-view>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component } from '@angular/core';

import { PoListViewFieldProperties } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-field-properties',
  templateUrl: './sample-po-list-view-field-properties.component.html',
  standalone: false
})
export class SamplePoListViewFieldPropertiesComponent {
  fieldProperties: PoListViewFieldProperties = {
    title: 'name',
    subtitle: 'subtitle',
    avatar: 'avatar',
    tag: { value: 'tag', type: 'tagType' }
  };

  items = [
    {
      name: 'Billing report',
      subtitle: '5 min ago',
      tag: 'Completed',
      tagType: 'success',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Vacation request',
      subtitle: '12 min ago',
      tag: 'In progress',
      tagType: 'info',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'System update',
      subtitle: '30 min ago',
      tag: 'Warning',
      tagType: 'warning',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-list-view-field-properties`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Xe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();function tt(a,v){if(a&1&&(Qc(0,`div`,5),vu(1,`po-info`,31)(2,`po-info`,32)(3,`po-info`,33)(4,`po-info`,34),Kg()),a&2){let o=v.$implicit;wg(),Rb(`p-value`,o.name),wg(),Rb(`p-value`,o.email),wg(),Rb(`p-value`,o.location),wg(),Rb(`p-value`,o.phone)}}function it(a,v){if(a&1&&(Qc(0,`div`,5),vu(1,`po-info`,35)(2,`po-info`,36),Kg()),a&2){let o=v.$implicit;wg(),Rb(`p-value`,o.company),wg(),Rb(`p-value`,o.zipCode)}}var Ie=(()=>{class a{poNotification=p(Ru);action;actions;componentsSize=`medium`;customLiterals;detailDisplay=`inline`;height;items;literals;properties;propertyAvatar;avatarType;propertyHighlighted;propertyLink;propertyLinkValue;propertySubtitle;propertyTag;propertyTagType;propertyTitle;tagPosition=`bottom`;tagTypeValue=``;highlightedValue=`read`;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`singleSelect`,label:`Single Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];detailDisplayOptions=[{label:`inline`,value:`inline`},{label:`modal`,value:`modal`}];tagPositionOptions=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`none`,label:`None`},{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];avatarPropertyOptions=[{value:`none`,label:`None`},{value:`image`,label:`Image (URL)`},{value:`icon`,label:`Icon`},{value:`progress`,label:`Progress`},{value:`indeterminate`,label:`Progress (indeterminate)`}];tagTypeValueOptions=[{value:`success`,label:`Success`},{value:`info`,label:`Info`},{value:`danger`,label:`Danger`},{value:`warning`,label:`Warning`},{value:`neutral`,label:`Neutral`}];highlightedValueOptions=[{value:`read`,label:`read`},{value:`unread`,label:`unread`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];get fieldProperties(){let o={};return this.isMapped(this.propertyTitle)&&(o.title=this.propertyTitle),this.isMapped(this.propertySubtitle)&&(o.subtitle=this.propertySubtitle),this.isMapped(this.propertyLink)&&(o.link=this.propertyLink),this.isMapped(this.propertyAvatar)&&(o.avatar=this.propertyAvatar),this.isMapped(this.propertyHighlighted)&&(o.highlighted=this.propertyHighlighted),this.isMapped(this.propertyTag)&&(o.tag={value:this.propertyTag,type:this.propertyTagType}),o}isMapped(o){return!!o&&o!==`none`}ngOnInit(){this.restore()}addAction(o){let r=Object.assign({},o),n=r.action;r.action=n?this.showAction.bind(this,n):void 0,this.actions.push(r),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}applyTagType(){this.items=this.items.map(o=>s(r({},o),{tagType:this.tagTypeValue}))}applyHighlighted(){this.propertyHighlighted=`unread`;let o=this.highlightedValue===`unread`;this.items=this.items.map(r$1=>s(r({},r$1),{unread:o}))}applyAvatar(){if(!this.avatarType||this.avatarType===`none`){this.propertyAvatar=``,this.items=this.items.map(o=>s(r({},o),{avatar:void 0}));return}this.propertyAvatar=`avatar`,this.items=this.items.map((o,r$2)=>s(r({},o),{avatar:this.buildAvatarValue(r$2+1)}))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.detailDisplay=`inline`,this.tagPosition=`bottom`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyAvatar=``,this.avatarType=`none`,this.propertyHighlighted=`unread`,this.propertyLink=`url`,this.propertyLinkValue=``,this.propertySubtitle=`none`,this.propertyTag=`none`,this.propertyTagType=`tagType`,this.propertyTitle=`none`,this.tagTypeValue=`success`,this.highlightedValue=`read`,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){let r=[`success`,`info`,`warning`,`danger`,`neutral`];return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`,tag:o%2===0?`Completed`:`In progress`,tagType:this.tagTypeValue||r[o%r.length],subtitle:`${o*5} min ago`,avatar:this.buildAvatarValue(o),unread:this.highlightedValue===`unread`}}buildAvatarValue(o){switch(this.avatarType){case`image`:return`https://i.pravatar.cc/150?img=${o}`;case`icon`:return{icon:`an an-user`,color:`#1a73e8`,backgroundColor:`#e8f0fe`};case`progress`:return{progress:o*15%100,showPercentage:!0,size:`large`,radius:35};case`indeterminate`:return{indeterminate:!0,size:`large`,radius:35};default:return}}restoreActionForm(){this.action={label:``,visible:!0}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:45,vars:51,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-detail-display`,`p-field-properties`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-select`,`p-single-select`,`p-show-more-disabled`,`p-tag-position`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`p-title`,`Field Properties`,1,`po-md-12`,`po-pb-3`],[`name`,`propertyTitle`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertySubtitle`,`p-clean`,``,`p-label`,`Property subtitle`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertyLinkValue`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`propertyTag`,`p-clean`,``,`p-label`,`Property tag`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagTypeValue`,`p-label`,`Property tag type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarType`,`p-label`,`Property avatar`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`highlightedValue`,`p-label`,`Property highlighted`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-9`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`detailDisplay`,`p-label`,`Detail display`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag position`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Actions`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(r,n){if(r&1){let m=YO();Qc(0,`po-list-view`,2),vt(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),Db(1,tt,5,4,`ng-template`,3)(2,it,3,2,`ng-template`,4),Kg(),vu(3,`po-divider`),Qc(4,`div`,5)(5,`po-button`,6),vt(`p-click`,function(){return n.addItem()}),Kg()(),vu(6,`po-divider`),Qc(7,`div`,5),vu(8,`po-info`,7),Kg(),vu(9,`po-divider`),Qc(10,`form`,null,0)(12,`po-widget`,8)(13,`div`,5)(14,`po-select`,9),z0(),vt(`ngModelChange`,function(p){return n.propertyTitle=p}),Kg(),Qc(15,`po-select`,10),z0(),vt(`ngModelChange`,function(p){return n.propertySubtitle=p}),Kg(),Qc(16,`po-input`,11),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.propertyLinkValue,p)||(n.propertyLinkValue=p),U_(p)}),Kg(),Qc(17,`po-select`,12),z0(),vt(`ngModelChange`,function(p){return n.propertyTag=p}),Kg(),Qc(18,`po-select`,13),z0(),vt(`ngModelChange`,function(p){return B_(m),n.tagTypeValue=p,U_(n.applyTagType())}),Kg(),Qc(19,`po-select`,14),z0(),vt(`ngModelChange`,function(p){return B_(m),n.avatarType=p,U_(n.applyAvatar())}),Kg(),Qc(20,`po-select`,15),z0(),vt(`ngModelChange`,function(p){return B_(m),n.highlightedValue=p,U_(n.applyHighlighted())}),Kg()()(),Qc(21,`div`,5)(22,`po-number`,16),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.height,p)||(n.height=p),U_(p)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Qc(23,`po-input`,17),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.literals,p)||(n.literals=p),U_(p)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Qc(24,`po-radio-group`,18),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.componentsSize,p)||(n.componentsSize=p),U_(p)}),Kg(),Qc(25,`po-radio-group`,19),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.detailDisplay,p)||(n.detailDisplay=p),U_(p)}),Kg(),Qc(26,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.tagPosition,p)||(n.tagPosition=p),U_(p)}),Kg()(),Qc(27,`div`,5)(28,`po-checkbox-group`,21),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.properties,p)||(n.properties=p),U_(p)}),vt(`p-change`,function(){return n.changeActionOptions()}),Kg()()(),vu(29,`po-divider`),Qc(30,`po-widget`,22)(31,`form`,null,1)(33,`div`,5)(34,`po-input`,23),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.action.label,p)||(n.action.label=p),U_(p)}),Kg(),Qc(35,`po-input`,24),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.action.action,p)||(n.action.action=p),U_(p)}),Kg(),Qc(36,`po-input`,25),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.action.url,p)||(n.action.url=p),U_(p)}),Kg(),Qc(37,`po-select`,26),z0(),vt(`ngModelChange`,function(p){return n.action.type=p}),Kg(),Qc(38,`po-select`,27),z0(),vt(`ngModelChange`,function(p){return n.action.icon=p}),Kg(),Qc(39,`po-checkbox-group`,28),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.action,p)||(n.action=p),U_(p)}),Kg()(),Qc(40,`div`,5)(41,`po-button`,29),vt(`p-click`,function(){return n.addAction(n.action)}),Kg()()()(),vu(42,`po-divider`),Qc(43,`div`,5)(44,`po-button`,30),vt(`p-click`,function(){return B_(m),ik(32).reset(),U_(n.restore())}),Kg()()}if(r&2){let m=ik(32);Rb(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-detail-display`,n.detailDisplay)(`p-field-properties`,n.fieldProperties)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-select`,n.properties.includes(`select`))(`p-single-select`,n.properties.includes(`singleSelect`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`))(`p-tag-position`,n.tagPosition),wg(8),Rb(`p-value`,n.titleAction),wg(6),Rb(`ngModel`,n.propertyTitle)(`p-options`,n.propertyTitleOptions),W0(),wg(),Rb(`ngModel`,n.propertySubtitle)(`p-options`,n.propertyTitleOptions),W0(),wg(),Yb(`ngModel`,n.propertyLinkValue),W0(),wg(),Rb(`ngModel`,n.propertyTag)(`p-options`,n.propertyTitleOptions),W0(),wg(),Rb(`ngModel`,n.tagTypeValue)(`p-options`,n.tagTypeValueOptions),W0(),wg(),Rb(`ngModel`,n.avatarType)(`p-options`,n.avatarPropertyOptions),W0(),wg(),Rb(`ngModel`,n.highlightedValue)(`p-options`,n.highlightedValueOptions),W0(),wg(2),Yb(`ngModel`,n.height),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-columns`,2)(`p-options`,n.componentsSizeOptions),W0(),wg(),Yb(`ngModel`,n.detailDisplay),Rb(`p-columns`,2)(`p-options`,n.detailDisplayOptions),W0(),wg(),Yb(`ngModel`,n.tagPosition),Rb(`p-columns`,3)(`p-options`,n.tagPositionOptions),W0(),wg(2),Yb(`ngModel`,n.properties),Rb(`p-columns`,4)(`p-options`,n.propertiesOptions),W0(),wg(6),Yb(`ngModel`,n.action.label),W0(),wg(),Yb(`ngModel`,n.action.action),W0(),wg(),Yb(`ngModel`,n.action.url),W0(),wg(),Rb(`ngModel`,n.action.type)(`p-options`,n.typeOptions),W0(),wg(),Rb(`ngModel`,n.action.icon)(`p-options`,n.iconOptions),W0(),wg(),Yb(`ngModel`,n.action),Rb(`p-columns`,4)(`p-options`,n.actionOptions),W0(),wg(2),Rb(`p-disabled`,m.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,Koe,Joe,Pze,wae,Sae,bae],encapsulation:2,changeDetection:1})}return a})();var ot=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-list-view-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO List View Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-detail-display]="detailDisplay"
  [p-field-properties]="fieldProperties"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-select]="properties.includes('select')"
  [p-single-select]="properties.includes('singleSelect')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-tag-position]="tagPosition"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <po-widget class="po-md-12 po-pb-3" p-title="Field Properties">
    <div class="po-row">
      <po-select
        class="po-md-6 po-lg-3"
        name="propertyTitle"
        [ngModel]="propertyTitle"
        (ngModelChange)="propertyTitle = $event"
        p-label="Property title"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="propertySubtitle"
        [ngModel]="propertySubtitle"
        (ngModelChange)="propertySubtitle = $event"
        p-clean
        p-label="Property subtitle"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="propertyLinkValue" [(ngModel)]="propertyLinkValue" p-label="Title Link">
      </po-input>

      <po-select
        class="po-md-6 po-lg-3"
        name="propertyTag"
        [ngModel]="propertyTag"
        (ngModelChange)="propertyTag = $event"
        p-clean
        p-label="Property tag"
        [p-options]="propertyTitleOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="tagTypeValue"
        [ngModel]="tagTypeValue"
        (ngModelChange)="tagTypeValue = $event; applyTagType()"
        p-label="Property tag type"
        [p-options]="tagTypeValueOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="avatarType"
        [ngModel]="avatarType"
        (ngModelChange)="avatarType = $event; applyAvatar()"
        p-label="Property avatar"
        [p-options]="avatarPropertyOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="highlightedValue"
        [ngModel]="highlightedValue"
        (ngModelChange)="highlightedValue = $event; applyHighlighted()"
        p-label="Property highlighted"
        [p-options]="highlightedValueOptions"
      >
      </po-select>
    </div>
  </po-widget>

  <div class="po-row">
    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-12 po-lg-9"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="size"
      [(ngModel)]="componentsSize"
      [p-columns]="2"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="detailDisplay"
      [(ngModel)]="detailDisplay"
      [p-columns]="2"
      p-label="Detail display"
      [p-options]="detailDisplayOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12 po-lg-4"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      [p-columns]="3"
      p-label="Tag position"
      [p-options]="tagPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      [p-columns]="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<po-widget p-title="Actions">
  <form #actionForm="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-md-6 po-lg-3"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-md-6 po-lg-3"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [(ngModel)]="action"
        [p-columns]="4"
        p-indeterminate
        p-label="Action properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-4 po-lg-3"
        p-label="Add Action"
        [p-disabled]="actionForm.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewFieldProperties,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action!: PoListViewAction;
  actions!: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals?: PoListViewLiterals;
  detailDisplay: string = 'inline';
  height?: number;
  items!: Array<any>;
  literals!: string;
  properties!: Array<string>;
  propertyAvatar!: string;
  avatarType!: string;
  propertyHighlighted!: string;
  propertyLink!: string;
  propertyLinkValue!: string;
  propertySubtitle!: string;
  propertyTag!: string;
  propertyTagType!: string;
  propertyTitle!: string;
  tagPosition: string = 'bottom';
  tagTypeValue: string = '';
  highlightedValue: string = 'read';
  titleAction!: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'singleSelect', label: 'Single Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly detailDisplayOptions: Array<PoRadioGroupOption> = [
    { label: 'inline', value: 'inline' },
    { label: 'modal', value: 'modal' }
  ];

  readonly tagPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'none', label: 'None' },
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  // Tipos de avatar v\xE1lidos aplicados ao campo \`avatar\` de todos os itens.
  readonly avatarPropertyOptions: Array<PoSelectOption> = [
    { value: 'none', label: 'None' },
    { value: 'image', label: 'Image (URL)' },
    { value: 'icon', label: 'Icon' },
    { value: 'progress', label: 'Progress' },
    { value: 'indeterminate', label: 'Progress (indeterminate)' }
  ];

  // Valores de tipo de tag aplicados ao campo \`tagType\` de todos os itens.
  readonly tagTypeValueOptions: Array<PoSelectOption> = [
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'danger', label: 'Danger' },
    { value: 'warning', label: 'Warning' },
    { value: 'neutral', label: 'Neutral' }
  ];

  readonly highlightedValueOptions: Array<PoSelectOption> = [
    { value: 'read', label: 'read' },
    { value: 'unread', label: 'unread' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  get fieldProperties(): PoListViewFieldProperties {
    const properties: PoListViewFieldProperties = {};

    if (this.isMapped(this.propertyTitle)) {
      properties.title = this.propertyTitle;
    }
    if (this.isMapped(this.propertySubtitle)) {
      properties.subtitle = this.propertySubtitle;
    }
    if (this.isMapped(this.propertyLink)) {
      properties.link = this.propertyLink;
    }
    if (this.isMapped(this.propertyAvatar)) {
      properties.avatar = this.propertyAvatar;
    }
    if (this.isMapped(this.propertyHighlighted)) {
      properties.highlighted = this.propertyHighlighted;
    }
    if (this.isMapped(this.propertyTag)) {
      properties.tag = { value: this.propertyTag, type: this.propertyTagType };
    }

    return properties;
  }

  private isMapped(value: string): boolean {
    return !!value && value !== 'none';
  }

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    const actionLabel = newAction.action as unknown as string;
    newAction.action = actionLabel ? this.showAction.bind(this, actionLabel) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  applyTagType() {
    this.items = this.items.map(item => ({ ...item, tagType: this.tagTypeValue }));
  }

  applyHighlighted() {
    this.propertyHighlighted = 'unread';
    const unread = this.highlightedValue === 'unread';
    this.items = this.items.map(item => ({ ...item, unread }));
  }

  applyAvatar() {
    if (!this.avatarType || this.avatarType === 'none') {
      this.propertyAvatar = '';
      this.items = this.items.map(item => ({ ...item, avatar: undefined }));
      return;
    }

    this.propertyAvatar = 'avatar';
    this.items = this.items.map((item, index) => ({ ...item, avatar: this.buildAvatarValue(index + 1) }));
  }

  changeAction(action: string) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    // Propriedades com valor default no componente
    this.componentsSize = 'medium';
    this.detailDisplay = 'inline';
    this.tagPosition = 'bottom';
    // Propriedades opcionais (iniciam em None)
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyAvatar = '';
    this.avatarType = 'none';
    this.propertyHighlighted = 'unread';
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertySubtitle = 'none';
    this.propertyTag = 'none';
    this.propertyTagType = 'tagType';
    this.propertyTitle = 'none';
    this.tagTypeValue = 'success';
    this.highlightedValue = 'read';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index: number) {
    const tagTypes = ['success', 'info', 'warning', 'danger', 'neutral'];

    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`,
      tag: index % 2 === 0 ? 'Completed' : 'In progress',
      tagType: this.tagTypeValue || tagTypes[index % tagTypes.length],
      subtitle: \`\${index * 5} min ago\`,
      avatar: this.buildAvatarValue(index),
      unread: this.highlightedValue === 'unread'
    };
  }

  // Monta o valor de avatar conforme o tipo selecionado no laborat\xF3rio.
  private buildAvatarValue(index: number): any {
    switch (this.avatarType) {
      case 'image':
        return \`https://i.pravatar.cc/150?img=\${index}\`;
      case 'icon':
        return { icon: 'an an-user', color: '#1a73e8', backgroundColor: '#e8f0fe' };
      case 'progress':
        return { progress: (index * 15) % 100, showPercentage: true, size: 'large', radius: 35 };
      case 'indeterminate':
        return { indeterminate: true, size: 'large', radius: 35 };
      default:
        return undefined;
    }
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: true
    };
  }

  private showAction(action: string): void {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-list-view-labs`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ot,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ie],encapsulation:2,changeDetection:1})}return a})();var Z=(()=>{class a{getItems(){return[{hireStatus:`hired`,hireTagType:`success`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=11`},{hireStatus:`progress`,hireTagType:`info`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=12`},{hireStatus:`canceled`,hireTagType:`danger`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=13`},{hireStatus:`progress`,hireTagType:`info`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=14`},{hireStatus:`hired`,hireTagType:`success`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=15`},{hireStatus:`progress`,hireTagType:`info`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`,avatar:`https://i.pravatar.cc/150?img=16`},{hireStatus:`progress`,hireTagType:`info`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`,avatar:`https://i.pravatar.cc/150?img=17`},{hireStatus:`progress`,hireTagType:`info`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=18`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var lt=[`detailsModal`];function rt(a,v){if(a&1&&(Qc(0,`div`,6),vu(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),Gk(4,`uppercase`),Kg()),a&2){let o=v.$implicit;wg(),Rb(`p-value`,o.idCard),wg(),Rb(`p-value`,o.jobDescription),wg(),Rb(`p-value`,Nk(qk(4,4,o.hireStatus)))}}function st(a,v){if(a&1&&(Qc(0,`div`,6),vu(1,`po-info`,17)(2,`po-info`,18),Kg()),a&2){let o=v.$implicit;wg(),Rb(`p-value`,o.age),wg(),Rb(`p-value`,o.city)}}var ze=(()=>{class a{poNotification=p(Ru);hiringProcessesService=p(Z);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;fieldProperties={title:`name`,subtitle:`jobDescription`,link:`url`,avatar:`avatar`,tag:{value:`hireStatus`,type:`hireTagType`}};actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let r=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(m=>!(n[m]instanceof Object)&&this.includeFilter(n[m],r)))}includeFilter(o,r){return r.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(r=>{if(r.$selected){switch(r.hireStatus){case`progress`:o.call(this,r);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}r.$selected=!1}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Du(lt,7),r&2){let m;No(m=xo())&&(n.detailsModalElement=m.first)}},standalone:!1,features:[we([Z])],decls:16,vars:12,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-select`,``,`p-tag-position`,`bottom`,3,`p-title-action`,`p-actions`,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(r,n){r&1&&(Qc(0,`po-page-list`,1)(1,`po-list-view`,2),vt(`p-title-action`,function(u){return n.showDetailModal(u)}),Db(2,rt,5,6,`ng-template`,3)(3,st,3,2,`ng-template`,4),Kg(),Qc(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),vu(8,`po-avatar`,8),Kg(),Qc(9,`div`,9)(10,`div`,10),vu(11,`po-tag`,11),Kg(),Qc(12,`div`,10),vu(13,`po-info`,12),Kg(),Qc(14,`div`,10),vu(15,`po-info`,13),Kg()()()()()),r&2&&(Rb(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),wg(),Rb(`p-actions`,n.actions)(`p-field-properties`,n.fieldProperties)(`p-items`,n.hiringProcessesFiltered),wg(),Rb(`p-title`,n.formatTitle),wg(),Rb(`p-show-detail`,n.showDetail),wg(),Rb(`p-title`,n.titleDetailsModal),wg(7),Rb(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),wg(2),Rb(`p-value`,n.selectedActionItem.email),wg(2),Rb(`p-value`,n.selectedActionItem.telephone))},dependencies:[c4,Ss,Joe,Pze,wae,Sae,ia,Lze,lF],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-list-view-hiring-processes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO List View - Hiring Processes`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-select
    p-tag-position="bottom"
    [p-actions]="actions"
    [p-field-properties]="fieldProperties"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoListViewAction,
  PoListViewFieldProperties,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement!: PoModalComponent;

  hiringProcesses!: Array<any>;
  hiringProcessesFiltered!: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem: any = {};
  titleDetailsModal: string = 'User Detail';

  readonly fieldProperties: PoListViewFieldProperties = {
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  };

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item: any) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item: any) {
    return item.url;
  }

  showDetailModal(item: any) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate: any) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find((candidate: any) => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate: any) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter((item: any) =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item: any, filters: Array<string>) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate: any): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem: any) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        hireTagType: 'success',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        hireStatus: 'canceled',
        hireTagType: 'danger',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer',
        avatar: 'https://i.pravatar.cc/150?img=13'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=14'
      },
      {
        hireStatus: 'hired',
        hireTagType: 'success',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/',
        avatar: 'https://i.pravatar.cc/150?img=15'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant',
        avatar: 'https://i.pravatar.cc/150?img=16'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA',
        avatar: 'https://i.pravatar.cc/150?img=17'
      },
      {
        hireStatus: 'progress',
        hireTagType: 'info',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer',
        avatar: 'https://i.pravatar.cc/150?img=18'
      }
    ];
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-list-view-hiring-processes`),Kg(),vu(27,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,dt,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:1717,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-list-view-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-avatar-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-detail-display`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoListViewDetailDisplay`],[`id`,`prop-p-field-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoListViewFieldProperties`],[`href`,`/documentation/po-list-view#fieldProperties`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-item-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-property-link`,1,`docs-api-properties-row`],[1,`docs-api-deprecated-marker`],[`id`,`prop-p-property-title`,1,`docs-api-properties-row`],[`id`,`prop-p-select`,1,`docs-api-properties-row`],[`id`,`event-p-show-detail`,1,`docs-api-properties-row`],[`id`,`event-p-show-more`,1,`docs-api-properties-row`],[`id`,`prop-p-show-more-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-single-select`,1,`docs-api-properties-row`],[`id`,`prop-p-tag-position`,1,`docs-api-properties-row`],[`id`,`event-p-title-action`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-field-properties`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-list-view-field-properties-avatar`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-field-properties-highlighted`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-field-properties-link`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-field-properties-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-field-properties-tag`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`value?:`,`string;`,`type?:`,`string;`,`}`],[`id`,`interface-po-list-view-field-properties-title`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-list-view-literals-detail-modal-title`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals-hide-details`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals-load-more-data`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-list-view-literals-show-details`,1,`docs-api-properties-row`],[`id`,`enum-po-list-view-detail-display`,1,`docs-api-class-name`],[`id`,`enum-po-list-view-detail-display-inline`,1,`docs-api-properties-row`],[`id`,`enum-po-list-view-detail-display-modal`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-list-view-content-template?view=doc`],[`href`,`/documentation/po-list-view-detail-template?view=doc`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoListViewModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-list-view`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoListViewComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O componente `),Qc(18,`code`),Sk(19,`po-list-view`),Kg(),Sk(20,` é responsável por renderizar de forma dinâmica uma lista de dados baseada em um `),Qc(21,`em`),Sk(22,`array`),Kg(),Sk(23,` de
objetos, adaptando-se \xE0s necessidades visuais de cada interface.`),Kg(),Qc(24,`p`),Sk(25,`Cada item da lista é construído internamente utilizando a estrutura de um `),Qc(26,`code`),Sk(27,`po-widget`),Kg(),Sk(28,`, assegurando consist\xEAncia visual.
Para layouts complexos, o componente oferece flexibilidade atrav\xE9s das diretivas
de templates `),Qc(29,`strong`)(30,`a`,6),Sk(31,`p-list-view-content-template`),Kg()(),Sk(32,` e
`),Qc(33,`strong`)(34,`a`,7),Sk(35,`p-list-view-detail-template`),Kg()(),Sk(36,` para customiza\xE7\xE3o do conte\xFAdo e exibi\xE7\xE3o
de informa\xE7\xF5es adicionais.`),Kg(),Qc(37,`p`),Sk(38,`A interação com o componente pode ser realizada com o `),Qc(39,`em`),Sk(40,`mouse`),Kg(),Sk(41,` ou pelo teclado. A navega\xE7\xE3o entre os elementos
interativos \xE9 feita utilizando a tecla `),Qc(42,`code`),Sk(43,`TAB`),Kg(),Sk(44,`. Os elementos que recebem foco ao navegar incluem:`),Kg(),Qc(45,`ul`)(46,`li`),Sk(47,`O próprio item (quando a propriedade de clique estiver ativa);`),Kg(),Qc(48,`li`),Sk(49,`Título do item (quando configurado como `),Qc(50,`em`),Sk(51,`link`),Kg(),Sk(52,`);`),Kg(),Qc(53,`li`),Sk(54,`Ações do item configuradas em `),Qc(55,`code`),Sk(56,`p-actions`),Kg(),Sk(57,`;`),Kg(),Qc(58,`li`),Sk(59,`Botão de controle de detalhes (para expandir ou abrir modal);`),Kg(),Qc(60,`li`),Sk(61,`Colunas de seleção (única ou múltipla);`),Kg(),Qc(62,`li`),Sk(63,`Botão de carregar mais resultados (`),Qc(64,`code`),Sk(65,`p-show-more`),Kg(),Sk(66,`).`),Kg()(),Qc(67,`p`),Sk(68,`A execução das ações focadas ou a marcação de itens nas colunas de seleção é realizada com as teclas `),Qc(69,`code`),Sk(70,`Enter`),Kg(),Sk(71,` ou
`),Qc(72,`code`),Sk(73,`Espaço`),Kg(),Sk(74,`.`),Kg(),Qc(75,`h4`),Sk(76,`Tokens customizáveis`),Kg(),Qc(77,`p`),Sk(78,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(79,`blockquote`)(80,`p`),Sk(81,`Para maiores informações, acesse o guia `),Qc(82,`a`,8),Sk(83,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(84,`.`),Kg()(),Qc(85,`table`)(86,`thead`)(87,`tr`)(88,`th`),Sk(89,`Propriedade`),Kg(),Qc(90,`th`),Sk(91,`Descrição`),Kg(),Qc(92,`th`),Sk(93,`Valor Padrão`),Kg()()(),Qc(94,`tbody`)(95,`tr`)(96,`td`)(97,`strong`),Sk(98,`Título`),Kg()(),vu(99,`td`)(100,`td`),Kg(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--title-color`),Kg()(),Qc(105,`td`),Sk(106,`Cor do título do item`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--title-color)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--title-font-family`),Kg()(),Qc(114,`td`),Sk(115,`Família tipográfica do título`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`var(--font-family-theme)`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`--title-font-size`),Kg()(),Qc(123,`td`),Sk(124,`Tamanho da fonte do título`),Kg(),Qc(125,`td`)(126,`code`),Sk(127,`var(--font-size-default)`),Kg()()(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--title-line-height`),Kg()(),Qc(132,`td`),Sk(133,`Altura da linha do título`),Kg(),Qc(134,`td`)(135,`code`),Sk(136,`var(--line-height-md)`),Kg()()(),Qc(137,`tr`)(138,`td`)(139,`code`),Sk(140,`--title-color-hover`),Kg()(),Qc(141,`td`),Sk(142,`Cor do título no estado hover`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--color-action-hover)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--title-color-selected`),Kg()(),Qc(150,`td`),Sk(151,`Cor do título quando o item está selecionado`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--color-action-focus)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`strong`),Sk(158,`Subtítulo (Support Message)`),Kg()(),vu(159,`td`)(160,`td`),Kg(),Qc(161,`tr`)(162,`td`)(163,`code`),Sk(164,`--support-message-color`),Kg()(),Qc(165,`td`),Sk(166,`Cor da mensagem de apoio`),Kg(),Qc(167,`td`)(168,`code`),Sk(169,`var(--color-neutral-dark-80)`),Kg()()(),Qc(170,`tr`)(171,`td`)(172,`code`),Sk(173,`--support-message-font-family`),Kg()(),Qc(174,`td`),Sk(175,`Família tipográfica da mensagem de apoio`),Kg(),Qc(176,`td`)(177,`code`),Sk(178,`var(--font-family-theme)`),Kg()()(),Qc(179,`tr`)(180,`td`)(181,`code`),Sk(182,`--support-message-font-size`),Kg()(),Qc(183,`td`),Sk(184,`Tamanho da fonte da mensagem de apoio`),Kg(),Qc(185,`td`)(186,`code`),Sk(187,`var(--font-size-sm)`),Kg()()(),Qc(188,`tr`)(189,`td`)(190,`code`),Sk(191,`--support-message-line-height`),Kg()(),Qc(192,`td`),Sk(193,`Altura da linha da mensagem de apoio`),Kg(),Qc(194,`td`)(195,`code`),Sk(196,`var(--line-height-none)`),Kg()()(),Qc(197,`tr`)(198,`td`)(199,`code`),Sk(200,`--support-message-color-selected`),Kg()(),Qc(201,`td`),Sk(202,`Cor da mensagem de apoio quando o item está selecionado`),Kg(),Qc(203,`td`)(204,`code`),Sk(205,`var(--color-action-focus)`),Kg()()(),Qc(206,`tr`)(207,`td`)(208,`strong`),Sk(209,`Item - Normal`),Kg()(),vu(210,`td`)(211,`td`),Kg(),Qc(212,`tr`)(213,`td`)(214,`code`),Sk(215,`--list-item-background`),Kg()(),Qc(216,`td`),Sk(217,`Cor de fundo do item`),Kg(),Qc(218,`td`)(219,`code`),Sk(220,`var(--list-item-background)`),Kg()()(),Qc(221,`tr`)(222,`td`)(223,`code`),Sk(224,`--list-item-border-color`),Kg()(),Qc(225,`td`),Sk(226,`Cor da borda do item`),Kg(),Qc(227,`td`)(228,`code`),Sk(229,`var(--list-item-border-color)`),Kg()()(),Qc(230,`tr`)(231,`td`)(232,`code`),Sk(233,`--list-item-border-width`),Kg()(),Qc(234,`td`),Sk(235,`Largura da borda do item`),Kg(),Qc(236,`td`)(237,`code`),Sk(238,`var(--border-width-sm)`),Kg()()(),Qc(239,`tr`)(240,`td`)(241,`code`),Sk(242,`--list-item-border-radius`),Kg()(),Qc(243,`td`),Sk(244,`Raio de arredondamento dos cantos do item`),Kg(),Qc(245,`td`)(246,`code`),Sk(247,`var(--border-radius-md)`),Kg()()(),Qc(248,`tr`)(249,`td`)(250,`code`),Sk(251,`--list-item-shadow`),Kg()(),Qc(252,`td`),Sk(253,`Sombra base do item`),Kg(),Qc(254,`td`)(255,`code`),Sk(256,`var(--shadow-md)`),Kg()()(),Qc(257,`tr`)(258,`td`)(259,`strong`),Sk(260,`Item - Selecionado`),Kg()(),vu(261,`td`)(262,`td`),Kg(),Qc(263,`tr`)(264,`td`)(265,`code`),Sk(266,`--list-item-background-selected`),Kg()(),Qc(267,`td`),Sk(268,`Cor de fundo do item selecionado`),Kg(),Qc(269,`td`)(270,`code`),Sk(271,`var(--color-brand-01-lightest)`),Kg()()(),Qc(272,`tr`)(273,`td`)(274,`code`),Sk(275,`--list-item-border-color-selected`),Kg()(),Qc(276,`td`),Sk(277,`Cor da borda do item selecionado`),Kg(),Qc(278,`td`)(279,`code`),Sk(280,`var(--color-action-default)`),Kg()()(),Qc(281,`tr`)(282,`td`)(283,`strong`),Sk(284,`Item - Hover`),Kg()(),vu(285,`td`)(286,`td`),Kg(),Qc(287,`tr`)(288,`td`)(289,`code`),Sk(290,`--list-item-border-color-hover`),Kg()(),Qc(291,`td`),Sk(292,`Cor da borda do item no estado hover`),Kg(),Qc(293,`td`)(294,`code`),Sk(295,`var(--color-action-hover)`),Kg()()(),Qc(296,`tr`)(297,`td`)(298,`code`),Sk(299,`--list-item-shadow-hover`),Kg()(),Qc(300,`td`),Sk(301,`Sombra do item no estado hover`),Kg(),Qc(302,`td`)(303,`code`),Sk(304,`var(--shadow-lg)`),Kg()()(),Qc(305,`tr`)(306,`td`)(307,`strong`),Sk(308,`Item - Focus`),Kg()(),vu(309,`td`)(310,`td`),Kg(),Qc(311,`tr`)(312,`td`)(313,`code`),Sk(314,`--list-item-color-focused`),Kg()(),Qc(315,`td`),Sk(316,`Cor da borda do item no estado focus`),Kg(),Qc(317,`td`)(318,`code`),Sk(319,`var(--color-action-default)`),Kg()()(),Qc(320,`tr`)(321,`td`)(322,`code`),Sk(323,`--list-item-outline-color-focused`),Kg()(),Qc(324,`td`),Sk(325,`Cor do outline do item no estado focus`),Kg(),Qc(326,`td`)(327,`code`),Sk(328,`var(--color-action-focus)`),Kg()()(),Qc(329,`tr`)(330,`td`)(331,`strong`),Sk(332,`Destaque (Highlighted)`),Kg()(),vu(333,`td`)(334,`td`),Kg(),Qc(335,`tr`)(336,`td`)(337,`code`),Sk(338,`--list-item-background-highlighted`),Kg()(),Qc(339,`td`),Sk(340,`Cor de fundo do item destacado`),Kg(),Qc(341,`td`)(342,`code`),Sk(343,`var(--color-brand-01-lightest)`),Kg()()(),Qc(344,`tr`)(345,`td`)(346,`strong`),Sk(347,`Motion`),Kg()(),vu(348,`td`)(349,`td`),Kg(),Qc(350,`tr`)(351,`td`)(352,`code`),Sk(353,`--list-item-transition-duration`),Kg()(),Qc(354,`td`),Sk(355,`Duração da transição do item`),Kg(),Qc(356,`td`)(357,`code`),Sk(358,`var(--duration-normal)`),Kg()()(),Qc(359,`tr`)(360,`td`)(361,`code`),Sk(362,`--list-item-transition-property`),Kg()(),Qc(363,`td`),Sk(364,`Propriedades CSS animadas`),Kg(),Qc(365,`td`)(366,`code`),Sk(367,`all`),Kg()()(),Qc(368,`tr`)(369,`td`)(370,`code`),Sk(371,`--list-item-transition-timing`),Kg()(),Qc(372,`td`),Sk(373,`Curva de aceleração da transição`),Kg(),Qc(374,`td`)(375,`code`),Sk(376,`var(--timing-standard, var(--timing-standart, ease))`),Kg()()()()()(),Qc(377,`div`,9)(378,`h4`,10),Sk(379,`Seletor`),Kg(),Qc(380,`pre`,11),Sk(381,`<po-list-view
    p-actions="PoListViewAction[]"
    p-avatar-size="string"
    p-components-size="string"
    p-detail-display="PoListViewDetailDisplay"
    p-field-properties="PoListViewFieldProperties"
    p-height="number"
    p-hide-select-all="boolean"
    (p-item-click)="EventEmitter"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-tag-position="string"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),Kg()(),Qc(382,`h4`,12),Sk(383,`Propriedades`),Kg(),Qc(384,`table`,13)(385,`tr`,14)(386,`th`,15),Sk(387,`Nome`),Kg(),Qc(388,`th`,15),Sk(389,`Tipo`),Kg(),Qc(390,`th`,15),Sk(391,`Padrão`),Kg(),Qc(392,`th`,15),Sk(393,`Descrição`),Kg()(),Qc(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),Sk(398,` p-actions`),vu(399,`br`),Kg()()(),Qc(400,`td`,20)(401,`code`,21),Sk(402,`PoListViewAction[]`),Kg()(),Qc(403,`td`,22),Sk(404,`-`),Kg(),Qc(405,`td`,23)(406,`em`)(407,`strong`),Sk(408,`(opcional)`),Kg()(),Qc(409,`p`),Sk(410,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
As propriedades das a\xE7\xF5es seguem a interface `),Qc(411,`code`),Sk(412,`PoPopupAction`),Kg(),Sk(413,`.`),Kg()()(),Qc(414,`tr`,24)(415,`td`,17)(416,`div`,18)(417,`span`,19),Sk(418,` p-avatar-size`),vu(419,`br`),Kg()()(),Qc(420,`td`,20)(421,`code`,25),Sk(422,`string`),Kg()(),Qc(423,`td`,22)(424,`p`)(425,`code`),Sk(426,`md`),Kg()()(),Qc(427,`td`,23)(428,`em`)(429,`strong`),Sk(430,`(opcional)`),Kg()(),Qc(431,`p`),Sk(432,`Define o tamanho do avatar do tipo `),Qc(433,`strong`),Sk(434,`imagem`),Kg(),Sk(435,` (URL).`),Kg(),Qc(436,`p`),Sk(437,`Valores válidos:`),Kg(),Qc(438,`ul`)(439,`li`)(440,`code`),Sk(441,`xs`),Kg(),Sk(442,` (24x24)`),Kg(),Qc(443,`li`)(444,`code`),Sk(445,`sm`),Kg(),Sk(446,` (32x32)`),Kg(),Qc(447,`li`)(448,`code`),Sk(449,`md`),Kg(),Sk(450,` (64x64)`),Kg(),Qc(451,`li`)(452,`code`),Sk(453,`lg`),Kg(),Sk(454,` (96x96)`),Kg(),Qc(455,`li`)(456,`code`),Sk(457,`xl`),Kg(),Sk(458,` (144x144)`),Kg()(),Qc(459,`blockquote`)(460,`p`),Sk(461,`Incompatível com os demais tipos de avatar (icon, progress, customTemplate).`),Kg()()()(),Qc(462,`tr`,26)(463,`td`,17)(464,`div`,18)(465,`span`,19),Sk(466,` p-components-size`),vu(467,`br`),Kg()()(),Qc(468,`td`,20)(469,`code`,25),Sk(470,`string`),Kg()(),Qc(471,`td`,22)(472,`p`)(473,`code`),Sk(474,`medium`),Kg()()(),Qc(475,`td`,23)(476,`em`)(477,`strong`),Sk(478,`(opcional)`),Kg()(),Qc(479,`p`),Sk(480,`Define o dimensionamento geral dos elementos no template.`),Kg(),Qc(481,`ul`)(482,`li`)(483,`code`),Sk(484,`small`),Kg(),Sk(485,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(486,`li`)(487,`code`),Sk(488,`medium`),Kg(),Sk(489,`: aplica a medida medium de cada componente.`),Kg()(),Qc(490,`blockquote`)(491,`p`),Sk(492,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(493,`code`),Sk(494,`medium`),Kg(),Sk(495,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(496,`a`,27),Sk(497,`po-theme`),Kg(),Sk(498,`.`),Kg()()()(),Qc(499,`tr`,28)(500,`td`,17)(501,`div`,18)(502,`span`,19),Sk(503,` p-detail-display`),vu(504,`br`),Kg()()(),Qc(505,`td`,20)(506,`code`,29),Sk(507,`PoListViewDetailDisplay`),Kg()(),Qc(508,`td`,22)(509,`p`)(510,`code`),Sk(511,`inline`),Kg()()(),Qc(512,`td`,23)(513,`em`)(514,`strong`),Sk(515,`(opcional)`),Kg()(),Qc(516,`p`),Sk(517,`Define como o detalhe do item (diretiva `),Qc(518,`code`),Sk(519,`p-list-view-detail-template`),Kg(),Sk(520,`) ser\xE1 exibido:
A utiliza\xE7\xE3o desta propriedade renderiza um bot\xE3o de a\xE7\xE3o (como "Exibir detalhes" ou "Ver detalhes") no rodap\xE9 do item
para controlar a visualiza\xE7\xE3o do conte\xFAdo.`),Kg(),Qc(521,`p`),Sk(522,`Valores válidos:`),Kg(),Qc(523,`ul`)(524,`li`)(525,`code`),Sk(526,`inline`),Kg(),Sk(527,`: expande o conteúdo do detalhe abaixo do item.`),Kg(),Qc(528,`li`)(529,`code`),Sk(530,`modal`),Kg(),Sk(531,`: exibe o conteúdo do detalhe no corpo de um `),Qc(532,`code`),Sk(533,`po-modal`),Kg(),Sk(534,`.`),Kg()(),Qc(535,`blockquote`)(536,`p`),Sk(537,`Incompatível com o evento `),Qc(538,`code`),Sk(539,`p-item-click`),Kg(),Sk(540,`.`),Kg()()()(),Qc(541,`tr`,30)(542,`td`,17)(543,`div`,18)(544,`span`,19),Sk(545,` p-field-properties`),vu(546,`br`),Kg()()(),Qc(547,`td`,20)(548,`code`,31),Sk(549,`PoListViewFieldProperties`),Kg()(),Qc(550,`td`,22),Sk(551,`-`),Kg(),Qc(552,`td`,23)(553,`em`)(554,`strong`),Sk(555,`(opcional)`),Kg()(),Qc(556,`p`),Sk(557,`Consolida, em um único objeto tipado (`),Qc(558,`a`,32)(559,`code`),Sk(560,`PoListViewFieldProperties`),Kg()(),Sk(561,`),
o mapeamento entre as propriedades do item e as \xE1reas visuais do componente (t\xEDtulo, subt\xEDtulo,
link, avatar, destaque e tag).`),Kg(),Qc(562,`pre`)(563,`code`),Sk(564,`<po-list-view
  [p-field-properties]="{
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    highlighted: 'unread',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  }">
</po-list-view>
`),Kg()()()(),Qc(565,`tr`,33)(566,`td`,17)(567,`div`,18)(568,`span`,19),Sk(569,` p-height`),vu(570,`br`),Kg()()(),Qc(571,`td`,20)(572,`code`,34),Sk(573,`number`),Kg()(),Qc(574,`td`,22),Sk(575,`-`),Kg(),Qc(576,`td`,23)(577,`em`)(578,`strong`),Sk(579,`(opcional)`),Kg()(),Qc(580,`p`),Sk(581,`Define a altura da lista em `),Qc(582,`em`),Sk(583,`px`),Kg(),Sk(584,`, desconsiderando o espaço do botão `),Qc(585,`code`),Sk(586,`p-show-more`),Kg(),Sk(587,`.`),Kg(),Qc(588,`blockquote`)(589,`p`),Sk(590,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),Kg()()()(),Qc(591,`tr`,35)(592,`td`,17)(593,`div`,18)(594,`span`,19),Sk(595,` p-hide-select-all`),vu(596,`br`),Kg()()(),Qc(597,`td`,20)(598,`code`,36),Sk(599,`boolean`),Kg()(),Qc(600,`td`,22)(601,`p`)(602,`code`),Sk(603,`false`),Kg()()(),Qc(604,`td`,23)(605,`em`)(606,`strong`),Sk(607,`(opcional)`),Kg()(),Qc(608,`p`),Sk(609,`Habilita a seleção de itens na lista.`),Kg(),Qc(610,`p`),Sk(611,`Por padrão, renderiza um `),Qc(612,`em`),Sk(613,`checkbox`),Kg(),Sk(614,` para seleção múltipla. Caso a propriedade `),Qc(615,`code`),Sk(616,`p-single-select`),Kg(),Sk(617,` esteja habilitada,
renderiza um bot\xE3o `),Qc(618,`em`),Sk(619,`radio`),Kg(),Sk(620,` para seleção única.`),Kg(),Qc(621,`p`),Sk(622,`Ao utilizar esta propriedade, todos os itens recebem a propriedade dinâmica `),Qc(623,`code`),Sk(624,`$selected`),Kg(),Sk(625,` para identificar o seu estado
de sele\xE7\xE3o. Por exemplo:`),Kg(),Qc(626,`pre`)(627,`code`),Sk(628,`item.$selected

// ou

item['$selected']
`),Kg()()()(),Qc(629,`tr`,37)(630,`td`,17)(631,`div`,38)(632,`span`,39),Sk(633,` (p-item-click)`),vu(634,`br`),Kg()()(),Qc(635,`td`,20)(636,`code`,40),Sk(637,`EventEmitter`),Kg()(),Qc(638,`td`,22),Sk(639,`-`),Kg(),Qc(640,`td`,23)(641,`em`)(642,`strong`),Sk(643,`(opcional)`),Kg()(),Qc(644,`p`),Sk(645,`A\xE7\xE3o que ser\xE1 executada ao clicar no item da lista. Quando definida, torna o item clic\xE1vel.
Retorna o item da lista clicado.`),Kg(),Qc(646,`blockquote`)(647,`p`),Sk(648,`O evento é desabilitado caso o item possua duas ou mais ações visíveis (`),Qc(649,`code`),Sk(650,`p-actions`),Kg(),Sk(651,`).`),Kg()()()(),Qc(652,`tr`,41)(653,`td`,17)(654,`div`,18)(655,`span`,19),Sk(656,` p-items`),vu(657,`br`),Kg()()(),Qc(658,`td`,20)(659,`code`,42),Sk(660,`any[]`),Kg()(),Qc(661,`td`,22),Sk(662,`-`),Kg(),Qc(663,`td`,23)(664,`p`),Sk(665,`Lista de itens que serão exibidos no componente.`),Kg(),Qc(666,`p`),Sk(667,`A renderização dos dados depende do mapeamento das chaves dos objetos através da propriedade `),Qc(668,`code`),Sk(669,`p-field-properties`),Kg(),Sk(670,`.`),Kg(),Qc(671,`p`),Sk(672,`Exemplo de uso:`),Kg(),Qc(673,`pre`)(674,`code`),Sk(675,`const listItems = [
  { name: 'John Doe', job: 'Developer' },
  { name: 'Jane Smith', job: 'Designer' }
];

const listMapping = {
  title: 'name',
  subtitle: 'job'
};
`),Kg()(),Qc(676,`pre`)(677,`code`),Sk(678,`<po-list-view
  [p-items]="listItems"
  [p-field-properties]="listMapping">
</po-list-view>
`),Kg()()()(),Qc(679,`tr`,43)(680,`td`,17)(681,`div`,18)(682,`span`,19),Sk(683,` p-literals`),vu(684,`br`),Kg()()(),Qc(685,`td`,20)(686,`code`,44),Sk(687,`PoListViewLiterals`),Kg()(),Qc(688,`td`,22),Sk(689,`-`),Kg(),Qc(690,`td`,23)(691,`em`)(692,`strong`),Sk(693,`(opcional)`),Kg()(),Qc(694,`p`),Sk(695,`Objeto com as literais usadas no po-list-view, permitindo personalizar os textos exibidos no componente.`),Kg(),Qc(696,`p`),Sk(697,`Exemplo de uso:`),Kg(),Qc(698,`pre`)(699,`code`),Sk(700,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),Kg()(),Qc(701,`pre`)(702,`code`),Sk(703,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),Kg()(),Qc(704,`blockquote`)(705,`p`),Sk(706,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(707,`a`,45)(708,`code`),Sk(709,`PoI18nService`),Kg()(),Sk(710,` ou do browser.`),Kg()()()(),Qc(711,`tr`,46)(712,`td`,17)(713,`div`,18)(714,`span`,19),Sk(715,` p-property-link`),vu(716,`br`),Kg()(),Qc(717,`div`,47),Sk(718,`Deprecated`),Kg()(),Qc(719,`td`,20)(720,`code`,25),Sk(721,`string`),Kg()(),Qc(722,`td`,22),Sk(723,`-`),Kg(),Qc(724,`td`,23)(725,`em`)(726,`strong`),Sk(727,`(opcional)`),Kg()(),Qc(728,`p`),Sk(729,`Chave do objeto (`),Qc(730,`code`),Sk(731,`p-items`),Kg(),Sk(732,`) com o `),Qc(733,`em`),Sk(734,`link`),Kg(),Sk(735,` do título do item.`),Kg(),Qc(736,`blockquote`)(737,`p`),Sk(738,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Qc(739,`code`),Sk(740,`p-field-properties`),Kg(),Sk(741,`.`),Kg()()()(),Qc(742,`tr`,48)(743,`td`,17)(744,`div`,18)(745,`span`,19),Sk(746,` p-property-title`),vu(747,`br`),Kg()(),Qc(748,`div`,47),Sk(749,`Deprecated`),Kg()(),Qc(750,`td`,20)(751,`code`,25),Sk(752,`string`),Kg()(),Qc(753,`td`,22),Sk(754,`-`),Kg(),Qc(755,`td`,23)(756,`em`)(757,`strong`),Sk(758,`(opcional)`),Kg()(),Qc(759,`p`),Sk(760,`Chave do objeto (`),Qc(761,`code`),Sk(762,`p-items`),Kg(),Sk(763,`) com o título do item.`),Kg(),Qc(764,`blockquote`)(765,`p`),Sk(766,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Qc(767,`code`),Sk(768,`p-field-properties`),Kg(),Sk(769,`.`),Kg()()()(),Qc(770,`tr`,49)(771,`td`,17)(772,`div`,18)(773,`span`,19),Sk(774,` p-select`),vu(775,`br`),Kg()()(),Qc(776,`td`,20)(777,`code`,36),Sk(778,`boolean`),Kg()(),Qc(779,`td`,22)(780,`p`)(781,`code`),Sk(782,`false`),Kg()()(),Qc(783,`td`,23)(784,`em`)(785,`strong`),Sk(786,`(opcional)`),Kg()(),Qc(787,`p`),Sk(788,`Habilita um `),Qc(789,`em`),Sk(790,`checkbox`),Kg(),Sk(791,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),Qc(792,`code`),Sk(793,`$selected`),Kg(),Sk(794,` para
identificar se o item est\xE1 selecionado, por exemplo:`),Kg(),Qc(795,`pre`)(796,`code`),Sk(797,`item.$selected

// ou

item['$selected']
`),Kg()()()(),Qc(798,`tr`,50)(799,`td`,17)(800,`div`,38)(801,`span`,39),Sk(802,` (p-show-detail)`),vu(803,`br`),Kg()()(),Qc(804,`td`,20)(805,`code`,40),Sk(806,`EventEmitter`),Kg()(),Qc(807,`td`,22),Sk(808,`-`),Kg(),Qc(809,`td`,23)(810,`em`)(811,`strong`),Sk(812,`(opcional)`),Kg()(),Qc(813,`p`),Sk(814,`A\xE7\xE3o que ser\xE1 executada ao expandir os detalhes do item.
Retorna o item da lista clicado.`),Kg(),Qc(815,`blockquote`)(816,`p`),Sk(817,`Incompatível com o evento `),Qc(818,`code`),Sk(819,`p-item-click`),Kg(),Sk(820,`.`),Kg()()()(),Qc(821,`tr`,51)(822,`td`,17)(823,`div`,38)(824,`span`,39),Sk(825,` (p-show-more)`),vu(826,`br`),Kg()()(),Qc(827,`td`,20)(828,`code`,40),Sk(829,`EventEmitter`),Kg()(),Qc(830,`td`,22),Sk(831,`-`),Kg(),Qc(832,`td`,23)(833,`em`)(834,`strong`),Sk(835,`(opcional)`),Kg()(),Qc(836,`p`),Sk(837,`Ação executada ao clicar no botão de carregar mais resultados.`),Kg()()(),Qc(838,`tr`,52)(839,`td`,17)(840,`div`,18)(841,`span`,19),Sk(842,` p-show-more-disabled`),vu(843,`br`),Kg()()(),Qc(844,`td`,20)(845,`code`,36),Sk(846,`boolean`),Kg()(),Qc(847,`td`,22),Sk(848,`-`),Kg(),Qc(849,`td`,23)(850,`em`)(851,`strong`),Sk(852,`(opcional)`),Kg()(),Qc(853,`p`),Sk(854,`Indica que o botão `),Qc(855,`em`),Sk(856,`Carregar Mais Resultados`),Kg(),Sk(857,` (`),Qc(858,`code`),Sk(859,`p-show-more`),Kg(),Sk(860,`) será desabilitado.`),Kg()()(),Qc(861,`tr`,53)(862,`td`,17)(863,`div`,18)(864,`span`,19),Sk(865,` p-single-select`),vu(866,`br`),Kg()()(),Qc(867,`td`,20)(868,`code`,36),Sk(869,`boolean`),Kg()(),Qc(870,`td`,22)(871,`p`)(872,`code`),Sk(873,`false`),Kg()()(),Qc(874,`td`,23)(875,`em`)(876,`strong`),Sk(877,`(opcional)`),Kg()(),Qc(878,`p`),Sk(879,`Define que somente um item da lista pode ser selecionado quando a sele\xE7\xE3o estiver habilitada
atrav\xE9s da propriedade `),Qc(880,`code`),Sk(881,`p-select`),Kg(),Sk(882,`.`),Kg(),Qc(883,`blockquote`)(884,`p`),Sk(885,`Quando habilitado, a opção "Selecionar todos" é ocultada.`),Kg()()()(),Qc(886,`tr`,54)(887,`td`,17)(888,`div`,18)(889,`span`,19),Sk(890,` p-tag-position`),vu(891,`br`),Kg()()(),Qc(892,`td`,20)(893,`code`,25),Sk(894,`string`),Kg()(),Qc(895,`td`,22)(896,`p`)(897,`code`),Sk(898,`bottom`),Kg()()(),Qc(899,`td`,23)(900,`em`)(901,`strong`),Sk(902,`(opcional)`),Kg()(),Qc(903,`p`),Sk(904,`Define o posicionamento da `),Qc(905,`em`),Sk(906,`tag`),Kg(),Sk(907,` (`),Qc(908,`code`),Sk(909,`PoListViewFieldProperties.tag.value`),Kg(),Sk(910,`) em relação ao título dentro do item:`),Kg(),Qc(911,`ul`)(912,`li`)(913,`code`),Sk(914,`right`),Kg(),Sk(915,`: ao lado direito do título.`),Kg(),Qc(916,`li`)(917,`code`),Sk(918,`top`),Kg(),Sk(919,`: acima do título.`),Kg(),Qc(920,`li`)(921,`code`),Sk(922,`bottom`),Kg(),Sk(923,`: abaixo do título.`),Kg()()()(),Qc(924,`tr`,55)(925,`td`,17)(926,`div`,38)(927,`span`,39),Sk(928,` (p-title-action)`),vu(929,`br`),Kg()()(),Qc(930,`td`,20)(931,`code`,40),Sk(932,`EventEmitter`),Kg()(),Qc(933,`td`,22),Sk(934,`-`),Kg(),Qc(935,`td`,23)(936,`em`)(937,`strong`),Sk(938,`(opcional)`),Kg()(),Qc(939,`p`),Sk(940,`A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo.
Retorna o item da lista clicado.`),Kg(),Qc(941,`blockquote`)(942,`p`),Sk(943,`Compatível com o título configurado como `),Qc(944,`em`),Sk(945,`link`),Kg(),Sk(946,` (`),Qc(947,`code`),Sk(948,`PoListViewFieldProperties.link`),Kg(),Sk(949,` ou `),Qc(950,`code`),Sk(951,`p-property-link`),Kg(),Sk(952,`):
ao clicar, o evento \xE9 emitido e, havendo `),Qc(953,`em`),Sk(954,`link`),Kg(),Sk(955,`, a navegação também é realizada.`),Kg()(),Qc(956,`blockquote`)(957,`p`),Sk(958,`Incompatível com o evento `),Qc(959,`code`),Sk(960,`p-item-click`),Kg(),Sk(961,`.`),Kg()()()()(),Qc(962,`h3`),Sk(963,`Interfaces`),Kg(),Qc(964,`h4`,56)(965,`code`,5),Sk(966,`PoListViewAction`),Kg()(),Qc(967,`div`,2)(968,`p`),Sk(969,`Interface que define as ações do componente `),Qc(970,`code`),Sk(971,`po-list-view`),Kg(),Sk(972,`.`),Kg(),Qc(973,`blockquote`)(974,`p`),Sk(975,`As propriedades `),Qc(976,`code`),Sk(977,`subItems`),Kg(),Sk(978,`, `),Qc(979,`code`),Sk(980,`separator`),Kg(),Sk(981,`, `),Qc(982,`code`),Sk(983,`url`),Kg(),Sk(984,` e `),Qc(985,`code`),Sk(986,`selected`),Kg(),Sk(987,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),Kg()()(),Qc(988,`h4`,12),Sk(989,`Propriedades`),Kg(),Qc(990,`table`,13)(991,`tr`,14)(992,`th`,15),Sk(993,`Nome`),Kg(),Qc(994,`th`,15),Sk(995,`Tipo`),Kg(),Qc(996,`th`,15),Sk(997,`Descrição`),Kg()(),Qc(998,`tr`,57)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),Sk(1002,` action`),vu(1003,`br`),Kg()()(),Qc(1004,`td`,20)(1005,`code`,58),Sk(1006,`Function`),Kg()(),Qc(1007,`td`,23)(1008,`em`)(1009,`strong`),Sk(1010,`(opcional)`),Kg()(),Qc(1011,`p`),Sk(1012,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(1013,`p`),Sk(1014,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(1015,`code`),Sk(1016,`subItems`),Kg(),Sk(1017,`.`),Kg(),Qc(1018,`blockquote`)(1019,`p`),Sk(1020,`Para que a função seja executada no contexto do componente, utilize `),Qc(1021,`em`),Sk(1022,`bind`),Kg(),Sk(1023,`:
`),Qc(1024,`code`),Sk(1025,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(1026,`tr`,59)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),Sk(1030,` disabled`),vu(1031,`br`),Kg()()(),Qc(1032,`td`,20)(1033,`code`,36),Sk(1034,`boolean `),Kg(),Qc(1035,`code`,58),Sk(1036,` Function`),Kg()(),Qc(1037,`td`,23)(1038,`em`)(1039,`strong`),Sk(1040,`(opcional)`),Kg()(),Qc(1041,`p`),Sk(1042,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(1043,`tr`,60)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),Sk(1047,` icon`),vu(1048,`br`),Kg()()(),Qc(1049,`td`,20)(1050,`code`,25),Sk(1051,`string `),Kg(),Qc(1052,`code`,61),Sk(1053,` TemplateRef<void>`),Kg()(),Qc(1054,`td`,23)(1055,`em`)(1056,`strong`),Sk(1057,`(opcional)`),Kg()(),Qc(1058,`p`),Sk(1059,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(1060,`p`),Sk(1061,`Aceita ícones da `),Qc(1062,`a`,62),Sk(1063,`Biblioteca de ícones`),Kg(),Sk(1064,`, fontes externas (ex: Font Awesome)
ou um `),Qc(1065,`code`),Sk(1066,`TemplateRef`),Kg(),Sk(1067,` para ícones customizados.`),Kg(),Qc(1068,`pre`)(1069,`code`),Sk(1070,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(1071,`tr`,63)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),Sk(1075,` label`),vu(1076,`br`),Kg()()(),Qc(1077,`td`,20)(1078,`code`,25),Sk(1079,`string`),Kg()(),Qc(1080,`td`,23)(1081,`p`),Sk(1082,`Rótulo da ação.`),Kg(),Qc(1083,`p`),Sk(1084,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(1085,`code`),Sk(1086,`subItems`),Kg(),Sk(1087,`.`),Kg()()(),Qc(1088,`tr`,64)(1089,`td`,17)(1090,`div`,18)(1091,`span`,19),Sk(1092,` selected`),vu(1093,`br`),Kg()()(),Qc(1094,`td`,20)(1095,`code`,36),Sk(1096,`boolean`),Kg()(),Qc(1097,`td`,23)(1098,`em`)(1099,`strong`),Sk(1100,`(opcional)`),Kg()(),Qc(1101,`p`),Sk(1102,`Define se a ação está selecionada.`),Kg()()(),Qc(1103,`tr`,65)(1104,`td`,17)(1105,`div`,18)(1106,`span`,19),Sk(1107,` separator`),vu(1108,`br`),Kg()()(),Qc(1109,`td`,20)(1110,`code`,36),Sk(1111,`boolean`),Kg()(),Qc(1112,`td`,23)(1113,`em`)(1114,`strong`),Sk(1115,`(opcional)`),Kg()(),Qc(1116,`p`),Sk(1117,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(1118,`tr`,66)(1119,`td`,17)(1120,`div`,18)(1121,`span`,19),Sk(1122,` subItems`),vu(1123,`br`),Kg()()(),Qc(1124,`td`,20)(1125,`code`,67),Sk(1126,`Array<PoPopupAction>`),Kg()(),Qc(1127,`td`,23)(1128,`em`)(1129,`strong`),Sk(1130,`(opcional)`),Kg()(),Qc(1131,`p`),Sk(1132,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(1133,`pre`)(1134,`code`),Sk(1135,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(1136,`p`),Sk(1137,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(1138,`blockquote`)(1139,`p`),Sk(1140,`As propriedades `),Qc(1141,`code`),Sk(1142,`disabled`),Kg(),Sk(1143,`, `),Qc(1144,`code`),Sk(1145,`type`),Kg(),Sk(1146,` e `),Qc(1147,`code`),Sk(1148,`visible`),Kg(),Sk(1149,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(1150,`blockquote`)(1151,`p`),Sk(1152,`Quando `),Qc(1153,`code`),Sk(1154,`url`),Kg(),Sk(1155,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(1156,`blockquote`)(1157,`p`),Sk(1158,`Em subníveis aninhados, o `),Qc(1159,`code`),Sk(1160,`icon`),Kg(),Sk(1161,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(1162,`tr`,68)(1163,`td`,17)(1164,`div`,18)(1165,`span`,19),Sk(1166,` subItemsLazy`),vu(1167,`br`),Kg()()(),Qc(1168,`td`,20)(1169,`code`,69),Sk(1170,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(1171,`td`,23)(1172,`em`)(1173,`strong`),Sk(1174,`(opcional)`),Kg()(),Qc(1175,`p`),Sk(1176,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(1177,`p`),Sk(1178,`Recebe o item agrupador e retorna um `),Qc(1179,`code`),Sk(1180,`Observable<Array<PoPopupAction>>`),Kg(),Sk(1181,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(1182,`strong`),Sk(1183,`apenas`),Kg(),Sk(1184,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(1185,`code`),Sk(1186,`po-skeleton`),Kg(),Sk(1187,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(1188,`pre`)(1189,`code`),Sk(1190,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(1191,`blockquote`)(1192,`p`),Sk(1193,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(1194,`p`),Sk(1195,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(1196,`tr`,70)(1197,`td`,17)(1198,`div`,18)(1199,`span`,19),Sk(1200,` type`),vu(1201,`br`),Kg()()(),Qc(1202,`td`,20)(1203,`code`,25),Sk(1204,`string`),Kg()(),Qc(1205,`td`,23)(1206,`em`)(1207,`strong`),Sk(1208,`(opcional)`),Kg()(),Qc(1209,`p`),Sk(1210,`Define a cor do item.`),Kg(),Qc(1211,`p`),Sk(1212,`Valores válidos:`),Kg(),Qc(1213,`ul`)(1214,`li`)(1215,`code`),Sk(1216,`default`),Kg()(),Qc(1217,`li`)(1218,`code`),Sk(1219,`danger`),Kg()()()()(),Qc(1220,`tr`,71)(1221,`td`,17)(1222,`div`,18)(1223,`span`,19),Sk(1224,` url`),vu(1225,`br`),Kg()()(),Qc(1226,`td`,20)(1227,`code`,25),Sk(1228,`string`),Kg()(),Qc(1229,`td`,23)(1230,`em`)(1231,`strong`),Sk(1232,`(opcional)`),Kg()(),Qc(1233,`p`),Sk(1234,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(1235,`p`),Sk(1236,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(1237,`code`),Sk(1238,`url`),Kg(),Sk(1239,` é informada em um agrupador, o clique `),Qc(1240,`strong`),Sk(1241,`não abrirá os subitens`),Kg(),Sk(1242,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(1243,`blockquote`)(1244,`p`),Sk(1245,`Quando informada, tem prioridade sobre a propriedade `),Qc(1246,`code`),Sk(1247,`action`),Kg(),Sk(1248,`.`),Kg()()()(),Qc(1249,`tr`,72)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),Sk(1253,` visible`),vu(1254,`br`),Kg()()(),Qc(1255,`td`,20)(1256,`code`,36),Sk(1257,`boolean `),Kg(),Qc(1258,`code`,58),Sk(1259,` Function`),Kg()(),Qc(1260,`td`,23)(1261,`em`)(1262,`strong`),Sk(1263,`(opcional)`),Kg()(),Qc(1264,`p`),Sk(1265,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(1266,`h4`,73)(1267,`code`,5),Sk(1268,`PoListViewFieldProperties`),Kg()(),Qc(1269,`div`,2)(1270,`p`),Sk(1271,`Mapeia as chaves do objeto dos itens (`),Qc(1272,`code`),Sk(1273,`p-items`),Kg(),Sk(1274,`) para as áreas visuais do componente.`),Kg()(),Qc(1275,`h4`,12),Sk(1276,`Propriedades`),Kg(),Qc(1277,`table`,13)(1278,`tr`,14)(1279,`th`,15),Sk(1280,`Nome`),Kg(),Qc(1281,`th`,15),Sk(1282,`Tipo`),Kg(),Qc(1283,`th`,15),Sk(1284,`Descrição`),Kg()(),Qc(1285,`tr`,74)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),Sk(1289,` avatar`),vu(1290,`br`),Kg()()(),Qc(1291,`td`,20)(1292,`code`,25),Sk(1293,`string`),Kg()(),Qc(1294,`td`,23)(1295,`em`)(1296,`strong`),Sk(1297,`(opcional)`),Kg()(),Qc(1298,`p`),Sk(1299,`Chave correspondente ao avatar do item.`),Kg(),Qc(1300,`p`),Sk(1301,`O valor mapeado suporta quatro formatos distintos:`),Kg(),Qc(1302,`ul`)(1303,`li`)(1304,`strong`),Sk(1305,`String (URL):`),Kg(),Sk(1306,` Renderiza o `),Qc(1307,`code`),Sk(1308,`po-avatar`),Kg(),Sk(1309,` com a imagem especificada.`),Kg()(),Qc(1310,`pre`)(1311,`code`),Sk(1312,`{ avatar: '[https://url-da-imagem.png](https://url-da-imagem.png)' }
`),Kg()(),Qc(1313,`ul`)(1314,`li`)(1315,`strong`),Sk(1316,`Objeto com `),Qc(1317,`code`),Sk(1318,`icon`),Kg(),Sk(1319,`:`),Kg(),Sk(1320,` Renderiza um ícone circular com tamanho fixo. Aceita as seguintes propriedades:`),Qc(1321,`ul`)(1322,`li`)(1323,`code`),Sk(1324,`icon`),Kg(),Sk(1325,` (obrigatória).`),Kg(),Qc(1326,`li`)(1327,`code`),Sk(1328,`color`),Kg(),Sk(1329,` e `),Qc(1330,`code`),Sk(1331,`backgroundColor`),Kg(),Sk(1332,`: aceitam qualquer formato de cor CSS (Hex, RGB, nomes, etc.).`),Kg()()()(),Qc(1333,`pre`)(1334,`code`),Sk(1335,`{ avatar: { icon: 'an an-shield-warning', color: '#dc2626', backgroundColor: '#fee2e2' } }
`),Kg()(),Qc(1336,`ul`)(1337,`li`)(1338,`strong`),Sk(1339,`Objeto com `),Qc(1340,`code`),Sk(1341,`progress`),Kg(),Sk(1342,`:`),Kg(),Sk(1343,` Renderiza o `),Qc(1344,`code`),Sk(1345,`po-progress-circle`),Kg(),Sk(1346,`. Aceita as seguintes propriedades:`),Qc(1347,`ul`)(1348,`li`)(1349,`code`),Sk(1350,`progress`),Kg(),Sk(1351,` (number): Valor de 0 a 100.`),Kg(),Qc(1352,`li`)(1353,`code`),Sk(1354,`indeterminate`),Kg(),Sk(1355,` (boolean): Animação de carregamento contínuo (ignora `),Qc(1356,`code`),Sk(1357,`progress`),Kg(),Sk(1358,`).`),Kg(),Qc(1359,`li`)(1360,`code`),Sk(1361,`showPercentage`),Kg(),Sk(1362,` (boolean): Exibe a porcentagem centralizada.`),Kg(),Qc(1363,`li`)(1364,`code`),Sk(1365,`status`),Kg(),Sk(1366,` (string): `),Qc(1367,`code`),Sk(1368,`'default'`),Kg(),Sk(1369,`, `),Qc(1370,`code`),Sk(1371,`'success'`),Kg(),Sk(1372,` ou `),Qc(1373,`code`),Sk(1374,`'error'`),Kg(),Sk(1375,`.`),Kg(),Qc(1376,`li`)(1377,`code`),Sk(1378,`size`),Kg(),Sk(1379,` (string) e `),Qc(1380,`code`),Sk(1381,`radius`),Kg(),Sk(1382,` (number): `),Qc(1383,`code`),Sk(1384,`'medium'`),Kg(),Sk(1385,`, `),Qc(1386,`code`),Sk(1387,`'large'`),Kg(),Sk(1388,` ou medida exata do raio em `),Qc(1389,`em`),Sk(1390,`pixels`),Kg(),Sk(1391,`.`),Kg(),Qc(1392,`li`)(1393,`code`),Sk(1394,`ariaLabel`),Kg(),Sk(1395,` (string): Rótulo para acessibilidade.`),Kg()()()(),Qc(1396,`pre`)(1397,`code`),Sk(1398,`{ avatar: { progress: 65, showPercentage: true, size: 'large', radius: 40 } }
`),Kg()(),Qc(1399,`ul`)(1400,`li`)(1401,`strong`),Sk(1402,`Objeto com `),Qc(1403,`code`),Sk(1404,`customTemplate`),Kg(),Sk(1405,`:`),Kg(),Sk(1406,` Renderiza um fragmento customizado referenciado via `),Qc(1407,`code`),Sk(1408,`TemplateRef`),Kg(),Sk(1409,`.`),Kg()(),Qc(1410,`pre`)(1411,`code`),Sk(1412,`{ avatar: { customTemplate: myTemplateRef } }
`),Kg()()()(),Qc(1413,`tr`,75)(1414,`td`,17)(1415,`div`,18)(1416,`span`,19),Sk(1417,` highlighted`),vu(1418,`br`),Kg()()(),Qc(1419,`td`,20)(1420,`code`,25),Sk(1421,`string`),Kg()(),Qc(1422,`td`,23)(1423,`em`)(1424,`strong`),Sk(1425,`(opcional)`),Kg()(),Qc(1426,`p`),Sk(1427,`Chave booleana que aplica destaque visual ao item.`),Kg()()(),Qc(1428,`tr`,76)(1429,`td`,17)(1430,`div`,18)(1431,`span`,19),Sk(1432,` link`),vu(1433,`br`),Kg()()(),Qc(1434,`td`,20)(1435,`code`,25),Sk(1436,`string`),Kg()(),Qc(1437,`td`,23)(1438,`em`)(1439,`strong`),Sk(1440,`(opcional)`),Kg()(),Qc(1441,`p`),Sk(1442,`Chave com o `),Qc(1443,`em`),Sk(1444,`link`),Kg(),Sk(1445,` do título do item.`),Kg(),Qc(1446,`blockquote`)(1447,`p`),Sk(1448,`Compatível com a propriedade `),Qc(1449,`code`),Sk(1450,`title`),Kg(),Sk(1451,`. Incompatível com o evento `),Qc(1452,`code`),Sk(1453,`p-item-click`),Kg(),Sk(1454,`.`),Kg()()()(),Qc(1455,`tr`,77)(1456,`td`,17)(1457,`div`,18)(1458,`span`,19),Sk(1459,` subtitle`),vu(1460,`br`),Kg()()(),Qc(1461,`td`,20)(1462,`code`,25),Sk(1463,`string`),Kg()(),Qc(1464,`td`,23)(1465,`em`)(1466,`strong`),Sk(1467,`(opcional)`),Kg()(),Qc(1468,`p`),Sk(1469,`Chave com o subtítulo do item.`),Kg()()(),Qc(1470,`tr`,78)(1471,`td`,17)(1472,`div`,18)(1473,`span`,19),Sk(1474,` tag`),vu(1475,`br`),Kg()()(),Qc(1476,`td`,20)(1477,`code`,79),Sk(1478,`{ value?: string; type?: string;
}`),Kg()(),Qc(1479,`td`,23)(1480,`em`)(1481,`strong`),Sk(1482,`(opcional)`),Kg()(),Qc(1483,`p`),Sk(1484,`Objeto da `),Qc(1485,`code`),Sk(1486,`tag`),Kg(),Sk(1487,` do item.`),Kg(),Qc(1488,`p`),Sk(1489,`Aceita as seguintes propriedades:`),Kg(),Qc(1490,`ul`)(1491,`li`)(1492,`strong`)(1493,`code`),Sk(1494,`value`),Kg()(),Sk(1495,` (string): Chave com o texto da `),Qc(1496,`em`),Sk(1497,`tag`),Kg(),Sk(1498,`.`),Kg(),Qc(1499,`li`)(1500,`strong`)(1501,`code`),Sk(1502,`type`),Kg()(),Sk(1503,` (string): Chave com o tipo da `),Qc(1504,`em`),Sk(1505,`tag`),Kg(),Sk(1506,` (`),Qc(1507,`code`),Sk(1508,`success`),Kg(),Sk(1509,`, `),Qc(1510,`code`),Sk(1511,`warning`),Kg(),Sk(1512,`, `),Qc(1513,`code`),Sk(1514,`danger`),Kg(),Sk(1515,`, `),Qc(1516,`code`),Sk(1517,`info`),Kg(),Sk(1518,`, `),Qc(1519,`code`),Sk(1520,`neutral`),Kg(),Sk(1521,`). Caso não informado, utiliza `),Qc(1522,`code`),Sk(1523,`success`),Kg(),Sk(1524,` como padrão.`),Kg()(),Qc(1525,`pre`)(1526,`code`),Sk(1527,`{ tag: { value: 'status', type: 'statusType' } }
`),Kg()()()(),Qc(1528,`tr`,80)(1529,`td`,17)(1530,`div`,18)(1531,`span`,19),Sk(1532,` title`),vu(1533,`br`),Kg()()(),Qc(1534,`td`,20)(1535,`code`,25),Sk(1536,`string`),Kg()(),Qc(1537,`td`,23)(1538,`em`)(1539,`strong`),Sk(1540,`(opcional)`),Kg()(),Qc(1541,`p`),Sk(1542,`Chave com o título do item.`),Kg()()()(),Qc(1543,`h4`,81)(1544,`code`,5),Sk(1545,`PoListViewLiterals`),Kg()(),Qc(1546,`div`,2)(1547,`p`),Sk(1548,`Interface para definição das literais usadas no `),Qc(1549,`code`),Sk(1550,`po-list-view`),Kg(),Sk(1551,`.`),Kg()(),Qc(1552,`h4`,12),Sk(1553,`Propriedades`),Kg(),Qc(1554,`table`,13)(1555,`tr`,14)(1556,`th`,15),Sk(1557,`Nome`),Kg(),Qc(1558,`th`,15),Sk(1559,`Tipo`),Kg(),Qc(1560,`th`,15),Sk(1561,`Descrição`),Kg()(),Qc(1562,`tr`,82)(1563,`td`,17)(1564,`div`,18)(1565,`span`,19),Sk(1566,` detailModalTitle`),vu(1567,`br`),Kg()()(),Qc(1568,`td`,20)(1569,`code`,25),Sk(1570,`string`),Kg()(),Qc(1571,`td`,23)(1572,`em`)(1573,`strong`),Sk(1574,`(opcional)`),Kg()(),Qc(1575,`p`),Sk(1576,`Título padrão do `),Qc(1577,`code`),Sk(1578,`po-modal`),Kg(),Sk(1579,` de detalhes, exibido quando `),Qc(1580,`code`),Sk(1581,`p-detail-display`),Kg(),Sk(1582,` é `),Qc(1583,`code`),Sk(1584,`modal`),Kg(),Sk(1585,`.`),Kg()()(),Qc(1586,`tr`,83)(1587,`td`,17)(1588,`div`,18)(1589,`span`,19),Sk(1590,` hideDetails`),vu(1591,`br`),Kg()()(),Qc(1592,`td`,20)(1593,`code`,25),Sk(1594,`string`),Kg()(),Qc(1595,`td`,23)(1596,`em`)(1597,`strong`),Sk(1598,`(opcional)`),Kg()(),Qc(1599,`p`),Sk(1600,`Rótulo do botão que oculta os detalhes do item.`),Kg()()(),Qc(1601,`tr`,84)(1602,`td`,17)(1603,`div`,18)(1604,`span`,19),Sk(1605,` loadMoreData`),vu(1606,`br`),Kg()()(),Qc(1607,`td`,20)(1608,`code`,25),Sk(1609,`string`),Kg()(),Qc(1610,`td`,23)(1611,`em`)(1612,`strong`),Sk(1613,`(opcional)`),Kg()(),Qc(1614,`p`),Sk(1615,`Rótulo do botão que deve carregar mais resultados.`),Kg()()(),Qc(1616,`tr`,85)(1617,`td`,17)(1618,`div`,18)(1619,`span`,19),Sk(1620,` noData`),vu(1621,`br`),Kg()()(),Qc(1622,`td`,20)(1623,`code`,25),Sk(1624,`string`),Kg()(),Qc(1625,`td`,23)(1626,`em`)(1627,`strong`),Sk(1628,`(opcional)`),Kg()(),Qc(1629,`p`),Sk(1630,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),Kg()()(),Qc(1631,`tr`,86)(1632,`td`,17)(1633,`div`,18)(1634,`span`,19),Sk(1635,` selectAll`),vu(1636,`br`),Kg()()(),Qc(1637,`td`,20)(1638,`code`,25),Sk(1639,`string`),Kg()(),Qc(1640,`td`,23)(1641,`em`)(1642,`strong`),Sk(1643,`(opcional)`),Kg()(),Qc(1644,`p`),Sk(1645,`Rótulo do `),Qc(1646,`code`),Sk(1647,`checkbox`),Kg(),Sk(1648,` da opção de selecionar todos.`),Kg()()(),Qc(1649,`tr`,87)(1650,`td`,17)(1651,`div`,18)(1652,`span`,19),Sk(1653,` showDetails`),vu(1654,`br`),Kg()()(),Qc(1655,`td`,20)(1656,`code`,25),Sk(1657,`string`),Kg()(),Qc(1658,`td`,23)(1659,`em`)(1660,`strong`),Sk(1661,`(opcional)`),Kg()(),Qc(1662,`p`),Sk(1663,`Rótulo do botão que exibe os detalhes do item.`),Kg()()()(),Qc(1664,`h3`),Sk(1665,`Enums`),Kg(),Qc(1666,`h4`,88)(1667,`code`,5),Sk(1668,`PoListViewDetailDisplay`),Kg()(),Qc(1669,`div`,2)(1670,`p`),Sk(1671,`Define o modo de exibição do detalhe do item do `),Qc(1672,`code`),Sk(1673,`po-list-view`),Kg(),Sk(1674,`, utilizado em conjunto com a
diretiva `),Qc(1675,`a`,7)(1676,`code`),Sk(1677,`p-list-view-detail-template`),Kg()(),Sk(1678,`.`),Kg()(),Qc(1679,`h4`,12),Sk(1680,`Propriedades`),Kg(),Qc(1681,`table`,13)(1682,`tr`,14)(1683,`th`,15),Sk(1684,`Nome`),Kg(),Qc(1685,`th`,15),Sk(1686,`Descrição`),Kg()(),Qc(1687,`tr`,89)(1688,`td`,17)(1689,`div`,18)(1690,`span`,19),Sk(1691,` Inline`),vu(1692,`br`),Kg()()(),Qc(1693,`td`,23)(1694,`p`),Sk(1695,`Expande os detalhes abaixo do item (padrão).`),Kg()()(),Qc(1696,`tr`,90)(1697,`td`,17)(1698,`div`,18)(1699,`span`,19),Sk(1700,` Modal`),vu(1701,`br`),Kg()()(),Qc(1702,`td`,23)(1703,`p`),Sk(1704,`Exibe os detalhes dentro de um `),Qc(1705,`code`),Sk(1706,`po-modal`),Kg(),Sk(1707,`.`),Kg()()()(),Qc(1708,`h3`,91),Sk(1709,`Subcomponentes`),Kg(),Qc(1710,`ul`,92)(1711,`li`)(1712,`a`,93),Sk(1713,`List View Content Template`),Kg()(),Qc(1714,`li`)(1715,`a`,94),Sk(1716,`List View Detail Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ut(a,v){if(a&1){let o=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(o);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-list-view-basic-view`)(2,`sample-po-list-view-field-properties-view`)(3,`sample-po-list-view-labs-view`)(4,`sample-po-list-view-hiring-processes-view`),Kg()}if(a&2){let o=ek();Rb(`p-active`,o.activeTab===`web`)}}var gt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,r){this.route=o,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let r=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ut,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-list-view-doc`),Kg()()()),r&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ke,Oe,He,qe,Be],encapsulation:2,changeDetection:1})}return a})()}];var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(gt),GV]})}return a})();var ti=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Re]})}return a})();export{ti as DocPoListViewModule};