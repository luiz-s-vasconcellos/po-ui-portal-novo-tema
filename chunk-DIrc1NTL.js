import{m as P,p as M}from"./main-OAHE3DMQ.js";import{$r as No,$t as ia,Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Oi as Vk,Pr as I,Qn as AZ,R as Koe,St as Ul,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,_n as q4,ca as ge$1,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,gi as R,it as Ru,jr as H_,li as QL,no as we$1,pn as p5,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var ge=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Default`]],template:function(p,i){p&1&&_u(0,`po-page-default`,0)},dependencies:[Mze],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-default-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Default Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-default-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-default-basic/sample-po-page-default-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-default-basic/sample-po-page-default-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();var Ae=()=>({});function ke(a,te){if(a&1){let r=KO();Jc(0,`po-input`,37),G0(),Zb(`ngModelChange`,function(i){U_(r);let m=tk(2);return Rk(m.helperFooterLabel,i)||(m.helperFooterLabel=i),H_(i)}),Kg()}if(a&2){let r=tk(2);Kb(`ngModel`,r.helperFooterLabel),q0()}}function Le(a,te){if(a&1){let r=KO();Jc(0,`po-widget`,11)(1,`div`,6)(2,`po-input`,33),G0(),Zb(`ngModelChange`,function(i){U_(r);let m=tk();return Rk(m.helperTitle,i)||(m.helperTitle=i),H_(i)}),Kg(),Jc(3,`po-input`,34),G0(),Zb(`ngModelChange`,function(i){U_(r);let m=tk();return Rk(m.helperContent,i)||(m.helperContent=i),H_(i)}),Kg()(),Jc(4,`div`,6)(5,`po-radio-group`,35),G0(),_t(`ngModelChange`,function(i){U_(r);let m=tk();return H_(m.helperType=i)}),Kg()(),Jc(6,`div`,6),LO(7,ke,1,1,`po-input`,36),Kg()()}if(a&2){let r=tk();wg(2),Kb(`ngModel`,r.helperTitle),q0(),wg(),Kb(`ngModel`,r.helperContent),q0(),wg(2),Ab(`p-columns`,4)(`ngModel`,r.helperType)(`p-options`,r.helperTypeOptions),q0(),wg(2),jO(r.helperType===`help`?7:-1)}}var he=(()=>{class a{poNotification=p(Ru);action={label:``,visible:!0,disabled:!1};actions=[];breadcrumb={items:[]};breadcrumbItem={label:``,link:void 0};breadcrumbParams={};componentsSize=`medium`;customLiterals;literals=``;pageActionsLayout=`default`;pageHeaderType=`primary`;subtitle=``;title=`PO Page Default`;helperContent=``;helperFooterLabel=``;helperTitle=``;helperType=`info`;showHelper=!1;showRefresh=!1;helperTypeOptions=[{label:`help`,value:`help`},{label:`info`,value:`info`}];get helper(){if(!this.showHelper||!this.helperContent)return;let r={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType===`help`&&this.helperFooterLabel&&(r.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information(`Footer action clicked`)}),r}actionKindOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];pageActionsLayoutOptions=[{label:`default`,value:`default`},{label:`dropdown`,value:`dropdown`},{label:`mixed`,value:`mixed`}];pageHeaderTypeOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(r$1){let p=s(r({},r$1),{visible:r$1.visible!==void 0?r$1.visible:!0,disabled:r$1.disabled!==void 0?r$1.disabled:!1});p.action=p.action?this.showAction.bind(this,p.action):void 0,this.actions=[...this.actions,p],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:``,link:void 0}}addBreadcrumbParam(){let r={[this.breadcrumbParams.property||``]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,r):this.breadcrumb.params=r,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onBack(){this.poNotification.information(`Back button clicked (p-back event)`)}onRefresh=()=>{this.poNotification.success(`Page refreshed (p-refresh event)`)};restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:``,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.helperContent=``,this.helperFooterLabel=``,this.helperTitle=``,this.helperType=`info`,this.literals=``,this.pageActionsLayout=`default`,this.pageHeaderType=`primary`,this.showHelper=!1,this.showRefresh=!1,this.subtitle=``,this.title=`PO Page Default`,this.restoreActionForm()}restoreActionForm(){this.action={label:``,visible:!0,disabled:!1}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-labs`]],standalone:!1,decls:51,vars:45,consts:[[`formPage`,`ngForm`],[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-helper`,`p-literals`,`p-page-actions-layout`,`p-page-header-type`,`p-refresh`,`p-title`,`p-subtitle`],[1,`po-row`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`showHelper`,`p-label`,`Helper`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`name`,`showRefresh`,`p-label`,`Refresh`,1,`po-md-6`,`po-pt-2`,`po-pb-2`,3,`ngModelChange`,`ngModel`],[`p-title`,`Helper`,1,`po-md-12`,`po-pb-3`],[`name`,`pageHeaderType`,`p-label`,`Page Header Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`pageActionsLayout`,`p-label`,`Page Actions Layout`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`p-title`,`Action`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-label`,`Kind`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-indeterminate`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`helperTitle`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperContent`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperType`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`helperFooterLabel`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=KO();Jc(0,`po-page-default`,5),_t(`p-back`,function(){return i.onBack()}),Kg(),_u(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,6)(5,`po-input`,7),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.title,l)||(i.title=l),H_(l)}),Kg(),Jc(6,`po-input`,8),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.subtitle,l)||(i.subtitle=l),H_(l)}),Kg(),Jc(7,`po-checkbox`,9),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.showHelper,l)||(i.showHelper=l),H_(l)}),Kg(),Jc(8,`po-checkbox`,10),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.showRefresh,l)||(i.showRefresh=l),H_(l)}),Kg(),LO(9,Le,8,6,`po-widget`,11),Jc(10,`po-select`,12),G0(),_t(`ngModelChange`,function(l){return i.pageHeaderType=l}),Kg(),Jc(11,`po-select`,13),G0(),_t(`ngModelChange`,function(l){return i.pageActionsLayout=l}),Kg(),Jc(12,`po-input`,14),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.literals,l)||(i.literals=l),H_(l)}),_t(`p-change`,function(){return i.changeLiterals()}),Kg(),Jc(13,`po-radio-group`,15),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.componentsSize,l)||(i.componentsSize=l),H_(l)}),Kg()()(),_u(14,`po-divider`),Jc(15,`po-widget`,16)(16,`form`,null,1)(18,`div`,6)(19,`po-input`,17),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.action.label,l)||(i.action.label=l),H_(l)}),Kg(),Jc(20,`po-input`,18),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.action.action,l)||(i.action.action=l),H_(l)}),Kg(),Jc(21,`po-input`,19),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.action.url,l)||(i.action.url=l),H_(l)}),Kg(),Jc(22,`po-select`,20),G0(),_t(`ngModelChange`,function(l){return i.action.type=l}),Kg(),Jc(23,`po-select`,21),G0(),_t(`ngModelChange`,function(l){return i.action.icon=l}),Kg(),Jc(24,`po-select`,22),G0(),_t(`ngModelChange`,function(l){return i.action.kind=l}),Kg(),Jc(25,`po-checkbox-group`,23),G0(),_t(`ngModelChange`,function(l){return i.action=l}),Kg()(),Jc(26,`div`,6)(27,`po-button`,24),_t(`p-click`,function(){return i.addAction(i.action)}),Kg()()()(),_u(28,`po-divider`),Jc(29,`form`,null,2)(31,`div`,6)(32,`po-input`,25),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.breadcrumb.favorite,l)||(i.breadcrumb.favorite=l),H_(l)}),Kg()()(),Jc(33,`form`,null,3)(35,`div`,6)(36,`po-input`,26),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.breadcrumbItem.label,l)||(i.breadcrumbItem.label=l),H_(l)}),Kg(),Jc(37,`po-input`,27),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.breadcrumbItem.link,l)||(i.breadcrumbItem.link=l),H_(l)}),Kg()(),Jc(38,`div`,6)(39,`po-button`,28),_t(`p-click`,function(){return i.addBreadcrumbItem()}),Kg()()(),_u(40,`po-divider`),Jc(41,`form`,null,4)(43,`div`,6)(44,`po-input`,29),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.breadcrumbParams.property,l)||(i.breadcrumbParams.property=l),H_(l)}),Kg(),Jc(45,`po-input`,30),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.breadcrumbParams.value,l)||(i.breadcrumbParams.value=l),H_(l)}),Kg()(),Jc(46,`div`,6)(47,`po-button`,31),_t(`p-click`,function(){return i.addBreadcrumbParam()}),Kg()()(),_u(48,`po-divider`),Jc(49,`div`,6)(50,`po-button`,32),_t(`p-click`,function(){return i.restore()}),Kg()()}if(p&2){let m=ok(17),s=ok(34),l=ok(42);Ab(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-helper`,i.helper||``)(`p-literals`,i.customLiterals??Vk(44,Ae))(`p-page-actions-layout`,i.pageActionsLayout)(`p-page-header-type`,i.pageHeaderType)(`p-refresh`,i.showRefresh?i.onRefresh:null)(`p-title`,i.title)(`p-subtitle`,i.subtitle),wg(5),Kb(`ngModel`,i.title),q0(),wg(),Kb(`ngModel`,i.subtitle),q0(),wg(),Kb(`ngModel`,i.showHelper),q0(),wg(),Kb(`ngModel`,i.showRefresh),q0(),wg(),jO(i.showHelper?9:-1),wg(),Ab(`ngModel`,i.pageHeaderType)(`p-options`,i.pageHeaderTypeOptions),q0(),wg(),Ab(`ngModel`,i.pageActionsLayout)(`p-options`,i.pageActionsLayoutOptions),q0(),wg(),Kb(`ngModel`,i.literals),q0(),wg(),Kb(`ngModel`,i.componentsSize),Ab(`p-columns`,4)(`p-options`,i.componentsSizeOptions),q0(),wg(6),Kb(`ngModel`,i.action.label),q0(),wg(),Kb(`ngModel`,i.action.action),q0(),wg(),Kb(`ngModel`,i.action.url),q0(),wg(),Ab(`ngModel`,i.action.type)(`p-options`,i.typeOptions),q0(),wg(),Ab(`ngModel`,i.action.icon)(`p-options`,i.iconOptions),q0(),wg(),Ab(`ngModel`,i.action.kind)(`p-options`,i.actionKindOptions),q0(),wg(),Ab(`ngModel`,i.action)(`p-columns`,4)(`p-indeterminate`,!0)(`p-options`,i.actionOptions),q0(),wg(2),Ab(`p-disabled`,m.form.invalid),wg(5),Kb(`ngModel`,i.breadcrumb.favorite),q0(),wg(4),Kb(`ngModel`,i.breadcrumbItem.label),q0(),wg(),Kb(`ngModel`,i.breadcrumbItem.link),q0(),wg(2),Ab(`p-disabled`,s.invalid??!1),wg(5),Kb(`ngModel`,i.breadcrumbParams.property),q0(),wg(),Kb(`ngModel`,i.breadcrumbParams.value),q0(),wg(2),Ab(`p-disabled`,l.invalid??!1)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,Ul,j4,Zte,Koe,Mze,yae],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-default-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Default Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-default-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-default-labs/sample-po-page-default-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-default-labs/sample-po-page-default-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`package`,label:`Package version`},{property:`downloads`,label:`Downloads`}]}getItems(){return[{cities:`São Paulo`,package:`2.0.0-beta.2`,downloads:`2000`},{cities:`Joinville`,package:`1.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,package:`2.0.0-beta.2`,downloads:`250`},{cities:`Santa Catarina`,package:`1.9.1`,downloads:`100`},{cities:`Curitiba`,package:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,package:`1.9.1`,downloads:`250`},{cities:`Londrina`,package:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,package:`1.9.1`,downloads:`1100`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Fe=[`formShare`];var Se=(()=>{class a{poNotification=p(Ru);sampleDashboardService=p(ee);formShare;poModal;columns;email=``;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`GitHub`,url:`https://github.com/po-ui/po-angular`},{label:`More info`,subItems:[{label:`po-dropdown documentation`,url:`https://po-ui.io/documentation/po-dropdown`}]},{label:`Components`,url:`/documentation`},{label:`Disable notification`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};helper={title:`Dashboard Info`,content:`View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.`,type:`info`};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Email invalid.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-dashboard`]],viewQuery:function(p,i){if(p&1&&Cu(Fe,7)(ia,7),p&2){let m;No(m=xo())&&(i.formShare=m.first),No(m=xo())&&(i.poModal=m.first)}},standalone:!1,features:[we$1([ee])],decls:38,vars:9,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,`p-subtitle`,`Website analytics overview`,3,`p-actions`,`p-breadcrumb`,`p-helper`],[1,`po-row`],[`p-title`,`Daily visitors`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-widget-text-subtitle`],[`p-title`,`Most viewed page`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Website status`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`NPM downloads`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Devforum PO questions`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[`p-title`,`Angular versions supported`,1,`po-md-6`,`po-lg-4`,`po-mb-2`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(p,i){if(p&1){let m=KO();Jc(0,`po-page-default`,1)(1,`div`,2)(2,`po-widget`,3)(3,`div`,4),Mk(4,`540`),Kg(),Jc(5,`div`,5),Mk(6,`www.po.com.br`),Kg()(),Jc(7,`po-widget`,6)(8,`div`,4),Mk(9,`300 views`),Kg(),Jc(10,`div`,5),Mk(11,`https://po-ui.io`),Kg()(),Jc(12,`po-widget`,7)(13,`div`,4),Mk(14,`Online`),Kg(),Jc(15,`div`,5),Mk(16,`28 days`),Kg()(),Jc(17,`po-widget`,8)(18,`div`,4),Mk(19,`266`),Kg(),Jc(20,`div`,5),Mk(21,`@po-ui/ng-components - 1.10.1`),Kg()(),Jc(22,`po-widget`,9)(23,`div`,4),Mk(24,`800 questions`),Kg(),Jc(25,`div`,5),Mk(26,`https://devforum.po.com.br`),Kg()(),Jc(27,`po-widget`,10)(28,`div`,4),Mk(29,`AngularJS - Angular 6`),Kg(),Jc(30,`div`,5),Mk(31,`Angular 6 most downloaded`),Kg()()(),_u(32,`po-divider`)(33,`po-table`,11),Kg(),Jc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),G0(),Zb(`ngModelChange`,function(l){return U_(m),Rk(i.email,l)||(i.email=l),H_(l)}),Kg()()()}p&2&&(Ab(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb)(`p-helper`,i.helper),wg(33),Ab(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),wg(),Ab(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),wg(3),Kb(`ngModel`,i.email),q0())},dependencies:[xZ,RZ,AZ,QL,WL,Nf,p5,ia,Mze,q4,yae],styles:[`.sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}`],changeDetection:1})}return a})();var xe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-dashboard-view`]],standalone:!1,decls:36,vars:0,consts:[[`id`,`sample-po-page-default-dashboard`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Default - Dashboard`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-default-dashboard`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { Injectable } from '@angular/core';

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
`),Kg()()()(),Jc(28,`po-tab`,14)(29,`div`)(30,`label`,7),Mk(31,`sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css`),Kg(),Jc(32,`div`,15)(33,`pre`,16),Mk(34,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),Kg()()()()()(),_u(35,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{poNotification;columns=[];items=[];loading=!1;allItems=[{id:1,product:`Notebook Pro`,quantity:12,price:4599.9,status:`Available`},{id:2,product:`Wireless Mouse`,quantity:85,price:129.9,status:`Available`},{id:3,product:`Mechanical Keyboard`,quantity:34,price:459.9,status:`Available`},{id:4,product:`Monitor 27"`,quantity:7,price:2199.9,status:`Low stock`},{id:5,product:`USB-C Hub`,quantity:0,price:249.9,status:`Out of stock`},{id:6,product:`Webcam HD`,quantity:23,price:349.9,status:`Available`},{id:7,product:`Headset Bluetooth`,quantity:41,price:599.9,status:`Available`},{id:8,product:`External SSD 1TB`,quantity:3,price:689.9,status:`Low stock`}];constructor(r){this.poNotification=r}ngOnInit(){this.columns=this.getColumns(),this.loadItems()}onRefresh=()=>{this.loading=!0,setTimeout(()=>{this.refreshItems(),this.loading=!1,this.poNotification.success(`Inventory data refreshed successfully.`)},1e3)};getColumns(){return[{property:`id`,label:`ID`,width:`60px`},{property:`product`,label:`Product`},{property:`quantity`,label:`Quantity`,width:`100px`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`,width:`140px`},{property:`status`,label:`Status`,type:`label`,width:`130px`,labels:[{value:`Available`,color:`color-10`,label:`Available`},{value:`Low stock`,color:`color-08`,label:`Low stock`},{value:`Out of stock`,color:`color-07`,label:`Out of stock`}]}]}loadItems(){this.items=[...this.allItems]}refreshItems(){this.items=this.allItems.map(r$2=>s(r({},r$2),{quantity:r$2.quantity+Math.floor(Math.random()*10),status:this.getStatus(r$2.quantity+Math.floor(Math.random()*10))}))}getStatus(r){return r===0?`Out of stock`:r<=5?`Low stock`:`Available`}static ɵfac=function(p){return new(p||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-refresh`]],standalone:!1,decls:2,vars:4,consts:[[`p-title`,`Inventory`,`p-subtitle`,`Product stock management`,3,`p-refresh`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-loading`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0),_u(1,`po-table`,1),Kg()),p&2&&(Ab(`p-refresh`,i.onRefresh),wg(),Ab(`p-columns`,i.columns)(`p-items`,i.items)(`p-loading`,i.loading))},dependencies:[Mze,q4],encapsulation:2})}return a})();var ye=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-refresh-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-default-refresh`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Default - Refresh`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-default-refresh`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Inventory" p-subtitle="Product stock management" [p-refresh]="onRefresh">
  <po-table [p-columns]="columns" [p-items]="items" [p-loading]="loading" p-striped> </po-table>
</po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-default-refresh/sample-po-page-default-refresh.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-default-doc`]],standalone:!1,decls:1378,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-default-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-back`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`language-html`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageDefaultLiterals`],[1,`language-typescript`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-page-actions-layout`,1,`docs-api-properties-row`],[`id`,`prop-p-page-header-type`,1,`docs-api-properties-row`],[`id`,`prop-p-refresh`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-helper-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-helper-options-content`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-event-on-click`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-footer-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`id`,`interface-po-helper-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`],[`id`,`interface-po-page-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-page-action-kind`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-page-default-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-default-literals-other-actions`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout`,1,`docs-api-class-name`],[`id`,`enum-po-page-actions-layout-default`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout-dropdown`,1,`docs-api-properties-row`],[`id`,`enum-po-page-actions-layout-mixed`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type`,1,`docs-api-class-name`],[`id`,`enum-po-page-header-type-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-page-header-type-tertiary`,1,`docs-api-properties-row`]],template:function(p,i){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Mk(8,`po-page-default`),Kg(),Mk(9,`, `),Jc(10,`code`),Mk(11,`po-page-detail`),Kg(),Mk(12,`,
`),Jc(13,`code`),Mk(14,`po-page-edit`),Kg(),Mk(15,`, `),Jc(16,`code`),Mk(17,`po-page-list`),Kg(),Mk(18,` e `),Jc(19,`code`),Mk(20,`po-page-slide`),Kg(),Mk(21,`.`),Kg()(),Jc(22,`h3`,3),Mk(23,`Componente`),Kg(),Jc(24,`h4`,4)(25,`code`,5),Mk(26,`PoPageDefaultComponent`),Kg()(),Jc(27,`div`,2)(28,`p`),Mk(29,`O `),Jc(30,`code`),Mk(31,`po-page-default`),Kg(),Mk(32,` é utilizado como container principal para telas sem um template definido.`),Kg(),Jc(33,`p`),Mk(34,`Oferece suporte a cabeçalhos dinâmicos via `),Jc(35,`code`),Mk(36,`p-page-header-type`),Kg(),Mk(37,`, navegação por `),Jc(38,`em`),Mk(39,`breadcrumb`),Kg(),Mk(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Jc(41,`code`),Mk(42,`p-page-actions-layout`),Kg(),Mk(43,`.`),Kg(),Jc(44,`h4`),Mk(45,`Tokens customizáveis`),Kg(),Jc(46,`blockquote`)(47,`p`),Mk(48,`Para maiores informações, acesse o guia `),Jc(49,`a`,6),Mk(50,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(51,`.`),Kg()(),Jc(52,`table`)(53,`thead`)(54,`tr`)(55,`th`),Mk(56,`Propriedade`),Kg(),Jc(57,`th`),Mk(58,`Descrição`),Kg(),Jc(59,`th`),Mk(60,`Valor Padrão`),Kg()()(),Jc(61,`tbody`)(62,`tr`)(63,`td`)(64,`strong`),Mk(65,`Página (po-page-default)`),Kg()(),_u(66,`td`)(67,`td`),Kg(),Jc(68,`tr`)(69,`td`)(70,`code`),Mk(71,`--background`),Kg()(),Jc(72,`td`),Mk(73,`Background da página (header e body)`),Kg(),Jc(74,`td`)(75,`code`),Mk(76,`var(--color-page-background-color-page)`),Kg()()(),Jc(77,`tr`)(78,`td`)(79,`strong`),Mk(80,`Header (po-page-header)`),Kg()(),_u(81,`td`)(82,`td`),Kg(),Jc(83,`tr`)(84,`td`)(85,`code`),Mk(86,`--padding`),Kg()(),Jc(87,`td`),Mk(88,`Espaçamento do header`),Kg(),Jc(89,`td`)(90,`code`),Mk(91,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Mk(95,`--gap`),Kg()(),Jc(96,`td`),Mk(97,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(98,`td`)(99,`code`),Mk(100,`var(--spacing-md)`),Kg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--gap-actions`),Kg()(),Jc(105,`td`),Mk(106,`Espaçamento entre as ações`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--spacing-xs)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`strong`),Mk(113,`Header (po-page-header .po-page-header-title)`),Kg()(),_u(114,`td`)(115,`td`),Kg(),Jc(116,`tr`)(117,`td`)(118,`code`),Mk(119,`--font-family`),Kg()(),Jc(120,`td`),Mk(121,`Família tipográfica do título`),Kg(),Jc(122,`td`)(123,`code`),Mk(124,`var(--font-family-theme)`),Kg()()(),Jc(125,`tr`)(126,`td`)(127,`strong`),Mk(128,`Content (po-page-content)`),Kg()(),_u(129,`td`)(130,`td`),Kg(),Jc(131,`tr`)(132,`td`)(133,`code`),Mk(134,`--padding-content`),Kg()(),Jc(135,`td`),Mk(136,`Espaçamento do conteúdo`),Kg(),Jc(137,`td`)(138,`code`),Mk(139,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(140,`div`,7)(141,`h4`,8),Mk(142,`Seletor`),Kg(),Jc(143,`pre`,9),Mk(144,`<po-page-default
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
`),Kg()(),Jc(145,`h4`,10),Mk(146,`Propriedades`),Kg(),Jc(147,`table`,11)(148,`tr`,12)(149,`th`,13),Mk(150,`Nome`),Kg(),Jc(151,`th`,13),Mk(152,`Tipo`),Kg(),Jc(153,`th`,13),Mk(154,`Padrão`),Kg(),Jc(155,`th`,13),Mk(156,`Descrição`),Kg()(),Jc(157,`tr`,14)(158,`td`,15)(159,`div`,16)(160,`span`,17),Mk(161,` p-actions`),_u(162,`br`),Kg()()(),Jc(163,`td`,18)(164,`code`,19),Mk(165,`Array<PoPageAction>`),Kg()(),Jc(166,`td`,20)(167,`p`)(168,`code`),Mk(169,`[]`),Kg()()(),Jc(170,`td`,21)(171,`em`)(172,`strong`),Mk(173,`(opcional)`),Kg()(),Jc(174,`p`),Mk(175,`Define a lista de ações que serão exibidas no cabeçalho da página.`),Kg(),Jc(176,`p`),Mk(177,`Recebe um array de objetos que implementam a interface `),Jc(178,`code`),Mk(179,`PoPageAction`),Kg(),Mk(180,`.`),Kg(),Jc(181,`blockquote`)(182,`p`),Mk(183,`O comportamento de exibição pode ser customizado através da propriedade `),Jc(184,`code`),Mk(185,`p-page-actions-layout`),Kg(),Mk(186,`.`),Kg()()()(),Jc(187,`tr`,22)(188,`td`,15)(189,`div`,23)(190,`span`,24),Mk(191,` (p-back)`),_u(192,`br`),Kg()()(),Jc(193,`td`,18)(194,`code`,25),Mk(195,`EventEmitter`),Kg()(),Jc(196,`td`,20),Mk(197,`-`),Kg(),Jc(198,`td`,21)(199,`em`)(200,`strong`),Mk(201,`(opcional)`),Kg()(),Jc(202,`p`),Mk(203,`Evento disparado ao clicar no botão voltar exibido no cabeçalho.`),Kg(),Jc(204,`blockquote`)(205,`p`),Mk(206,`Botão exibido apenas quando a propriedade `),Jc(207,`code`),Mk(208,`p-page-header-type`),Kg(),Mk(209,` está configurada como `),Jc(210,`code`),Mk(211,`secondary`),Kg(),Mk(212,`.`),Kg()()()(),Jc(213,`tr`,26)(214,`td`,15)(215,`div`,16)(216,`span`,17),Mk(217,` p-breadcrumb`),_u(218,`br`),Kg()()(),Jc(219,`td`,18)(220,`code`,27),Mk(221,`PoBreadcrumb`),Kg()(),Jc(222,`td`,20),Mk(223,`-`),Kg(),Jc(224,`td`,21)(225,`em`)(226,`strong`),Mk(227,`(opcional)`),Kg()(),Jc(228,`p`),Mk(229,`Define o sistema de navegação que indica o caminho da página atual na hierarquia da aplicação.`),Kg(),Jc(230,`p`),Mk(231,`Recebe um objeto que implementa a interface `),Jc(232,`code`),Mk(233,`PoBreadcrumb`),Kg(),Mk(234,`.`),Kg(),Jc(235,`blockquote`)(236,`p`),Mk(237,`Compatível com o cabeçalho (`),Jc(238,`code`),Mk(239,`p-page-header-type`),Kg(),Mk(240,`) do tipo `),Jc(241,`code`),Mk(242,`primary`),Kg(),Mk(243,`.`),Kg()()()(),Jc(244,`tr`,28)(245,`td`,15)(246,`div`,16)(247,`span`,17),Mk(248,` p-components-size`),_u(249,`br`),Kg()()(),Jc(250,`td`,18)(251,`code`,29),Mk(252,`string`),Kg()(),Jc(253,`td`,20)(254,`p`)(255,`code`),Mk(256,`medium`),Kg()()(),Jc(257,`td`,21)(258,`em`)(259,`strong`),Mk(260,`(opcional)`),Kg()(),Jc(261,`p`),Mk(262,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(263,`ul`)(264,`li`)(265,`code`),Mk(266,`small`),Kg(),Mk(267,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(268,`li`)(269,`code`),Mk(270,`medium`),Kg(),Mk(271,`: aplica a medida medium de cada componente.`),Kg()(),Jc(272,`blockquote`)(273,`p`),Mk(274,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(275,`code`),Mk(276,`medium`),Kg(),Mk(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(278,`a`,30),Mk(279,`po-theme`),Kg(),Mk(280,`.`),Kg()()()(),Jc(281,`tr`,31)(282,`td`,15)(283,`div`,16)(284,`span`,17),Mk(285,` p-helper`),_u(286,`br`),Kg()()(),Jc(287,`td`,18)(288,`code`,32),Mk(289,`PoHelperOptions `),Kg(),Jc(290,`code`,29),Mk(291,` string`),Kg()(),Jc(292,`td`,20)(293,`p`)(294,`code`),Mk(295,`info`),Kg()()(),Jc(296,`td`,21)(297,`em`)(298,`strong`),Mk(299,`(opcional)`),Kg()(),Jc(300,`p`),Mk(301,`Define o conteúdo do po-helper informativo exibido ao lado do subtítulo da página.`),Kg(),Jc(302,`p`),Mk(303,`Quando não houver subtítulo (`),Jc(304,`code`),Mk(305,`p-subtitle`),Kg(),Mk(306,`), o po-helper será exibido logo abaixo do título.`),Kg(),Jc(307,`p`),Mk(308,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Jc(309,`code`),Mk(310,`PoHelperOptions`),Kg(),Mk(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),Kg(),Jc(312,`p`),Mk(313,`Exemplo de uso:`),Kg(),Jc(314,`pre`)(315,`code`,33),Mk(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),Kg()()()(),Jc(317,`tr`,34)(318,`td`,15)(319,`div`,16)(320,`span`,17),Mk(321,` p-literals`),_u(322,`br`),Kg()()(),Jc(323,`td`,18)(324,`code`,35),Mk(325,`PoPageDefaultLiterals`),Kg()(),Jc(326,`td`,20),Mk(327,`-`),Kg(),Jc(328,`td`,21)(329,`em`)(330,`strong`),Mk(331,`(opcional)`),Kg()(),Jc(332,`p`),Mk(333,`Permite a customização das literais utilizadas no componente.`),Kg(),Jc(334,`p`),Mk(335,`Para customizar, basta passar um objeto parcial ou completo que implemente a interface `),Jc(336,`code`),Mk(337,`PoPageDefaultLiterals`),Kg(),Mk(338,`.`),Kg(),Jc(339,`p`),Mk(340,`Exemplo de uso:`),Kg(),Jc(341,`pre`)(342,`code`,33),Mk(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),Kg()(),Jc(344,`pre`)(345,`code`,36),Mk(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),Kg()(),Jc(347,`blockquote`)(348,`p`),Mk(349,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(350,`a`,37)(351,`code`),Mk(352,`PoI18nService`),Kg()(),Mk(353,` ou navegador.`),Kg()()()(),Jc(354,`tr`,38)(355,`td`,15)(356,`div`,16)(357,`span`,17),Mk(358,` p-page-actions-layout`),_u(359,`br`),Kg()()(),Jc(360,`td`,18)(361,`code`,29),Mk(362,`string`),Kg()(),Jc(363,`td`,20)(364,`p`)(365,`code`),Mk(366,`default`),Kg()()(),Jc(367,`td`,21)(368,`em`)(369,`strong`),Mk(370,`(opcional)`),Kg()(),Jc(371,`p`),Mk(372,`Define o layout de exibição das ações no cabeçalho.`),Kg(),Jc(373,`p`),Mk(374,`Aceita valores do enum `),Jc(375,`code`),Mk(376,`PoPageActionsLayout`),Kg(),Mk(377,`.`),Kg(),Jc(378,`blockquote`)(379,`p`),Mk(380,`Em telas reduzidas (< 480px) as ações fora do `),Jc(381,`em`),Mk(382,`dropdown`),Kg(),Mk(383,` que possuam a propriedade `),Jc(384,`code`),Mk(385,`PoPageAction.icon`),Kg(),Mk(386,` definida
exibir\xE3o apenas o \xEDcone.`),Kg()()()(),Jc(387,`tr`,39)(388,`td`,15)(389,`div`,16)(390,`span`,17),Mk(391,` p-page-header-type`),_u(392,`br`),Kg()()(),Jc(393,`td`,18)(394,`code`,29),Mk(395,`string`),Kg()(),Jc(396,`td`,20)(397,`p`)(398,`code`),Mk(399,`primary`),Kg()()(),Jc(400,`td`,21)(401,`em`)(402,`strong`),Mk(403,`(opcional)`),Kg()(),Jc(404,`p`),Mk(405,`Define o tipo de cabeçalho da página.`),Kg(),Jc(406,`p`),Mk(407,`Aceita valores do enum `),Jc(408,`code`),Mk(409,`PoPageHeaderType`),Kg(),Mk(410,`.`),Kg()()(),Jc(411,`tr`,40)(412,`td`,15)(413,`div`,16)(414,`span`,17),Mk(415,` p-refresh`),_u(416,`br`),Kg()()(),Jc(417,`td`,18)(418,`code`,41),Mk(419,`Function`),Kg()(),Jc(420,`td`,20),Mk(421,`-`),Kg(),Jc(422,`td`,21)(423,`em`)(424,`strong`),Mk(425,`(opcional)`),Kg()(),Jc(426,`p`),Mk(427,`Define a função de callback executada ao clicar no botão de atualização (refresh) ao lado do subtítulo da página.`),Kg(),Jc(428,`p`),Mk(429,`Quando não houver subtítulo (`),Jc(430,`code`),Mk(431,`p-subtitle`),Kg(),Mk(432,`), o refresh será exibido logo abaixo do título.`),Kg(),Jc(433,`blockquote`)(434,`p`),Mk(435,`Esta propriedade possui precedência sobre a configuração de `),Jc(436,`code`),Mk(437,`p-helper`),Kg(),Mk(438,`.`),Kg()(),Jc(439,`p`),Mk(440,`Exemplo de uso:`),Kg(),Jc(441,`pre`)(442,`code`,33),Mk(443,`<po-page-default
  p-title="Dashboard"
  [p-refresh]="onRefresh"
></po-page-default>
`),Kg()()()(),Jc(444,`tr`,42)(445,`td`,15)(446,`div`,16)(447,`span`,17),Mk(448,` p-subtitle`),_u(449,`br`),Kg()()(),Jc(450,`td`,18)(451,`code`,29),Mk(452,`string`),Kg()(),Jc(453,`td`,20),Mk(454,`-`),Kg(),Jc(455,`td`,21)(456,`em`)(457,`strong`),Mk(458,`(opcional)`),Kg()(),Jc(459,`p`),Mk(460,`Define um texto de apoio ou informações adicionais logo abaixo do título principal.`),Kg(),Jc(461,`p`),Mk(462,`Suporta formatação básica com as tags `),Jc(463,`code`),Mk(464,`<b>`),Kg(),Mk(465,` (negrito), `),Jc(466,`code`),Mk(467,`<strong>`),Kg(),Mk(468,` (negrito), `),Jc(469,`code`),Mk(470,`<i>`),Kg(),Mk(471,` (itálico), `),Jc(472,`code`),Mk(473,`<em>`),Kg(),Mk(474,` (it\xE1lico) e
`),Jc(475,`code`),Mk(476,`<u>`),Kg(),Mk(477,` (sublinhado).`),Kg(),Jc(478,`p`),Mk(479,`Exemplo:`),Kg(),Jc(480,`pre`)(481,`code`,36),Mk(482,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),Kg()(),Jc(483,`blockquote`)(484,`p`),Mk(485,`Requer que `),Jc(486,`code`),Mk(487,`p-title`),Kg(),Mk(488,` esteja definido.`),Kg()()()(),Jc(489,`tr`,43)(490,`td`,15)(491,`div`,16)(492,`span`,17),Mk(493,` p-title`),_u(494,`br`),Kg()()(),Jc(495,`td`,18)(496,`code`,29),Mk(497,`string`),Kg()(),Jc(498,`td`,20),Mk(499,`-`),Kg(),Jc(500,`td`,21)(501,`em`)(502,`strong`),Mk(503,`(opcional)`),Kg()(),Jc(504,`p`),Mk(505,`Define o título principal da página.`),Kg()()()(),Jc(506,`h3`),Mk(507,`Interfaces`),Kg(),Jc(508,`h4`,44)(509,`code`,5),Mk(510,`PoBreadcrumbItem`),Kg()(),Jc(511,`div`,2)(512,`p`),Mk(513,`Interface que define cada item do componente `),Jc(514,`strong`),Mk(515,`po-breadcrumb`),Kg(),Mk(516,`.`),Kg()(),Jc(517,`h4`,10),Mk(518,`Propriedades`),Kg(),Jc(519,`table`,11)(520,`tr`,12)(521,`th`,13),Mk(522,`Nome`),Kg(),Jc(523,`th`,13),Mk(524,`Tipo`),Kg(),Jc(525,`th`,13),Mk(526,`Descrição`),Kg()(),Jc(527,`tr`,45)(528,`td`,15)(529,`div`,16)(530,`span`,17),Mk(531,` action`),_u(532,`br`),Kg()()(),Jc(533,`td`,18)(534,`code`,41),Mk(535,`Function`),Kg()(),Jc(536,`td`,21)(537,`em`)(538,`strong`),Mk(539,`(opcional)`),Kg()(),Jc(540,`p`),Mk(541,`Ação executada ao clicar no item.`),Kg(),Jc(542,`blockquote`)(543,`p`),Mk(544,`A função atribuída a esta propriedade receberá o `),Jc(545,`em`),Mk(546,`label`),Kg(),Mk(547,` do item como parâmetro para execução.`),Kg()()()(),Jc(548,`tr`,46)(549,`td`,15)(550,`div`,16)(551,`span`,17),Mk(552,` label`),_u(553,`br`),Kg()()(),Jc(554,`td`,18)(555,`code`,29),Mk(556,`string`),Kg()(),Jc(557,`td`,21)(558,`p`),Mk(559,`Rótulo do item.`),Kg()()(),Jc(560,`tr`,47)(561,`td`,15)(562,`div`,16)(563,`span`,17),Mk(564,` link`),_u(565,`br`),Kg()()(),Jc(566,`td`,18)(567,`code`,29),Mk(568,`string`),Kg()(),Jc(569,`td`,21)(570,`em`)(571,`strong`),Mk(572,`(opcional)`),Kg()(),Jc(573,`p`),Mk(574,`Url do item.`),Kg(),Jc(575,`blockquote`)(576,`p`),Mk(577,`Caso o item também contenha uma `),Jc(578,`em`),Mk(579,`action`),Kg(),Mk(580,` definida, a preferência de execução será do `),Jc(581,`em`),Mk(582,`link`),Kg(),Mk(583,`.`),Kg()(),Jc(584,`blockquote`)(585,`p`),Mk(586,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(587,`strong`)(588,`a`,48),Mk(589,`Veja um exemplo de como criar rotas aqui`),Kg()(),Mk(590,`.`),Kg()(),Jc(591,`blockquote`)(592,`p`),Mk(593,`Esta propriedade é necessária para que a propriedade `),Jc(594,`code`),Mk(595,`p-favorite-service`),Kg(),Mk(596,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Jc(597,`h4`,49)(598,`code`,5),Mk(599,`PoBreadcrumb`),Kg()(),Jc(600,`div`,2)(601,`p`),Mk(602,`Interface que define o `),Jc(603,`code`),Mk(604,`po-breadcrumb`),Kg(),Mk(605,`.`),Kg()(),Jc(606,`h4`,10),Mk(607,`Propriedades`),Kg(),Jc(608,`table`,11)(609,`tr`,12)(610,`th`,13),Mk(611,`Nome`),Kg(),Jc(612,`th`,13),Mk(613,`Tipo`),Kg(),Jc(614,`th`,13),Mk(615,`Descrição`),Kg()(),Jc(616,`tr`,50)(617,`td`,15)(618,`div`,16)(619,`span`,17),Mk(620,` favorite`),_u(621,`br`),Kg()()(),Jc(622,`td`,18)(623,`code`,29),Mk(624,`string`),Kg()(),Jc(625,`td`,21)(626,`em`)(627,`strong`),Mk(628,`(opcional)`),Kg()(),Jc(629,`p`),Mk(630,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Jc(631,`blockquote`)(632,`p`),Mk(633,`Para maiores informações verificar a propriedade `),Jc(634,`code`),Mk(635,`p-favorite-service`),Kg(),Mk(636,` do componente `),Jc(637,`code`),Mk(638,`po-breadcrumb`),Kg(),Mk(639,`.`),Kg()()()(),Jc(640,`tr`,51)(641,`td`,15)(642,`div`,16)(643,`span`,17),Mk(644,` items`),_u(645,`br`),Kg()()(),Jc(646,`td`,18)(647,`code`,52),Mk(648,`Array<PoBreadcrumbItem>`),Kg()(),Jc(649,`td`,21)(650,`p`),Mk(651,`Lista de itens do `),Jc(652,`em`),Mk(653,`breadcrumb`),Kg(),Mk(654,`.`),Kg(),Jc(655,`p`)(656,`strong`),Mk(657,`Exemplo:`),Kg()(),Jc(658,`pre`)(659,`code`),Mk(660,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Jc(661,`tr`,53)(662,`td`,15)(663,`div`,16)(664,`span`,17),Mk(665,` params`),_u(666,`br`),Kg()()(),Jc(667,`td`,18)(668,`code`,54),Mk(669,`object`),Kg()(),Jc(670,`td`,21)(671,`em`)(672,`strong`),Mk(673,`(opcional)`),Kg()(),Jc(674,`p`),Mk(675,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Jc(676,`h4`,55)(677,`code`,5),Mk(678,`PoHelperOptions`),Kg()(),Jc(679,`div`,2)(680,`p`),Mk(681,`Interface para configuração das opções de ajuda (`),Jc(682,`em`),Mk(683,`helper`),Kg(),Mk(684,`).`),Kg()(),Jc(685,`h4`,10),Mk(686,`Propriedades`),Kg(),Jc(687,`table`,11)(688,`tr`,12)(689,`th`,13),Mk(690,`Nome`),Kg(),Jc(691,`th`,13),Mk(692,`Tipo`),Kg(),Jc(693,`th`,13),Mk(694,`Descrição`),Kg()(),Jc(695,`tr`,56)(696,`td`,15)(697,`div`,16)(698,`span`,17),Mk(699,` content`),_u(700,`br`),Kg()()(),Jc(701,`td`,18)(702,`code`,29),Mk(703,`string`),Kg()(),Jc(704,`td`,21)(705,`em`)(706,`strong`),Mk(707,`(opcional)`),Kg()(),Jc(708,`p`),Mk(709,`Texto explicativo exibido no popover.`),Kg(),Jc(710,`p`),Mk(711,`Suporta formatação básica com as tags `),Jc(712,`code`),Mk(713,`<b>`),Kg(),Mk(714,` (negrito), `),Jc(715,`code`),Mk(716,`<strong>`),Kg(),Mk(717,` (negrito), `),Jc(718,`code`),Mk(719,`<i>`),Kg(),Mk(720,` (itálico), `),Jc(721,`code`),Mk(722,`<em>`),Kg(),Mk(723,` (it\xE1lico) e
`),Jc(724,`code`),Mk(725,`<u>`),Kg(),Mk(726,` (sublinhado).`),Kg(),Jc(727,`p`),Mk(728,`Exemplo:`),Kg(),Jc(729,`pre`)(730,`code`,36),Mk(731,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Kg()()()(),Jc(732,`tr`,57)(733,`td`,15)(734,`div`,16)(735,`span`,17),Mk(736,` eventOnClick`),_u(737,`br`),Kg()()(),Jc(738,`td`,18)(739,`code`,41),Mk(740,`Function`),Kg()(),Jc(741,`td`,21)(742,`em`)(743,`strong`),Mk(744,`(opcional)`),Kg()(),Jc(745,`p`),Mk(746,`Evento disparado ao clicar no ícone do helper.`),Kg(),Jc(747,`p`),Mk(748,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Kg(),Jc(749,`p`),Mk(750,`Pode ser uma função ou um `),Jc(751,`code`),Mk(752,`EventEmitter`),Kg(),Mk(753,`.`),Kg(),Jc(754,`p`),Mk(755,`Exemplo:`),Kg(),Jc(756,`pre`)(757,`code`),Mk(758,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Kg()()()(),Jc(759,`tr`,58)(760,`td`,15)(761,`div`,16)(762,`span`,17),Mk(763,` footerAction`),_u(764,`br`),Kg()()(),Jc(765,`td`,18)(766,`code`,59),Mk(767,`{ label: string; action: Function;
}`),Kg()(),Jc(768,`td`,21)(769,`em`)(770,`strong`),Mk(771,`(opcional)`),Kg()(),Jc(772,`p`),Mk(773,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Jc(774,`code`),Mk(775,`help`),Kg(),Mk(776,` e desconsiderada quando o type for `),Jc(777,`code`),Mk(778,`info`),Kg(),Mk(779,`.`),Kg(),Jc(780,`p`),Mk(781,`Deve ser um objeto com as propriedades:`),Kg(),Jc(782,`ul`)(783,`li`)(784,`code`),Mk(785,`label`),Kg(),Mk(786,`: Texto do botão.`),Kg(),Jc(787,`li`)(788,`code`),Mk(789,`action`),Kg(),Mk(790,`: Função executada ao clicar no botão.`),Kg()(),Jc(791,`p`),Mk(792,`Exemplo:`),Kg(),Jc(793,`pre`)(794,`code`,36),Mk(795,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Kg()()()(),Jc(796,`tr`,60)(797,`td`,15)(798,`div`,16)(799,`span`,17),Mk(800,` title`),_u(801,`br`),Kg()()(),Jc(802,`td`,18)(803,`code`,29),Mk(804,`string`),Kg()(),Jc(805,`td`,21)(806,`em`)(807,`strong`),Mk(808,`(opcional)`),Kg()(),Jc(809,`p`),Mk(810,`Título do helper exibido no popover.`),Kg()()(),Jc(811,`tr`,61)(812,`td`,15)(813,`div`,16)(814,`span`,17),Mk(815,` type`),_u(816,`br`),Kg()()(),Jc(817,`td`,18)(818,`code`,62),Mk(819,`'info' `),Kg(),Jc(820,`code`,63),Mk(821,` 'help'`),Kg()(),Jc(822,`td`,21)(823,`em`)(824,`strong`),Mk(825,`(opcional)`),Kg()(),Jc(826,`p`),Mk(827,`Tipo do ícone exibido: `),Jc(828,`code`),Mk(829,`info`),Kg(),Mk(830,` ou `),Jc(831,`code`),Mk(832,`help`),Kg(),Mk(833,`.`),Kg(),Jc(834,`p`),Mk(835,`Quando o valor é `),Jc(836,`code`),Mk(837,`info`),Kg(),Mk(838,`, o popover exibe apenas informações e não permite ações customizadas.`),Kg(),Jc(839,`p`),Mk(840,`Quando o valor é `),Jc(841,`code`),Mk(842,`help`),Kg(),Mk(843,`, o popover pode exibir ações customizadas no rodapé.`),Kg()()()(),Jc(844,`h4`,64)(845,`code`,5),Mk(846,`PoPageAction`),Kg()(),Jc(847,`div`,2)(848,`p`),Mk(849,`Interface para as ações dos componentes `),Jc(850,`code`),Mk(851,`po-page-default`),Kg(),Mk(852,` e `),Jc(853,`code`),Mk(854,`po-page-list`),Kg(),Mk(855,`.`),Kg(),Jc(856,`p`),Mk(857,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Jc(858,`em`),Mk(859,`dropdown`),Kg(),Mk(860,`,
conforme o `),Jc(861,`code`),Mk(862,`PoPageActionsLayout`),Kg(),Mk(863,` e o tamanho da tela.`),Kg(),Jc(864,`blockquote`)(865,`p`),Mk(866,`As propriedades `),Jc(867,`code`),Mk(868,`separator`),Kg(),Mk(869,`, `),Jc(870,`code`),Mk(871,`selected`),Kg(),Mk(872,` e `),Jc(873,`code`),Mk(874,`subItems`),Kg(),Mk(875,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Jc(876,`em`),Mk(877,`dropdown`),Kg(),Mk(878,`.`),Kg()()(),Jc(879,`h4`,10),Mk(880,`Propriedades`),Kg(),Jc(881,`table`,11)(882,`tr`,12)(883,`th`,13),Mk(884,`Nome`),Kg(),Jc(885,`th`,13),Mk(886,`Tipo`),Kg(),Jc(887,`th`,13),Mk(888,`Descrição`),Kg()(),Jc(889,`tr`,65)(890,`td`,15)(891,`div`,16)(892,`span`,17),Mk(893,` action`),_u(894,`br`),Kg()()(),Jc(895,`td`,18)(896,`code`,41),Mk(897,`Function`),Kg()(),Jc(898,`td`,21)(899,`em`)(900,`strong`),Mk(901,`(opcional)`),Kg()(),Jc(902,`p`),Mk(903,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(904,`p`),Mk(905,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(906,`code`),Mk(907,`subItems`),Kg(),Mk(908,`.`),Kg(),Jc(909,`blockquote`)(910,`p`),Mk(911,`Para que a função seja executada no contexto do componente, utilize `),Jc(912,`em`),Mk(913,`bind`),Kg(),Mk(914,`:
`),Jc(915,`code`),Mk(916,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(917,`tr`,66)(918,`td`,15)(919,`div`,16)(920,`span`,17),Mk(921,` disabled`),_u(922,`br`),Kg()()(),Jc(923,`td`,18)(924,`code`,67),Mk(925,`boolean `),Kg(),Jc(926,`code`,41),Mk(927,` Function`),Kg()(),Jc(928,`td`,21)(929,`em`)(930,`strong`),Mk(931,`(opcional)`),Kg()(),Jc(932,`p`),Mk(933,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(934,`tr`,68)(935,`td`,15)(936,`div`,16)(937,`span`,17),Mk(938,` icon`),_u(939,`br`),Kg()()(),Jc(940,`td`,18)(941,`code`,29),Mk(942,`string `),Kg(),Jc(943,`code`,69),Mk(944,` TemplateRef<void>`),Kg()(),Jc(945,`td`,21)(946,`em`)(947,`strong`),Mk(948,`(opcional)`),Kg()(),Jc(949,`p`),Mk(950,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(951,`p`),Mk(952,`Aceita ícones da `),Jc(953,`a`,70),Mk(954,`Biblioteca de ícones`),Kg(),Mk(955,`, fontes externas (ex: Font Awesome)
ou um `),Jc(956,`code`),Mk(957,`TemplateRef`),Kg(),Mk(958,` para ícones customizados.`),Kg(),Jc(959,`pre`)(960,`code`),Mk(961,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(962,`tr`,71)(963,`td`,15)(964,`div`,16)(965,`span`,17),Mk(966,` kind`),_u(967,`br`),Kg()()(),Jc(968,`td`,18)(969,`code`,29),Mk(970,`string`),Kg()(),Jc(971,`td`,21)(972,`em`)(973,`strong`),Mk(974,`(opcional)`),Kg()(),Jc(975,`p`),Mk(976,`Define o estilo visual da ação quando exibida como botão fora do `),Jc(977,`em`),Mk(978,`dropdown`),Kg(),Mk(979,`.`),Kg(),Jc(980,`p`),Mk(981,`Valores permitidos:`),Kg(),Jc(982,`ul`)(983,`li`)(984,`code`),Mk(985,`primary`),Kg(),Mk(986,`: botão com maior destaque visual.`),Kg(),Jc(987,`li`)(988,`code`),Mk(989,`secondary`),Kg(),Mk(990,`: estilo padrão.`),Kg()(),Jc(991,`blockquote`)(992,`p`),Mk(993,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Kg()(),Jc(994,`blockquote`)(995,`p`),Mk(996,`Somente uma ação pode ter `),Jc(997,`code`),Mk(998,`kind`),Kg(),Mk(999,` igual a `),Jc(1e3,`code`),Mk(1001,`primary`),Kg(),Mk(1002,`. Caso mais de uma defina `),Jc(1003,`code`),Mk(1004,`primary`),Kg(),Mk(1005,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Jc(1006,`code`),Mk(1007,`secondary`),Kg(),Mk(1008,`.`),Kg()(),Jc(1009,`blockquote`)(1010,`p`),Mk(1011,`Quando não definido, o estilo é determinado pelo `),Jc(1012,`code`),Mk(1013,`PoPageActionsLayout`),Kg(),Mk(1014,`.`),Kg()()()(),Jc(1015,`tr`,72)(1016,`td`,15)(1017,`div`,16)(1018,`span`,17),Mk(1019,` label`),_u(1020,`br`),Kg()()(),Jc(1021,`td`,18)(1022,`code`,29),Mk(1023,`string`),Kg()(),Jc(1024,`td`,21)(1025,`p`),Mk(1026,`Rótulo da ação.`),Kg(),Jc(1027,`p`),Mk(1028,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1029,`code`),Mk(1030,`subItems`),Kg(),Mk(1031,`.`),Kg()()(),Jc(1032,`tr`,73)(1033,`td`,15)(1034,`div`,16)(1035,`span`,17),Mk(1036,` selected`),_u(1037,`br`),Kg()()(),Jc(1038,`td`,18)(1039,`code`,67),Mk(1040,`boolean`),Kg()(),Jc(1041,`td`,21)(1042,`em`)(1043,`strong`),Mk(1044,`(opcional)`),Kg()(),Jc(1045,`p`),Mk(1046,`Define se a ação está selecionada.`),Kg()()(),Jc(1047,`tr`,74)(1048,`td`,15)(1049,`div`,16)(1050,`span`,17),Mk(1051,` separator`),_u(1052,`br`),Kg()()(),Jc(1053,`td`,18)(1054,`code`,67),Mk(1055,`boolean`),Kg()(),Jc(1056,`td`,21)(1057,`em`)(1058,`strong`),Mk(1059,`(opcional)`),Kg()(),Jc(1060,`p`),Mk(1061,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(1062,`tr`,75)(1063,`td`,15)(1064,`div`,16)(1065,`span`,17),Mk(1066,` subItems`),_u(1067,`br`),Kg()()(),Jc(1068,`td`,18)(1069,`code`,76),Mk(1070,`Array<PoPopupAction>`),Kg()(),Jc(1071,`td`,21)(1072,`em`)(1073,`strong`),Mk(1074,`(opcional)`),Kg()(),Jc(1075,`p`),Mk(1076,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(1077,`pre`)(1078,`code`),Mk(1079,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(1080,`p`),Mk(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(1082,`blockquote`)(1083,`p`),Mk(1084,`As propriedades `),Jc(1085,`code`),Mk(1086,`disabled`),Kg(),Mk(1087,`, `),Jc(1088,`code`),Mk(1089,`type`),Kg(),Mk(1090,` e `),Jc(1091,`code`),Mk(1092,`visible`),Kg(),Mk(1093,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(1094,`blockquote`)(1095,`p`),Mk(1096,`Quando `),Jc(1097,`code`),Mk(1098,`url`),Kg(),Mk(1099,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(1100,`blockquote`)(1101,`p`),Mk(1102,`Em subníveis aninhados, o `),Jc(1103,`code`),Mk(1104,`icon`),Kg(),Mk(1105,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(1106,`tr`,77)(1107,`td`,15)(1108,`div`,16)(1109,`span`,17),Mk(1110,` subItemsLazy`),_u(1111,`br`),Kg()()(),Jc(1112,`td`,18)(1113,`code`,78),Mk(1114,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(1115,`td`,21)(1116,`em`)(1117,`strong`),Mk(1118,`(opcional)`),Kg()(),Jc(1119,`p`),Mk(1120,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(1121,`p`),Mk(1122,`Recebe o item agrupador e retorna um `),Jc(1123,`code`),Mk(1124,`Observable<Array<PoPopupAction>>`),Kg(),Mk(1125,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1126,`strong`),Mk(1127,`apenas`),Kg(),Mk(1128,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1129,`code`),Mk(1130,`po-skeleton`),Kg(),Mk(1131,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(1132,`pre`)(1133,`code`),Mk(1134,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(1135,`blockquote`)(1136,`p`),Mk(1137,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(1138,`p`),Mk(1139,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(1140,`tr`,79)(1141,`td`,15)(1142,`div`,16)(1143,`span`,17),Mk(1144,` type`),_u(1145,`br`),Kg()()(),Jc(1146,`td`,18)(1147,`code`,29),Mk(1148,`string`),Kg()(),Jc(1149,`td`,21)(1150,`em`)(1151,`strong`),Mk(1152,`(opcional)`),Kg()(),Jc(1153,`p`),Mk(1154,`Define a cor do item.`),Kg(),Jc(1155,`p`),Mk(1156,`Valores válidos:`),Kg(),Jc(1157,`ul`)(1158,`li`)(1159,`code`),Mk(1160,`default`),Kg()(),Jc(1161,`li`)(1162,`code`),Mk(1163,`danger`),Kg()()()()(),Jc(1164,`tr`,80)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Mk(1168,` url`),_u(1169,`br`),Kg()()(),Jc(1170,`td`,18)(1171,`code`,29),Mk(1172,`string`),Kg()(),Jc(1173,`td`,21)(1174,`em`)(1175,`strong`),Mk(1176,`(opcional)`),Kg()(),Jc(1177,`p`),Mk(1178,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(1179,`p`),Mk(1180,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1181,`code`),Mk(1182,`url`),Kg(),Mk(1183,` é informada em um agrupador, o clique `),Jc(1184,`strong`),Mk(1185,`não abrirá os subitens`),Kg(),Mk(1186,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(1187,`blockquote`)(1188,`p`),Mk(1189,`Quando informada, tem prioridade sobre a propriedade `),Jc(1190,`code`),Mk(1191,`action`),Kg(),Mk(1192,`.`),Kg()()()(),Jc(1193,`tr`,81)(1194,`td`,15)(1195,`div`,16)(1196,`span`,17),Mk(1197,` visible`),_u(1198,`br`),Kg()()(),Jc(1199,`td`,18)(1200,`code`,67),Mk(1201,`boolean `),Kg(),Jc(1202,`code`,41),Mk(1203,` Function`),Kg()(),Jc(1204,`td`,21)(1205,`em`)(1206,`strong`),Mk(1207,`(opcional)`),Kg()(),Jc(1208,`p`),Mk(1209,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Jc(1210,`h4`,82)(1211,`code`,5),Mk(1212,`PoPageDefaultLiterals`),Kg()(),Jc(1213,`div`,2)(1214,`p`),Mk(1215,`Interface para definição das literais usadas no `),Jc(1216,`code`),Mk(1217,`po-page-default`),Kg(),Mk(1218,`.`),Kg()(),Jc(1219,`h4`,10),Mk(1220,`Propriedades`),Kg(),Jc(1221,`table`,11)(1222,`tr`,12)(1223,`th`,13),Mk(1224,`Nome`),Kg(),Jc(1225,`th`,13),Mk(1226,`Tipo`),Kg(),Jc(1227,`th`,13),Mk(1228,`Descrição`),Kg()(),Jc(1229,`tr`,83)(1230,`td`,15)(1231,`div`,16)(1232,`span`,17),Mk(1233,` otherActions`),_u(1234,`br`),Kg()()(),Jc(1235,`td`,18)(1236,`code`,29),Mk(1237,`string`),Kg()(),Jc(1238,`td`,21)(1239,`em`)(1240,`strong`),Mk(1241,`(opcional)`),Kg()(),Jc(1242,`p`),Mk(1243,`Legenda do `),Jc(1244,`code`),Mk(1245,`po-dropdown`),Kg(),Mk(1246,` de ações.`),Kg()()()(),Jc(1247,`h3`),Mk(1248,`Enums`),Kg(),Jc(1249,`h4`,84)(1250,`code`,5),Mk(1251,`PoPageActionsLayout`),Kg()(),Jc(1252,`div`,2)(1253,`p`),Mk(1254,`Define os layouts de exibição das ações no cabeçalho do `),Jc(1255,`code`),Mk(1256,`po-page-default`),Kg(),Mk(1257,`.`),Kg(),Jc(1258,`blockquote`)(1259,`p`),Mk(1260,`Compatível com todos os valores de `),Jc(1261,`code`),Mk(1262,`PoPageHeaderType`),Kg(),Mk(1263,`.`),Kg()()(),Jc(1264,`h4`,10),Mk(1265,`Propriedades`),Kg(),Jc(1266,`table`,11)(1267,`tr`,12)(1268,`th`,13),Mk(1269,`Nome`),Kg(),Jc(1270,`th`,13),Mk(1271,`Descrição`),Kg()(),Jc(1272,`tr`,85)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Mk(1276,` default`),_u(1277,`br`),Kg()()(),Jc(1278,`td`,21)(1279,`p`),Mk(1280,`Exibe as ações como botões (até 3 em desktop e 2 em mobile), agrupando as demais no `),Jc(1281,`em`),Mk(1282,`dropdown`),Kg(),Mk(1283,`.`),Kg(),Jc(1284,`p`),Mk(1285,`Quando `),Jc(1286,`code`),Mk(1287,`PoPageAction.kind`),Kg(),Mk(1288,` não é definido, a primeira ação recebe o estilo `),Jc(1289,`code`),Mk(1290,`primary`),Kg(),Mk(1291,`
e as demais recebem `),Jc(1292,`code`),Mk(1293,`secondary`),Kg(),Mk(1294,`.`),Kg()()(),Jc(1295,`tr`,86)(1296,`td`,15)(1297,`div`,16)(1298,`span`,17),Mk(1299,` dropdown`),_u(1300,`br`),Kg()()(),Jc(1301,`td`,21)(1302,`p`),Mk(1303,`Agrupa todas as ações exclusivamente dentro do menu `),Jc(1304,`em`),Mk(1305,`dropdown`),Kg(),Mk(1306,`.`),Kg()()(),Jc(1307,`tr`,87)(1308,`td`,15)(1309,`div`,16)(1310,`span`,17),Mk(1311,` mixed`),_u(1312,`br`),Kg()()(),Jc(1313,`td`,21)(1314,`p`),Mk(1315,`Exibe a primeira ação como botão e agrupa as demais no `),Jc(1316,`em`),Mk(1317,`dropdown`),Kg(),Mk(1318,`.`),Kg()()()(),Jc(1319,`h4`,88)(1320,`code`,5),Mk(1321,`PoPageHeaderType`),Kg()(),Jc(1322,`div`,2)(1323,`p`),Mk(1324,`Define os tipos de cabeçalho disponíveis no `),Jc(1325,`code`),Mk(1326,`po-page-default`),Kg(),Mk(1327,`.`),Kg()(),Jc(1328,`h4`,10),Mk(1329,`Propriedades`),Kg(),Jc(1330,`table`,11)(1331,`tr`,12)(1332,`th`,13),Mk(1333,`Nome`),Kg(),Jc(1334,`th`,13),Mk(1335,`Descrição`),Kg()(),Jc(1336,`tr`,89)(1337,`td`,15)(1338,`div`,16)(1339,`span`,17),Mk(1340,` primary`),_u(1341,`br`),Kg()()(),Jc(1342,`td`,21)(1343,`p`),Mk(1344,`Layout padrão com suporte a `),Jc(1345,`code`),Mk(1346,`p-breadcrumb`),Kg(),Mk(1347,`.`),Kg()()(),Jc(1348,`tr`,90)(1349,`td`,15)(1350,`div`,16)(1351,`span`,17),Mk(1352,` secondary`),_u(1353,`br`),Kg()()(),Jc(1354,`td`,21)(1355,`p`),Mk(1356,`Exibe um botão de retorno ao lado do título.`),Kg(),Jc(1357,`blockquote`)(1358,`p`),Mk(1359,`Incompatível com `),Jc(1360,`code`),Mk(1361,`p-breadcrumb`),Kg(),Mk(1362,`.`),Kg()()()(),Jc(1363,`tr`,91)(1364,`td`,15)(1365,`div`,16)(1366,`span`,17),Mk(1367,` tertiary`),_u(1368,`br`),Kg()()(),Jc(1369,`td`,21)(1370,`p`),Mk(1371,`Layout simplificado sem botão de retorno.`),Kg(),Jc(1372,`blockquote`)(1373,`p`),Mk(1374,`Incompatível com `),Jc(1375,`code`),Mk(1376,`p-breadcrumb`),Kg(),Mk(1377,`.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function We(a,te){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-default-basic-view`)(2,`sample-po-page-default-labs-view`)(3,`sample-po-page-default-dashboard-view`)(4,`sample-po-page-default-refresh-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Page Default`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Page Default · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0),LO(1,We,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-page-default-doc`),Kg()()),p&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,fe,Ee,xe,ye,Pe],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Re),GV]})}return a})();var Tt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,we]})}return a})();export{Tt as DocPoPageDefaultModule};