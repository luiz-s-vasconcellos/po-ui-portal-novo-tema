import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ao as we$1,ar as An,bi as TZ,bn as oi,bt as Ul,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,pi as R,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wn as q4,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var xe=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(p,i){p&1&&vu(0,`po-page-default`,0)},dependencies:[Mze],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-default-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Default Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-default-basic`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Le,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,xe],encapsulation:2,changeDetection:1})}return o})();var Be=()=>({});function Fe(o,le){if(o&1){let l=YO();Qc(0,`po-input`,37),z0(),Kb(`ngModelChange`,function(i){B_(l);let m=ek(2);return Tk(m.helperFooterLabel,i)||(m.helperFooterLabel=i),U_(i)}),Kg()}if(o&2){let l=ek(2);Yb(`ngModel`,l.helperFooterLabel),W0()}}function Oe(o,le){if(o&1){let l=YO();Qc(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),z0(),Kb(`ngModelChange`,function(i){B_(l);let m=ek();return Tk(m.helperTitle,i)||(m.helperTitle=i),U_(i)}),Kg(),Qc(3,`po-input`,34),z0(),Kb(`ngModelChange`,function(i){B_(l);let m=ek();return Tk(m.helperContent,i)||(m.helperContent=i),U_(i)}),Kg()(),Qc(4,`div`,6)(5,`po-radio-group`,35),z0(),vt(`ngModelChange`,function(i){B_(l);let m=ek();return U_(m.helperType=i)}),Kg()(),Qc(6,`div`,6),FO(7,Fe,1,1,`po-input`,36),Kg()()}if(o&2){let l=ek();wg(2),Yb(`ngModel`,l.helperTitle),W0(),wg(),Yb(`ngModel`,l.helperContent),W0(),wg(2),Rb(`p-columns`,4)(`ngModel`,l.helperType)(`p-options`,l.helperTypeOptions),W0(),wg(2),VO(l.helperType===`help`?7:-1)}}var ye=(()=>{class o{poNotification=p(Ru);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let l={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(l.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),l}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let p=s(r({},l),{visible:l.visible!==void 0?l.visible:!0,disabled:l.disabled!==void 0?l.disabled:!1});p.action=p.action?this.showAction.bind(this,p.action):void 0,this.actions=[...this.actions,p],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=YO();Qc(0,`po-page-default`,5),vt(`p-back`,function(){return i.onBack()}),Kg(),vu(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.title,r)||(i.title=r),U_(r)}),Kg(),Qc(6,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.subtitle,r)||(i.subtitle=r),U_(r)}),Kg(),Qc(7,`po-checkbox`,9),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.showHelper,r)||(i.showHelper=r),U_(r)}),Kg(),Qc(8,`po-checkbox`,10),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.showRefresh,r)||(i.showRefresh=r),U_(r)}),Kg(),FO(9,Oe,8,6,`po-widget`,11),Qc(10,`po-select`,12),z0(),vt(`ngModelChange`,function(r){return i.pageHeaderType=r}),Kg(),Qc(11,`po-select`,13),z0(),vt(`ngModelChange`,function(r){return i.pageActionsLayout=r}),Kg(),Qc(12,`po-input`,14),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.literals,r)||(i.literals=r),U_(r)}),vt(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(13,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.componentsSize,r)||(i.componentsSize=r),U_(r)}),Kg()()(),vu(14,`po-divider`),Qc(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.action.label,r)||(i.action.label=r),U_(r)}),Kg(),Qc(20,`po-input`,18),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.action.action,r)||(i.action.action=r),U_(r)}),Kg(),Qc(21,`po-input`,19),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.action.url,r)||(i.action.url=r),U_(r)}),Kg(),Qc(22,`po-select`,20),z0(),vt(`ngModelChange`,function(r){return i.action.type=r}),Kg(),Qc(23,`po-select`,21),z0(),vt(`ngModelChange`,function(r){return i.action.icon=r}),Kg(),Qc(24,`po-select`,22),z0(),vt(`ngModelChange`,function(r){return i.action.kind=r}),Kg(),Qc(25,`po-checkbox-group`,23),z0(),vt(`ngModelChange`,function(r){return i.action=r}),Kg()(),Qc(26,`div`,6)(27,`po-button`,24),vt(`p-click`,function(){return i.addAction(i.action)}),Kg()()()(),vu(28,`po-divider`),Qc(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.breadcrumb.favorite,r)||(i.breadcrumb.favorite=r),U_(r)}),Kg()()(),Qc(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.breadcrumbItem.label,r)||(i.breadcrumbItem.label=r),U_(r)}),Kg(),Qc(37,`po-input`,27),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.breadcrumbItem.link,r)||(i.breadcrumbItem.link=r),U_(r)}),Kg()(),Qc(38,`div`,6)(39,`po-button`,28),vt(`p-click`,function(){return i.addBreadcrumbItem()}),Kg()()(),vu(40,`po-divider`),Qc(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.breadcrumbParams.property,r)||(i.breadcrumbParams.property=r),U_(r)}),Kg(),Qc(45,`po-input`,30),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.breadcrumbParams.value,r)||(i.breadcrumbParams.value=r),U_(r)}),Kg()(),Qc(46,`div`,6)(47,`po-button`,31),vt(`p-click`,function(){return i.addBreadcrumbParam()}),Kg()()(),vu(48,`po-divider`),Qc(49,`div`,6)(50,`po-button`,32),vt(`p-click`,function(){return i.restore()}),Kg()()}if(p&2){let m=ik(17),c=ik(34),r=ik(42);Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??Lk(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),wg(5),Yb(`ngModel`,i.title),W0(),wg(),Yb(`ngModel`,i.subtitle),W0(),wg(),Yb(`ngModel`,i.showHelper),W0(),wg(),Yb(`ngModel`,i.showRefresh),W0(),wg(),VO(i.showHelper?9:-1),wg(),Rb(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),W0(),wg(),Rb(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),W0(),wg(),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.componentsSize),Rb(`p-columns`,4)(`p-options`,i.componentsSizeOptions),W0(),wg(6),Yb(`ngModel`,i.action.label),W0(),wg(),Yb(`ngModel`,i.action.action),W0(),wg(),Yb(`ngModel`,i.action.url),W0(),wg(),Rb(`ngModel`,i.action.type)(`p-options`,i.typeOptions),W0(),wg(),Rb(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),W0(),wg(),Rb(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),W0(),wg(),Rb(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),W0(),wg(2),Rb(`p-disabled`,m.form.invalid),wg(5),Yb(`ngModel`,i.breadcrumb.favorite),W0(),wg(4),Yb(`ngModel`,i.breadcrumbItem.label),W0(),wg(),Yb(`ngModel`,i.breadcrumbItem.link),W0(),wg(2),Rb(`p-disabled`,c.invalid??!1),wg(5),Yb(`ngModel`,i.breadcrumbParams.property),W0(),wg(),Yb(`ngModel`,i.breadcrumbParams.value),W0(),wg(2),Rb(`p-disabled`,r.invalid??!1)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,Ul,j4,Zte,Koe,Mze,bae],encapsulation:2,changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-default-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Default Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-refresh]="showRefresh ? onRefresh : null"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
    </po-checkbox>

    <po-checkbox class="po-md-6 po-pt-2 po-pb-2" name="showRefresh" [(ngModel)]="showRefresh" p-label="Refresh">
    </po-checkbox>

    @if (showHelper) {
      <po-widget class="po-md-12 po-pb-3" p-title="Helper">
        <div class="po-row">
          <po-input class="po-md-6" name="helperTitle" [(ngModel)]="helperTitle" p-clean p-label="Title"> </po-input>

          <po-input
            class="po-md-6"
            name="helperContent"
            [(ngModel)]="helperContent"
            p-clean
            p-label="Content"
            p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
          >
          </po-input>
        </div>

        <div class="po-row">
          <po-radio-group
            name="helperType"
            class="po-md-12"
            [p-columns]="4"
            p-label="Type"
            [ngModel]="helperType"
            (ngModelChange)="helperType = $event"
            [p-options]="helperTypeOptions"
          >
          </po-radio-group>
        </div>

        <div class="po-row">
          @if (helperType === 'help') {
            <po-input
              class="po-md-6"
              name="helperFooterLabel"
              [(ngModel)]="helperFooterLabel"
              p-clean
              p-label="Footer Action"
            >
            </po-input>
          }
        </div>
      </po-widget>
    }

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [ngModel]="pageHeaderType"
      (ngModelChange)="pageHeaderType = $event"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [ngModel]="pageActionsLayout"
      (ngModelChange)="pageActionsLayout = $event"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      [p-columns]="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<po-widget p-title="Action">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-lg-3 po-md-6"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="kind"
        [ngModel]="action.kind"
        (ngModelChange)="action.kind = $event"
        p-label="Kind"
        [p-options]="actionKindOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [ngModel]="action"
        (ngModelChange)="action = $event"
        [p-columns]="4"
        [p-indeterminate]="true"
        p-label="Properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-2 po-md-4"
        p-label="Add Action"
        [p-disabled]="formAction.form.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider></po-divider>

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid ?? false"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid ?? false"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoHelperOptions,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

interface EditableAction extends PoPageAction {
  visible: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: EditableAction = { label: '', visible: true, disabled: false };
  actions: Array<EditableAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: '', link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  helperContent: string = '';
  helperFooterLabel: string = '';
  helperTitle: string = '';
  helperType: 'help' | 'info' = 'info';
  showHelper: boolean = false;
  showRefresh: boolean = false;

  public readonly helperTypeOptions: Array<PoSelectOption> = [
    { label: 'help', value: 'help' },
    { label: 'info', value: 'info' }
  ];

  get helper(): PoHelperOptions | undefined {
    if (!this.showHelper || !this.helperContent) {
      return undefined;
    }
    const options: PoHelperOptions = {
      title: this.helperTitle,
      content: this.helperContent,
      type: this.helperType
    };
    if (this.helperType === 'help' && this.helperFooterLabel) {
      options.footerAction = {
        label: this.helperFooterLabel,
        action: () => this.poNotification.information('Footer action clicked')
      };
    }
    return options;
  }

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: EditableAction) {
    const newAction: EditableAction = {
      ...action,
      visible: action.visible !== undefined ? action.visible : true,
      disabled: action.disabled !== undefined ? action.disabled : false
    };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: '', link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {
      [this.breadcrumbParams.property || '']: this.breadcrumbParams.value
    };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  onRefresh = (): void => {
    this.poNotification.success('Page refreshed (p-refresh event)');
  };

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: '', link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.helperContent = '';
    this.helperFooterLabel = '';
    this.helperTitle = '';
    this.helperType = 'info';
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.showHelper = false;
    this.showRefresh = false;
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true,
      disabled: false
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-default-labs`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(p){return new(p||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Re=[`formShare`];var Ce=(()=>{class o{poNotification=p(Ru);sampleDashboardService=p(ae);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(p,i){if(p&1&&Du(Re,7)(ia,7),p&2){let m;No(m=xo())&&(i.formShare=m.first),No(m=xo())&&(i.poModal=m.first)}},standalone:!1,features:[we$1([ae])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=YO();Qc(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),Sk(4,`540`),Kg(),Qc(5,`div`,5),Sk(6,`www.po.com.br`),Kg()(),Qc(7,`po-widget`,6)(8,`div`,4),Sk(9,`300 views`),Kg(),Qc(10,`div`,5),Sk(11,`https://po-ui.io`),Kg()(),Qc(12,`po-widget`,7)(13,`div`,4),Sk(14,`Online`),Kg(),Qc(15,`div`,5),Sk(16,`28 days`),Kg()(),Qc(17,`po-widget`,8)(18,`div`,4),Sk(19,`266`),Kg(),Qc(20,`div`,5),Sk(21,`@po-ui/ng-components - 1.10.1`),Kg()(),Qc(22,`po-widget`,9)(23,`div`,4),Sk(24,`800 questions`),Kg(),Qc(25,`div`,5),Sk(26,`https://devforum.po.com.br`),Kg()(),Qc(27,`po-widget`,10)(28,`div`,4),Sk(29,`AngularJS - Angular 6`),Kg(),Qc(30,`div`,5),Sk(31,`Angular 6 most downloaded`),Kg()()(),vu(32,`po-divider`)(33,`po-table`,11),Kg(),Qc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(i.email,r)||(i.email=r),U_(r)}),Kg()()()}p&2&&(Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),wg(33),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),wg(),Rb(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),wg(3),Yb(`ngModel`,i.email),W0())},dependencies:[AZ,MZ,TZ,QL,WL,Nf,p5,ia,Mze,q4,bae],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[`id`,`sample-po-page-default-dashboard`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Default - Dashboard`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default
  p-title="Dashboard"
  p-subtitle="Website analytics overview"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-helper]="helper"
>
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoHelperOptions,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  columns!: Array<PoTableColumn>;
  email: string = '';
  isSubscribed: boolean = false;
  items!: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly helper: PoHelperOptions = {
    title: 'Dashboard Info',
    content: 'View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.',
    type: 'info'
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),Kg()()(),Qc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Sk(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),Kg(),Qc(29,`pre`,11),Sk(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),Kg()()()()(),Qc(31,`div`,12),vu(32,`sample-po-page-default-dashboard`),Kg(),vu(33,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ze,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return o})();var De=(()=>{class o{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(l){this.poNotification=l}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(l=>s(r({},l),{quantity:l.quantity+Math.floor(Math.random()*10),status:this.getStatus(l.quantity+Math.floor(Math.random()*10))}))}getStatus(l){return l===0?`Out of stock`:l<=5?`Low stock`:`Available`}static ɵfac=function(p){return new(p||o)(I(Ru))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0),vu(1,`po-table`,1),Kg()),p&2&&(Rb(`p-refresh`,i.onRefresh),wg(),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[Mze,q4],encapsulation:2})}return o})();var Ue=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-default-refresh`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Default - Refresh`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-refresh',
  templateUrl: './sample-po-page-default-refresh.component.html',
  standalone: false
})
export class SamplePoPageDefaultRefreshComponent implements OnInit {
  columns: Array<PoTableColumn> = [];
  items: Array<any> = [];
  loading: boolean = false;

  private readonly allItems: Array<any> = [
    { id: 1, product: 'Notebook Pro', quantity: 12, price: 4599.9, status: 'Available' },
    { id: 2, product: 'Wireless Mouse', quantity: 85, price: 129.9, status: 'Available' },
    { id: 3, product: 'Mechanical Keyboard', quantity: 34, price: 459.9, status: 'Available' },
    { id: 4, product: 'Monitor 27"', quantity: 7, price: 2199.9, status: 'Low stock' },
    { id: 5, product: 'USB-C Hub', quantity: 0, price: 249.9, status: 'Out of stock' },
    { id: 6, product: 'Webcam HD', quantity: 23, price: 349.9, status: 'Available' },
    { id: 7, product: 'Headset Bluetooth', quantity: 41, price: 599.9, status: 'Available' },
    { id: 8, product: 'External SSD 1TB', quantity: 3, price: 689.9, status: 'Low stock' }
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.loadItems();
  }

  onRefresh = (): void => {
    this.loading = true;

    setTimeout(() => {
      this.refreshItems();
      this.loading = false;
      this.poNotification.success('Inventory data refreshed successfully.');
    }, 1000);
  };

  private getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'ID', width: '60px' },
      { property: 'product', label: 'Product' },
      { property: 'quantity', label: 'Quantity', width: '100px' },
      { property: 'price', label: 'Price', type: 'currency', format: 'BRL', width: '140px' },
      {
        property: 'status',
        label: 'Status',
        type: 'label',
        width: '130px',
        labels: [
          { value: 'Available', color: 'color-10', label: 'Available' },
          { value: 'Low stock', color: 'color-08', label: 'Low stock' },
          { value: 'Out of stock', color: 'color-07', label: 'Out of stock' }
        ]
      }
    ];
  }

  private loadItems(): void {
    this.items = [...this.allItems];
  }

  private refreshItems(): void {
    this.items = this.allItems.map(item => ({
      ...item,
      quantity: item.quantity + Math.floor(Math.random() * 10),
      status: this.getStatus(item.quantity + Math.floor(Math.random() * 10))
    }));
  }

  private getStatus(quantity: number): string {
    if (quantity === 0) {
      return 'Out of stock';
    }
    return quantity <= 5 ? 'Low stock' : 'Available';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-default-refresh`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ue,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1378,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-default-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-back`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-page-actions-layout`,1,`docs-api-properties-row`],[`id`,`prop-p-page-header-type`,1,`docs-api-properties-row`],[`id`,`prop-p-refresh`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-helper-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-helper-options-content`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-event-on-click`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-footer-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`id`,`interface-po-helper-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`id`,`interface-po-page-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-page-action-kind`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-page-default-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-default-literals-other-actions`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout`,1,`docs-api-class-name`],[`id`,`enum-po-page-actions-layout-default`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout-dropdown`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout-mixed`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type`,1,`docs-api-class-name`],[`id`,`enum-po-page-header-type-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type-tertiary`,1,`docs-api-properties-row`]],template:function(p,i){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoPageDefaultComponent`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,`O `),Qc(30,`code`),Sk(31,`po-page-default`),Kg(),Sk(32,` é utilizado como container principal para telas sem um template definido.`),Kg(),Qc(33,`p`),Sk(34,`Oferece suporte a cabeçalhos dinâmicos via `),Qc(35,`code`),Sk(36,`p-page-header-type`),Kg(),Sk(37,`, navegação por `),Qc(38,`em`),Sk(39,`breadcrumb`),Kg(),Sk(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Qc(41,`code`),Sk(42,`p-page-actions-layout`),Kg(),Sk(43,`.`),Kg(),Qc(44,`h4`),Sk(45,`Tokens customizáveis`),Kg(),Qc(46,`blockquote`)(47,`p`),Sk(48,`Para maiores informações, acesse o guia `),Qc(49,`a`,6),Sk(50,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(51,`.`),Kg()(),Qc(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),Sk(56,`Propriedade`),Kg(),Qc(57,`th`),Sk(58,`Descrição`),Kg(),Qc(59,`th`),Sk(60,`Valor Padrão`),Kg()()(),Qc(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),Sk(65,`Página (po-page-default)`),Kg()(),vu(66,`td`)(67,`td`),Kg(),Qc(68,`tr`)(69,`td`)(70,`code`),Sk(71,`--background`),Kg()(),Qc(72,`td`),Sk(73,`Background da página (header e body)`),Kg(),Qc(74,`td`)(75,`code`),Sk(76,`var(--color-page-background-color-page)`),Kg()()(),Qc(77,`tr`)(78,`td`)(79,`strong`),Sk(80,`Header (po-page-header)`),Kg()(),vu(81,`td`)(82,`td`),Kg(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--padding`),Kg()(),Qc(87,`td`),Sk(88,`Espaçamento do header`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--gap`),Kg()(),Qc(96,`td`),Sk(97,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--spacing-md)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--gap-actions`),Kg()(),Qc(105,`td`),Sk(106,`Espaçamento entre as ações`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--spacing-xs)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`strong`),Sk(113,`Header (po-page-header .po-page-header-title)`),Kg()(),vu(114,`td`)(115,`td`),Kg(),Qc(116,`tr`)(117,`td`)(118,`code`),Sk(119,`--font-family`),Kg()(),Qc(120,`td`),Sk(121,`Família tipográfica do título`),Kg(),Qc(122,`td`)(123,`code`),Sk(124,`var(--font-family-theme)`),Kg()()(),Qc(125,`tr`)(126,`td`)(127,`strong`),Sk(128,`Content (po-page-content)`),Kg()(),vu(129,`td`)(130,`td`),Kg(),Qc(131,`tr`)(132,`td`)(133,`code`),Sk(134,`--padding-content`),Kg()(),Qc(135,`td`),Sk(136,`Espaçamento do conteúdo`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(140,`div`,7)(141,`h4`,8),Sk(142,`Seletor`),Kg(),Qc(143,`pre`,9),Sk(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-helper="PoHelperOptions | string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-refresh="Function"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),Kg()(),Qc(145,`h4`,10),Sk(146,`Propriedades`),Kg(),Qc(147,`table`,11)(148,`tr`,12)(149,`th`,13),Sk(150,`Nome`),Kg(),Qc(151,`th`,13),Sk(152,`Tipo`),Kg(),Qc(153,`th`,13),Sk(154,`Padrão`),Kg(),Qc(155,`th`,13),Sk(156,`Descrição`),Kg()(),Qc(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),Sk(161,` p-actions`),vu(162,`br`),Kg()()(),Qc(163,`td`,18)(164,`code`,19),Sk(165,`Array<PoPageAction>`),Kg()(),Qc(166,`td`,20)(167,`p`)(168,`code`),Sk(169,`[]`),Kg()()(),Qc(170,`td`,21)(171,`em`)(172,`strong`),Sk(173,`(opcional)`),Kg()(),Qc(174,`p`),Sk(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),Kg(),Qc(176,`p`),Sk(177,`Recebe um array de objetos que implementam a interface `),Qc(178,`code`),Sk(179,`PoPageAction`),Kg(),Sk(180,`.`),Kg(),Qc(181,`blockquote`)(182,`p`),Sk(183,`O comportamento de exibição pode ser customizado através da propriedade `),Qc(184,`code`),Sk(185,`p-page-actions-layout`),Kg(),Sk(186,`.`),Kg()()()(),Qc(187,`tr`,22)(188,`td`,15)(189,`div`,23)(190,`span`,24),Sk(191,` (p-back)`),vu(192,`br`),Kg()()(),Qc(193,`td`,18)(194,`code`,25),Sk(195,`EventEmitter`),Kg()(),Qc(196,`td`,20),Sk(197,`-`),Kg(),Qc(198,`td`,21)(199,`em`)(200,`strong`),Sk(201,`(opcional)`),Kg()(),Qc(202,`p`),Sk(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),Kg(),Qc(204,`blockquote`)(205,`p`),Sk(206,`Botão exibido apenas quando a propriedade `),Qc(207,`code`),Sk(208,`p-page-header-type`),Kg(),Sk(209,` está configurada como `),Qc(210,`code`),Sk(211,`secondary`),Kg(),Sk(212,`.`),Kg()()()(),Qc(213,`tr`,26)(214,`td`,15)(215,`div`,16)(216,`span`,17),Sk(217,` p-breadcrumb`),vu(218,`br`),Kg()()(),Qc(219,`td`,18)(220,`code`,27),Sk(221,`PoBreadcrumb`),Kg()(),Qc(222,`td`,20),Sk(223,`-`),Kg(),Qc(224,`td`,21)(225,`em`)(226,`strong`),Sk(227,`(opcional)`),Kg()(),Qc(228,`p`),Sk(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),Kg(),Qc(230,`p`),Sk(231,`Recebe um objeto que implementa a interface `),Qc(232,`code`),Sk(233,`PoBreadcrumb`),Kg(),Sk(234,`.`),Kg(),Qc(235,`blockquote`)(236,`p`),Sk(237,`Compatível com o cabeçalho (`),Qc(238,`code`),Sk(239,`p-page-header-type`),Kg(),Sk(240,`) do tipo `),Qc(241,`code`),Sk(242,`primary`),Kg(),Sk(243,`.`),Kg()()()(),Qc(244,`tr`,28)(245,`td`,15)(246,`div`,16)(247,`span`,17),Sk(248,` p-components-size`),vu(249,`br`),Kg()()(),Qc(250,`td`,18)(251,`code`,29),Sk(252,`string`),Kg()(),Qc(253,`td`,20)(254,`p`)(255,`code`),Sk(256,`medium`),Kg()()(),Qc(257,`td`,21)(258,`em`)(259,`strong`),Sk(260,`(opcional)`),Kg()(),Qc(261,`p`),Sk(262,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(263,`ul`)(264,`li`)(265,`code`),Sk(266,`small`),Kg(),Sk(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(268,`li`)(269,`code`),Sk(270,`medium`),Kg(),Sk(271,`: aplica a medida medium de cada componente.`),Kg()(),Qc(272,`blockquote`)(273,`p`),Sk(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(275,`code`),Sk(276,`medium`),Kg(),Sk(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(278,`a`,30),Sk(279,`po-theme`),Kg(),Sk(280,`.`),Kg()()()(),Qc(281,`tr`,31)(282,`td`,15)(283,`div`,16)(284,`span`,17),Sk(285,` p-helper`),vu(286,`br`),Kg()()(),Qc(287,`td`,18)(288,`code`,32),Sk(289,`PoHelperOptions `),Kg(),Qc(290,`code`,29),Sk(291,` string`),Kg()(),Qc(292,`td`,20)(293,`p`)(294,`code`),Sk(295,`info`),Kg()()(),Qc(296,`td`,21)(297,`em`)(298,`strong`),Sk(299,`(opcional)`),Kg()(),Qc(300,`p`),Sk(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),Kg(),Qc(302,`p`),Sk(303,`Quando não houver subtítulo (`),Qc(304,`code`),Sk(305,`p-subtitle`),Kg(),Sk(306,`), o po-helper será exibido logo abaixo do título.`),Kg(),Qc(307,`p`),Sk(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Qc(309,`code`),Sk(310,`PoHelperOptions`),Kg(),Sk(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),Kg(),Qc(312,`p`),Sk(313,`Exemplo de uso:`),Kg(),Qc(314,`pre`)(315,`code`,33),Sk(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),Kg()()()(),Qc(317,`tr`,34)(318,`td`,15)(319,`div`,16)(320,`span`,17),Sk(321,` p-literals`),vu(322,`br`),Kg()()(),Qc(323,`td`,18)(324,`code`,35),Sk(325,`PoPageDefaultLiterals`),Kg()(),Qc(326,`td`,20),Sk(327,`-`),Kg(),Qc(328,`td`,21)(329,`em`)(330,`strong`),Sk(331,`(opcional)`),Kg()(),Qc(332,`p`),Sk(333,`Permite a customização das literais utilizadas no componente.`),Kg(),Qc(334,`p`),Sk(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Qc(336,`code`),Sk(337,`PoPageDefaultLiterals`),Kg(),Sk(338,`.`),Kg(),Qc(339,`p`),Sk(340,`Exemplo de uso:`),Kg(),Qc(341,`pre`)(342,`code`,33),Sk(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),Kg()(),Qc(344,`pre`)(345,`code`,36),Sk(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),Kg()(),Qc(347,`blockquote`)(348,`p`),Sk(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Qc(350,`a`,37)(351,`code`),Sk(352,`PoI18nService`),Kg()(),Sk(353,` ou navegador.`),Kg()()()(),Qc(354,`tr`,38)(355,`td`,15)(356,`div`,16)(357,`span`,17),Sk(358,` p-page-actions-layout`),vu(359,`br`),Kg()()(),Qc(360,`td`,18)(361,`code`,29),Sk(362,`string`),Kg()(),Qc(363,`td`,20)(364,`p`)(365,`code`),Sk(366,`default`),Kg()()(),Qc(367,`td`,21)(368,`em`)(369,`strong`),Sk(370,`(opcional)`),Kg()(),Qc(371,`p`),Sk(372,`Define o layout de exibição das ações no cabeçalho.`),Kg(),Qc(373,`p`),Sk(374,`Aceita valores do enum `),Qc(375,`code`),Sk(376,`PoPageActionsLayout`),Kg(),Sk(377,`.`),Kg(),Qc(378,`blockquote`)(379,`p`),Sk(380,`Em telas reduzidas (< 480px) as ações fora do `),Qc(381,`em`),Sk(382,`dropdown`),Kg(),Sk(383,` que possuam a propriedade `),Qc(384,`code`),Sk(385,`PoPageAction.icon`),Kg(),Sk(386,` definida
exibir\xE3o apenas o \xEDcone.`),Kg()()()(),Qc(387,`tr`,39)(388,`td`,15)(389,`div`,16)(390,`span`,17),Sk(391,` p-page-header-type`),vu(392,`br`),Kg()()(),Qc(393,`td`,18)(394,`code`,29),Sk(395,`string`),Kg()(),Qc(396,`td`,20)(397,`p`)(398,`code`),Sk(399,`primary`),Kg()()(),Qc(400,`td`,21)(401,`em`)(402,`strong`),Sk(403,`(opcional)`),Kg()(),Qc(404,`p`),Sk(405,`Define o tipo de cabeçalho da página.`),Kg(),Qc(406,`p`),Sk(407,`Aceita valores do enum `),Qc(408,`code`),Sk(409,`PoPageHeaderType`),Kg(),Sk(410,`.`),Kg()()(),Qc(411,`tr`,40)(412,`td`,15)(413,`div`,16)(414,`span`,17),Sk(415,` p-refresh`),vu(416,`br`),Kg()()(),Qc(417,`td`,18)(418,`code`,41),Sk(419,`Function`),Kg()(),Qc(420,`td`,20),Sk(421,`-`),Kg(),Qc(422,`td`,21)(423,`em`)(424,`strong`),Sk(425,`(opcional)`),Kg()(),Qc(426,`p`),Sk(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),Kg(),Qc(428,`p`),Sk(429,`Quando não houver subtítulo (`),Qc(430,`code`),Sk(431,`p-subtitle`),Kg(),Sk(432,`), o refresh será exibido logo abaixo do título.`),Kg(),Qc(433,`blockquote`)(434,`p`),Sk(435,`Esta propriedade possui precedência sobre a configuração de `),Qc(436,`code`),Sk(437,`p-helper`),Kg(),Sk(438,`.`),Kg()(),Qc(439,`p`),Sk(440,`Exemplo de uso:`),Kg(),Qc(441,`pre`)(442,`code`,33),Sk(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),Kg()()()(),Qc(444,`tr`,42)(445,`td`,15)(446,`div`,16)(447,`span`,17),Sk(448,` p-subtitle`),vu(449,`br`),Kg()()(),Qc(450,`td`,18)(451,`code`,29),Sk(452,`string`),Kg()(),Qc(453,`td`,20),Sk(454,`-`),Kg(),Qc(455,`td`,21)(456,`em`)(457,`strong`),Sk(458,`(opcional)`),Kg()(),Qc(459,`p`),Sk(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),Kg(),Qc(461,`p`),Sk(462,`Suporta formatação básica com as tags `),Qc(463,`code`),Sk(464,`<b>`),Kg(),Sk(465,` (negrito), `),Qc(466,`code`),Sk(467,`<strong>`),Kg(),Sk(468,` (negrito), `),Qc(469,`code`),Sk(470,`<i>`),Kg(),Sk(471,` (itálico), `),Qc(472,`code`),Sk(473,`<em>`),Kg(),Sk(474,` (it\xE1lico) e
`),Qc(475,`code`),Sk(476,`<u>`),Kg(),Sk(477,` (sublinhado).`),Kg(),Qc(478,`p`),Sk(479,`Exemplo:`),Kg(),Qc(480,`pre`)(481,`code`,36),Sk(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),Kg()(),Qc(483,`blockquote`)(484,`p`),Sk(485,`Requer que `),Qc(486,`code`),Sk(487,`p-title`),Kg(),Sk(488,` esteja definido.`),Kg()()()(),Qc(489,`tr`,43)(490,`td`,15)(491,`div`,16)(492,`span`,17),Sk(493,` p-title`),vu(494,`br`),Kg()()(),Qc(495,`td`,18)(496,`code`,29),Sk(497,`string`),Kg()(),Qc(498,`td`,20),Sk(499,`-`),Kg(),Qc(500,`td`,21)(501,`em`)(502,`strong`),Sk(503,`(opcional)`),Kg()(),Qc(504,`p`),Sk(505,`Define o título principal da página.`),Kg()()()(),Qc(506,`h3`),Sk(507,`Interfaces`),Kg(),Qc(508,`h4`,44)(509,`code`,5),Sk(510,`PoBreadcrumbItem`),Kg()(),Qc(511,`div`,2)(512,`p`),Sk(513,`Interface que define cada item do componente `),Qc(514,`strong`),Sk(515,`po-breadcrumb`),Kg(),Sk(516,`.`),Kg()(),Qc(517,`h4`,10),Sk(518,`Propriedades`),Kg(),Qc(519,`table`,11)(520,`tr`,12)(521,`th`,13),Sk(522,`Nome`),Kg(),Qc(523,`th`,13),Sk(524,`Tipo`),Kg(),Qc(525,`th`,13),Sk(526,`Descrição`),Kg()(),Qc(527,`tr`,45)(528,`td`,15)(529,`div`,16)(530,`span`,17),Sk(531,` action`),vu(532,`br`),Kg()()(),Qc(533,`td`,18)(534,`code`,41),Sk(535,`Function`),Kg()(),Qc(536,`td`,21)(537,`em`)(538,`strong`),Sk(539,`(opcional)`),Kg()(),Qc(540,`p`),Sk(541,`Ação executada ao clicar no item.`),Kg(),Qc(542,`blockquote`)(543,`p`),Sk(544,`A função atribuída a esta propriedade receberá o `),Qc(545,`em`),Sk(546,`label`),Kg(),Sk(547,` do item como parâmetro para execução.`),Kg()()()(),Qc(548,`tr`,46)(549,`td`,15)(550,`div`,16)(551,`span`,17),Sk(552,` label`),vu(553,`br`),Kg()()(),Qc(554,`td`,18)(555,`code`,29),Sk(556,`string`),Kg()(),Qc(557,`td`,21)(558,`p`),Sk(559,`Rótulo do item.`),Kg()()(),Qc(560,`tr`,47)(561,`td`,15)(562,`div`,16)(563,`span`,17),Sk(564,` link`),vu(565,`br`),Kg()()(),Qc(566,`td`,18)(567,`code`,29),Sk(568,`string`),Kg()(),Qc(569,`td`,21)(570,`em`)(571,`strong`),Sk(572,`(opcional)`),Kg()(),Qc(573,`p`),Sk(574,`Url do item.`),Kg(),Qc(575,`blockquote`)(576,`p`),Sk(577,`Caso o item também contenha uma `),Qc(578,`em`),Sk(579,`action`),Kg(),Sk(580,` definida, a preferência de execução será do `),Qc(581,`em`),Sk(582,`link`),Kg(),Sk(583,`.`),Kg()(),Qc(584,`blockquote`)(585,`p`),Sk(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Qc(587,`strong`)(588,`a`,48),Sk(589,`Veja um exemplo de como criar rotas aqui`),Kg()(),Sk(590,`.`),Kg()(),Qc(591,`blockquote`)(592,`p`),Sk(593,`Esta propriedade é necessária para que a propriedade `),Qc(594,`code`),Sk(595,`p-favorite-service`),Kg(),Sk(596,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Qc(597,`h4`,49)(598,`code`,5),Sk(599,`PoBreadcrumb`),Kg()(),Qc(600,`div`,2)(601,`p`),Sk(602,`Interface que define o `),Qc(603,`code`),Sk(604,`po-breadcrumb`),Kg(),Sk(605,`.`),Kg()(),Qc(606,`h4`,10),Sk(607,`Propriedades`),Kg(),Qc(608,`table`,11)(609,`tr`,12)(610,`th`,13),Sk(611,`Nome`),Kg(),Qc(612,`th`,13),Sk(613,`Tipo`),Kg(),Qc(614,`th`,13),Sk(615,`Descrição`),Kg()(),Qc(616,`tr`,50)(617,`td`,15)(618,`div`,16)(619,`span`,17),Sk(620,` favorite`),vu(621,`br`),Kg()()(),Qc(622,`td`,18)(623,`code`,29),Sk(624,`string`),Kg()(),Qc(625,`td`,21)(626,`em`)(627,`strong`),Sk(628,`(opcional)`),Kg()(),Qc(629,`p`),Sk(630,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Qc(631,`blockquote`)(632,`p`),Sk(633,`Para maiores informações verificar a propriedade `),Qc(634,`code`),Sk(635,`p-favorite-service`),Kg(),Sk(636,` do componente `),Qc(637,`code`),Sk(638,`po-breadcrumb`),Kg(),Sk(639,`.`),Kg()()()(),Qc(640,`tr`,51)(641,`td`,15)(642,`div`,16)(643,`span`,17),Sk(644,` items`),vu(645,`br`),Kg()()(),Qc(646,`td`,18)(647,`code`,52),Sk(648,`Array<PoBreadcrumbItem>`),Kg()(),Qc(649,`td`,21)(650,`p`),Sk(651,`Lista de itens do `),Qc(652,`em`),Sk(653,`breadcrumb`),Kg(),Sk(654,`.`),Kg(),Qc(655,`p`)(656,`strong`),Sk(657,`Exemplo:`),Kg()(),Qc(658,`pre`)(659,`code`),Sk(660,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Qc(661,`tr`,53)(662,`td`,15)(663,`div`,16)(664,`span`,17),Sk(665,` params`),vu(666,`br`),Kg()()(),Qc(667,`td`,18)(668,`code`,54),Sk(669,`object`),Kg()(),Qc(670,`td`,21)(671,`em`)(672,`strong`),Sk(673,`(opcional)`),Kg()(),Qc(674,`p`),Sk(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Qc(676,`h4`,55)(677,`code`,5),Sk(678,`PoHelperOptions`),Kg()(),Qc(679,`div`,2)(680,`p`),Sk(681,`Interface para configuração das opções de ajuda (`),Qc(682,`em`),Sk(683,`helper`),Kg(),Sk(684,`).`),Kg()(),Qc(685,`h4`,10),Sk(686,`Propriedades`),Kg(),Qc(687,`table`,11)(688,`tr`,12)(689,`th`,13),Sk(690,`Nome`),Kg(),Qc(691,`th`,13),Sk(692,`Tipo`),Kg(),Qc(693,`th`,13),Sk(694,`Descrição`),Kg()(),Qc(695,`tr`,56)(696,`td`,15)(697,`div`,16)(698,`span`,17),Sk(699,` content`),vu(700,`br`),Kg()()(),Qc(701,`td`,18)(702,`code`,29),Sk(703,`string`),Kg()(),Qc(704,`td`,21)(705,`em`)(706,`strong`),Sk(707,`(opcional)`),Kg()(),Qc(708,`p`),Sk(709,`Texto explicativo exibido no popover.`),Kg(),Qc(710,`p`),Sk(711,`Suporta formatação básica com as tags `),Qc(712,`code`),Sk(713,`<b>`),Kg(),Sk(714,` (negrito), `),Qc(715,`code`),Sk(716,`<strong>`),Kg(),Sk(717,` (negrito), `),Qc(718,`code`),Sk(719,`<i>`),Kg(),Sk(720,` (itálico), `),Qc(721,`code`),Sk(722,`<em>`),Kg(),Sk(723,` (it\xE1lico) e
`),Qc(724,`code`),Sk(725,`<u>`),Kg(),Sk(726,` (sublinhado).`),Kg(),Qc(727,`p`),Sk(728,`Exemplo:`),Kg(),Qc(729,`pre`)(730,`code`,36),Sk(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Kg()()()(),Qc(732,`tr`,57)(733,`td`,15)(734,`div`,16)(735,`span`,17),Sk(736,` eventOnClick`),vu(737,`br`),Kg()()(),Qc(738,`td`,18)(739,`code`,41),Sk(740,`Function`),Kg()(),Qc(741,`td`,21)(742,`em`)(743,`strong`),Sk(744,`(opcional)`),Kg()(),Qc(745,`p`),Sk(746,`Evento disparado ao clicar no ícone do helper.`),Kg(),Qc(747,`p`),Sk(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Kg(),Qc(749,`p`),Sk(750,`Pode ser uma função ou um `),Qc(751,`code`),Sk(752,`EventEmitter`),Kg(),Sk(753,`.`),Kg(),Qc(754,`p`),Sk(755,`Exemplo:`),Kg(),Qc(756,`pre`)(757,`code`),Sk(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Kg()()()(),Qc(759,`tr`,58)(760,`td`,15)(761,`div`,16)(762,`span`,17),Sk(763,` footerAction`),vu(764,`br`),Kg()()(),Qc(765,`td`,18)(766,`code`,59),Sk(767,`{ label: string; action: Function;
}`),Kg()(),Qc(768,`td`,21)(769,`em`)(770,`strong`),Sk(771,`(opcional)`),Kg()(),Qc(772,`p`),Sk(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Qc(774,`code`),Sk(775,`help`),Kg(),Sk(776,` e desconsiderada quando o type for `),Qc(777,`code`),Sk(778,`info`),Kg(),Sk(779,`.`),Kg(),Qc(780,`p`),Sk(781,`Deve ser um objeto com as propriedades:`),Kg(),Qc(782,`ul`)(783,`li`)(784,`code`),Sk(785,`label`),Kg(),Sk(786,`: Texto do botão.`),Kg(),Qc(787,`li`)(788,`code`),Sk(789,`action`),Kg(),Sk(790,`: Função executada ao clicar no botão.`),Kg()(),Qc(791,`p`),Sk(792,`Exemplo:`),Kg(),Qc(793,`pre`)(794,`code`,36),Sk(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Kg()()()(),Qc(796,`tr`,60)(797,`td`,15)(798,`div`,16)(799,`span`,17),Sk(800,` title`),vu(801,`br`),Kg()()(),Qc(802,`td`,18)(803,`code`,29),Sk(804,`string`),Kg()(),Qc(805,`td`,21)(806,`em`)(807,`strong`),Sk(808,`(opcional)`),Kg()(),Qc(809,`p`),Sk(810,`Título do helper exibido no popover.`),Kg()()(),Qc(811,`tr`,61)(812,`td`,15)(813,`div`,16)(814,`span`,17),Sk(815,` type`),vu(816,`br`),Kg()()(),Qc(817,`td`,18)(818,`code`,62),Sk(819,`'info' `),Kg(),Qc(820,`code`,63),Sk(821,` 'help'`),Kg()(),Qc(822,`td`,21)(823,`em`)(824,`strong`),Sk(825,`(opcional)`),Kg()(),Qc(826,`p`),Sk(827,`Tipo do ícone exibido: `),Qc(828,`code`),Sk(829,`info`),Kg(),Sk(830,` ou `),Qc(831,`code`),Sk(832,`help`),Kg(),Sk(833,`.`),Kg(),Qc(834,`p`),Sk(835,`Quando o valor é `),Qc(836,`code`),Sk(837,`info`),Kg(),Sk(838,`, o popover exibe apenas informações e não permite ações customizadas.`),Kg(),Qc(839,`p`),Sk(840,`Quando o valor é `),Qc(841,`code`),Sk(842,`help`),Kg(),Sk(843,`, o popover pode exibir ações customizadas no rodapé.`),Kg()()()(),Qc(844,`h4`,64)(845,`code`,5),Sk(846,`PoPageAction`),Kg()(),Qc(847,`div`,2)(848,`p`),Sk(849,`Interface para as ações dos componentes `),Qc(850,`code`),Sk(851,`po-page-default`),Kg(),Sk(852,` e `),Qc(853,`code`),Sk(854,`po-page-list`),Kg(),Sk(855,`.`),Kg(),Qc(856,`p`),Sk(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Qc(858,`em`),Sk(859,`dropdown`),Kg(),Sk(860,`,
conforme o `),Qc(861,`code`),Sk(862,`PoPageActionsLayout`),Kg(),Sk(863,` e o tamanho da tela.`),Kg(),Qc(864,`blockquote`)(865,`p`),Sk(866,`As propriedades `),Qc(867,`code`),Sk(868,`separator`),Kg(),Sk(869,`, `),Qc(870,`code`),Sk(871,`selected`),Kg(),Sk(872,` e `),Qc(873,`code`),Sk(874,`subItems`),Kg(),Sk(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Qc(876,`em`),Sk(877,`dropdown`),Kg(),Sk(878,`.`),Kg()()(),Qc(879,`h4`,10),Sk(880,`Propriedades`),Kg(),Qc(881,`table`,11)(882,`tr`,12)(883,`th`,13),Sk(884,`Nome`),Kg(),Qc(885,`th`,13),Sk(886,`Tipo`),Kg(),Qc(887,`th`,13),Sk(888,`Descrição`),Kg()(),Qc(889,`tr`,65)(890,`td`,15)(891,`div`,16)(892,`span`,17),Sk(893,` action`),vu(894,`br`),Kg()()(),Qc(895,`td`,18)(896,`code`,41),Sk(897,`Function`),Kg()(),Qc(898,`td`,21)(899,`em`)(900,`strong`),Sk(901,`(opcional)`),Kg()(),Qc(902,`p`),Sk(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(904,`p`),Sk(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(906,`code`),Sk(907,`subItems`),Kg(),Sk(908,`.`),Kg(),Qc(909,`blockquote`)(910,`p`),Sk(911,`Para que a função seja executada no contexto do componente, utilize `),Qc(912,`em`),Sk(913,`bind`),Kg(),Sk(914,`:
`),Qc(915,`code`),Sk(916,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(917,`tr`,66)(918,`td`,15)(919,`div`,16)(920,`span`,17),Sk(921,` disabled`),vu(922,`br`),Kg()()(),Qc(923,`td`,18)(924,`code`,67),Sk(925,`boolean `),Kg(),Qc(926,`code`,41),Sk(927,` Function`),Kg()(),Qc(928,`td`,21)(929,`em`)(930,`strong`),Sk(931,`(opcional)`),Kg()(),Qc(932,`p`),Sk(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(934,`tr`,68)(935,`td`,15)(936,`div`,16)(937,`span`,17),Sk(938,` icon`),vu(939,`br`),Kg()()(),Qc(940,`td`,18)(941,`code`,29),Sk(942,`string `),Kg(),Qc(943,`code`,69),Sk(944,` TemplateRef<void>`),Kg()(),Qc(945,`td`,21)(946,`em`)(947,`strong`),Sk(948,`(opcional)`),Kg()(),Qc(949,`p`),Sk(950,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(951,`p`),Sk(952,`Aceita ícones da `),Qc(953,`a`,70),Sk(954,`Biblioteca de ícones`),Kg(),Sk(955,`, fontes externas (ex: Font Awesome)
ou um `),Qc(956,`code`),Sk(957,`TemplateRef`),Kg(),Sk(958,` para ícones customizados.`),Kg(),Qc(959,`pre`)(960,`code`),Sk(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(962,`tr`,71)(963,`td`,15)(964,`div`,16)(965,`span`,17),Sk(966,` kind`),vu(967,`br`),Kg()()(),Qc(968,`td`,18)(969,`code`,29),Sk(970,`string`),Kg()(),Qc(971,`td`,21)(972,`em`)(973,`strong`),Sk(974,`(opcional)`),Kg()(),Qc(975,`p`),Sk(976,`Define o estilo visual da ação quando exibida como botão fora do `),Qc(977,`em`),Sk(978,`dropdown`),Kg(),Sk(979,`.`),Kg(),Qc(980,`p`),Sk(981,`Valores permitidos:`),Kg(),Qc(982,`ul`)(983,`li`)(984,`code`),Sk(985,`primary`),Kg(),Sk(986,`: botão com maior destaque visual.`),Kg(),Qc(987,`li`)(988,`code`),Sk(989,`secondary`),Kg(),Sk(990,`: estilo padrão.`),Kg()(),Qc(991,`blockquote`)(992,`p`),Sk(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Kg()(),Qc(994,`blockquote`)(995,`p`),Sk(996,`Somente uma ação pode ter `),Qc(997,`code`),Sk(998,`kind`),Kg(),Sk(999,` igual a `),Qc(1e3,`code`),Sk(1001,`primary`),Kg(),Sk(1002,`. Caso mais de uma defina `),Qc(1003,`code`),Sk(1004,`primary`),Kg(),Sk(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Qc(1006,`code`),Sk(1007,`secondary`),Kg(),Sk(1008,`.`),Kg()(),Qc(1009,`blockquote`)(1010,`p`),Sk(1011,`Quando não definido, o estilo é determinado pelo `),Qc(1012,`code`),Sk(1013,`PoPageActionsLayout`),Kg(),Sk(1014,`.`),Kg()()()(),Qc(1015,`tr`,72)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),Sk(1019,` label`),vu(1020,`br`),Kg()()(),Qc(1021,`td`,18)(1022,`code`,29),Sk(1023,`string`),Kg()(),Qc(1024,`td`,21)(1025,`p`),Sk(1026,`Rótulo da ação.`),Kg(),Qc(1027,`p`),Sk(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(1029,`code`),Sk(1030,`subItems`),Kg(),Sk(1031,`.`),Kg()()(),Qc(1032,`tr`,73)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),Sk(1036,` selected`),vu(1037,`br`),Kg()()(),Qc(1038,`td`,18)(1039,`code`,67),Sk(1040,`boolean`),Kg()(),Qc(1041,`td`,21)(1042,`em`)(1043,`strong`),Sk(1044,`(opcional)`),Kg()(),Qc(1045,`p`),Sk(1046,`Define se a ação está selecionada.`),Kg()()(),Qc(1047,`tr`,74)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),Sk(1051,` separator`),vu(1052,`br`),Kg()()(),Qc(1053,`td`,18)(1054,`code`,67),Sk(1055,`boolean`),Kg()(),Qc(1056,`td`,21)(1057,`em`)(1058,`strong`),Sk(1059,`(opcional)`),Kg()(),Qc(1060,`p`),Sk(1061,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(1062,`tr`,75)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),Sk(1066,` subItems`),vu(1067,`br`),Kg()()(),Qc(1068,`td`,18)(1069,`code`,76),Sk(1070,`Array<PoPopupAction>`),Kg()(),Qc(1071,`td`,21)(1072,`em`)(1073,`strong`),Sk(1074,`(opcional)`),Kg()(),Qc(1075,`p`),Sk(1076,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(1077,`pre`)(1078,`code`),Sk(1079,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(1080,`p`),Sk(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(1082,`blockquote`)(1083,`p`),Sk(1084,`As propriedades `),Qc(1085,`code`),Sk(1086,`disabled`),Kg(),Sk(1087,`, `),Qc(1088,`code`),Sk(1089,`type`),Kg(),Sk(1090,` e `),Qc(1091,`code`),Sk(1092,`visible`),Kg(),Sk(1093,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(1094,`blockquote`)(1095,`p`),Sk(1096,`Quando `),Qc(1097,`code`),Sk(1098,`url`),Kg(),Sk(1099,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(1100,`blockquote`)(1101,`p`),Sk(1102,`Em subníveis aninhados, o `),Qc(1103,`code`),Sk(1104,`icon`),Kg(),Sk(1105,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(1106,`tr`,77)(1107,`td`,15)(1108,`div`,16)(1109,`span`,17),Sk(1110,` subItemsLazy`),vu(1111,`br`),Kg()()(),Qc(1112,`td`,18)(1113,`code`,78),Sk(1114,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(1115,`td`,21)(1116,`em`)(1117,`strong`),Sk(1118,`(opcional)`),Kg()(),Qc(1119,`p`),Sk(1120,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(1121,`p`),Sk(1122,`Recebe o item agrupador e retorna um `),Qc(1123,`code`),Sk(1124,`Observable<Array<PoPopupAction>>`),Kg(),Sk(1125,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(1126,`strong`),Sk(1127,`apenas`),Kg(),Sk(1128,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(1129,`code`),Sk(1130,`po-skeleton`),Kg(),Sk(1131,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(1132,`pre`)(1133,`code`),Sk(1134,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(1135,`blockquote`)(1136,`p`),Sk(1137,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(1138,`p`),Sk(1139,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(1140,`tr`,79)(1141,`td`,15)(1142,`div`,16)(1143,`span`,17),Sk(1144,` type`),vu(1145,`br`),Kg()()(),Qc(1146,`td`,18)(1147,`code`,29),Sk(1148,`string`),Kg()(),Qc(1149,`td`,21)(1150,`em`)(1151,`strong`),Sk(1152,`(opcional)`),Kg()(),Qc(1153,`p`),Sk(1154,`Define a cor do item.`),Kg(),Qc(1155,`p`),Sk(1156,`Valores válidos:`),Kg(),Qc(1157,`ul`)(1158,`li`)(1159,`code`),Sk(1160,`default`),Kg()(),Qc(1161,`li`)(1162,`code`),Sk(1163,`danger`),Kg()()()()(),Qc(1164,`tr`,80)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Sk(1168,` url`),vu(1169,`br`),Kg()()(),Qc(1170,`td`,18)(1171,`code`,29),Sk(1172,`string`),Kg()(),Qc(1173,`td`,21)(1174,`em`)(1175,`strong`),Sk(1176,`(opcional)`),Kg()(),Qc(1177,`p`),Sk(1178,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(1179,`p`),Sk(1180,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(1181,`code`),Sk(1182,`url`),Kg(),Sk(1183,` é informada em um agrupador, o clique `),Qc(1184,`strong`),Sk(1185,`não abrirá os subitens`),Kg(),Sk(1186,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(1187,`blockquote`)(1188,`p`),Sk(1189,`Quando informada, tem prioridade sobre a propriedade `),Qc(1190,`code`),Sk(1191,`action`),Kg(),Sk(1192,`.`),Kg()()()(),Qc(1193,`tr`,81)(1194,`td`,15)(1195,`div`,16)(1196,`span`,17),Sk(1197,` visible`),vu(1198,`br`),Kg()()(),Qc(1199,`td`,18)(1200,`code`,67),Sk(1201,`boolean `),Kg(),Qc(1202,`code`,41),Sk(1203,` Function`),Kg()(),Qc(1204,`td`,21)(1205,`em`)(1206,`strong`),Sk(1207,`(opcional)`),Kg()(),Qc(1208,`p`),Sk(1209,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(1210,`h4`,82)(1211,`code`,5),Sk(1212,`PoPageDefaultLiterals`),Kg()(),Qc(1213,`div`,2)(1214,`p`),Sk(1215,`Interface para definição das literais usadas no `),Qc(1216,`code`),Sk(1217,`po-page-default`),Kg(),Sk(1218,`.`),Kg()(),Qc(1219,`h4`,10),Sk(1220,`Propriedades`),Kg(),Qc(1221,`table`,11)(1222,`tr`,12)(1223,`th`,13),Sk(1224,`Nome`),Kg(),Qc(1225,`th`,13),Sk(1226,`Tipo`),Kg(),Qc(1227,`th`,13),Sk(1228,`Descrição`),Kg()(),Qc(1229,`tr`,83)(1230,`td`,15)(1231,`div`,16)(1232,`span`,17),Sk(1233,` otherActions`),vu(1234,`br`),Kg()()(),Qc(1235,`td`,18)(1236,`code`,29),Sk(1237,`string`),Kg()(),Qc(1238,`td`,21)(1239,`em`)(1240,`strong`),Sk(1241,`(opcional)`),Kg()(),Qc(1242,`p`),Sk(1243,`Legenda do `),Qc(1244,`code`),Sk(1245,`po-dropdown`),Kg(),Sk(1246,` de ações.`),Kg()()()(),Qc(1247,`h3`),Sk(1248,`Enums`),Kg(),Qc(1249,`h4`,84)(1250,`code`,5),Sk(1251,`PoPageActionsLayout`),Kg()(),Qc(1252,`div`,2)(1253,`p`),Sk(1254,`Define os layouts de exibição das ações no cabeçalho do `),Qc(1255,`code`),Sk(1256,`po-page-default`),Kg(),Sk(1257,`.`),Kg(),Qc(1258,`blockquote`)(1259,`p`),Sk(1260,`Compatível com todos os valores de `),Qc(1261,`code`),Sk(1262,`PoPageHeaderType`),Kg(),Sk(1263,`.`),Kg()()(),Qc(1264,`h4`,10),Sk(1265,`Propriedades`),Kg(),Qc(1266,`table`,11)(1267,`tr`,12)(1268,`th`,13),Sk(1269,`Nome`),Kg(),Qc(1270,`th`,13),Sk(1271,`Descrição`),Kg()(),Qc(1272,`tr`,85)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Sk(1276,` default`),vu(1277,`br`),Kg()()(),Qc(1278,`td`,21)(1279,`p`),Sk(1280,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Qc(1281,`em`),Sk(1282,`dropdown`),Kg(),Sk(1283,`.`),Kg(),Qc(1284,`p`),Sk(1285,`Quando `),Qc(1286,`code`),Sk(1287,`PoPageAction.kind`),Kg(),Sk(1288,` não é definido, a primeira ação recebe o estilo `),Qc(1289,`code`),Sk(1290,`primary`),Kg(),Sk(1291,`
e as demais recebem `),Qc(1292,`code`),Sk(1293,`secondary`),Kg(),Sk(1294,`.`),Kg()()(),Qc(1295,`tr`,86)(1296,`td`,15)(1297,`div`,16)(1298,`span`,17),Sk(1299,` dropdown`),vu(1300,`br`),Kg()()(),Qc(1301,`td`,21)(1302,`p`),Sk(1303,`Agrupa todas as ações exclusivamente dentro do menu `),Qc(1304,`em`),Sk(1305,`dropdown`),Kg(),Sk(1306,`.`),Kg()()(),Qc(1307,`tr`,87)(1308,`td`,15)(1309,`div`,16)(1310,`span`,17),Sk(1311,` mixed`),vu(1312,`br`),Kg()()(),Qc(1313,`td`,21)(1314,`p`),Sk(1315,`Exibe a primeira ação como botão e agrupa as demais no `),Qc(1316,`em`),Sk(1317,`dropdown`),Kg(),Sk(1318,`.`),Kg()()()(),Qc(1319,`h4`,88)(1320,`code`,5),Sk(1321,`PoPageHeaderType`),Kg()(),Qc(1322,`div`,2)(1323,`p`),Sk(1324,`Define os tipos de cabeçalho disponíveis no `),Qc(1325,`code`),Sk(1326,`po-page-default`),Kg(),Sk(1327,`.`),Kg()(),Qc(1328,`h4`,10),Sk(1329,`Propriedades`),Kg(),Qc(1330,`table`,11)(1331,`tr`,12)(1332,`th`,13),Sk(1333,`Nome`),Kg(),Qc(1334,`th`,13),Sk(1335,`Descrição`),Kg()(),Qc(1336,`tr`,89)(1337,`td`,15)(1338,`div`,16)(1339,`span`,17),Sk(1340,` primary`),vu(1341,`br`),Kg()()(),Qc(1342,`td`,21)(1343,`p`),Sk(1344,`Layout padrão com suporte a `),Qc(1345,`code`),Sk(1346,`p-breadcrumb`),Kg(),Sk(1347,`.`),Kg()()(),Qc(1348,`tr`,90)(1349,`td`,15)(1350,`div`,16)(1351,`span`,17),Sk(1352,` secondary`),vu(1353,`br`),Kg()()(),Qc(1354,`td`,21)(1355,`p`),Sk(1356,`Exibe um botão de retorno ao lado do título.`),Kg(),Qc(1357,`blockquote`)(1358,`p`),Sk(1359,`Incompatível com `),Qc(1360,`code`),Sk(1361,`p-breadcrumb`),Kg(),Sk(1362,`.`),Kg()()()(),Qc(1363,`tr`,91)(1364,`td`,15)(1365,`div`,16)(1366,`span`,17),Sk(1367,` tertiary`),vu(1368,`br`),Kg()()(),Qc(1369,`td`,21)(1370,`p`),Sk(1371,`Layout simplificado sem botão de retorno.`),Kg(),Qc(1372,`blockquote`)(1373,`p`),Sk(1374,`Incompatível com `),Qc(1375,`code`),Sk(1376,`p-breadcrumb`),Kg(),Sk(1377,`.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ke(o,le){if(o&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-page-default-basic-view`)(2,`sample-po-page-default-labs-view`)(3,`sample-po-page-default-dashboard-view`)(4,`sample-po-page-default-refresh-view`),Kg()}if(o&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ke,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-page-default-doc`),Kg()()()),p&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ve,Pe,we,_e,Me],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(Xe),GV]})}return o})();var Rt=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,ke]})}return o})();export{Rt as DocPoPageDefaultModule};