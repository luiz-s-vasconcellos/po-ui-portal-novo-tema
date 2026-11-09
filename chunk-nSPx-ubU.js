import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Aa as qk,Ar as Ig,B as Lze,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,Ga as uF,H as Mze,Hi as ar,Hr as Me,I as Koe,Ia as sk,Ja as vt,Li as ZO,Ln as wae,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Pt as bae,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,Z as Pze,an as j4,at as Sae,bi as Uk,ca as jk,di as RZ,dr as Cu,ea as ge,ei as Ok,eo as xo,er as An,fi as Rb,fr as Db,gi as Tk,hi as TZ,j as I4,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rn as ia,st as Ss,tt as Ru,ui as R,va as nk,vn as oi,wa as p,xi as VO,xr as Gb,ya as nm,yi as U_,zr as Kk,zt as c4}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var Ne=()=>({title:`name`});var We=()=>({name:`Register 1`,email:`register@po-ui.com`});var $e=()=>({name:`Register 2`,email:`register2@po-ui.com`});var Ue=(a,v)=>[a,v];function Ge(a,v){if(a&1&&(Jc(0,`div`,2),_u(1,`po-info`,3),Zg()),a&2){let o=v.$implicit;Ig(),Rb(`p-value`,o.email)}}var Ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-basic`]],standalone:!1,decls:2,vars:8,consts:[[3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[`p-label`,`Email`,1,`po-md-12`,3,`p-value`]],template:function(r,n){r&1&&(Jc(0,`po-list-view`,0),Db(1,Ge,2,1,`ng-template`,1),Zg()),r&2&&Rb(`p-field-properties`,jk(2,Ne))(`p-items`,Uk(5,Ue,jk(3,We),jk(4,$e)))},dependencies:[Joe,Pze,wae],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO List View Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-list-view-basic/sample-po-list-view-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-list-view
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-list-view-basic/sample-po-list-view-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-list-view-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Qe,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();function Ze(a,v){if(a&1&&(Jc(0,`div`,2)(1,`span`,3),Tk(2),Zg()()),a&2){let o=v.$implicit;Ig(2),Gb(o.subtitle)}}var Fe=(()=>{class a{fieldProperties={title:`name`,subtitle:`subtitle`,avatar:`avatar`,tag:{value:`tag`,type:`tagType`}};items=[{name:`Billing report`,subtitle:`5 min ago`,tag:`Completed`,tagType:`success`,avatar:`https://i.pravatar.cc/150?img=1`},{name:`Vacation request`,subtitle:`12 min ago`,tag:`In progress`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=2`},{name:`System update`,subtitle:`30 min ago`,tag:`Warning`,tagType:`warning`,avatar:`https://i.pravatar.cc/150?img=3`}];static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-field-properties`]],standalone:!1,decls:2,vars:2,consts:[[`p-tag-position`,`bottom`,3,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``],[1,`po-row`],[1,`po-font-text-small`]],template:function(r,n){r&1&&(Jc(0,`po-list-view`,0),Db(1,Ze,3,1,`ng-template`,1),Zg()),r&2&&Rb(`p-field-properties`,n.fieldProperties)(`p-items`,n.items)},dependencies:[Pze,wae],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-field-properties-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO List View - Field Properties`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-list-view p-tag-position="bottom" [p-field-properties]="fieldProperties" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <span class="po-font-text-small">{ { item.subtitle }}</span>
    </div>
  </ng-template>
