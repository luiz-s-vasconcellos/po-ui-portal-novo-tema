import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Hr as Me$1,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Y as Nl,Yi as eF,Yt as ea,Zt as fae,at as R4,b as Fu,bn as o5,ca as jk,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,ui as R,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var xe=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(p,i){p&1&&_u(0,`po-page-default`,0)},dependencies:[Tze],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Default Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-default-basic`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Le,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return o})();var Be=()=>({});function Fe(o,ae){if(o&1){let r=ZO();Jc(0,`po-input`,37),W0(),Kb(`ngModelChange`,function(i){U_(r);let m=nk(2);return Ak(m.helperFooterLabel,i)||(m.helperFooterLabel=i),H_(i)}),Zg()}if(o&2){let r=nk(2);Yb(`ngModel`,r.helperFooterLabel),Y0()}}function Oe(o,ae){if(o&1){let r=ZO();Jc(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),W0(),Kb(`ngModelChange`,function(i){U_(r);let m=nk();return Ak(m.helperTitle,i)||(m.helperTitle=i),H_(i)}),Zg(),Jc(3,`po-input`,34),W0(),Kb(`ngModelChange`,function(i){U_(r);let m=nk();return Ak(m.helperContent,i)||(m.helperContent=i),H_(i)}),Zg()(),Jc(4,`div`,6)(5,`po-radio-group`,35),W0(),vt(`ngModelChange`,function(i){U_(r);let m=nk();return H_(m.helperType=i)}),Zg()(),Jc(6,`div`,6),VO(7,Fe,1,1,`po-input`,36),Zg()()}if(o&2){let r=nk();Ig(2),Yb(`ngModel`,r.helperTitle),Y0(),Ig(),Yb(`ngModel`,r.helperContent),Y0(),Ig(2),Rb(`p-columns`,4)(`ngModel`,r.helperType)(`p-options`,r.helperTypeOptions),Y0(),Ig(2),BO(r.helperType===`help`?7:-1)}}var ye=(()=>{class o{poNotification=p(Fu);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let r={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(r.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),r}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(r$1){let p=s(r({},r$1),{visible:r$1.visible!==void 0?r$1.visible:!0,disabled:r$1.disabled!==void 0?r$1.disabled:!1});p.action=p.action?this.showAction.bind(this,p.action):void 0,this.actions=[...this.actions,p],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let r={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,r):this.breadcrumb.params=r,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=ZO();Jc(0,`po-page-default`,5),vt(`p-back`,function(){return i.onBack()}),Zg(),_u(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.title,l)||(i.title=l),H_(l)}),Zg(),Jc(6,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.subtitle,l)||(i.subtitle=l),H_(l)}),Zg(),Jc(7,`po-checkbox`,9),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.showHelper,l)||(i.showHelper=l),H_(l)}),Zg(),Jc(8,`po-checkbox`,10),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.showRefresh,l)||(i.showRefresh=l),H_(l)}),Zg(),VO(9,Oe,8,6,`po-widget`,11),Jc(10,`po-select`,12),W0(),vt(`ngModelChange`,function(l){return i.pageHeaderType=l}),Zg(),Jc(11,`po-select`,13),W0(),vt(`ngModelChange`,function(l){return i.pageActionsLayout=l}),Zg(),Jc(12,`po-input`,14),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.literals,l)||(i.literals=l),H_(l)}),vt(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(13,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.componentsSize,l)||(i.componentsSize=l),H_(l)}),Zg()()(),_u(14,`po-divider`),Jc(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.action.label,l)||(i.action.label=l),H_(l)}),Zg(),Jc(20,`po-input`,18),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.action.action,l)||(i.action.action=l),H_(l)}),Zg(),Jc(21,`po-input`,19),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.action.url,l)||(i.action.url=l),H_(l)}),Zg(),Jc(22,`po-select`,20),W0(),vt(`ngModelChange`,function(l){return i.action.type=l}),Zg(),Jc(23,`po-select`,21),W0(),vt(`ngModelChange`,function(l){return i.action.icon=l}),Zg(),Jc(24,`po-select`,22),W0(),vt(`ngModelChange`,function(l){return i.action.kind=l}),Zg(),Jc(25,`po-checkbox-group`,23),W0(),vt(`ngModelChange`,function(l){return i.action=l}),Zg()(),Jc(26,`div`,6)(27,`po-button`,24),vt(`p-click`,function(){return i.addAction(i.action)}),Zg()()()(),_u(28,`po-divider`),Jc(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),H_(l)}),Zg()()(),Jc(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),H_(l)}),Zg(),Jc(37,`po-input`,27),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),H_(l)}),Zg()(),Jc(38,`div`,6)(39,`po-button`,28),vt(`p-click`,function(){return i.addBreadcrumbItem()}),Zg()()(),_u(40,`po-divider`),Jc(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),H_(l)}),Zg(),Jc(45,`po-input`,30),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),H_(l)}),Zg()(),Jc(46,`div`,6)(47,`po-button`,31),vt(`p-click`,function(){return i.addBreadcrumbParam()}),Zg()()(),_u(48,`po-divider`),Jc(49,`div`,6)(50,`po-button`,32),vt(`p-click`,function(){return i.restore()}),Zg()()}if(p&2){let m=sk(17),c=sk(34),l=sk(42);Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??jk(44,Be))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Ig(5),Yb(`ngModel`,i.title),Y0(),Ig(),Yb(`ngModel`,i.subtitle),Y0(),Ig(),Yb(`ngModel`,i.showHelper),Y0(),Ig(),Yb(`ngModel`,i.showRefresh),Y0(),Ig(),BO(i.showHelper?9:-1),Ig(),Rb(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),Y0(),Ig(),Rb(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),Y0(),Ig(),Yb(`ngModel`,i.literals),Y0(),Ig(),Yb(`ngModel`,i.componentsSize),Rb(`p-columns`,4)(`p-options`,i.componentsSizeOptions),Y0(),Ig(6),Yb(`ngModel`,i.action.label),Y0(),Ig(),Yb(`ngModel`,i.action.action),Y0(),Ig(),Yb(`ngModel`,i.action.url),Y0(),Ig(),Rb(`ngModel`,i.action.type)(`p-options`,i.typeOptions),Y0(),Ig(),Rb(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),Y0(),Ig(),Rb(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),Y0(),Ig(),Rb(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),Y0(),Ig(2),Rb(`p-disabled`,m.form.invalid),Ig(5),Yb(`ngModel`,i.breadcrumb.favorite),Y0(),Ig(4),Yb(`ngModel`,i.breadcrumbItem.label),Y0(),Ig(),Yb(`ngModel`,i.breadcrumbItem.link),Y0(),Ig(2),Rb(`p-disabled`,c.invalid??!1),Ig(5),Yb(`ngModel`,i.breadcrumbParams.property),Y0(),Ig(),Yb(`ngModel`,i.breadcrumbParams.value),Y0(),Ig(2),Rb(`p-disabled`,l.invalid??!1)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,Nl,U4,Gte,Woe,Tze,fae],encapsulation:2,changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Default Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-default-labs`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ve,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ye],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(p){return new(p||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Re=[`formShare`];var Ce=(()=>{class o{poNotification=p(Fu);sampleDashboardService=p(oe);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(p,i){if(p&1&&Cu(Re,7)(ea,7),p&2){let m;No(m=xo())&&(i.formShare=m.first),No(m=xo())&&(i.poModal=m.first)}},standalone:!1,features:[Me$1([oe])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=ZO();Jc(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),Tk(4,`540`),Zg(),Jc(5,`div`,5),Tk(6,`www.po.com.br`),Zg()(),Jc(7,`po-widget`,6)(8,`div`,4),Tk(9,`300 views`),Zg(),Jc(10,`div`,5),Tk(11,`https://po-ui.io`),Zg()(),Jc(12,`po-widget`,7)(13,`div`,4),Tk(14,`Online`),Zg(),Jc(15,`div`,5),Tk(16,`28 days`),Zg()(),Jc(17,`po-widget`,8)(18,`div`,4),Tk(19,`266`),Zg(),Jc(20,`div`,5),Tk(21,`@po-ui/ng-components - 1.10.1`),Zg()(),Jc(22,`po-widget`,9)(23,`div`,4),Tk(24,`800 questions`),Zg(),Jc(25,`div`,5),Tk(26,`https://devforum.po.com.br`),Zg()(),Jc(27,`po-widget`,10)(28,`div`,4),Tk(29,`AngularJS - Angular 6`),Zg(),Jc(30,`div`,5),Tk(31,`Angular 6 most downloaded`),Zg()()(),_u(32,`po-divider`)(33,`po-table`,11),Zg(),Jc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),W0(),Kb(`ngModelChange`,function(l){return U_(m),Ak(i.email,l)||(i.email=l),H_(l)}),Zg()()()}p&2&&(Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),Ig(33),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Ig(),Rb(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Ig(3),Yb(`ngModel`,i.email),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,Lf,o5,ea,Tze,R4,fae],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Default - Dashboard`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-page-default-dashboard`),Zg(),_u(33,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return o})();var De=(()=>{class o{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(r){this.poNotification=r}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(r$2=>s(r({},r$2),{quantity:r$2.quantity+Math.floor(Math.random()*10),status:this.getStatus(r$2.quantity+Math.floor(Math.random()*10))}))}getStatus(r){return r===0?`Out of stock`:r<=5?`Low stock`:`Available`}static ɵfac=function(p){return new(p||o)(I(Fu))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0),_u(1,`po-table`,1),Zg()),p&2&&(Rb(`p-refresh`,i.onRefresh),Ig(),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[Tze,R4],encapsulation:2})}return o})();var Ue=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Default - Refresh`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-default-refresh`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ue,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,De],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1378,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-h4`,`docs-api-class-name`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(p,i){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Tk(8,`po-page-default`),Zg(),Tk(9,`, `),Jc(10,`code`),Tk(11,`po-page-detail`),Zg(),Tk(12,`,
`),Jc(13,`code`),Tk(14,`po-page-edit`),Zg(),Tk(15,`, `),Jc(16,`code`),Tk(17,`po-page-list`),Zg(),Tk(18,` e `),Jc(19,`code`),Tk(20,`po-page-slide`),Zg(),Tk(21,`.`),Zg()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoPageDefaultComponent`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,`O `),Jc(30,`code`),Tk(31,`po-page-default`),Zg(),Tk(32,` é utilizado como container principal para telas sem um template definido.`),Zg(),Jc(33,`p`),Tk(34,`Oferece suporte a cabeçalhos dinâmicos via `),Jc(35,`code`),Tk(36,`p-page-header-type`),Zg(),Tk(37,`, navegação por `),Jc(38,`em`),Tk(39,`breadcrumb`),Zg(),Tk(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Jc(41,`code`),Tk(42,`p-page-actions-layout`),Zg(),Tk(43,`.`),Zg(),Jc(44,`h4`),Tk(45,`Tokens customizáveis`),Zg(),Jc(46,`blockquote`)(47,`p`),Tk(48,`Para maiores informações, acesse o guia `),Jc(49,`a`,6),Tk(50,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(51,`.`),Zg()(),Jc(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),Tk(56,`Propriedade`),Zg(),Jc(57,`th`),Tk(58,`Descrição`),Zg(),Jc(59,`th`),Tk(60,`Valor Padrão`),Zg()()(),Jc(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),Tk(65,`Página (po-page-default)`),Zg()(),_u(66,`td`)(67,`td`),Zg(),Jc(68,`tr`)(69,`td`)(70,`code`),Tk(71,`--background`),Zg()(),Jc(72,`td`),Tk(73,`Background da página (header e body)`),Zg(),Jc(74,`td`)(75,`code`),Tk(76,`var(--color-page-background-color-page)`),Zg()()(),Jc(77,`tr`)(78,`td`)(79,`strong`),Tk(80,`Header (po-page-header)`),Zg()(),_u(81,`td`)(82,`td`),Zg(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--padding`),Zg()(),Jc(87,`td`),Tk(88,`Espaçamento do header`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--gap`),Zg()(),Jc(96,`td`),Tk(97,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--spacing-md)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--gap-actions`),Zg()(),Jc(105,`td`),Tk(106,`Espaçamento entre as ações`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--spacing-xs)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`strong`),Tk(113,`Header (po-page-header .po-page-header-title)`),Zg()(),_u(114,`td`)(115,`td`),Zg(),Jc(116,`tr`)(117,`td`)(118,`code`),Tk(119,`--font-family`),Zg()(),Jc(120,`td`),Tk(121,`Família tipográfica do título`),Zg(),Jc(122,`td`)(123,`code`),Tk(124,`var(--font-family-theme)`),Zg()()(),Jc(125,`tr`)(126,`td`)(127,`strong`),Tk(128,`Content (po-page-content)`),Zg()(),_u(129,`td`)(130,`td`),Zg(),Jc(131,`tr`)(132,`td`)(133,`code`),Tk(134,`--padding-content`),Zg()(),Jc(135,`td`),Tk(136,`Espaçamento do conteúdo`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(140,`div`,7)(141,`h4`,8),Tk(142,`Seletor`),Zg(),Jc(143,`pre`,9),Tk(144,`<po-page-default
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
`),Zg()(),Jc(145,`h4`,10),Tk(146,`Propriedades`),Zg(),Jc(147,`table`,11)(148,`tr`,12)(149,`th`,13),Tk(150,`Nome`),Zg(),Jc(151,`th`,13),Tk(152,`Tipo`),Zg(),Jc(153,`th`,13),Tk(154,`Padrão`),Zg(),Jc(155,`th`,13),Tk(156,`Descrição`),Zg()(),Jc(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),Tk(161,` p-actions`),_u(162,`br`),Zg()()(),Jc(163,`td`,18)(164,`code`,19),Tk(165,`Array<PoPageAction>`),Zg()(),Jc(166,`td`,20)(167,`p`)(168,`code`),Tk(169,`[]`),Zg()()(),Jc(170,`td`,21)(171,`em`)(172,`strong`),Tk(173,`(opcional)`),Zg()(),Jc(174,`p`),Tk(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),Zg(),Jc(176,`p`),Tk(177,`Recebe um array de objetos que implementam a interface `),Jc(178,`code`),Tk(179,`PoPageAction`),Zg(),Tk(180,`.`),Zg(),Jc(181,`blockquote`)(182,`p`),Tk(183,`O comportamento de exibição pode ser customizado através da propriedade `),Jc(184,`code`),Tk(185,`p-page-actions-layout`),Zg(),Tk(186,`.`),Zg()()()(),Jc(187,`tr`,14)(188,`td`,15)(189,`div`,22)(190,`span`,23),Tk(191,` (p-back)`),_u(192,`br`),Zg()()(),Jc(193,`td`,18)(194,`code`,24),Tk(195,`EventEmitter`),Zg()(),Jc(196,`td`,20),Tk(197,`-`),Zg(),Jc(198,`td`,21)(199,`em`)(200,`strong`),Tk(201,`(opcional)`),Zg()(),Jc(202,`p`),Tk(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),Zg(),Jc(204,`blockquote`)(205,`p`),Tk(206,`Botão exibido apenas quando a propriedade `),Jc(207,`code`),Tk(208,`p-page-header-type`),Zg(),Tk(209,` está configurada como `),Jc(210,`code`),Tk(211,`secondary`),Zg(),Tk(212,`.`),Zg()()()(),Jc(213,`tr`,14)(214,`td`,15)(215,`div`,16)(216,`span`,17),Tk(217,` p-breadcrumb`),_u(218,`br`),Zg()()(),Jc(219,`td`,18)(220,`code`,25),Tk(221,`PoBreadcrumb`),Zg()(),Jc(222,`td`,20),Tk(223,`-`),Zg(),Jc(224,`td`,21)(225,`em`)(226,`strong`),Tk(227,`(opcional)`),Zg()(),Jc(228,`p`),Tk(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),Zg(),Jc(230,`p`),Tk(231,`Recebe um objeto que implementa a interface `),Jc(232,`code`),Tk(233,`PoBreadcrumb`),Zg(),Tk(234,`.`),Zg(),Jc(235,`blockquote`)(236,`p`),Tk(237,`Compatível com o cabeçalho (`),Jc(238,`code`),Tk(239,`p-page-header-type`),Zg(),Tk(240,`) do tipo `),Jc(241,`code`),Tk(242,`primary`),Zg(),Tk(243,`.`),Zg()()()(),Jc(244,`tr`,14)(245,`td`,15)(246,`div`,16)(247,`span`,17),Tk(248,` p-components-size`),_u(249,`br`),Zg()()(),Jc(250,`td`,18)(251,`code`,26),Tk(252,`string`),Zg()(),Jc(253,`td`,20)(254,`p`)(255,`code`),Tk(256,`medium`),Zg()()(),Jc(257,`td`,21)(258,`em`)(259,`strong`),Tk(260,`(opcional)`),Zg()(),Jc(261,`p`),Tk(262,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(263,`ul`)(264,`li`)(265,`code`),Tk(266,`small`),Zg(),Tk(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(268,`li`)(269,`code`),Tk(270,`medium`),Zg(),Tk(271,`: aplica a medida medium de cada componente.`),Zg()(),Jc(272,`blockquote`)(273,`p`),Tk(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(275,`code`),Tk(276,`medium`),Zg(),Tk(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(278,`a`,27),Tk(279,`po-theme`),Zg(),Tk(280,`.`),Zg()()()(),Jc(281,`tr`,14)(282,`td`,15)(283,`div`,16)(284,`span`,17),Tk(285,` p-helper`),_u(286,`br`),Zg()()(),Jc(287,`td`,18)(288,`code`,28),Tk(289,`PoHelperOptions `),Zg(),Jc(290,`code`,26),Tk(291,` string`),Zg()(),Jc(292,`td`,20)(293,`p`)(294,`code`),Tk(295,`info`),Zg()()(),Jc(296,`td`,21)(297,`em`)(298,`strong`),Tk(299,`(opcional)`),Zg()(),Jc(300,`p`),Tk(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),Zg(),Jc(302,`p`),Tk(303,`Quando não houver subtítulo (`),Jc(304,`code`),Tk(305,`p-subtitle`),Zg(),Tk(306,`), o po-helper será exibido logo abaixo do título.`),Zg(),Jc(307,`p`),Tk(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Jc(309,`code`),Tk(310,`PoHelperOptions`),Zg(),Tk(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),Zg(),Jc(312,`p`),Tk(313,`Exemplo de uso:`),Zg(),Jc(314,`pre`)(315,`code`,29),Tk(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),Zg()()()(),Jc(317,`tr`,14)(318,`td`,15)(319,`div`,16)(320,`span`,17),Tk(321,` p-literals`),_u(322,`br`),Zg()()(),Jc(323,`td`,18)(324,`code`,30),Tk(325,`PoPageDefaultLiterals`),Zg()(),Jc(326,`td`,20),Tk(327,`-`),Zg(),Jc(328,`td`,21)(329,`em`)(330,`strong`),Tk(331,`(opcional)`),Zg()(),Jc(332,`p`),Tk(333,`Permite a customização das literais utilizadas no componente.`),Zg(),Jc(334,`p`),Tk(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Jc(336,`code`),Tk(337,`PoPageDefaultLiterals`),Zg(),Tk(338,`.`),Zg(),Jc(339,`p`),Tk(340,`Exemplo de uso:`),Zg(),Jc(341,`pre`)(342,`code`,29),Tk(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),Zg()(),Jc(344,`pre`)(345,`code`,31),Tk(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),Zg()(),Jc(347,`blockquote`)(348,`p`),Tk(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(350,`a`,32)(351,`code`),Tk(352,`PoI18nService`),Zg()(),Tk(353,` ou navegador.`),Zg()()()(),Jc(354,`tr`,14)(355,`td`,15)(356,`div`,16)(357,`span`,17),Tk(358,` p-page-actions-layout`),_u(359,`br`),Zg()()(),Jc(360,`td`,18)(361,`code`,26),Tk(362,`string`),Zg()(),Jc(363,`td`,20)(364,`p`)(365,`code`),Tk(366,`default`),Zg()()(),Jc(367,`td`,21)(368,`em`)(369,`strong`),Tk(370,`(opcional)`),Zg()(),Jc(371,`p`),Tk(372,`Define o layout de exibição das ações no cabeçalho.`),Zg(),Jc(373,`p`),Tk(374,`Aceita valores do enum `),Jc(375,`code`),Tk(376,`PoPageActionsLayout`),Zg(),Tk(377,`.`),Zg(),Jc(378,`blockquote`)(379,`p`),Tk(380,`Em telas reduzidas (< 480px) as ações fora do `),Jc(381,`em`),Tk(382,`dropdown`),Zg(),Tk(383,` que possuam a propriedade `),Jc(384,`code`),Tk(385,`PoPageAction.icon`),Zg(),Tk(386,` definida
exibir\xE3o apenas o \xEDcone.`),Zg()()()(),Jc(387,`tr`,14)(388,`td`,15)(389,`div`,16)(390,`span`,17),Tk(391,` p-page-header-type`),_u(392,`br`),Zg()()(),Jc(393,`td`,18)(394,`code`,26),Tk(395,`string`),Zg()(),Jc(396,`td`,20)(397,`p`)(398,`code`),Tk(399,`primary`),Zg()()(),Jc(400,`td`,21)(401,`em`)(402,`strong`),Tk(403,`(opcional)`),Zg()(),Jc(404,`p`),Tk(405,`Define o tipo de cabeçalho da página.`),Zg(),Jc(406,`p`),Tk(407,`Aceita valores do enum `),Jc(408,`code`),Tk(409,`PoPageHeaderType`),Zg(),Tk(410,`.`),Zg()()(),Jc(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),Tk(415,` p-refresh`),_u(416,`br`),Zg()()(),Jc(417,`td`,18)(418,`code`,33),Tk(419,`Function`),Zg()(),Jc(420,`td`,20),Tk(421,`-`),Zg(),Jc(422,`td`,21)(423,`em`)(424,`strong`),Tk(425,`(opcional)`),Zg()(),Jc(426,`p`),Tk(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),Zg(),Jc(428,`p`),Tk(429,`Quando não houver subtítulo (`),Jc(430,`code`),Tk(431,`p-subtitle`),Zg(),Tk(432,`), o refresh será exibido logo abaixo do título.`),Zg(),Jc(433,`blockquote`)(434,`p`),Tk(435,`Esta propriedade possui precedência sobre a configuração de `),Jc(436,`code`),Tk(437,`p-helper`),Zg(),Tk(438,`.`),Zg()(),Jc(439,`p`),Tk(440,`Exemplo de uso:`),Zg(),Jc(441,`pre`)(442,`code`,29),Tk(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),Zg()()()(),Jc(444,`tr`,14)(445,`td`,15)(446,`div`,16)(447,`span`,17),Tk(448,` p-subtitle`),_u(449,`br`),Zg()()(),Jc(450,`td`,18)(451,`code`,26),Tk(452,`string`),Zg()(),Jc(453,`td`,20),Tk(454,`-`),Zg(),Jc(455,`td`,21)(456,`em`)(457,`strong`),Tk(458,`(opcional)`),Zg()(),Jc(459,`p`),Tk(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),Zg(),Jc(461,`p`),Tk(462,`Suporta formatação básica com as tags `),Jc(463,`code`),Tk(464,`<b>`),Zg(),Tk(465,` (negrito), `),Jc(466,`code`),Tk(467,`<strong>`),Zg(),Tk(468,` (negrito), `),Jc(469,`code`),Tk(470,`<i>`),Zg(),Tk(471,` (itálico), `),Jc(472,`code`),Tk(473,`<em>`),Zg(),Tk(474,` (it\xE1lico) e
`),Jc(475,`code`),Tk(476,`<u>`),Zg(),Tk(477,` (sublinhado).`),Zg(),Jc(478,`p`),Tk(479,`Exemplo:`),Zg(),Jc(480,`pre`)(481,`code`,31),Tk(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),Zg()(),Jc(483,`blockquote`)(484,`p`),Tk(485,`Requer que `),Jc(486,`code`),Tk(487,`p-title`),Zg(),Tk(488,` esteja definido.`),Zg()()()(),Jc(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),Tk(493,` p-title`),_u(494,`br`),Zg()()(),Jc(495,`td`,18)(496,`code`,26),Tk(497,`string`),Zg()(),Jc(498,`td`,20),Tk(499,`-`),Zg(),Jc(500,`td`,21)(501,`em`)(502,`strong`),Tk(503,`(opcional)`),Zg()(),Jc(504,`p`),Tk(505,`Define o título principal da página.`),Zg()()()(),Jc(506,`h3`),Tk(507,`Interfaces`),Zg(),Jc(508,`h4`,34)(509,`code`,5),Tk(510,`PoBreadcrumbItem`),Zg()(),Jc(511,`div`,2)(512,`p`),Tk(513,`Interface que define cada item do componente `),Jc(514,`strong`),Tk(515,`po-breadcrumb`),Zg(),Tk(516,`.`),Zg()(),Jc(517,`h4`,10),Tk(518,`Propriedades`),Zg(),Jc(519,`table`,11)(520,`tr`,12)(521,`th`,13),Tk(522,`Nome`),Zg(),Jc(523,`th`,13),Tk(524,`Tipo`),Zg(),Jc(525,`th`,13),Tk(526,`Descrição`),Zg()(),Jc(527,`tr`,14)(528,`td`,15)(529,`div`,16)(530,`span`,17),Tk(531,` action`),_u(532,`br`),Zg()()(),Jc(533,`td`,18)(534,`code`,33),Tk(535,`Function`),Zg()(),Jc(536,`td`,21)(537,`em`)(538,`strong`),Tk(539,`(opcional)`),Zg()(),Jc(540,`p`),Tk(541,`Ação executada ao clicar no item.`),Zg(),Jc(542,`blockquote`)(543,`p`),Tk(544,`A função atribuída a esta propriedade receberá o `),Jc(545,`em`),Tk(546,`label`),Zg(),Tk(547,` do item como parâmetro para execução.`),Zg()()()(),Jc(548,`tr`,14)(549,`td`,15)(550,`div`,16)(551,`span`,17),Tk(552,` label`),_u(553,`br`),Zg()()(),Jc(554,`td`,18)(555,`code`,26),Tk(556,`string`),Zg()(),Jc(557,`td`,21)(558,`p`),Tk(559,`Rótulo do item.`),Zg()()(),Jc(560,`tr`,14)(561,`td`,15)(562,`div`,16)(563,`span`,17),Tk(564,` link`),_u(565,`br`),Zg()()(),Jc(566,`td`,18)(567,`code`,26),Tk(568,`string`),Zg()(),Jc(569,`td`,21)(570,`em`)(571,`strong`),Tk(572,`(opcional)`),Zg()(),Jc(573,`p`),Tk(574,`Url do item.`),Zg(),Jc(575,`blockquote`)(576,`p`),Tk(577,`Caso o item também contenha uma `),Jc(578,`em`),Tk(579,`action`),Zg(),Tk(580,` definida, a preferência de execução será do `),Jc(581,`em`),Tk(582,`link`),Zg(),Tk(583,`.`),Zg()(),Jc(584,`blockquote`)(585,`p`),Tk(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(587,`strong`)(588,`a`,35),Tk(589,`Veja um exemplo de como criar rotas aqui`),Zg()(),Tk(590,`.`),Zg()(),Jc(591,`blockquote`)(592,`p`),Tk(593,`Esta propriedade é necessária para que a propriedade `),Jc(594,`code`),Tk(595,`p-favorite-service`),Zg(),Tk(596,` consiga favoritar ou desfavoritar.`),Zg()()()()(),Jc(597,`h4`,34)(598,`code`,5),Tk(599,`PoBreadcrumb`),Zg()(),Jc(600,`div`,2)(601,`p`),Tk(602,`Interface que define o `),Jc(603,`code`),Tk(604,`po-breadcrumb`),Zg(),Tk(605,`.`),Zg()(),Jc(606,`h4`,10),Tk(607,`Propriedades`),Zg(),Jc(608,`table`,11)(609,`tr`,12)(610,`th`,13),Tk(611,`Nome`),Zg(),Jc(612,`th`,13),Tk(613,`Tipo`),Zg(),Jc(614,`th`,13),Tk(615,`Descrição`),Zg()(),Jc(616,`tr`,14)(617,`td`,15)(618,`div`,16)(619,`span`,17),Tk(620,` favorite`),_u(621,`br`),Zg()()(),Jc(622,`td`,18)(623,`code`,26),Tk(624,`string`),Zg()(),Jc(625,`td`,21)(626,`em`)(627,`strong`),Tk(628,`(opcional)`),Zg()(),Jc(629,`p`),Tk(630,`Permite definir uma URL para favoritar ou desfavoritar.`),Zg(),Jc(631,`blockquote`)(632,`p`),Tk(633,`Para maiores informações verificar a propriedade `),Jc(634,`code`),Tk(635,`p-favorite-service`),Zg(),Tk(636,` do componente `),Jc(637,`code`),Tk(638,`po-breadcrumb`),Zg(),Tk(639,`.`),Zg()()()(),Jc(640,`tr`,14)(641,`td`,15)(642,`div`,16)(643,`span`,17),Tk(644,` items`),_u(645,`br`),Zg()()(),Jc(646,`td`,18)(647,`code`,36),Tk(648,`Array<PoBreadcrumbItem>`),Zg()(),Jc(649,`td`,21)(650,`p`),Tk(651,`Lista de itens do `),Jc(652,`em`),Tk(653,`breadcrumb`),Zg(),Tk(654,`.`),Zg(),Jc(655,`p`)(656,`strong`),Tk(657,`Exemplo:`),Zg()(),Jc(658,`pre`)(659,`code`),Tk(660,`{ label: 'Po Portal', link: 'portal' }
`),Zg()()()(),Jc(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),Tk(665,` params`),_u(666,`br`),Zg()()(),Jc(667,`td`,18)(668,`code`,37),Tk(669,`object`),Zg()(),Jc(670,`td`,21)(671,`em`)(672,`strong`),Tk(673,`(opcional)`),Zg()(),Jc(674,`p`),Tk(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Zg()()()(),Jc(676,`h4`,34)(677,`code`,5),Tk(678,`PoHelperOptions`),Zg()(),Jc(679,`div`,2)(680,`p`),Tk(681,`Interface para configuração das opções de ajuda (`),Jc(682,`em`),Tk(683,`helper`),Zg(),Tk(684,`).`),Zg()(),Jc(685,`h4`,10),Tk(686,`Propriedades`),Zg(),Jc(687,`table`,11)(688,`tr`,12)(689,`th`,13),Tk(690,`Nome`),Zg(),Jc(691,`th`,13),Tk(692,`Tipo`),Zg(),Jc(693,`th`,13),Tk(694,`Descrição`),Zg()(),Jc(695,`tr`,14)(696,`td`,15)(697,`div`,16)(698,`span`,17),Tk(699,` content`),_u(700,`br`),Zg()()(),Jc(701,`td`,18)(702,`code`,26),Tk(703,`string`),Zg()(),Jc(704,`td`,21)(705,`em`)(706,`strong`),Tk(707,`(opcional)`),Zg()(),Jc(708,`p`),Tk(709,`Texto explicativo exibido no popover.`),Zg(),Jc(710,`p`),Tk(711,`Suporta formatação básica com as tags `),Jc(712,`code`),Tk(713,`<b>`),Zg(),Tk(714,` (negrito), `),Jc(715,`code`),Tk(716,`<strong>`),Zg(),Tk(717,` (negrito), `),Jc(718,`code`),Tk(719,`<i>`),Zg(),Tk(720,` (itálico), `),Jc(721,`code`),Tk(722,`<em>`),Zg(),Tk(723,` (it\xE1lico) e
`),Jc(724,`code`),Tk(725,`<u>`),Zg(),Tk(726,` (sublinhado).`),Zg(),Jc(727,`p`),Tk(728,`Exemplo:`),Zg(),Jc(729,`pre`)(730,`code`,31),Tk(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Zg()()()(),Jc(732,`tr`,14)(733,`td`,15)(734,`div`,16)(735,`span`,17),Tk(736,` eventOnClick`),_u(737,`br`),Zg()()(),Jc(738,`td`,18)(739,`code`,33),Tk(740,`Function`),Zg()(),Jc(741,`td`,21)(742,`em`)(743,`strong`),Tk(744,`(opcional)`),Zg()(),Jc(745,`p`),Tk(746,`Evento disparado ao clicar no ícone do helper.`),Zg(),Jc(747,`p`),Tk(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Zg(),Jc(749,`p`),Tk(750,`Pode ser uma função ou um `),Jc(751,`code`),Tk(752,`EventEmitter`),Zg(),Tk(753,`.`),Zg(),Jc(754,`p`),Tk(755,`Exemplo:`),Zg(),Jc(756,`pre`)(757,`code`),Tk(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Zg()()()(),Jc(759,`tr`,14)(760,`td`,15)(761,`div`,16)(762,`span`,17),Tk(763,` footerAction`),_u(764,`br`),Zg()()(),Jc(765,`td`,18)(766,`code`,38),Tk(767,`{ label: string; action: Function;
}`),Zg()(),Jc(768,`td`,21)(769,`em`)(770,`strong`),Tk(771,`(opcional)`),Zg()(),Jc(772,`p`),Tk(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Jc(774,`code`),Tk(775,`help`),Zg(),Tk(776,` e desconsiderada quando o type for `),Jc(777,`code`),Tk(778,`info`),Zg(),Tk(779,`.`),Zg(),Jc(780,`p`),Tk(781,`Deve ser um objeto com as propriedades:`),Zg(),Jc(782,`ul`)(783,`li`)(784,`code`),Tk(785,`label`),Zg(),Tk(786,`: Texto do botão.`),Zg(),Jc(787,`li`)(788,`code`),Tk(789,`action`),Zg(),Tk(790,`: Função executada ao clicar no botão.`),Zg()(),Jc(791,`p`),Tk(792,`Exemplo:`),Zg(),Jc(793,`pre`)(794,`code`,31),Tk(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Zg()()()(),Jc(796,`tr`,14)(797,`td`,15)(798,`div`,16)(799,`span`,17),Tk(800,` title`),_u(801,`br`),Zg()()(),Jc(802,`td`,18)(803,`code`,26),Tk(804,`string`),Zg()(),Jc(805,`td`,21)(806,`em`)(807,`strong`),Tk(808,`(opcional)`),Zg()(),Jc(809,`p`),Tk(810,`Título do helper exibido no popover.`),Zg()()(),Jc(811,`tr`,14)(812,`td`,15)(813,`div`,16)(814,`span`,17),Tk(815,` type`),_u(816,`br`),Zg()()(),Jc(817,`td`,18)(818,`code`,39),Tk(819,`'info' `),Zg(),Jc(820,`code`,40),Tk(821,` 'help'`),Zg()(),Jc(822,`td`,21)(823,`em`)(824,`strong`),Tk(825,`(opcional)`),Zg()(),Jc(826,`p`),Tk(827,`Tipo do ícone exibido: `),Jc(828,`code`),Tk(829,`info`),Zg(),Tk(830,` ou `),Jc(831,`code`),Tk(832,`help`),Zg(),Tk(833,`.`),Zg(),Jc(834,`p`),Tk(835,`Quando o valor é `),Jc(836,`code`),Tk(837,`info`),Zg(),Tk(838,`, o popover exibe apenas informações e não permite ações customizadas.`),Zg(),Jc(839,`p`),Tk(840,`Quando o valor é `),Jc(841,`code`),Tk(842,`help`),Zg(),Tk(843,`, o popover pode exibir ações customizadas no rodapé.`),Zg()()()(),Jc(844,`h4`,34)(845,`code`,5),Tk(846,`PoPageAction`),Zg()(),Jc(847,`div`,2)(848,`p`),Tk(849,`Interface para as ações dos componentes `),Jc(850,`code`),Tk(851,`po-page-default`),Zg(),Tk(852,` e `),Jc(853,`code`),Tk(854,`po-page-list`),Zg(),Tk(855,`.`),Zg(),Jc(856,`p`),Tk(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Jc(858,`em`),Tk(859,`dropdown`),Zg(),Tk(860,`,
conforme o `),Jc(861,`code`),Tk(862,`PoPageActionsLayout`),Zg(),Tk(863,` e o tamanho da tela.`),Zg(),Jc(864,`blockquote`)(865,`p`),Tk(866,`As propriedades `),Jc(867,`code`),Tk(868,`separator`),Zg(),Tk(869,`, `),Jc(870,`code`),Tk(871,`selected`),Zg(),Tk(872,` e `),Jc(873,`code`),Tk(874,`subItems`),Zg(),Tk(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Jc(876,`em`),Tk(877,`dropdown`),Zg(),Tk(878,`.`),Zg()()(),Jc(879,`h4`,10),Tk(880,`Propriedades`),Zg(),Jc(881,`table`,11)(882,`tr`,12)(883,`th`,13),Tk(884,`Nome`),Zg(),Jc(885,`th`,13),Tk(886,`Tipo`),Zg(),Jc(887,`th`,13),Tk(888,`Descrição`),Zg()(),Jc(889,`tr`,14)(890,`td`,15)(891,`div`,16)(892,`span`,17),Tk(893,` action`),_u(894,`br`),Zg()()(),Jc(895,`td`,18)(896,`code`,33),Tk(897,`Function`),Zg()(),Jc(898,`td`,21)(899,`em`)(900,`strong`),Tk(901,`(opcional)`),Zg()(),Jc(902,`p`),Tk(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(904,`p`),Tk(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(906,`code`),Tk(907,`subItems`),Zg(),Tk(908,`.`),Zg(),Jc(909,`blockquote`)(910,`p`),Tk(911,`Para que a função seja executada no contexto do componente, utilize `),Jc(912,`em`),Tk(913,`bind`),Zg(),Tk(914,`:
`),Jc(915,`code`),Tk(916,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(917,`tr`,14)(918,`td`,15)(919,`div`,16)(920,`span`,17),Tk(921,` disabled`),_u(922,`br`),Zg()()(),Jc(923,`td`,18)(924,`code`,41),Tk(925,`boolean `),Zg(),Jc(926,`code`,33),Tk(927,` Function`),Zg()(),Jc(928,`td`,21)(929,`em`)(930,`strong`),Tk(931,`(opcional)`),Zg()(),Jc(932,`p`),Tk(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(934,`tr`,14)(935,`td`,15)(936,`div`,16)(937,`span`,17),Tk(938,` icon`),_u(939,`br`),Zg()()(),Jc(940,`td`,18)(941,`code`,26),Tk(942,`string `),Zg(),Jc(943,`code`,42),Tk(944,` TemplateRef<void>`),Zg()(),Jc(945,`td`,21)(946,`em`)(947,`strong`),Tk(948,`(opcional)`),Zg()(),Jc(949,`p`),Tk(950,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(951,`p`),Tk(952,`Aceita ícones da `),Jc(953,`a`,43),Tk(954,`Biblioteca de ícones`),Zg(),Tk(955,`, fontes externas (ex: Font Awesome)
ou um `),Jc(956,`code`),Tk(957,`TemplateRef`),Zg(),Tk(958,` para ícones customizados.`),Zg(),Jc(959,`pre`)(960,`code`),Tk(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(962,`tr`,14)(963,`td`,15)(964,`div`,16)(965,`span`,17),Tk(966,` kind`),_u(967,`br`),Zg()()(),Jc(968,`td`,18)(969,`code`,26),Tk(970,`string`),Zg()(),Jc(971,`td`,21)(972,`em`)(973,`strong`),Tk(974,`(opcional)`),Zg()(),Jc(975,`p`),Tk(976,`Define o estilo visual da ação quando exibida como botão fora do `),Jc(977,`em`),Tk(978,`dropdown`),Zg(),Tk(979,`.`),Zg(),Jc(980,`p`),Tk(981,`Valores permitidos:`),Zg(),Jc(982,`ul`)(983,`li`)(984,`code`),Tk(985,`primary`),Zg(),Tk(986,`: botão com maior destaque visual.`),Zg(),Jc(987,`li`)(988,`code`),Tk(989,`secondary`),Zg(),Tk(990,`: estilo padrão.`),Zg()(),Jc(991,`blockquote`)(992,`p`),Tk(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Zg()(),Jc(994,`blockquote`)(995,`p`),Tk(996,`Somente uma ação pode ter `),Jc(997,`code`),Tk(998,`kind`),Zg(),Tk(999,` igual a `),Jc(1e3,`code`),Tk(1001,`primary`),Zg(),Tk(1002,`. Caso mais de uma defina `),Jc(1003,`code`),Tk(1004,`primary`),Zg(),Tk(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Jc(1006,`code`),Tk(1007,`secondary`),Zg(),Tk(1008,`.`),Zg()(),Jc(1009,`blockquote`)(1010,`p`),Tk(1011,`Quando não definido, o estilo é determinado pelo `),Jc(1012,`code`),Tk(1013,`PoPageActionsLayout`),Zg(),Tk(1014,`.`),Zg()()()(),Jc(1015,`tr`,14)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),Tk(1019,` label`),_u(1020,`br`),Zg()()(),Jc(1021,`td`,18)(1022,`code`,26),Tk(1023,`string`),Zg()(),Jc(1024,`td`,21)(1025,`p`),Tk(1026,`Rótulo da ação.`),Zg(),Jc(1027,`p`),Tk(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1029,`code`),Tk(1030,`subItems`),Zg(),Tk(1031,`.`),Zg()()(),Jc(1032,`tr`,14)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),Tk(1036,` selected`),_u(1037,`br`),Zg()()(),Jc(1038,`td`,18)(1039,`code`,41),Tk(1040,`boolean`),Zg()(),Jc(1041,`td`,21)(1042,`em`)(1043,`strong`),Tk(1044,`(opcional)`),Zg()(),Jc(1045,`p`),Tk(1046,`Define se a ação está selecionada.`),Zg()()(),Jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),Tk(1051,` separator`),_u(1052,`br`),Zg()()(),Jc(1053,`td`,18)(1054,`code`,41),Tk(1055,`boolean`),Zg()(),Jc(1056,`td`,21)(1057,`em`)(1058,`strong`),Tk(1059,`(opcional)`),Zg()(),Jc(1060,`p`),Tk(1061,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(1062,`tr`,14)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),Tk(1066,` subItems`),_u(1067,`br`),Zg()()(),Jc(1068,`td`,18)(1069,`code`,44),Tk(1070,`Array<PoPopupAction>`),Zg()(),Jc(1071,`td`,21)(1072,`em`)(1073,`strong`),Tk(1074,`(opcional)`),Zg()(),Jc(1075,`p`),Tk(1076,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(1077,`pre`)(1078,`code`),Tk(1079,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(1080,`p`),Tk(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(1082,`blockquote`)(1083,`p`),Tk(1084,`As propriedades `),Jc(1085,`code`),Tk(1086,`disabled`),Zg(),Tk(1087,`, `),Jc(1088,`code`),Tk(1089,`type`),Zg(),Tk(1090,` e `),Jc(1091,`code`),Tk(1092,`visible`),Zg(),Tk(1093,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(1094,`blockquote`)(1095,`p`),Tk(1096,`Quando `),Jc(1097,`code`),Tk(1098,`url`),Zg(),Tk(1099,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(1100,`blockquote`)(1101,`p`),Tk(1102,`Em subníveis aninhados, o `),Jc(1103,`code`),Tk(1104,`icon`),Zg(),Tk(1105,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(1106,`tr`,14)(1107,`td`,15)(1108,`div`,16)(1109,`span`,17),Tk(1110,` subItemsLazy`),_u(1111,`br`),Zg()()(),Jc(1112,`td`,18)(1113,`code`,45),Tk(1114,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(1115,`td`,21)(1116,`em`)(1117,`strong`),Tk(1118,`(opcional)`),Zg()(),Jc(1119,`p`),Tk(1120,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(1121,`p`),Tk(1122,`Recebe o item agrupador e retorna um `),Jc(1123,`code`),Tk(1124,`Observable<Array<PoPopupAction>>`),Zg(),Tk(1125,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1126,`strong`),Tk(1127,`apenas`),Zg(),Tk(1128,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1129,`code`),Tk(1130,`po-skeleton`),Zg(),Tk(1131,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(1132,`pre`)(1133,`code`),Tk(1134,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(1135,`blockquote`)(1136,`p`),Tk(1137,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(1138,`p`),Tk(1139,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(1140,`tr`,14)(1141,`td`,15)(1142,`div`,16)(1143,`span`,17),Tk(1144,` type`),_u(1145,`br`),Zg()()(),Jc(1146,`td`,18)(1147,`code`,26),Tk(1148,`string`),Zg()(),Jc(1149,`td`,21)(1150,`em`)(1151,`strong`),Tk(1152,`(opcional)`),Zg()(),Jc(1153,`p`),Tk(1154,`Define a cor do item.`),Zg(),Jc(1155,`p`),Tk(1156,`Valores válidos:`),Zg(),Jc(1157,`ul`)(1158,`li`)(1159,`code`),Tk(1160,`default`),Zg()(),Jc(1161,`li`)(1162,`code`),Tk(1163,`danger`),Zg()()()()(),Jc(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Tk(1168,` url`),_u(1169,`br`),Zg()()(),Jc(1170,`td`,18)(1171,`code`,26),Tk(1172,`string`),Zg()(),Jc(1173,`td`,21)(1174,`em`)(1175,`strong`),Tk(1176,`(opcional)`),Zg()(),Jc(1177,`p`),Tk(1178,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(1179,`p`),Tk(1180,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1181,`code`),Tk(1182,`url`),Zg(),Tk(1183,` é informada em um agrupador, o clique `),Jc(1184,`strong`),Tk(1185,`não abrirá os subitens`),Zg(),Tk(1186,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(1187,`blockquote`)(1188,`p`),Tk(1189,`Quando informada, tem prioridade sobre a propriedade `),Jc(1190,`code`),Tk(1191,`action`),Zg(),Tk(1192,`.`),Zg()()()(),Jc(1193,`tr`,14)(1194,`td`,15)(1195,`div`,16)(1196,`span`,17),Tk(1197,` visible`),_u(1198,`br`),Zg()()(),Jc(1199,`td`,18)(1200,`code`,41),Tk(1201,`boolean `),Zg(),Jc(1202,`code`,33),Tk(1203,` Function`),Zg()(),Jc(1204,`td`,21)(1205,`em`)(1206,`strong`),Tk(1207,`(opcional)`),Zg()(),Jc(1208,`p`),Tk(1209,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(1210,`h4`,34)(1211,`code`,5),Tk(1212,`PoPageDefaultLiterals`),Zg()(),Jc(1213,`div`,2)(1214,`p`),Tk(1215,`Interface para definição das literais usadas no `),Jc(1216,`code`),Tk(1217,`po-page-default`),Zg(),Tk(1218,`.`),Zg()(),Jc(1219,`h4`,10),Tk(1220,`Propriedades`),Zg(),Jc(1221,`table`,11)(1222,`tr`,12)(1223,`th`,13),Tk(1224,`Nome`),Zg(),Jc(1225,`th`,13),Tk(1226,`Tipo`),Zg(),Jc(1227,`th`,13),Tk(1228,`Descrição`),Zg()(),Jc(1229,`tr`,14)(1230,`td`,15)(1231,`div`,16)(1232,`span`,17),Tk(1233,` otherActions`),_u(1234,`br`),Zg()()(),Jc(1235,`td`,18)(1236,`code`,26),Tk(1237,`string`),Zg()(),Jc(1238,`td`,21)(1239,`em`)(1240,`strong`),Tk(1241,`(opcional)`),Zg()(),Jc(1242,`p`),Tk(1243,`Legenda do `),Jc(1244,`code`),Tk(1245,`po-dropdown`),Zg(),Tk(1246,` de ações.`),Zg()()()(),Jc(1247,`h3`),Tk(1248,`Enums`),Zg(),Jc(1249,`h4`,4)(1250,`code`,5),Tk(1251,`PoPageActionsLayout`),Zg()(),Jc(1252,`div`,2)(1253,`p`),Tk(1254,`Define os layouts de exibição das ações no cabeçalho do `),Jc(1255,`code`),Tk(1256,`po-page-default`),Zg(),Tk(1257,`.`),Zg(),Jc(1258,`blockquote`)(1259,`p`),Tk(1260,`Compatível com todos os valores de `),Jc(1261,`code`),Tk(1262,`PoPageHeaderType`),Zg(),Tk(1263,`.`),Zg()()(),Jc(1264,`h4`,10),Tk(1265,`Propriedades`),Zg(),Jc(1266,`table`,11)(1267,`tr`,12)(1268,`th`,13),Tk(1269,`Nome`),Zg(),Jc(1270,`th`,13),Tk(1271,`Descrição`),Zg()(),Jc(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Tk(1276,` default`),_u(1277,`br`),Zg()()(),Jc(1278,`td`,21)(1279,`p`),Tk(1280,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Jc(1281,`em`),Tk(1282,`dropdown`),Zg(),Tk(1283,`.`),Zg(),Jc(1284,`p`),Tk(1285,`Quando `),Jc(1286,`code`),Tk(1287,`PoPageAction.kind`),Zg(),Tk(1288,` não é definido, a primeira ação recebe o estilo `),Jc(1289,`code`),Tk(1290,`primary`),Zg(),Tk(1291,`
e as demais recebem `),Jc(1292,`code`),Tk(1293,`secondary`),Zg(),Tk(1294,`.`),Zg()()(),Jc(1295,`tr`,14)(1296,`td`,15)(1297,`div`,16)(1298,`span`,17),Tk(1299,` dropdown`),_u(1300,`br`),Zg()()(),Jc(1301,`td`,21)(1302,`p`),Tk(1303,`Agrupa todas as ações exclusivamente dentro do menu `),Jc(1304,`em`),Tk(1305,`dropdown`),Zg(),Tk(1306,`.`),Zg()()(),Jc(1307,`tr`,14)(1308,`td`,15)(1309,`div`,16)(1310,`span`,17),Tk(1311,` mixed`),_u(1312,`br`),Zg()()(),Jc(1313,`td`,21)(1314,`p`),Tk(1315,`Exibe a primeira ação como botão e agrupa as demais no `),Jc(1316,`em`),Tk(1317,`dropdown`),Zg(),Tk(1318,`.`),Zg()()()(),Jc(1319,`h4`,4)(1320,`code`,5),Tk(1321,`PoPageHeaderType`),Zg()(),Jc(1322,`div`,2)(1323,`p`),Tk(1324,`Define os tipos de cabeçalho disponíveis no `),Jc(1325,`code`),Tk(1326,`po-page-default`),Zg(),Tk(1327,`.`),Zg()(),Jc(1328,`h4`,10),Tk(1329,`Propriedades`),Zg(),Jc(1330,`table`,11)(1331,`tr`,12)(1332,`th`,13),Tk(1333,`Nome`),Zg(),Jc(1334,`th`,13),Tk(1335,`Descrição`),Zg()(),Jc(1336,`tr`,14)(1337,`td`,15)(1338,`div`,16)(1339,`span`,17),Tk(1340,` primary`),_u(1341,`br`),Zg()()(),Jc(1342,`td`,21)(1343,`p`),Tk(1344,`Layout padrão com suporte a `),Jc(1345,`code`),Tk(1346,`p-breadcrumb`),Zg(),Tk(1347,`.`),Zg()()(),Jc(1348,`tr`,14)(1349,`td`,15)(1350,`div`,16)(1351,`span`,17),Tk(1352,` secondary`),_u(1353,`br`),Zg()()(),Jc(1354,`td`,21)(1355,`p`),Tk(1356,`Exibe um botão de retorno ao lado do título.`),Zg(),Jc(1357,`blockquote`)(1358,`p`),Tk(1359,`Incompatível com `),Jc(1360,`code`),Tk(1361,`p-breadcrumb`),Zg(),Tk(1362,`.`),Zg()()()(),Jc(1363,`tr`,14)(1364,`td`,15)(1365,`div`,16)(1366,`span`,17),Tk(1367,` tertiary`),_u(1368,`br`),Zg()()(),Jc(1369,`td`,21)(1370,`p`),Tk(1371,`Layout simplificado sem botão de retorno.`),Zg(),Jc(1372,`blockquote`)(1373,`p`),Tk(1374,`Incompatível com `),Jc(1375,`code`),Tk(1376,`p-breadcrumb`),Zg(),Tk(1377,`.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ke(o,ae){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-page-default-basic-view`)(2,`sample-po-page-default-labs-view`)(3,`sample-po-page-default-dashboard-view`)(4,`sample-po-page-default-refresh-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Default`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ke,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-page-default-doc`),Zg()()()),p&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ve,Pe,we,_e,Me],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(Xe),WV]})}return o})();var Ot=(()=>{class o{static ɵfac=function(p){return new(p||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,ke]})}return o})();export{Ot as DocPoPageDefaultModule};