</po-list-view>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-list-view-field-properties/sample-po-list-view-field-properties.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-list-view-field-properties`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Xe,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();function tt(a,v){if(a&1&&(Jc(0,`div`,5),_u(1,`po-info`,31)(2,`po-info`,32)(3,`po-info`,33)(4,`po-info`,34),Zg()),a&2){let o=v.$implicit;Ig(),Rb(`p-value`,o.name),Ig(),Rb(`p-value`,o.email),Ig(),Rb(`p-value`,o.location),Ig(),Rb(`p-value`,o.phone)}}function it(a,v){if(a&1&&(Jc(0,`div`,5),_u(1,`po-info`,35)(2,`po-info`,36),Zg()),a&2){let o=v.$implicit;Ig(),Rb(`p-value`,o.company),Ig(),Rb(`p-value`,o.zipCode)}}var Ie=(()=>{class a{poNotification=p(Ru);action;actions;componentsSize=`medium`;customLiterals;detailDisplay=`inline`;height;items;literals;properties;propertyAvatar;avatarType;propertyHighlighted;propertyLink;propertyLinkValue;propertySubtitle;propertyTag;propertyTagType;propertyTitle;tagPosition=`bottom`;tagTypeValue=``;highlightedValue=`read`;titleAction;propertiesOptions=[{value:`select`,label:`Select`},{value:`singleSelect`,label:`Single Select`},{value:`hideSelectAll`,label:`Hide Select All`,disabled:!0},{value:`showMoreDisabled`,label:`Show More Disabled`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];detailDisplayOptions=[{label:`inline`,value:`inline`},{label:`modal`,value:`modal`}];tagPositionOptions=[{label:`right`,value:`right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-calculator`,label:`fa fa-calculator`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertyTitleOptions=[{value:`none`,label:`None`},{value:`name`,label:`name`},{value:`email`,label:`email`},{value:`phone`,label:`phone`},{value:`location`,label:`location`}];avatarPropertyOptions=[{value:`none`,label:`None`},{value:`image`,label:`Image (URL)`},{value:`icon`,label:`Icon`},{value:`progress`,label:`Progress`},{value:`indeterminate`,label:`Progress (indeterminate)`}];tagTypeValueOptions=[{value:`success`,label:`Success`},{value:`info`,label:`Info`},{value:`danger`,label:`Danger`},{value:`warning`,label:`Warning`},{value:`neutral`,label:`Neutral`}];highlightedValueOptions=[{value:`read`,label:`read`},{value:`unread`,label:`unread`}];typeOptions=[{label:`Default`,value:`default`},{label:`Danger`,value:`danger`}];get fieldProperties(){let o={};return this.isMapped(this.propertyTitle)&&(o.title=this.propertyTitle),this.isMapped(this.propertySubtitle)&&(o.subtitle=this.propertySubtitle),this.isMapped(this.propertyLink)&&(o.link=this.propertyLink),this.isMapped(this.propertyAvatar)&&(o.avatar=this.propertyAvatar),this.isMapped(this.propertyHighlighted)&&(o.highlighted=this.propertyHighlighted),this.isMapped(this.propertyTag)&&(o.tag={value:this.propertyTag,type:this.propertyTagType}),o}isMapped(o){return!!o&&o!==`none`}ngOnInit(){this.restore()}addAction(o){let r=Object.assign({},o),n=r.action;r.action=n?this.showAction.bind(this,n):void 0,this.actions.push(r),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}applyTagType(){this.items=this.items.map(o=>s(r({},o),{tagType:this.tagTypeValue}))}applyHighlighted(){this.propertyHighlighted=`unread`;let o=this.highlightedValue===`unread`;this.items=this.items.map(r$1=>s(r({},r$1),{unread:o}))}applyAvatar(){if(!this.avatarType||this.avatarType===`none`){this.propertyAvatar=``,this.items=this.items.map(o=>s(r({},o),{avatar:void 0}));return}this.propertyAvatar=`avatar`,this.items=this.items.map((o,r$2)=>s(r({},o),{avatar:this.buildAvatarValue(r$2+1)}))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value===`hideSelectAll`?s(r({},o),{disabled:!this.properties.includes(`select`)}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize=`medium`,this.detailDisplay=`inline`,this.tagPosition=`bottom`,this.items=[],this.height=void 0,this.literals=``,this.properties=[],this.propertyAvatar=``,this.avatarType=`none`,this.propertyHighlighted=`unread`,this.propertyLink=`url`,this.propertyLinkValue=``,this.propertySubtitle=`none`,this.propertyTag=`none`,this.propertyTagType=`tagType`,this.propertyTitle=`none`,this.tagTypeValue=`success`,this.highlightedValue=`read`,this.titleAction=``,this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){let r=[`success`,`info`,`warning`,`danger`,`neutral`];return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:`Brazil`,company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`,tag:o%2===0?`Completed`:`In progress`,tagType:this.tagTypeValue||r[o%r.length],subtitle:`${o*5} min ago`,avatar:this.buildAvatarValue(o),unread:this.highlightedValue===`unread`}}buildAvatarValue(o){switch(this.avatarType){case`image`:return`https://i.pravatar.cc/150?img=${o}`;case`icon`:return{icon:`an an-user`,color:`#1a73e8`,backgroundColor:`#e8f0fe`};case`progress`:return{progress:o*15%100,showPercentage:!0,size:`large`,radius:35};case`indeterminate`:return{indeterminate:!0,size:`large`,radius:35};default:return}}restoreActionForm(){this.action={label:``,visible:!0}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-labs`]],standalone:!1,decls:45,vars:51,consts:[[`propertiesForm`,`ngForm`],[`actionForm`,`ngForm`],[3,`p-show-more`,`p-title-action`,`p-actions`,`p-components-size`,`p-detail-display`,`p-field-properties`,`p-height`,`p-hide-select-all`,`p-items`,`p-literals`,`p-select`,`p-single-select`,`p-show-more-disabled`,`p-tag-position`],[`p-list-view-content-template`,``],[`p-list-view-detail-template`,``],[1,`po-row`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Action`,1,`po-md-6`,3,`p-value`],[`p-title`,`Field Properties`,1,`po-md-12`,`po-pb-3`],[`name`,`propertyTitle`,`p-label`,`Property title`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertySubtitle`,`p-clean`,``,`p-label`,`Property subtitle`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`propertyLinkValue`,`p-label`,`Title Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`propertyTag`,`p-clean`,``,`p-label`,`Property tag`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`tagTypeValue`,`p-label`,`Property tag type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`avatarType`,`p-label`,`Property avatar`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`highlightedValue`,`p-label`,`Property highlighted`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "hideDetails": "Hide details", "showDetails": "Show details", "loadMoreData": "Load more", "noData": "No registered items" }`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-9`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`detailDisplay`,`p-label`,`Detail display`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`tagPosition`,`p-label`,`Tag position`,1,`po-md-12`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Actions`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-label`,`Name`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Location`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Phone`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Company`,1,`po-md-6`,`po-lg-3`,3,`p-value`],[`p-label`,`Zip Code`,1,`po-md-6`,`po-lg-3`,3,`p-value`]],template:function(r,n){if(r&1){let m=ZO();Jc(0,`po-list-view`,2),vt(`p-show-more`,function(){return n.showMore()})(`p-title-action`,function(){return n.changeAction(`p-title-action`)}),Db(1,tt,5,4,`ng-template`,3)(2,it,3,2,`ng-template`,4),Zg(),_u(3,`po-divider`),Jc(4,`div`,5)(5,`po-button`,6),vt(`p-click`,function(){return n.addItem()}),Zg()(),_u(6,`po-divider`),Jc(7,`div`,5),_u(8,`po-info`,7),Zg(),_u(9,`po-divider`),Jc(10,`form`,null,0)(12,`po-widget`,8)(13,`div`,5)(14,`po-select`,9),W0(),vt(`ngModelChange`,function(p){return n.propertyTitle=p}),Zg(),Jc(15,`po-select`,10),W0(),vt(`ngModelChange`,function(p){return n.propertySubtitle=p}),Zg(),Jc(16,`po-input`,11),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.propertyLinkValue,p)||(n.propertyLinkValue=p),H_(p)}),Zg(),Jc(17,`po-select`,12),W0(),vt(`ngModelChange`,function(p){return n.propertyTag=p}),Zg(),Jc(18,`po-select`,13),W0(),vt(`ngModelChange`,function(p){return U_(m),n.tagTypeValue=p,H_(n.applyTagType())}),Zg(),Jc(19,`po-select`,14),W0(),vt(`ngModelChange`,function(p){return U_(m),n.avatarType=p,H_(n.applyAvatar())}),Zg(),Jc(20,`po-select`,15),W0(),vt(`ngModelChange`,function(p){return U_(m),n.highlightedValue=p,H_(n.applyHighlighted())}),Zg()()(),Jc(21,`div`,5)(22,`po-number`,16),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.height,p)||(n.height=p),H_(p)}),vt(`p-change`,function(){return n.changeLiterals()}),Zg(),Jc(23,`po-input`,17),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.literals,p)||(n.literals=p),H_(p)}),vt(`p-change`,function(){return n.changeLiterals()}),Zg(),Jc(24,`po-radio-group`,18),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.componentsSize,p)||(n.componentsSize=p),H_(p)}),Zg(),Jc(25,`po-radio-group`,19),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.detailDisplay,p)||(n.detailDisplay=p),H_(p)}),Zg(),Jc(26,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.tagPosition,p)||(n.tagPosition=p),H_(p)}),Zg()(),Jc(27,`div`,5)(28,`po-checkbox-group`,21),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.properties,p)||(n.properties=p),H_(p)}),vt(`p-change`,function(){return n.changeActionOptions()}),Zg()()(),_u(29,`po-divider`),Jc(30,`po-widget`,22)(31,`form`,null,1)(33,`div`,5)(34,`po-input`,23),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.action.label,p)||(n.action.label=p),H_(p)}),Zg(),Jc(35,`po-input`,24),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.action.action,p)||(n.action.action=p),H_(p)}),Zg(),Jc(36,`po-input`,25),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.action.url,p)||(n.action.url=p),H_(p)}),Zg(),Jc(37,`po-select`,26),W0(),vt(`ngModelChange`,function(p){return n.action.type=p}),Zg(),Jc(38,`po-select`,27),W0(),vt(`ngModelChange`,function(p){return n.action.icon=p}),Zg(),Jc(39,`po-checkbox-group`,28),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(n.action,p)||(n.action=p),H_(p)}),Zg()(),Jc(40,`div`,5)(41,`po-button`,29),vt(`p-click`,function(){return n.addAction(n.action)}),Zg()()()(),_u(42,`po-divider`),Jc(43,`div`,5)(44,`po-button`,30),vt(`p-click`,function(){return U_(m),sk(32).reset(),H_(n.restore())}),Zg()()}if(r&2){let m=sk(32);Rb(`p-actions`,n.actions)(`p-components-size`,n.componentsSize)(`p-detail-display`,n.detailDisplay)(`p-field-properties`,n.fieldProperties)(`p-height`,n.height)(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-items`,n.items)(`p-literals`,n.customLiterals)(`p-select`,n.properties.includes(`select`))(`p-single-select`,n.properties.includes(`singleSelect`))(`p-show-more-disabled`,n.properties.includes(`showMoreDisabled`))(`p-tag-position`,n.tagPosition),Ig(8),Rb(`p-value`,n.titleAction),Ig(6),Rb(`ngModel`,n.propertyTitle)(`p-options`,n.propertyTitleOptions),Y0(),Ig(),Rb(`ngModel`,n.propertySubtitle)(`p-options`,n.propertyTitleOptions),Y0(),Ig(),Yb(`ngModel`,n.propertyLinkValue),Y0(),Ig(),Rb(`ngModel`,n.propertyTag)(`p-options`,n.propertyTitleOptions),Y0(),Ig(),Rb(`ngModel`,n.tagTypeValue)(`p-options`,n.tagTypeValueOptions),Y0(),Ig(),Rb(`ngModel`,n.avatarType)(`p-options`,n.avatarPropertyOptions),Y0(),Ig(),Rb(`ngModel`,n.highlightedValue)(`p-options`,n.highlightedValueOptions),Y0(),Ig(2),Yb(`ngModel`,n.height),Y0(),Ig(),Yb(`ngModel`,n.literals),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-columns`,2)(`p-options`,n.componentsSizeOptions),Y0(),Ig(),Yb(`ngModel`,n.detailDisplay),Rb(`p-columns`,2)(`p-options`,n.detailDisplayOptions),Y0(),Ig(),Yb(`ngModel`,n.tagPosition),Rb(`p-columns`,3)(`p-options`,n.tagPositionOptions),Y0(),Ig(2),Yb(`ngModel`,n.properties),Rb(`p-columns`,4)(`p-options`,n.propertiesOptions),Y0(),Ig(6),Yb(`ngModel`,n.action.label),Y0(),Ig(),Yb(`ngModel`,n.action.action),Y0(),Ig(),Yb(`ngModel`,n.action.url),Y0(),Ig(),Rb(`ngModel`,n.action.type)(`p-options`,n.typeOptions),Y0(),Ig(),Rb(`ngModel`,n.action.icon)(`p-options`,n.iconOptions),Y0(),Ig(),Yb(`ngModel`,n.action),Rb(`p-columns`,4)(`p-options`,n.actionOptions),Y0(),Ig(2),Rb(`p-disabled`,m.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Goe,Zte,Koe,Joe,Pze,wae,Sae,bae],encapsulation:2,changeDetection:1})}return a})();var ot=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO List View Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-list-view-labs/sample-po-list-view-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-list-view
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-list-view-labs/sample-po-list-view-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-list-view-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ot,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ie],encapsulation:2,changeDetection:1})}return a})();var Z=(()=>{class a{getItems(){return[{hireStatus:`hired`,hireTagType:`success`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,email:`james@johnson.com`,telephone:`1-541-754-3010`,jobDescription:`Systems Analyst`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=11`},{hireStatus:`progress`,hireTagType:`info`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,email:`brian@brown.com`,telephone:`1-543-456-9876`,jobDescription:`Trainee`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=12`},{hireStatus:`canceled`,hireTagType:`danger`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,email:`mary@davis.com`,telephone:`1-521-223-3232`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=13`},{hireStatus:`progress`,hireTagType:`info`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,email:`margaret@garcia.com`,telephone:`1-541-344-2211`,jobDescription:`Web developer`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=14`},{hireStatus:`hired`,hireTagType:`success`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,email:`emma@hall.com`,telephone:`1-555-321-3234`,jobDescription:`Recruiter`,url:`https://po-ui.io/`,avatar:`https://i.pravatar.cc/150?img=15`},{hireStatus:`progress`,hireTagType:`info`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,email:`lucas@clark.com`,telephone:`1-541-322-4343`,jobDescription:`Consultant`,avatar:`https://i.pravatar.cc/150?img=16`},{hireStatus:`progress`,hireTagType:`info`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,email:`ella@scott.com`,telephone:`1-229-324-3434`,jobDescription:`DBA`,avatar:`https://i.pravatar.cc/150?img=17`},{hireStatus:`progress`,hireTagType:`info`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,email:`chloe@walker.com`,telephone:`1-518-222-1212`,jobDescription:`Programmer`,avatar:`https://i.pravatar.cc/150?img=18`}]}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var lt=[`detailsModal`];function rt(a,v){if(a&1&&(Jc(0,`div`,6),_u(1,`po-info`,14)(2,`po-info`,15)(3,`po-info`,16),qk(4,`uppercase`),Zg()),a&2){let o=v.$implicit;Ig(),Rb(`p-value`,o.idCard),Ig(),Rb(`p-value`,o.jobDescription),Ig(),Rb(`p-value`,Ok(Kk(4,4,o.hireStatus)))}}function st(a,v){if(a&1&&(Jc(0,`div`,6),_u(1,`po-info`,17)(2,`po-info`,18),Zg()),a&2){let o=v.$implicit;Ig(),Rb(`p-value`,o.age),Ig(),Rb(`p-value`,o.city)}}var ze=(()=>{class a{poNotification=p(Ru);hiringProcessesService=p(Z);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter=``;modalDetail=!1;selectedActionItem={};titleDetailsModal=`User Detail`;fieldProperties={title:`name`,subtitle:`jobDescription`,link:`url`,avatar:`avatar`,tag:{value:`hireStatus`,type:`hireTagType`}};actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:`an an-check`},{label:`Cancel`,action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:`danger`,icon:`an an-x`}];pageActions=[{label:`Hire selected`,action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-check`},{label:`Cancel selected`,action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:`an an-x`}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:`Search`};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus=`canceled`,this.poNotification.error(`Canceled candidate!`)}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`)}hiringProcessesFilter(o){let r=typeof o==`string`?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(m=>!(n[m]instanceof Object)&&this.includeFilter(n[m],r)))}includeFilter(o,r){return r.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus===`hired`||o.hireStatus===`canceled`}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(r=>{if(r.$selected){switch(r.hireStatus){case`progress`:o.call(this,r);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}r.$selected=!1}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Cu(lt,7),r&2){let m;No(m=xo())&&(n.detailsModalElement=m.first)}},standalone:!1,features:[Me([Z])],decls:16,vars:12,consts:[[`detailsModal`,``],[`p-title`,`Hiring processes`,3,`p-actions`,`p-filter`],[`p-hide-select-all`,``,`p-select`,``,`p-tag-position`,`bottom`,3,`p-title-action`,`p-actions`,`p-field-properties`,`p-items`],[`p-list-view-content-template`,``,3,`p-title`],[`p-list-view-detail-template`,``,3,`p-show-detail`],[3,`p-title`],[1,`po-row`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,`p-src`,`assets/graphics/avatar2.png`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-1`],[3,`p-value`,`p-type`],[`p-label`,`Email`,3,`p-value`],[`p-label`,`Telephone`,3,`p-value`],[`p-label`,`Id Card`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Job description`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Hire status`,1,`po-lg-4`,3,`p-value`],[`p-label`,`Age`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`]],template:function(r,n){r&1&&(Jc(0,`po-page-list`,1)(1,`po-list-view`,2),vt(`p-title-action`,function(u){return n.showDetailModal(u)}),Db(2,rt,5,6,`ng-template`,3)(3,st,3,2,`ng-template`,4),Zg(),Jc(4,`po-modal`,5,0)(6,`div`,6)(7,`div`,7),_u(8,`po-avatar`,8),Zg(),Jc(9,`div`,9)(10,`div`,10),_u(11,`po-tag`,11),Zg(),Jc(12,`div`,10),_u(13,`po-info`,12),Zg(),Jc(14,`div`,10),_u(15,`po-info`,13),Zg()()()()()),r&2&&(Rb(`p-actions`,n.pageActions)(`p-filter`,n.filterSettings),Ig(),Rb(`p-actions`,n.actions)(`p-field-properties`,n.fieldProperties)(`p-items`,n.hiringProcessesFiltered),Ig(),Rb(`p-title`,n.formatTitle),Ig(),Rb(`p-show-detail`,n.showDetail),Ig(),Rb(`p-title`,n.titleDetailsModal),Ig(7),Rb(`p-value`,n.selectedActionItem.hireStatus)(`p-type`,n.selectedActionItem.hireStatus===`hired`?`success`:`info`),Ig(2),Rb(`p-value`,n.selectedActionItem.email),Ig(2),Rb(`p-value`,n.selectedActionItem.telephone))},dependencies:[c4,Ss,Joe,Pze,wae,Sae,ia,Lze,uF],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO List View - Hiring Processes`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-list-view-hiring-processes`),Zg(),_u(27,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,dt,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-list-view-doc`]],standalone:!1,decls:1708,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-list-view-content-template`],[`href`,`/documentation/po-list-view-detail-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoListViewAction[]`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoListViewDetailDisplay`],[`pan`,``,1,`docs-api-property-type`,`PoListViewFieldProperties`],[`href`,`/documentation/po-list-view#fieldProperties`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoListViewLiterals`],[`href`,`/documentation/po-i18n`],[1,`docs-api-deprecated-marker`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`{`,`value?:`,`string;`,`type?:`,`string;`,`}`]],template:function(r,n){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoListViewModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-list-view`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoListViewComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O componente `),Jc(18,`code`),Tk(19,`po-list-view`),Zg(),Tk(20,` é responsável por renderizar de forma dinâmica uma lista de dados baseada em um `),Jc(21,`em`),Tk(22,`array`),Zg(),Tk(23,` de
objetos, adaptando-se \xE0s necessidades visuais de cada interface.`),Zg(),Jc(24,`p`),Tk(25,`Cada item da lista é construído internamente utilizando a estrutura de um `),Jc(26,`code`),Tk(27,`po-widget`),Zg(),Tk(28,`, assegurando consist\xEAncia visual.
Para layouts complexos, o componente oferece flexibilidade atrav\xE9s das diretivas
de templates `),Jc(29,`strong`)(30,`a`,6),Tk(31,`p-list-view-content-template`),Zg()(),Tk(32,` e
`),Jc(33,`strong`)(34,`a`,7),Tk(35,`p-list-view-detail-template`),Zg()(),Tk(36,` para customiza\xE7\xE3o do conte\xFAdo e exibi\xE7\xE3o
de informa\xE7\xF5es adicionais.`),Zg(),Jc(37,`p`),Tk(38,`A interação com o componente pode ser realizada com o `),Jc(39,`em`),Tk(40,`mouse`),Zg(),Tk(41,` ou pelo teclado. A navega\xE7\xE3o entre os elementos
interativos \xE9 feita utilizando a tecla `),Jc(42,`code`),Tk(43,`TAB`),Zg(),Tk(44,`. Os elementos que recebem foco ao navegar incluem:`),Zg(),Jc(45,`ul`)(46,`li`),Tk(47,`O próprio item (quando a propriedade de clique estiver ativa);`),Zg(),Jc(48,`li`),Tk(49,`Título do item (quando configurado como `),Jc(50,`em`),Tk(51,`link`),Zg(),Tk(52,`);`),Zg(),Jc(53,`li`),Tk(54,`Ações do item configuradas em `),Jc(55,`code`),Tk(56,`p-actions`),Zg(),Tk(57,`;`),Zg(),Jc(58,`li`),Tk(59,`Botão de controle de detalhes (para expandir ou abrir modal);`),Zg(),Jc(60,`li`),Tk(61,`Colunas de seleção (única ou múltipla);`),Zg(),Jc(62,`li`),Tk(63,`Botão de carregar mais resultados (`),Jc(64,`code`),Tk(65,`p-show-more`),Zg(),Tk(66,`).`),Zg()(),Jc(67,`p`),Tk(68,`A execução das ações focadas ou a marcação de itens nas colunas de seleção é realizada com as teclas `),Jc(69,`code`),Tk(70,`Enter`),Zg(),Tk(71,` ou
`),Jc(72,`code`),Tk(73,`Espaço`),Zg(),Tk(74,`.`),Zg(),Jc(75,`h4`),Tk(76,`Tokens customizáveis`),Zg(),Jc(77,`p`),Tk(78,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(79,`blockquote`)(80,`p`),Tk(81,`Para maiores informações, acesse o guia `),Jc(82,`a`,8),Tk(83,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(84,`.`),Zg()(),Jc(85,`table`)(86,`thead`)(87,`tr`)(88,`th`),Tk(89,`Propriedade`),Zg(),Jc(90,`th`),Tk(91,`Descrição`),Zg(),Jc(92,`th`),Tk(93,`Valor Padrão`),Zg()()(),Jc(94,`tbody`)(95,`tr`)(96,`td`)(97,`strong`),Tk(98,`Título`),Zg()(),_u(99,`td`)(100,`td`),Zg(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--title-color`),Zg()(),Jc(105,`td`),Tk(106,`Cor do título do item`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--title-color)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--title-font-family`),Zg()(),Jc(114,`td`),Tk(115,`Família tipográfica do título`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`var(--font-family-theme)`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`--title-font-size`),Zg()(),Jc(123,`td`),Tk(124,`Tamanho da fonte do título`),Zg(),Jc(125,`td`)(126,`code`),Tk(127,`var(--font-size-default)`),Zg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--title-line-height`),Zg()(),Jc(132,`td`),Tk(133,`Altura da linha do título`),Zg(),Jc(134,`td`)(135,`code`),Tk(136,`var(--line-height-md)`),Zg()()(),Jc(137,`tr`)(138,`td`)(139,`code`),Tk(140,`--title-color-hover`),Zg()(),Jc(141,`td`),Tk(142,`Cor do título no estado hover`),Zg(),Jc(143,`td`)(144,`code`),Tk(145,`var(--color-action-hover)`),Zg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--title-color-selected`),Zg()(),Jc(150,`td`),Tk(151,`Cor do título quando o item está selecionado`),Zg(),Jc(152,`td`)(153,`code`),Tk(154,`var(--color-action-focus)`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`strong`),Tk(158,`Subtítulo (Support Message)`),Zg()(),_u(159,`td`)(160,`td`),Zg(),Jc(161,`tr`)(162,`td`)(163,`code`),Tk(164,`--support-message-color`),Zg()(),Jc(165,`td`),Tk(166,`Cor da mensagem de apoio`),Zg(),Jc(167,`td`)(168,`code`),Tk(169,`var(--color-neutral-dark-80)`),Zg()()(),Jc(170,`tr`)(171,`td`)(172,`code`),Tk(173,`--support-message-font-family`),Zg()(),Jc(174,`td`),Tk(175,`Família tipográfica da mensagem de apoio`),Zg(),Jc(176,`td`)(177,`code`),Tk(178,`var(--font-family-theme)`),Zg()()(),Jc(179,`tr`)(180,`td`)(181,`code`),Tk(182,`--support-message-font-size`),Zg()(),Jc(183,`td`),Tk(184,`Tamanho da fonte da mensagem de apoio`),Zg(),Jc(185,`td`)(186,`code`),Tk(187,`var(--font-size-sm)`),Zg()()(),Jc(188,`tr`)(189,`td`)(190,`code`),Tk(191,`--support-message-line-height`),Zg()(),Jc(192,`td`),Tk(193,`Altura da linha da mensagem de apoio`),Zg(),Jc(194,`td`)(195,`code`),Tk(196,`var(--line-height-none)`),Zg()()(),Jc(197,`tr`)(198,`td`)(199,`code`),Tk(200,`--support-message-color-selected`),Zg()(),Jc(201,`td`),Tk(202,`Cor da mensagem de apoio quando o item está selecionado`),Zg(),Jc(203,`td`)(204,`code`),Tk(205,`var(--color-action-focus)`),Zg()()(),Jc(206,`tr`)(207,`td`)(208,`strong`),Tk(209,`Item - Normal`),Zg()(),_u(210,`td`)(211,`td`),Zg(),Jc(212,`tr`)(213,`td`)(214,`code`),Tk(215,`--list-item-background`),Zg()(),Jc(216,`td`),Tk(217,`Cor de fundo do item`),Zg(),Jc(218,`td`)(219,`code`),Tk(220,`var(--list-item-background)`),Zg()()(),Jc(221,`tr`)(222,`td`)(223,`code`),Tk(224,`--list-item-border-color`),Zg()(),Jc(225,`td`),Tk(226,`Cor da borda do item`),Zg(),Jc(227,`td`)(228,`code`),Tk(229,`var(--list-item-border-color)`),Zg()()(),Jc(230,`tr`)(231,`td`)(232,`code`),Tk(233,`--list-item-border-width`),Zg()(),Jc(234,`td`),Tk(235,`Largura da borda do item`),Zg(),Jc(236,`td`)(237,`code`),Tk(238,`var(--border-width-sm)`),Zg()()(),Jc(239,`tr`)(240,`td`)(241,`code`),Tk(242,`--list-item-border-radius`),Zg()(),Jc(243,`td`),Tk(244,`Raio de arredondamento dos cantos do item`),Zg(),Jc(245,`td`)(246,`code`),Tk(247,`var(--border-radius-md)`),Zg()()(),Jc(248,`tr`)(249,`td`)(250,`code`),Tk(251,`--list-item-shadow`),Zg()(),Jc(252,`td`),Tk(253,`Sombra base do item`),Zg(),Jc(254,`td`)(255,`code`),Tk(256,`var(--shadow-md)`),Zg()()(),Jc(257,`tr`)(258,`td`)(259,`strong`),Tk(260,`Item - Selecionado`),Zg()(),_u(261,`td`)(262,`td`),Zg(),Jc(263,`tr`)(264,`td`)(265,`code`),Tk(266,`--list-item-background-selected`),Zg()(),Jc(267,`td`),Tk(268,`Cor de fundo do item selecionado`),Zg(),Jc(269,`td`)(270,`code`),Tk(271,`var(--color-brand-01-lightest)`),Zg()()(),Jc(272,`tr`)(273,`td`)(274,`code`),Tk(275,`--list-item-border-color-selected`),Zg()(),Jc(276,`td`),Tk(277,`Cor da borda do item selecionado`),Zg(),Jc(278,`td`)(279,`code`),Tk(280,`var(--color-action-default)`),Zg()()(),Jc(281,`tr`)(282,`td`)(283,`strong`),Tk(284,`Item - Hover`),Zg()(),_u(285,`td`)(286,`td`),Zg(),Jc(287,`tr`)(288,`td`)(289,`code`),Tk(290,`--list-item-border-color-hover`),Zg()(),Jc(291,`td`),Tk(292,`Cor da borda do item no estado hover`),Zg(),Jc(293,`td`)(294,`code`),Tk(295,`var(--color-action-hover)`),Zg()()(),Jc(296,`tr`)(297,`td`)(298,`code`),Tk(299,`--list-item-shadow-hover`),Zg()(),Jc(300,`td`),Tk(301,`Sombra do item no estado hover`),Zg(),Jc(302,`td`)(303,`code`),Tk(304,`var(--shadow-lg)`),Zg()()(),Jc(305,`tr`)(306,`td`)(307,`strong`),Tk(308,`Item - Focus`),Zg()(),_u(309,`td`)(310,`td`),Zg(),Jc(311,`tr`)(312,`td`)(313,`code`),Tk(314,`--list-item-color-focused`),Zg()(),Jc(315,`td`),Tk(316,`Cor da borda do item no estado focus`),Zg(),Jc(317,`td`)(318,`code`),Tk(319,`var(--color-action-default)`),Zg()()(),Jc(320,`tr`)(321,`td`)(322,`code`),Tk(323,`--list-item-outline-color-focused`),Zg()(),Jc(324,`td`),Tk(325,`Cor do outline do item no estado focus`),Zg(),Jc(326,`td`)(327,`code`),Tk(328,`var(--color-action-focus)`),Zg()()(),Jc(329,`tr`)(330,`td`)(331,`strong`),Tk(332,`Destaque (Highlighted)`),Zg()(),_u(333,`td`)(334,`td`),Zg(),Jc(335,`tr`)(336,`td`)(337,`code`),Tk(338,`--list-item-background-highlighted`),Zg()(),Jc(339,`td`),Tk(340,`Cor de fundo do item destacado`),Zg(),Jc(341,`td`)(342,`code`),Tk(343,`var(--color-brand-01-lightest)`),Zg()()(),Jc(344,`tr`)(345,`td`)(346,`strong`),Tk(347,`Motion`),Zg()(),_u(348,`td`)(349,`td`),Zg(),Jc(350,`tr`)(351,`td`)(352,`code`),Tk(353,`--list-item-transition-duration`),Zg()(),Jc(354,`td`),Tk(355,`Duração da transição do item`),Zg(),Jc(356,`td`)(357,`code`),Tk(358,`var(--duration-normal)`),Zg()()(),Jc(359,`tr`)(360,`td`)(361,`code`),Tk(362,`--list-item-transition-property`),Zg()(),Jc(363,`td`),Tk(364,`Propriedades CSS animadas`),Zg(),Jc(365,`td`)(366,`code`),Tk(367,`all`),Zg()()(),Jc(368,`tr`)(369,`td`)(370,`code`),Tk(371,`--list-item-transition-timing`),Zg()(),Jc(372,`td`),Tk(373,`Curva de aceleração da transição`),Zg(),Jc(374,`td`)(375,`code`),Tk(376,`var(--timing-standard, var(--timing-standart, ease))`),Zg()()()()()(),Jc(377,`div`,9)(378,`h4`,10),Tk(379,`Seletor`),Zg(),Jc(380,`pre`,11),Tk(381,`<po-list-view
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
`),Zg()(),Jc(382,`h4`,12),Tk(383,`Propriedades`),Zg(),Jc(384,`table`,13)(385,`tr`,14)(386,`th`,15),Tk(387,`Nome`),Zg(),Jc(388,`th`,15),Tk(389,`Tipo`),Zg(),Jc(390,`th`,15),Tk(391,`Padrão`),Zg(),Jc(392,`th`,15),Tk(393,`Descrição`),Zg()(),Jc(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),Tk(398,` p-actions`),_u(399,`br`),Zg()()(),Jc(400,`td`,20)(401,`code`,21),Tk(402,`PoListViewAction[]`),Zg()(),Jc(403,`td`,22),Tk(404,`-`),Zg(),Jc(405,`td`,23)(406,`em`)(407,`strong`),Tk(408,`(opcional)`),Zg()(),Jc(409,`p`),Tk(410,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
As propriedades das a\xE7\xF5es seguem a interface `),Jc(411,`code`),Tk(412,`PoPopupAction`),Zg(),Tk(413,`.`),Zg()()(),Jc(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),Tk(418,` p-avatar-size`),_u(419,`br`),Zg()()(),Jc(420,`td`,20)(421,`code`,24),Tk(422,`string`),Zg()(),Jc(423,`td`,22)(424,`p`)(425,`code`),Tk(426,`md`),Zg()()(),Jc(427,`td`,23)(428,`em`)(429,`strong`),Tk(430,`(opcional)`),Zg()(),Jc(431,`p`),Tk(432,`Define o tamanho do avatar do tipo `),Jc(433,`strong`),Tk(434,`imagem`),Zg(),Tk(435,` (URL).`),Zg(),Jc(436,`p`),Tk(437,`Valores válidos:`),Zg(),Jc(438,`ul`)(439,`li`)(440,`code`),Tk(441,`xs`),Zg(),Tk(442,` (24x24)`),Zg(),Jc(443,`li`)(444,`code`),Tk(445,`sm`),Zg(),Tk(446,` (32x32)`),Zg(),Jc(447,`li`)(448,`code`),Tk(449,`md`),Zg(),Tk(450,` (64x64)`),Zg(),Jc(451,`li`)(452,`code`),Tk(453,`lg`),Zg(),Tk(454,` (96x96)`),Zg(),Jc(455,`li`)(456,`code`),Tk(457,`xl`),Zg(),Tk(458,` (144x144)`),Zg()(),Jc(459,`blockquote`)(460,`p`),Tk(461,`Incompatível com os demais tipos de avatar (icon, progress, customTemplate).`),Zg()()()(),Jc(462,`tr`,16)(463,`td`,17)(464,`div`,18)(465,`span`,19),Tk(466,` p-components-size`),_u(467,`br`),Zg()()(),Jc(468,`td`,20)(469,`code`,24),Tk(470,`string`),Zg()(),Jc(471,`td`,22)(472,`p`)(473,`code`),Tk(474,`medium`),Zg()()(),Jc(475,`td`,23)(476,`em`)(477,`strong`),Tk(478,`(opcional)`),Zg()(),Jc(479,`p`),Tk(480,`Define o dimensionamento geral dos elementos no template.`),Zg(),Jc(481,`ul`)(482,`li`)(483,`code`),Tk(484,`small`),Zg(),Tk(485,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(486,`li`)(487,`code`),Tk(488,`medium`),Zg(),Tk(489,`: aplica a medida medium de cada componente.`),Zg()(),Jc(490,`blockquote`)(491,`p`),Tk(492,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(493,`code`),Tk(494,`medium`),Zg(),Tk(495,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(496,`a`,25),Tk(497,`po-theme`),Zg(),Tk(498,`.`),Zg()()()(),Jc(499,`tr`,16)(500,`td`,17)(501,`div`,18)(502,`span`,19),Tk(503,` p-detail-display`),_u(504,`br`),Zg()()(),Jc(505,`td`,20)(506,`code`,26),Tk(507,`PoListViewDetailDisplay`),Zg()(),Jc(508,`td`,22)(509,`p`)(510,`code`),Tk(511,`inline`),Zg()()(),Jc(512,`td`,23)(513,`em`)(514,`strong`),Tk(515,`(opcional)`),Zg()(),Jc(516,`p`),Tk(517,`Define como o detalhe do item (diretiva `),Jc(518,`code`),Tk(519,`p-list-view-detail-template`),Zg(),Tk(520,`) ser\xE1 exibido:
A utiliza\xE7\xE3o desta propriedade renderiza um bot\xE3o de a\xE7\xE3o (como "Exibir detalhes" ou "Ver detalhes") no rodap\xE9 do item
para controlar a visualiza\xE7\xE3o do conte\xFAdo.`),Zg(),Jc(521,`p`),Tk(522,`Valores válidos:`),Zg(),Jc(523,`ul`)(524,`li`)(525,`code`),Tk(526,`inline`),Zg(),Tk(527,`: expande o conteúdo do detalhe abaixo do item.`),Zg(),Jc(528,`li`)(529,`code`),Tk(530,`modal`),Zg(),Tk(531,`: exibe o conteúdo do detalhe no corpo de um `),Jc(532,`code`),Tk(533,`po-modal`),Zg(),Tk(534,`.`),Zg()(),Jc(535,`blockquote`)(536,`p`),Tk(537,`Incompatível com o evento `),Jc(538,`code`),Tk(539,`p-item-click`),Zg(),Tk(540,`.`),Zg()()()(),Jc(541,`tr`,16)(542,`td`,17)(543,`div`,18)(544,`span`,19),Tk(545,` p-field-properties`),_u(546,`br`),Zg()()(),Jc(547,`td`,20)(548,`code`,27),Tk(549,`PoListViewFieldProperties`),Zg()(),Jc(550,`td`,22),Tk(551,`-`),Zg(),Jc(552,`td`,23)(553,`em`)(554,`strong`),Tk(555,`(opcional)`),Zg()(),Jc(556,`p`),Tk(557,`Consolida, em um único objeto tipado (`),Jc(558,`a`,28)(559,`code`),Tk(560,`PoListViewFieldProperties`),Zg()(),Tk(561,`),
o mapeamento entre as propriedades do item e as \xE1reas visuais do componente (t\xEDtulo, subt\xEDtulo,
link, avatar, destaque e tag).`),Zg(),Jc(562,`pre`)(563,`code`),Tk(564,`<po-list-view
  [p-field-properties]="{
    title: 'name',
    subtitle: 'jobDescription',
    link: 'url',
    avatar: 'avatar',
    highlighted: 'unread',
    tag: { value: 'hireStatus', type: 'hireTagType' }
  }">
</po-list-view>
`),Zg()()()(),Jc(565,`tr`,16)(566,`td`,17)(567,`div`,18)(568,`span`,19),Tk(569,` p-height`),_u(570,`br`),Zg()()(),Jc(571,`td`,20)(572,`code`,29),Tk(573,`number`),Zg()(),Jc(574,`td`,22),Tk(575,`-`),Zg(),Jc(576,`td`,23)(577,`em`)(578,`strong`),Tk(579,`(opcional)`),Zg()(),Jc(580,`p`),Tk(581,`Define a altura da lista em `),Jc(582,`em`),Tk(583,`px`),Zg(),Tk(584,`, desconsiderando o espaço do botão `),Jc(585,`code`),Tk(586,`p-show-more`),Zg(),Tk(587,`.`),Zg(),Jc(588,`blockquote`)(589,`p`),Tk(590,`Caso não seja informado valor, a propriedade irá assumir o tamanho do conteúdo.`),Zg()()()(),Jc(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),Tk(595,` p-hide-select-all`),_u(596,`br`),Zg()()(),Jc(597,`td`,20)(598,`code`,30),Tk(599,`boolean`),Zg()(),Jc(600,`td`,22)(601,`p`)(602,`code`),Tk(603,`false`),Zg()()(),Jc(604,`td`,23)(605,`em`)(606,`strong`),Tk(607,`(opcional)`),Zg()(),Jc(608,`p`),Tk(609,`Habilita a seleção de itens na lista.`),Zg(),Jc(610,`p`),Tk(611,`Por padrão, renderiza um `),Jc(612,`em`),Tk(613,`checkbox`),Zg(),Tk(614,` para seleção múltipla. Caso a propriedade `),Jc(615,`code`),Tk(616,`p-single-select`),Zg(),Tk(617,` esteja habilitada,
renderiza um bot\xE3o `),Jc(618,`em`),Tk(619,`radio`),Zg(),Tk(620,` para seleção única.`),Zg(),Jc(621,`p`),Tk(622,`Ao utilizar esta propriedade, todos os itens recebem a propriedade dinâmica `),Jc(623,`code`),Tk(624,`$selected`),Zg(),Tk(625,` para identificar o seu estado
de sele\xE7\xE3o. Por exemplo:`),Zg(),Jc(626,`pre`)(627,`code`),Tk(628,`item.$selected

// ou

item['$selected']
`),Zg()()()(),Jc(629,`tr`,16)(630,`td`,17)(631,`div`,31)(632,`span`,32),Tk(633,` (p-item-click)`),_u(634,`br`),Zg()()(),Jc(635,`td`,20)(636,`code`,33),Tk(637,`EventEmitter`),Zg()(),Jc(638,`td`,22),Tk(639,`-`),Zg(),Jc(640,`td`,23)(641,`em`)(642,`strong`),Tk(643,`(opcional)`),Zg()(),Jc(644,`p`),Tk(645,`A\xE7\xE3o que ser\xE1 executada ao clicar no item da lista. Quando definida, torna o item clic\xE1vel.
Retorna o item da lista clicado.`),Zg(),Jc(646,`blockquote`)(647,`p`),Tk(648,`O evento é desabilitado caso o item possua duas ou mais ações visíveis (`),Jc(649,`code`),Tk(650,`p-actions`),Zg(),Tk(651,`).`),Zg()()()(),Jc(652,`tr`,16)(653,`td`,17)(654,`div`,18)(655,`span`,19),Tk(656,` p-items`),_u(657,`br`),Zg()()(),Jc(658,`td`,20)(659,`code`,34),Tk(660,`any[]`),Zg()(),Jc(661,`td`,22),Tk(662,`-`),Zg(),Jc(663,`td`,23)(664,`p`),Tk(665,`Lista de itens que serão exibidos no componente.`),Zg(),Jc(666,`p`),Tk(667,`A renderização dos dados depende do mapeamento das chaves dos objetos através da propriedade `),Jc(668,`code`),Tk(669,`p-field-properties`),Zg(),Tk(670,`.`),Zg(),Jc(671,`p`),Tk(672,`Exemplo de uso:`),Zg(),Jc(673,`pre`)(674,`code`),Tk(675,`const listItems = [
  { name: 'John Doe', job: 'Developer' },
  { name: 'Jane Smith', job: 'Designer' }
];

const listMapping = {
  title: 'name',
  subtitle: 'job'
};
`),Zg()(),Jc(676,`pre`)(677,`code`),Tk(678,`<po-list-view
  [p-items]="listItems"
  [p-field-properties]="listMapping">
</po-list-view>
`),Zg()()()(),Jc(679,`tr`,16)(680,`td`,17)(681,`div`,18)(682,`span`,19),Tk(683,` p-literals`),_u(684,`br`),Zg()()(),Jc(685,`td`,20)(686,`code`,35),Tk(687,`PoListViewLiterals`),Zg()(),Jc(688,`td`,22),Tk(689,`-`),Zg(),Jc(690,`td`,23)(691,`em`)(692,`strong`),Tk(693,`(opcional)`),Zg()(),Jc(694,`p`),Tk(695,`Objeto com as literais usadas no po-list-view, permitindo personalizar os textos exibidos no componente.`),Zg(),Jc(696,`p`),Tk(697,`Exemplo de uso:`),Zg(),Jc(698,`pre`)(699,`code`),Tk(700,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),Zg()(),Jc(701,`pre`)(702,`code`),Tk(703,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),Zg()(),Jc(704,`blockquote`)(705,`p`),Tk(706,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(707,`a`,36)(708,`code`),Tk(709,`PoI18nService`),Zg()(),Tk(710,` ou do browser.`),Zg()()()(),Jc(711,`tr`,16)(712,`td`,17)(713,`div`,18)(714,`span`,19),Tk(715,` p-property-link`),_u(716,`br`),Zg()(),Jc(717,`div`,37),Tk(718,`Deprecated`),Zg()(),Jc(719,`td`,20)(720,`code`,24),Tk(721,`string`),Zg()(),Jc(722,`td`,22),Tk(723,`-`),Zg(),Jc(724,`td`,23)(725,`em`)(726,`strong`),Tk(727,`(opcional)`),Zg()(),Jc(728,`p`),Tk(729,`Chave do objeto (`),Jc(730,`code`),Tk(731,`p-items`),Zg(),Tk(732,`) com o `),Jc(733,`em`),Tk(734,`link`),Zg(),Tk(735,` do título do item.`),Zg(),Jc(736,`blockquote`)(737,`p`),Tk(738,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Jc(739,`code`),Tk(740,`p-field-properties`),Zg(),Tk(741,`.`),Zg()()()(),Jc(742,`tr`,16)(743,`td`,17)(744,`div`,18)(745,`span`,19),Tk(746,` p-property-title`),_u(747,`br`),Zg()(),Jc(748,`div`,37),Tk(749,`Deprecated`),Zg()(),Jc(750,`td`,20)(751,`code`,24),Tk(752,`string`),Zg()(),Jc(753,`td`,22),Tk(754,`-`),Zg(),Jc(755,`td`,23)(756,`em`)(757,`strong`),Tk(758,`(opcional)`),Zg()(),Jc(759,`p`),Tk(760,`Chave do objeto (`),Jc(761,`code`),Tk(762,`p-items`),Zg(),Tk(763,`) com o título do item.`),Zg(),Jc(764,`blockquote`)(765,`p`),Tk(766,`Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade
`),Jc(767,`code`),Tk(768,`p-field-properties`),Zg(),Tk(769,`.`),Zg()()()(),Jc(770,`tr`,16)(771,`td`,17)(772,`div`,18)(773,`span`,19),Tk(774,` p-select`),_u(775,`br`),Zg()()(),Jc(776,`td`,20)(777,`code`,30),Tk(778,`boolean`),Zg()(),Jc(779,`td`,22)(780,`p`)(781,`code`),Tk(782,`false`),Zg()()(),Jc(783,`td`,23)(784,`em`)(785,`strong`),Tk(786,`(opcional)`),Zg()(),Jc(787,`p`),Tk(788,`Habilita um `),Jc(789,`em`),Tk(790,`checkbox`),Zg(),Tk(791,` para cada item da lista. Todos os items possuem a propriedade dinâmica `),Jc(792,`code`),Tk(793,`$selected`),Zg(),Tk(794,` para
identificar se o item est\xE1 selecionado, por exemplo:`),Zg(),Jc(795,`pre`)(796,`code`),Tk(797,`item.$selected

// ou

item['$selected']
`),Zg()()()(),Jc(798,`tr`,16)(799,`td`,17)(800,`div`,31)(801,`span`,32),Tk(802,` (p-show-detail)`),_u(803,`br`),Zg()()(),Jc(804,`td`,20)(805,`code`,33),Tk(806,`EventEmitter`),Zg()(),Jc(807,`td`,22),Tk(808,`-`),Zg(),Jc(809,`td`,23)(810,`em`)(811,`strong`),Tk(812,`(opcional)`),Zg()(),Jc(813,`p`),Tk(814,`A\xE7\xE3o que ser\xE1 executada ao expandir os detalhes do item.
Retorna o item da lista clicado.`),Zg(),Jc(815,`blockquote`)(816,`p`),Tk(817,`Incompatível com o evento `),Jc(818,`code`),Tk(819,`p-item-click`),Zg(),Tk(820,`.`),Zg()()()(),Jc(821,`tr`,16)(822,`td`,17)(823,`div`,31)(824,`span`,32),Tk(825,` (p-show-more)`),_u(826,`br`),Zg()()(),Jc(827,`td`,20)(828,`code`,33),Tk(829,`EventEmitter`),Zg()(),Jc(830,`td`,22),Tk(831,`-`),Zg(),Jc(832,`td`,23)(833,`em`)(834,`strong`),Tk(835,`(opcional)`),Zg()(),Jc(836,`p`),Tk(837,`Ação executada ao clicar no botão de carregar mais resultados.`),Zg()()(),Jc(838,`tr`,16)(839,`td`,17)(840,`div`,18)(841,`span`,19),Tk(842,` p-show-more-disabled`),_u(843,`br`),Zg()()(),Jc(844,`td`,20)(845,`code`,30),Tk(846,`boolean`),Zg()(),Jc(847,`td`,22),Tk(848,`-`),Zg(),Jc(849,`td`,23)(850,`em`)(851,`strong`),Tk(852,`(opcional)`),Zg()(),Jc(853,`p`),Tk(854,`Indica que o botão `),Jc(855,`em`),Tk(856,`Carregar Mais Resultados`),Zg(),Tk(857,` (`),Jc(858,`code`),Tk(859,`p-show-more`),Zg(),Tk(860,`) será desabilitado.`),Zg()()(),Jc(861,`tr`,16)(862,`td`,17)(863,`div`,18)(864,`span`,19),Tk(865,` p-single-select`),_u(866,`br`),Zg()()(),Jc(867,`td`,20)(868,`code`,30),Tk(869,`boolean`),Zg()(),Jc(870,`td`,22)(871,`p`)(872,`code`),Tk(873,`false`),Zg()()(),Jc(874,`td`,23)(875,`em`)(876,`strong`),Tk(877,`(opcional)`),Zg()(),Jc(878,`p`),Tk(879,`Define que somente um item da lista pode ser selecionado quando a sele\xE7\xE3o estiver habilitada
atrav\xE9s da propriedade `),Jc(880,`code`),Tk(881,`p-select`),Zg(),Tk(882,`.`),Zg(),Jc(883,`blockquote`)(884,`p`),Tk(885,`Quando habilitado, a opção "Selecionar todos" é ocultada.`),Zg()()()(),Jc(886,`tr`,16)(887,`td`,17)(888,`div`,18)(889,`span`,19),Tk(890,` p-tag-position`),_u(891,`br`),Zg()()(),Jc(892,`td`,20)(893,`code`,24),Tk(894,`string`),Zg()(),Jc(895,`td`,22)(896,`p`)(897,`code`),Tk(898,`bottom`),Zg()()(),Jc(899,`td`,23)(900,`em`)(901,`strong`),Tk(902,`(opcional)`),Zg()(),Jc(903,`p`),Tk(904,`Define o posicionamento da `),Jc(905,`em`),Tk(906,`tag`),Zg(),Tk(907,` (`),Jc(908,`code`),Tk(909,`PoListViewFieldProperties.tag.value`),Zg(),Tk(910,`) em relação ao título dentro do item:`),Zg(),Jc(911,`ul`)(912,`li`)(913,`code`),Tk(914,`right`),Zg(),Tk(915,`: ao lado direito do título.`),Zg(),Jc(916,`li`)(917,`code`),Tk(918,`top`),Zg(),Tk(919,`: acima do título.`),Zg(),Jc(920,`li`)(921,`code`),Tk(922,`bottom`),Zg(),Tk(923,`: abaixo do título.`),Zg()()()(),Jc(924,`tr`,16)(925,`td`,17)(926,`div`,31)(927,`span`,32),Tk(928,` (p-title-action)`),_u(929,`br`),Zg()()(),Jc(930,`td`,20)(931,`code`,33),Tk(932,`EventEmitter`),Zg()(),Jc(933,`td`,22),Tk(934,`-`),Zg(),Jc(935,`td`,23)(936,`em`)(937,`strong`),Tk(938,`(opcional)`),Zg()(),Jc(939,`p`),Tk(940,`A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo.
Retorna o item da lista clicado.`),Zg(),Jc(941,`blockquote`)(942,`p`),Tk(943,`Compatível com o título configurado como `),Jc(944,`em`),Tk(945,`link`),Zg(),Tk(946,` (`),Jc(947,`code`),Tk(948,`PoListViewFieldProperties.link`),Zg(),Tk(949,` ou `),Jc(950,`code`),Tk(951,`p-property-link`),Zg(),Tk(952,`):
ao clicar, o evento \xE9 emitido e, havendo `),Jc(953,`em`),Tk(954,`link`),Zg(),Tk(955,`, a navegação também é realizada.`),Zg()(),Jc(956,`blockquote`)(957,`p`),Tk(958,`Incompatível com o evento `),Jc(959,`code`),Tk(960,`p-item-click`),Zg(),Tk(961,`.`),Zg()()()()(),Jc(962,`h3`),Tk(963,`Interfaces`),Zg(),Jc(964,`h4`,38)(965,`code`,5),Tk(966,`PoListViewAction`),Zg()(),Jc(967,`div`,2)(968,`p`),Tk(969,`Interface que define as ações do componente `),Jc(970,`code`),Tk(971,`po-list-view`),Zg(),Tk(972,`.`),Zg(),Jc(973,`blockquote`)(974,`p`),Tk(975,`As propriedades `),Jc(976,`code`),Tk(977,`subItems`),Zg(),Tk(978,`, `),Jc(979,`code`),Tk(980,`separator`),Zg(),Tk(981,`, `),Jc(982,`code`),Tk(983,`url`),Zg(),Tk(984,` e `),Jc(985,`code`),Tk(986,`selected`),Zg(),Tk(987,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),Zg()()(),Jc(988,`h4`,12),Tk(989,`Propriedades`),Zg(),Jc(990,`table`,13)(991,`tr`,14)(992,`th`,15),Tk(993,`Nome`),Zg(),Jc(994,`th`,15),Tk(995,`Tipo`),Zg(),Jc(996,`th`,15),Tk(997,`Descrição`),Zg()(),Jc(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),Tk(1002,` action`),_u(1003,`br`),Zg()()(),Jc(1004,`td`,20)(1005,`code`,39),Tk(1006,`Function`),Zg()(),Jc(1007,`td`,23)(1008,`em`)(1009,`strong`),Tk(1010,`(opcional)`),Zg()(),Jc(1011,`p`),Tk(1012,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(1013,`p`),Tk(1014,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(1015,`code`),Tk(1016,`subItems`),Zg(),Tk(1017,`.`),Zg(),Jc(1018,`blockquote`)(1019,`p`),Tk(1020,`Para que a função seja executada no contexto do componente, utilize `),Jc(1021,`em`),Tk(1022,`bind`),Zg(),Tk(1023,`:
`),Jc(1024,`code`),Tk(1025,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),Tk(1030,` disabled`),_u(1031,`br`),Zg()()(),Jc(1032,`td`,20)(1033,`code`,30),Tk(1034,`boolean `),Zg(),Jc(1035,`code`,39),Tk(1036,` Function`),Zg()(),Jc(1037,`td`,23)(1038,`em`)(1039,`strong`),Tk(1040,`(opcional)`),Zg()(),Jc(1041,`p`),Tk(1042,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(1043,`tr`,16)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),Tk(1047,` icon`),_u(1048,`br`),Zg()()(),Jc(1049,`td`,20)(1050,`code`,24),Tk(1051,`string `),Zg(),Jc(1052,`code`,40),Tk(1053,` TemplateRef<void>`),Zg()(),Jc(1054,`td`,23)(1055,`em`)(1056,`strong`),Tk(1057,`(opcional)`),Zg()(),Jc(1058,`p`),Tk(1059,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(1060,`p`),Tk(1061,`Aceita ícones da `),Jc(1062,`a`,41),Tk(1063,`Biblioteca de ícones`),Zg(),Tk(1064,`, fontes externas (ex: Font Awesome)
ou um `),Jc(1065,`code`),Tk(1066,`TemplateRef`),Zg(),Tk(1067,` para ícones customizados.`),Zg(),Jc(1068,`pre`)(1069,`code`),Tk(1070,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(1071,`tr`,16)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),Tk(1075,` label`),_u(1076,`br`),Zg()()(),Jc(1077,`td`,20)(1078,`code`,24),Tk(1079,`string`),Zg()(),Jc(1080,`td`,23)(1081,`p`),Tk(1082,`Rótulo da ação.`),Zg(),Jc(1083,`p`),Tk(1084,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1085,`code`),Tk(1086,`subItems`),Zg(),Tk(1087,`.`),Zg()()(),Jc(1088,`tr`,16)(1089,`td`,17)(1090,`div`,18)(1091,`span`,19),Tk(1092,` selected`),_u(1093,`br`),Zg()()(),Jc(1094,`td`,20)(1095,`code`,30),Tk(1096,`boolean`),Zg()(),Jc(1097,`td`,23)(1098,`em`)(1099,`strong`),Tk(1100,`(opcional)`),Zg()(),Jc(1101,`p`),Tk(1102,`Define se a ação está selecionada.`),Zg()()(),Jc(1103,`tr`,16)(1104,`td`,17)(1105,`div`,18)(1106,`span`,19),Tk(1107,` separator`),_u(1108,`br`),Zg()()(),Jc(1109,`td`,20)(1110,`code`,30),Tk(1111,`boolean`),Zg()(),Jc(1112,`td`,23)(1113,`em`)(1114,`strong`),Tk(1115,`(opcional)`),Zg()(),Jc(1116,`p`),Tk(1117,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(1118,`tr`,16)(1119,`td`,17)(1120,`div`,18)(1121,`span`,19),Tk(1122,` subItems`),_u(1123,`br`),Zg()()(),Jc(1124,`td`,20)(1125,`code`,42),Tk(1126,`Array<PoPopupAction>`),Zg()(),Jc(1127,`td`,23)(1128,`em`)(1129,`strong`),Tk(1130,`(opcional)`),Zg()(),Jc(1131,`p`),Tk(1132,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(1133,`pre`)(1134,`code`),Tk(1135,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(1136,`p`),Tk(1137,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(1138,`blockquote`)(1139,`p`),Tk(1140,`As propriedades `),Jc(1141,`code`),Tk(1142,`disabled`),Zg(),Tk(1143,`, `),Jc(1144,`code`),Tk(1145,`type`),Zg(),Tk(1146,` e `),Jc(1147,`code`),Tk(1148,`visible`),Zg(),Tk(1149,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(1150,`blockquote`)(1151,`p`),Tk(1152,`Quando `),Jc(1153,`code`),Tk(1154,`url`),Zg(),Tk(1155,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(1156,`blockquote`)(1157,`p`),Tk(1158,`Em subníveis aninhados, o `),Jc(1159,`code`),Tk(1160,`icon`),Zg(),Tk(1161,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(1162,`tr`,16)(1163,`td`,17)(1164,`div`,18)(1165,`span`,19),Tk(1166,` subItemsLazy`),_u(1167,`br`),Zg()()(),Jc(1168,`td`,20)(1169,`code`,43),Tk(1170,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(1171,`td`,23)(1172,`em`)(1173,`strong`),Tk(1174,`(opcional)`),Zg()(),Jc(1175,`p`),Tk(1176,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(1177,`p`),Tk(1178,`Recebe o item agrupador e retorna um `),Jc(1179,`code`),Tk(1180,`Observable<Array<PoPopupAction>>`),Zg(),Tk(1181,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1182,`strong`),Tk(1183,`apenas`),Zg(),Tk(1184,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1185,`code`),Tk(1186,`po-skeleton`),Zg(),Tk(1187,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(1188,`pre`)(1189,`code`),Tk(1190,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(1191,`blockquote`)(1192,`p`),Tk(1193,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(1194,`p`),Tk(1195,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(1196,`tr`,16)(1197,`td`,17)(1198,`div`,18)(1199,`span`,19),Tk(1200,` type`),_u(1201,`br`),Zg()()(),Jc(1202,`td`,20)(1203,`code`,24),Tk(1204,`string`),Zg()(),Jc(1205,`td`,23)(1206,`em`)(1207,`strong`),Tk(1208,`(opcional)`),Zg()(),Jc(1209,`p`),Tk(1210,`Define a cor do item.`),Zg(),Jc(1211,`p`),Tk(1212,`Valores válidos:`),Zg(),Jc(1213,`ul`)(1214,`li`)(1215,`code`),Tk(1216,`default`),Zg()(),Jc(1217,`li`)(1218,`code`),Tk(1219,`danger`),Zg()()()()(),Jc(1220,`tr`,16)(1221,`td`,17)(1222,`div`,18)(1223,`span`,19),Tk(1224,` url`),_u(1225,`br`),Zg()()(),Jc(1226,`td`,20)(1227,`code`,24),Tk(1228,`string`),Zg()(),Jc(1229,`td`,23)(1230,`em`)(1231,`strong`),Tk(1232,`(opcional)`),Zg()(),Jc(1233,`p`),Tk(1234,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(1235,`p`),Tk(1236,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1237,`code`),Tk(1238,`url`),Zg(),Tk(1239,` é informada em um agrupador, o clique `),Jc(1240,`strong`),Tk(1241,`não abrirá os subitens`),Zg(),Tk(1242,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(1243,`blockquote`)(1244,`p`),Tk(1245,`Quando informada, tem prioridade sobre a propriedade `),Jc(1246,`code`),Tk(1247,`action`),Zg(),Tk(1248,`.`),Zg()()()(),Jc(1249,`tr`,16)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),Tk(1253,` visible`),_u(1254,`br`),Zg()()(),Jc(1255,`td`,20)(1256,`code`,30),Tk(1257,`boolean `),Zg(),Jc(1258,`code`,39),Tk(1259,` Function`),Zg()(),Jc(1260,`td`,23)(1261,`em`)(1262,`strong`),Tk(1263,`(opcional)`),Zg()(),Jc(1264,`p`),Tk(1265,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(1266,`h4`,38)(1267,`code`,5),Tk(1268,`PoListViewFieldProperties`),Zg()(),Jc(1269,`div`,2)(1270,`p`),Tk(1271,`Mapeia as chaves do objeto dos itens (`),Jc(1272,`code`),Tk(1273,`p-items`),Zg(),Tk(1274,`) para as áreas visuais do componente.`),Zg()(),Jc(1275,`h4`,12),Tk(1276,`Propriedades`),Zg(),Jc(1277,`table`,13)(1278,`tr`,14)(1279,`th`,15),Tk(1280,`Nome`),Zg(),Jc(1281,`th`,15),Tk(1282,`Tipo`),Zg(),Jc(1283,`th`,15),Tk(1284,`Descrição`),Zg()(),Jc(1285,`tr`,16)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),Tk(1289,` avatar`),_u(1290,`br`),Zg()()(),Jc(1291,`td`,20)(1292,`code`,24),Tk(1293,`string`),Zg()(),Jc(1294,`td`,23)(1295,`em`)(1296,`strong`),Tk(1297,`(opcional)`),Zg()(),Jc(1298,`p`),Tk(1299,`Chave correspondente ao avatar do item.`),Zg(),Jc(1300,`p`),Tk(1301,`O valor mapeado suporta quatro formatos distintos:`),Zg(),Jc(1302,`ul`)(1303,`li`)(1304,`strong`),Tk(1305,`String (URL):`),Zg(),Tk(1306,` Renderiza o `),Jc(1307,`code`),Tk(1308,`po-avatar`),Zg(),Tk(1309,` com a imagem especificada.`),Zg()(),Jc(1310,`pre`)(1311,`code`),Tk(1312,`{ avatar: '[https://url-da-imagem.png](https://url-da-imagem.png)' }
`),Zg()(),Jc(1313,`ul`)(1314,`li`)(1315,`strong`),Tk(1316,`Objeto com `),Jc(1317,`code`),Tk(1318,`icon`),Zg(),Tk(1319,`:`),Zg(),Tk(1320,` Renderiza um ícone circular com tamanho fixo. Aceita as seguintes propriedades:`),Jc(1321,`ul`)(1322,`li`)(1323,`code`),Tk(1324,`icon`),Zg(),Tk(1325,` (obrigatória).`),Zg(),Jc(1326,`li`)(1327,`code`),Tk(1328,`color`),Zg(),Tk(1329,` e `),Jc(1330,`code`),Tk(1331,`backgroundColor`),Zg(),Tk(1332,`: aceitam qualquer formato de cor CSS (Hex, RGB, nomes, etc.).`),Zg()()()(),Jc(1333,`pre`)(1334,`code`),Tk(1335,`{ avatar: { icon: 'an an-shield-warning', color: '#dc2626', backgroundColor: '#fee2e2' } }
`),Zg()(),Jc(1336,`ul`)(1337,`li`)(1338,`strong`),Tk(1339,`Objeto com `),Jc(1340,`code`),Tk(1341,`progress`),Zg(),Tk(1342,`:`),Zg(),Tk(1343,` Renderiza o `),Jc(1344,`code`),Tk(1345,`po-progress-circle`),Zg(),Tk(1346,`. Aceita as seguintes propriedades:`),Jc(1347,`ul`)(1348,`li`)(1349,`code`),Tk(1350,`progress`),Zg(),Tk(1351,` (number): Valor de 0 a 100.`),Zg(),Jc(1352,`li`)(1353,`code`),Tk(1354,`indeterminate`),Zg(),Tk(1355,` (boolean): Animação de carregamento contínuo (ignora `),Jc(1356,`code`),Tk(1357,`progress`),Zg(),Tk(1358,`).`),Zg(),Jc(1359,`li`)(1360,`code`),Tk(1361,`showPercentage`),Zg(),Tk(1362,` (boolean): Exibe a porcentagem centralizada.`),Zg(),Jc(1363,`li`)(1364,`code`),Tk(1365,`status`),Zg(),Tk(1366,` (string): `),Jc(1367,`code`),Tk(1368,`'default'`),Zg(),Tk(1369,`, `),Jc(1370,`code`),Tk(1371,`'success'`),Zg(),Tk(1372,` ou `),Jc(1373,`code`),Tk(1374,`'error'`),Zg(),Tk(1375,`.`),Zg(),Jc(1376,`li`)(1377,`code`),Tk(1378,`size`),Zg(),Tk(1379,` (string) e `),Jc(1380,`code`),Tk(1381,`radius`),Zg(),Tk(1382,` (number): `),Jc(1383,`code`),Tk(1384,`'medium'`),Zg(),Tk(1385,`, `),Jc(1386,`code`),Tk(1387,`'large'`),Zg(),Tk(1388,` ou medida exata do raio em `),Jc(1389,`em`),Tk(1390,`pixels`),Zg(),Tk(1391,`.`),Zg(),Jc(1392,`li`)(1393,`code`),Tk(1394,`ariaLabel`),Zg(),Tk(1395,` (string): Rótulo para acessibilidade.`),Zg()()()(),Jc(1396,`pre`)(1397,`code`),Tk(1398,`{ avatar: { progress: 65, showPercentage: true, size: 'large', radius: 40 } }
`),Zg()(),Jc(1399,`ul`)(1400,`li`)(1401,`strong`),Tk(1402,`Objeto com `),Jc(1403,`code`),Tk(1404,`customTemplate`),Zg(),Tk(1405,`:`),Zg(),Tk(1406,` Renderiza um fragmento customizado referenciado via `),Jc(1407,`code`),Tk(1408,`TemplateRef`),Zg(),Tk(1409,`.`),Zg()(),Jc(1410,`pre`)(1411,`code`),Tk(1412,`{ avatar: { customTemplate: myTemplateRef } }
`),Zg()()()(),Jc(1413,`tr`,16)(1414,`td`,17)(1415,`div`,18)(1416,`span`,19),Tk(1417,` highlighted`),_u(1418,`br`),Zg()()(),Jc(1419,`td`,20)(1420,`code`,24),Tk(1421,`string`),Zg()(),Jc(1422,`td`,23)(1423,`em`)(1424,`strong`),Tk(1425,`(opcional)`),Zg()(),Jc(1426,`p`),Tk(1427,`Chave booleana que aplica destaque visual ao item.`),Zg()()(),Jc(1428,`tr`,16)(1429,`td`,17)(1430,`div`,18)(1431,`span`,19),Tk(1432,` link`),_u(1433,`br`),Zg()()(),Jc(1434,`td`,20)(1435,`code`,24),Tk(1436,`string`),Zg()(),Jc(1437,`td`,23)(1438,`em`)(1439,`strong`),Tk(1440,`(opcional)`),Zg()(),Jc(1441,`p`),Tk(1442,`Chave com o `),Jc(1443,`em`),Tk(1444,`link`),Zg(),Tk(1445,` do título do item.`),Zg(),Jc(1446,`blockquote`)(1447,`p`),Tk(1448,`Compatível com a propriedade `),Jc(1449,`code`),Tk(1450,`title`),Zg(),Tk(1451,`. Incompatível com o evento `),Jc(1452,`code`),Tk(1453,`p-item-click`),Zg(),Tk(1454,`.`),Zg()()()(),Jc(1455,`tr`,16)(1456,`td`,17)(1457,`div`,18)(1458,`span`,19),Tk(1459,` subtitle`),_u(1460,`br`),Zg()()(),Jc(1461,`td`,20)(1462,`code`,24),Tk(1463,`string`),Zg()(),Jc(1464,`td`,23)(1465,`em`)(1466,`strong`),Tk(1467,`(opcional)`),Zg()(),Jc(1468,`p`),Tk(1469,`Chave com o subtítulo do item.`),Zg()()(),Jc(1470,`tr`,16)(1471,`td`,17)(1472,`div`,18)(1473,`span`,19),Tk(1474,` tag`),_u(1475,`br`),Zg()()(),Jc(1476,`td`,20)(1477,`code`,44),Tk(1478,`{ value?: string; type?: string;
}`),Zg()(),Jc(1479,`td`,23)(1480,`em`)(1481,`strong`),Tk(1482,`(opcional)`),Zg()(),Jc(1483,`p`),Tk(1484,`Objeto da `),Jc(1485,`code`),Tk(1486,`tag`),Zg(),Tk(1487,` do item.`),Zg(),Jc(1488,`p`),Tk(1489,`Aceita as seguintes propriedades:`),Zg(),Jc(1490,`ul`)(1491,`li`)(1492,`strong`)(1493,`code`),Tk(1494,`value`),Zg()(),Tk(1495,` (string): Chave com o texto da `),Jc(1496,`em`),Tk(1497,`tag`),Zg(),Tk(1498,`.`),Zg(),Jc(1499,`li`)(1500,`strong`)(1501,`code`),Tk(1502,`type`),Zg()(),Tk(1503,` (string): Chave com o tipo da `),Jc(1504,`em`),Tk(1505,`tag`),Zg(),Tk(1506,` (`),Jc(1507,`code`),Tk(1508,`success`),Zg(),Tk(1509,`, `),Jc(1510,`code`),Tk(1511,`warning`),Zg(),Tk(1512,`, `),Jc(1513,`code`),Tk(1514,`danger`),Zg(),Tk(1515,`, `),Jc(1516,`code`),Tk(1517,`info`),Zg(),Tk(1518,`, `),Jc(1519,`code`),Tk(1520,`neutral`),Zg(),Tk(1521,`). Caso não informado, utiliza `),Jc(1522,`code`),Tk(1523,`success`),Zg(),Tk(1524,` como padrão.`),Zg()(),Jc(1525,`pre`)(1526,`code`),Tk(1527,`{ tag: { value: 'status', type: 'statusType' } }
`),Zg()()()(),Jc(1528,`tr`,16)(1529,`td`,17)(1530,`div`,18)(1531,`span`,19),Tk(1532,` title`),_u(1533,`br`),Zg()()(),Jc(1534,`td`,20)(1535,`code`,24),Tk(1536,`string`),Zg()(),Jc(1537,`td`,23)(1538,`em`)(1539,`strong`),Tk(1540,`(opcional)`),Zg()(),Jc(1541,`p`),Tk(1542,`Chave com o título do item.`),Zg()()()(),Jc(1543,`h4`,38)(1544,`code`,5),Tk(1545,`PoListViewLiterals`),Zg()(),Jc(1546,`div`,2)(1547,`p`),Tk(1548,`Interface para definição das literais usadas no `),Jc(1549,`code`),Tk(1550,`po-list-view`),Zg(),Tk(1551,`.`),Zg()(),Jc(1552,`h4`,12),Tk(1553,`Propriedades`),Zg(),Jc(1554,`table`,13)(1555,`tr`,14)(1556,`th`,15),Tk(1557,`Nome`),Zg(),Jc(1558,`th`,15),Tk(1559,`Tipo`),Zg(),Jc(1560,`th`,15),Tk(1561,`Descrição`),Zg()(),Jc(1562,`tr`,16)(1563,`td`,17)(1564,`div`,18)(1565,`span`,19),Tk(1566,` detailModalTitle`),_u(1567,`br`),Zg()()(),Jc(1568,`td`,20)(1569,`code`,24),Tk(1570,`string`),Zg()(),Jc(1571,`td`,23)(1572,`em`)(1573,`strong`),Tk(1574,`(opcional)`),Zg()(),Jc(1575,`p`),Tk(1576,`Título padrão do `),Jc(1577,`code`),Tk(1578,`po-modal`),Zg(),Tk(1579,` de detalhes, exibido quando `),Jc(1580,`code`),Tk(1581,`p-detail-display`),Zg(),Tk(1582,` é `),Jc(1583,`code`),Tk(1584,`modal`),Zg(),Tk(1585,`.`),Zg()()(),Jc(1586,`tr`,16)(1587,`td`,17)(1588,`div`,18)(1589,`span`,19),Tk(1590,` hideDetails`),_u(1591,`br`),Zg()()(),Jc(1592,`td`,20)(1593,`code`,24),Tk(1594,`string`),Zg()(),Jc(1595,`td`,23)(1596,`em`)(1597,`strong`),Tk(1598,`(opcional)`),Zg()(),Jc(1599,`p`),Tk(1600,`Rótulo do botão que oculta os detalhes do item.`),Zg()()(),Jc(1601,`tr`,16)(1602,`td`,17)(1603,`div`,18)(1604,`span`,19),Tk(1605,` loadMoreData`),_u(1606,`br`),Zg()()(),Jc(1607,`td`,20)(1608,`code`,24),Tk(1609,`string`),Zg()(),Jc(1610,`td`,23)(1611,`em`)(1612,`strong`),Tk(1613,`(opcional)`),Zg()(),Jc(1614,`p`),Tk(1615,`Rótulo do botão que deve carregar mais resultados.`),Zg()()(),Jc(1616,`tr`,16)(1617,`td`,17)(1618,`div`,18)(1619,`span`,19),Tk(1620,` noData`),_u(1621,`br`),Zg()()(),Jc(1622,`td`,20)(1623,`code`,24),Tk(1624,`string`),Zg()(),Jc(1625,`td`,23)(1626,`em`)(1627,`strong`),Tk(1628,`(opcional)`),Zg()(),Jc(1629,`p`),Tk(1630,`Rótulo exibido quando não existem itens para serem exibidos na lista.`),Zg()()(),Jc(1631,`tr`,16)(1632,`td`,17)(1633,`div`,18)(1634,`span`,19),Tk(1635,` selectAll`),_u(1636,`br`),Zg()()(),Jc(1637,`td`,20)(1638,`code`,24),Tk(1639,`string`),Zg()(),Jc(1640,`td`,23)(1641,`em`)(1642,`strong`),Tk(1643,`(opcional)`),Zg()(),Jc(1644,`p`),Tk(1645,`Rótulo do `),Jc(1646,`code`),Tk(1647,`checkbox`),Zg(),Tk(1648,` da opção de selecionar todos.`),Zg()()(),Jc(1649,`tr`,16)(1650,`td`,17)(1651,`div`,18)(1652,`span`,19),Tk(1653,` showDetails`),_u(1654,`br`),Zg()()(),Jc(1655,`td`,20)(1656,`code`,24),Tk(1657,`string`),Zg()(),Jc(1658,`td`,23)(1659,`em`)(1660,`strong`),Tk(1661,`(opcional)`),Zg()(),Jc(1662,`p`),Tk(1663,`Rótulo do botão que exibe os detalhes do item.`),Zg()()()(),Jc(1664,`h3`),Tk(1665,`Enums`),Zg(),Jc(1666,`h4`,4)(1667,`code`,5),Tk(1668,`PoListViewDetailDisplay`),Zg()(),Jc(1669,`div`,2)(1670,`p`),Tk(1671,`Define o modo de exibição do detalhe do item do `),Jc(1672,`code`),Tk(1673,`po-list-view`),Zg(),Tk(1674,`, utilizado em conjunto com a
diretiva `),Jc(1675,`a`,7)(1676,`code`),Tk(1677,`p-list-view-detail-template`),Zg()(),Tk(1678,`.`),Zg()(),Jc(1679,`h4`,12),Tk(1680,`Propriedades`),Zg(),Jc(1681,`table`,13)(1682,`tr`,14)(1683,`th`,15),Tk(1684,`Nome`),Zg(),Jc(1685,`th`,15),Tk(1686,`Descrição`),Zg()(),Jc(1687,`tr`,16)(1688,`td`,17)(1689,`div`,18)(1690,`span`,19),Tk(1691,` Inline`),_u(1692,`br`),Zg()()(),Jc(1693,`td`,23)(1694,`p`),Tk(1695,`Expande os detalhes abaixo do item (padrão).`),Zg()()(),Jc(1696,`tr`,16)(1697,`td`,17)(1698,`div`,18)(1699,`span`,19),Tk(1700,` Modal`),_u(1701,`br`),Zg()()(),Jc(1702,`td`,23)(1703,`p`),Tk(1704,`Exibe os detalhes dentro de um `),Jc(1705,`code`),Tk(1706,`po-modal`),Zg(),Tk(1707,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ut(a,v){if(a&1){let o=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(o);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-list-view-basic-view`)(2,`sample-po-list-view-field-properties-view`)(3,`sample-po-list-view-labs-view`)(4,`sample-po-list-view-hiring-processes-view`),Zg()}if(a&2){let o=nk();Rb(`p-active`,o.activeTab===`web`)}}var gt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,r){this.route=o,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let r=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ut,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-list-view-doc`),Zg()()()),r&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ke,Oe,He,qe,Be],encapsulation:2,changeDetection:1})}return a})()}];var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(gt),WV]})}return a})();var ti=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Re]})}return a})();export{ti as DocPoListViewModule};