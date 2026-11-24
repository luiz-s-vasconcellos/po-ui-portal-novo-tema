import{m as P,p as M}from"./main-6GCKJMTQ.js";import{An as sie,Ar as G0,At as Zte,Ba as p,Br as Jn,F as Joe,Fr as H_,G as Nf,H as Lze,Hi as YI,Hr as KO,Ki as Zb,L as Koe,La as ok,Li as WL,Lr as I,Pn as tre,Pt as are,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,an as ia,ar as Ab,bi as R,bn as oi,co as wg,da as ge$1,eo as tk,ho as xo,j as I4,jr as GV,ki as U_,oo as vt,or as An,p as DP,pi as QL,qr as LO,ra as de,ri as No,rt as Ru,sn as j4,so as we,ti as NZ,tt as R4,wn as q4,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var ge=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(l,n){l&1&&_u(0,`po-page-list`,0)},dependencies:[Lze],encapsulation:2,changeDetection:1})}return s})();var be=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-list-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page List Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-list-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-list p-title="PO Page List"> </po-page-list>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return s})();var he=(()=>{class s{poNotification=p(Ru);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(r){let l=Object.assign({},r);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let r={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,r):this.breadcrumb.params=r,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(r,l){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:r,hideRemoveAll:l})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(r){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,r)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}showAdvanceAction(r){this.poNotification.success(`Advance Action clicked: ${r}`)}static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let p=KO();Jc(0,`po-page-list`,6),_u(1,`po-divider`)(2,`po-info`,7),Kg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action.action,a)||(n.action.action=a),H_(a)}),Kg(),Jc(8,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action.label,a)||(n.action.label=a),H_(a)}),Kg(),Jc(9,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action.url,a)||(n.action.url=a),H_(a)}),Kg(),Jc(10,`po-select`,12),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action.type,a)||(n.action.type=a),H_(a)}),Kg(),Jc(11,`po-select`,13),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action.icon,a)||(n.action.icon=a),H_(a)}),Kg(),Jc(12,`po-checkbox-group`,14),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.action,a)||(n.action=a),H_(a)}),Kg()(),Jc(13,`div`,8)(14,`po-button`,15),vt(`p-click`,function(){return n.addAction(n.action)}),Kg()()(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),H_(a)}),Kg()()(),Jc(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),H_(a)}),Kg(),Jc(24,`po-input`,18),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),H_(a)}),Kg()(),Jc(25,`div`,8)(26,`po-button`,19),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),_u(27,`po-divider`),Jc(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),H_(a)}),Kg(),Jc(32,`po-input`,21),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),H_(a)}),Kg()(),Jc(33,`div`,8)(34,`po-button`,22),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),_u(35,`po-divider`),Jc(36,`div`,8)(37,`po-input`,23),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),H_(a)}),vt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),Kg(),Jc(38,`po-switch`,24),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),H_(a)}),vt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),Kg()(),Jc(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerLabel,a)||(n.disclaimerLabel=a),H_(a)}),Kg(),Jc(43,`po-input`,26),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerProperty,a)||(n.disclaimerProperty=a),H_(a)}),Kg()(),Jc(44,`div`,8)(45,`po-input`,27),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerValue,a)||(n.disclaimerValue=a),H_(a)}),Kg(),Jc(46,`po-switch`,28),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),H_(a)}),Kg()(),Jc(47,`div`,8)(48,`po-button`,29),vt(`p-click`,function(){return n.addDisclaimer()}),Kg()()(),_u(49,`po-divider`),Jc(50,`form`,null,5)(52,`po-input`,30),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.title,a)||(n.title=a),H_(a)}),Kg(),Jc(53,`po-input`,31),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.subtitle,a)||(n.subtitle=a),H_(a)}),Kg(),Jc(54,`po-input`,32),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.filter.placeholder,a)||(n.filter.placeholder=a),H_(a)}),Kg(),Jc(55,`po-input`,33),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.filter.width,a)||(n.filter.width=a),H_(a)}),Kg(),Jc(56,`po-input`,34),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.literals,a)||(n.literals=a),H_(a)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Jc(57,`po-radio-group`,35),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.componentsSize,a)||(n.componentsSize=a),H_(a)}),Kg(),Jc(58,`div`,8)(59,`po-button`,36),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let p=ok(5),m=ok(21),a=ok(29),ye=ok(40);Ab(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Ab(`p-value`,n.filterModel),wg(5),Kb(`ngModel`,n.action.action),q0(),wg(),Kb(`ngModel`,n.action.label),q0(),wg(),Kb(`ngModel`,n.action.url),q0(),wg(),Kb(`ngModel`,n.action.type),Ab(`p-options`,n.typeOptions),q0(),wg(),Kb(`ngModel`,n.action.icon),Ab(`p-options`,n.iconOptions),q0(),wg(),Kb(`ngModel`,n.action),Ab(`p-options`,n.actionOptions),q0(),wg(2),Ab(`p-disabled`,p.form.invalid),wg(5),Kb(`ngModel`,n.breadcrumb.favorite),q0(),wg(4),Kb(`ngModel`,n.breadcrumbItem.label),q0(),wg(),Kb(`ngModel`,n.breadcrumbItem.link),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(5),Kb(`ngModel`,n.breadcrumbParams.property),q0(),wg(),Kb(`ngModel`,n.breadcrumbParams.value),q0(),wg(2),Ab(`p-disabled`,a.invalid),wg(3),Kb(`ngModel`,n.disclaimerGroupTitle),q0(),wg(),Kb(`ngModel`,n.disclaimerGroupHideRemoveAll),q0(),wg(4),Kb(`ngModel`,n.disclaimerLabel),q0(),wg(),Kb(`ngModel`,n.disclaimerProperty),q0(),wg(2),Kb(`ngModel`,n.disclaimerValue),q0(),wg(),Kb(`ngModel`,n.disclaimerHideClose),q0(),wg(2),Ab(`p-disabled`,ye.invalid),wg(4),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.subtitle),q0(),wg(),Kb(`ngModel`,n.filter.placeholder),q0(),wg(),Kb(`ngModel`,n.filter.width),q0(),wg(),Kb(`ngModel`,n.literals),q0(),wg(),Kb(`ngModel`,n.componentsSize),Ab(`p-options`,n.componentsSizeOptions),q0()}},dependencies:[NZ,YI,TZ,RZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,R4,Joe,Lze],encapsulation:2,changeDetection:1})}return s})();var Ee=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-list-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page List Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-list-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
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
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

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
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
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
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

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

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return s})();var J=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(l){return new(l||s)};static ɵprov=R({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var Ae=[`advancedFilterModal`];var _e=[`poPageList`];var Se=(()=>{class s{sampleHiringProcessesService=p(J);poNotification=p(Ru);poDialog=p(sie);router=p(An);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let r=[...this.jobDescription,...this.status];this.filterAction(r)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(r=>r.$selected)}filter(){let r=this.disclaimers.map(l=>l.value);r.length?this.hiringProcessesFilter(r):this.resetFilterHiringProcess()}filterAction(r){let l=typeof r==`string`?[r]:[...r];this.populateDisclaimers(l),this.filter()}hireCandidate(){let r=this.hiringProcesses.find(l=>l.$selected);switch(r.hireStatus){case`progress`:r.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(r){this.hiringProcessesFiltered=this.hiringProcesses.filter(l=>Object.keys(l).some(n=>!(l[n]instanceof Object)&&this.includeFilter(l[n],r)))}includeFilter(r,l){return l.some(n=>String(r).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(r){this.disclaimers=r,this.filter()}onClearDisclaimer(r){r.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(r){let l=r.length>1?`advanced`:`search`;this.disclaimers=r.map(n=>({value:n,property:l})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(r){this.hiringProcesses.some(l=>l.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${r}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(l,n){if(l&1&&Cu(Ae,7)(_e,7),l&2){let p;No(p=xo())&&(n.advancedFilterModal=p.first),No(p=xo())&&(n.poPageList=p.first)}},standalone:!1,features:[we([J])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(l,n){if(l&1){let p=KO();Jc(0,`po-page-list`,3,0),_u(2,`po-table`,4),Kg(),Jc(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.jobDescription,a)||(n.jobDescription=a),H_(a)}),Kg(),Jc(8,`po-checkbox-group`,7),G0(),Zb(`ngModelChange`,function(a){return U_(p),Rk(n.status,a)||(n.status=a),H_(a)}),Kg()()()}l&2&&(Ab(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),wg(2),Ab(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),wg(),Ab(`p-primary-action`,n.advancedFilterPrimaryAction),wg(4),Kb(`ngModel`,n.jobDescription),Ab(`p-options`,n.jobDescriptionOptions),q0(),wg(),Kb(`ngModel`,n.status),Ab(`p-options`,n.statusOptions),q0())},dependencies:[NZ,TZ,RZ,QL,WL,I4,DP,ia,Lze,q4],encapsulation:2,changeDetection:1})}return s})();var fe=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-page-list-hiring-processes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`,1,`docs-code-block`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page List - Hiring Processes`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-list-hiring-processes`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),Kg()(),Jc(23,`label`,6),Mk(24,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),Kg(),Jc(25,`div`,12)(26,`pre`,11),Mk(27,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return s})();var Pe=(()=>{class s{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1355,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-list-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-disclaimer-group`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`id`,`prop-p-filter`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-quick-search-value`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-clearInputSearch`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-disclaimer`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-hide-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-disclaimer-label`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-property`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-disclaimer-group-remove-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-remove-action-current-disclaimers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`id`,`interface-po-disclaimer-group-remove-action-removed-disclaimer`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`id`,`interface-po-disclaimer-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-change`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-disclaimers`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-hide-remove-all`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-remove`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-remove-all`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-title`,1,`docs-api-properties-row`],[`id`,`interface-po-page-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`id`,`interface-po-page-action-kind`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-filter-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-advanced-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-width`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-page-list-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-list-literals-other-actions`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Mk(8,`po-page-default`),Kg(),Mk(9,`, `),Jc(10,`code`),Mk(11,`po-page-detail`),Kg(),Mk(12,`,
`),Jc(13,`code`),Mk(14,`po-page-edit`),Kg(),Mk(15,`, `),Jc(16,`code`),Mk(17,`po-page-list`),Kg(),Mk(18,` e `),Jc(19,`code`),Mk(20,`po-page-slide`),Kg(),Mk(21,`.`),Kg()(),Jc(22,`h3`,3),Mk(23,`Componente`),Kg(),Jc(24,`h4`,4)(25,`code`,5),Mk(26,`PoPageListComponent`),Kg()(),Jc(27,`div`,2)(28,`p`),Mk(29,`O componente `),Jc(30,`code`),Mk(31,`po-page-list`),Kg(),Mk(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),Kg(),Jc(33,`p`),Mk(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Jc(35,`em`),Mk(36,`click`),Kg(),Mk(37,` do ícone `),Jc(38,`a`,6),Mk(39,`an-magnifying-glass`),Kg(),Mk(40,`
quanto ao pressionar da tecla `),Jc(41,`em`),Mk(42,`ENTER`),Kg(),Mk(43,` quando o foco estiver no campo de pesquisa.`),Kg(),Jc(44,`p`),Mk(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Jc(46,`a`,7)(47,`code`),Mk(48,`po-disclaimer-group`),Kg()(),Mk(49,`.`),Kg(),Jc(50,`h4`),Mk(51,`Tokens customizáveis`),Kg(),Jc(52,`blockquote`)(53,`p`),Mk(54,`Para maiores informações, acesse o guia `),Jc(55,`a`,8),Mk(56,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(57,`.`),Kg()(),Jc(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),Mk(62,`Propriedade`),Kg(),Jc(63,`th`),Mk(64,`Descrição`),Kg(),Jc(65,`th`),Mk(66,`Valor Padrão`),Kg()()(),Jc(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),Mk(71,`Header`),Kg()(),_u(72,`td`)(73,`td`),Kg(),Jc(74,`tr`)(75,`td`)(76,`code`),Mk(77,`--padding`),Kg()(),Jc(78,`td`),Mk(79,`Espaçamento do header`),Kg(),Jc(80,`td`)(81,`code`),Mk(82,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Mk(86,`--gap`),Kg()(),Jc(87,`td`),Mk(88,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(89,`td`)(90,`code`),Mk(91,`var(--spacing-md)`),Kg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Mk(95,`--gap-actions`),Kg()(),Jc(96,`td`),Mk(97,`Espaçamento entre as ações`),Kg(),Jc(98,`td`)(99,`code`),Mk(100,`var(--spacing-xs)`),Kg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--font-family`),Kg()(),Jc(105,`td`),Mk(106,`Família tipográfica do título`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--font-family-theme)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`strong`),Mk(113,`Content`),Kg()(),_u(114,`td`)(115,`td`),Kg(),Jc(116,`tr`)(117,`td`)(118,`code`),Mk(119,`--padding-content`),Kg()(),Jc(120,`td`),Mk(121,`Espaçamento do conteúdo`),Kg(),Jc(122,`td`)(123,`code`),Mk(124,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(125,`div`,9)(126,`h4`,10),Mk(127,`Seletor`),Kg(),Jc(128,`pre`,11),Mk(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),Kg()(),Jc(130,`h4`,12),Mk(131,`Propriedades`),Kg(),Jc(132,`table`,13)(133,`tr`,14)(134,`th`,15),Mk(135,`Nome`),Kg(),Jc(136,`th`,15),Mk(137,`Tipo`),Kg(),Jc(138,`th`,15),Mk(139,`Padrão`),Kg(),Jc(140,`th`,15),Mk(141,`Descrição`),Kg()(),Jc(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),Mk(146,` p-actions`),_u(147,`br`),Kg()()(),Jc(148,`td`,20)(149,`code`,21),Mk(150,`Array<PoPageAction>`),Kg()(),Jc(151,`td`,22),Mk(152,`-`),Kg(),Jc(153,`td`,23)(154,`em`)(155,`strong`),Mk(156,`(opcional)`),Kg()(),Jc(157,`p`),Mk(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Jc(159,`code`),Mk(160,`PoPageAction`),Kg(),Mk(161,`.`),Kg()()(),Jc(162,`tr`,24)(163,`td`,17)(164,`div`,18)(165,`span`,19),Mk(166,` p-breadcrumb`),_u(167,`br`),Kg()()(),Jc(168,`td`,20)(169,`code`,25),Mk(170,`PoBreadcrumb`),Kg()(),Jc(171,`td`,22),Mk(172,`-`),Kg(),Jc(173,`td`,23)(174,`em`)(175,`strong`),Mk(176,`(opcional)`),Kg()(),Jc(177,`p`),Mk(178,`Objeto que implementa as propriedades da interface `),Jc(179,`code`),Mk(180,`PoBreadcrumb`),Kg(),Mk(181,`.`),Kg()()(),Jc(182,`tr`,26)(183,`td`,17)(184,`div`,18)(185,`span`,19),Mk(186,` p-components-size`),_u(187,`br`),Kg()()(),Jc(188,`td`,20)(189,`code`,27),Mk(190,`string`),Kg()(),Jc(191,`td`,22)(192,`p`)(193,`code`),Mk(194,`medium`),Kg()()(),Jc(195,`td`,23)(196,`em`)(197,`strong`),Mk(198,`(opcional)`),Kg()(),Jc(199,`p`),Mk(200,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(201,`ul`)(202,`li`)(203,`code`),Mk(204,`small`),Kg(),Mk(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(206,`li`)(207,`code`),Mk(208,`medium`),Kg(),Mk(209,`: aplica a medida medium de cada componente.`),Kg()(),Jc(210,`blockquote`)(211,`p`),Mk(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(213,`code`),Mk(214,`medium`),Kg(),Mk(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(216,`a`,28),Mk(217,`po-theme`),Kg(),Mk(218,`.`),Kg()()()(),Jc(219,`tr`,29)(220,`td`,17)(221,`div`,18)(222,`span`,19),Mk(223,` p-disclaimer-group`),_u(224,`br`),Kg()()(),Jc(225,`td`,20)(226,`code`,30),Mk(227,`PoDisclaimerGroup`),Kg()(),Jc(228,`td`,22),Mk(229,`-`),Kg(),Jc(230,`td`,23)(231,`em`)(232,`strong`),Mk(233,`(opcional)`),Kg()(),Jc(234,`p`),Mk(235,`Objeto que implementa as propriedades da interface `),Jc(236,`code`),Mk(237,`PoDisclaimerGroup`),Kg(),Mk(238,`.`),Kg()()(),Jc(239,`tr`,31)(240,`td`,17)(241,`div`,18)(242,`span`,19),Mk(243,` p-filter`),_u(244,`br`),Kg()()(),Jc(245,`td`,20)(246,`code`,32),Mk(247,`PoPageFilter`),Kg()(),Jc(248,`td`,22),Mk(249,`-`),Kg(),Jc(250,`td`,23)(251,`p`),Mk(252,`Objeto que implementa as propriedades da interface `),Jc(253,`code`),Mk(254,`PoPageFilter`),Kg(),Mk(255,`.`),Kg()()(),Jc(256,`tr`,33)(257,`td`,17)(258,`div`,18)(259,`span`,19),Mk(260,` p-literals`),_u(261,`br`),Kg()()(),Jc(262,`td`,20)(263,`code`,34),Mk(264,`PoPageListLiterals`),Kg()(),Jc(265,`td`,22),Mk(266,`-`),Kg(),Jc(267,`td`,23)(268,`em`)(269,`strong`),Mk(270,`(opcional)`),Kg()(),Jc(271,`p`),Mk(272,`Objeto com as literais usadas no `),Jc(273,`code`),Mk(274,`po-page-list`),Kg(),Mk(275,`.`),Kg(),Jc(276,`p`),Mk(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(278,`pre`)(279,`code`),Mk(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),Kg()(),Jc(281,`p`),Mk(282,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(283,`pre`)(284,`code`),Mk(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),Kg()(),Jc(286,`p`),Mk(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(288,`pre`)(289,`code`),Mk(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),Kg()(),Jc(291,`blockquote`)(292,`p`),Mk(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(294,`a`,35)(295,`code`),Mk(296,`PoI18nService`),Kg()(),Mk(297,` ou `),Jc(298,`em`),Mk(299,`browser`),Kg(),Mk(300,`.`),Kg()()()(),Jc(301,`tr`,36)(302,`td`,17)(303,`div`,18)(304,`span`,19),Mk(305,` p-quick-search-value`),_u(306,`br`),Kg()()(),Jc(307,`td`,20)(308,`code`,27),Mk(309,`string`),Kg()(),Jc(310,`td`,22),Mk(311,`-`),Kg(),Jc(312,`td`,23)(313,`em`)(314,`strong`),Mk(315,`(opcional)`),Kg()(),Jc(316,`p`),Mk(317,`Valor padrão na busca rápida ao inicializar o componente`),Kg()()(),Jc(318,`tr`,37)(319,`td`,17)(320,`div`,18)(321,`span`,19),Mk(322,` p-subtitle`),_u(323,`br`),Kg()()(),Jc(324,`td`,20)(325,`code`,27),Mk(326,`string`),Kg()(),Jc(327,`td`,22),Mk(328,`-`),Kg(),Jc(329,`td`,23)(330,`em`)(331,`strong`),Mk(332,`(opcional)`),Kg()(),Jc(333,`p`),Mk(334,`Subtitulo do Header da página.`),Kg(),Jc(335,`p`),Mk(336,`Suporta formatação básica com as tags `),Jc(337,`code`),Mk(338,`<b>`),Kg(),Mk(339,` (negrito), `),Jc(340,`code`),Mk(341,`<strong>`),Kg(),Mk(342,` (negrito), `),Jc(343,`code`),Mk(344,`<i>`),Kg(),Mk(345,` (itálico), `),Jc(346,`code`),Mk(347,`<em>`),Kg(),Mk(348,` (it\xE1lico) e
`),Jc(349,`code`),Mk(350,`<u>`),Kg(),Mk(351,` (sublinhado).`),Kg(),Jc(352,`p`),Mk(353,`Exemplo:`),Kg(),Jc(354,`pre`)(355,`code`,38),Mk(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),Kg()(),Jc(357,`blockquote`)(358,`p`),Mk(359,`Requer que `),Jc(360,`code`),Mk(361,`p-title`),Kg(),Mk(362,` esteja definido.`),Kg()()()(),Jc(363,`tr`,39)(364,`td`,17)(365,`div`,18)(366,`span`,19),Mk(367,` p-title`),_u(368,`br`),Kg()()(),Jc(369,`td`,20)(370,`code`,27),Mk(371,`string`),Kg()(),Jc(372,`td`,22),Mk(373,`-`),Kg(),Jc(374,`td`,23)(375,`p`),Mk(376,`Título da página.`),Kg()()()(),Jc(377,`h3`,12),Mk(378,`Métodos`),Kg(),Jc(379,`table`,40)(380,`tr`,41)(381,`th`,42)(382,`div`,18)(383,`h4`)(384,`span`,19),Mk(385,` clearInputSearch `),Kg()()()()(),Jc(386,`tr`,23)(387,`td`,23)(388,`p`),Mk(389,`Limpa o campo de pesquisa.`),Kg()()()(),_u(390,`br`),Jc(391,`h3`),Mk(392,`Interfaces`),Kg(),Jc(393,`h4`,43)(394,`code`,5),Mk(395,`PoBreadcrumbItem`),Kg()(),Jc(396,`div`,2)(397,`p`),Mk(398,`Interface que define cada item do componente `),Jc(399,`strong`),Mk(400,`po-breadcrumb`),Kg(),Mk(401,`.`),Kg()(),Jc(402,`h4`,12),Mk(403,`Propriedades`),Kg(),Jc(404,`table`,13)(405,`tr`,14)(406,`th`,15),Mk(407,`Nome`),Kg(),Jc(408,`th`,15),Mk(409,`Tipo`),Kg(),Jc(410,`th`,15),Mk(411,`Descrição`),Kg()(),Jc(412,`tr`,44)(413,`td`,17)(414,`div`,18)(415,`span`,19),Mk(416,` action`),_u(417,`br`),Kg()()(),Jc(418,`td`,20)(419,`code`,45),Mk(420,`Function`),Kg()(),Jc(421,`td`,23)(422,`em`)(423,`strong`),Mk(424,`(opcional)`),Kg()(),Jc(425,`p`),Mk(426,`Ação executada ao clicar no item.`),Kg(),Jc(427,`blockquote`)(428,`p`),Mk(429,`A função atribuída a esta propriedade receberá o `),Jc(430,`em`),Mk(431,`label`),Kg(),Mk(432,` do item como parâmetro para execução.`),Kg()()()(),Jc(433,`tr`,46)(434,`td`,17)(435,`div`,18)(436,`span`,19),Mk(437,` label`),_u(438,`br`),Kg()()(),Jc(439,`td`,20)(440,`code`,27),Mk(441,`string`),Kg()(),Jc(442,`td`,23)(443,`p`),Mk(444,`Rótulo do item.`),Kg()()(),Jc(445,`tr`,47)(446,`td`,17)(447,`div`,18)(448,`span`,19),Mk(449,` link`),_u(450,`br`),Kg()()(),Jc(451,`td`,20)(452,`code`,27),Mk(453,`string`),Kg()(),Jc(454,`td`,23)(455,`em`)(456,`strong`),Mk(457,`(opcional)`),Kg()(),Jc(458,`p`),Mk(459,`Url do item.`),Kg(),Jc(460,`blockquote`)(461,`p`),Mk(462,`Caso o item também contenha uma `),Jc(463,`em`),Mk(464,`action`),Kg(),Mk(465,` definida, a preferência de execução será do `),Jc(466,`em`),Mk(467,`link`),Kg(),Mk(468,`.`),Kg()(),Jc(469,`blockquote`)(470,`p`),Mk(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(472,`strong`)(473,`a`,48),Mk(474,`Veja um exemplo de como criar rotas aqui`),Kg()(),Mk(475,`.`),Kg()(),Jc(476,`blockquote`)(477,`p`),Mk(478,`Esta propriedade é necessária para que a propriedade `),Jc(479,`code`),Mk(480,`p-favorite-service`),Kg(),Mk(481,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Jc(482,`h4`,49)(483,`code`,5),Mk(484,`PoBreadcrumb`),Kg()(),Jc(485,`div`,2)(486,`p`),Mk(487,`Interface que define o `),Jc(488,`code`),Mk(489,`po-breadcrumb`),Kg(),Mk(490,`.`),Kg()(),Jc(491,`h4`,12),Mk(492,`Propriedades`),Kg(),Jc(493,`table`,13)(494,`tr`,14)(495,`th`,15),Mk(496,`Nome`),Kg(),Jc(497,`th`,15),Mk(498,`Tipo`),Kg(),Jc(499,`th`,15),Mk(500,`Descrição`),Kg()(),Jc(501,`tr`,50)(502,`td`,17)(503,`div`,18)(504,`span`,19),Mk(505,` favorite`),_u(506,`br`),Kg()()(),Jc(507,`td`,20)(508,`code`,27),Mk(509,`string`),Kg()(),Jc(510,`td`,23)(511,`em`)(512,`strong`),Mk(513,`(opcional)`),Kg()(),Jc(514,`p`),Mk(515,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Jc(516,`blockquote`)(517,`p`),Mk(518,`Para maiores informações verificar a propriedade `),Jc(519,`code`),Mk(520,`p-favorite-service`),Kg(),Mk(521,` do componente `),Jc(522,`code`),Mk(523,`po-breadcrumb`),Kg(),Mk(524,`.`),Kg()()()(),Jc(525,`tr`,51)(526,`td`,17)(527,`div`,18)(528,`span`,19),Mk(529,` items`),_u(530,`br`),Kg()()(),Jc(531,`td`,20)(532,`code`,52),Mk(533,`Array<PoBreadcrumbItem>`),Kg()(),Jc(534,`td`,23)(535,`p`),Mk(536,`Lista de itens do `),Jc(537,`em`),Mk(538,`breadcrumb`),Kg(),Mk(539,`.`),Kg(),Jc(540,`p`)(541,`strong`),Mk(542,`Exemplo:`),Kg()(),Jc(543,`pre`)(544,`code`),Mk(545,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Jc(546,`tr`,53)(547,`td`,17)(548,`div`,18)(549,`span`,19),Mk(550,` params`),_u(551,`br`),Kg()()(),Jc(552,`td`,20)(553,`code`,54),Mk(554,`object`),Kg()(),Jc(555,`td`,23)(556,`em`)(557,`strong`),Mk(558,`(opcional)`),Kg()(),Jc(559,`p`),Mk(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Jc(561,`h4`,55)(562,`code`,5),Mk(563,`PoDisclaimer`),Kg()(),Jc(564,`div`,2)(565,`p`),Mk(566,`Interface que representa o objeto `),Jc(567,`code`),Mk(568,`po-disclaimer`),Kg(),Mk(569,`.`),Kg()(),Jc(570,`h4`,12),Mk(571,`Propriedades`),Kg(),Jc(572,`table`,13)(573,`tr`,14)(574,`th`,15),Mk(575,`Nome`),Kg(),Jc(576,`th`,15),Mk(577,`Tipo`),Kg(),Jc(578,`th`,15),Mk(579,`Descrição`),Kg()(),Jc(580,`tr`,56)(581,`td`,17)(582,`div`,18)(583,`span`,19),Mk(584,` hideClose`),_u(585,`br`),Kg()()(),Jc(586,`td`,20)(587,`code`,57),Mk(588,`boolean`),Kg()(),Jc(589,`td`,23)(590,`em`)(591,`strong`),Mk(592,`(opcional)`),Kg()(),Jc(593,`p`),Mk(594,`Se verdadeiro, oculta o botão para fechar o `),Jc(595,`em`),Mk(596,`disclaimer`),Kg(),Mk(597,`.`),Kg()()(),Jc(598,`tr`,58)(599,`td`,17)(600,`div`,18)(601,`span`,19),Mk(602,` label`),_u(603,`br`),Kg()()(),Jc(604,`td`,20)(605,`code`,27),Mk(606,`string`),Kg()(),Jc(607,`td`,23)(608,`em`)(609,`strong`),Mk(610,`(opcional)`),Kg()(),Jc(611,`p`),Mk(612,`Texto de exibição do objeto.`),Kg()()(),Jc(613,`tr`,59)(614,`td`,17)(615,`div`,18)(616,`span`,19),Mk(617,` property`),_u(618,`br`),Kg()()(),Jc(619,`td`,20)(620,`code`,27),Mk(621,`string`),Kg()(),Jc(622,`td`,23)(623,`em`)(624,`strong`),Mk(625,`(opcional)`),Kg()(),Jc(626,`p`),Mk(627,`Nome da propriedade vinculada ao objeto `),Jc(628,`em`),Mk(629,`disclaimer`),Kg(),Mk(630,`.`),Kg()()(),Jc(631,`tr`,60)(632,`td`,17)(633,`div`,18)(634,`span`,19),Mk(635,` value`),_u(636,`br`),Kg()()(),Jc(637,`td`,20)(638,`code`,61),Mk(639,`any`),Kg()(),Jc(640,`td`,23)(641,`p`),Mk(642,`Valor do objeto.`),Kg()()()(),Jc(643,`h4`,62)(644,`code`,5),Mk(645,`PoDisclaimerGroupRemoveAction`),Kg()(),Jc(646,`div`,2)(647,`p`),Mk(648,`Estrutura do objeto representando o estado dos `),Jc(649,`em`),Mk(650,`disclaimers`),Kg(),Mk(651,` após a remoção.`),Kg()(),Jc(652,`h4`,12),Mk(653,`Propriedades`),Kg(),Jc(654,`table`,13)(655,`tr`,14)(656,`th`,15),Mk(657,`Nome`),Kg(),Jc(658,`th`,15),Mk(659,`Tipo`),Kg(),Jc(660,`th`,15),Mk(661,`Descrição`),Kg()(),Jc(662,`tr`,63)(663,`td`,17)(664,`div`,18)(665,`span`,19),Mk(666,` currentDisclaimers`),_u(667,`br`),Kg()()(),Jc(668,`td`,20)(669,`code`,64),Mk(670,`Array<PoDisclaimer>`),Kg()(),Jc(671,`td`,23)(672,`p`),Mk(673,`Lista com os `),Jc(674,`em`),Mk(675,`disclaimers`),Kg(),Mk(676,` atuais (restantes).`),Kg()()(),Jc(677,`tr`,65)(678,`td`,17)(679,`div`,18)(680,`span`,19),Mk(681,` removedDisclaimer`),_u(682,`br`),Kg()()(),Jc(683,`td`,20)(684,`code`,66),Mk(685,`PoDisclaimer`),Kg()(),Jc(686,`td`,23)(687,`p`)(688,`em`),Mk(689,`Disclaimer`),Kg(),Mk(690,` que foi removido.`),Kg()()()(),Jc(691,`h4`,67)(692,`code`,5),Mk(693,`PoDisclaimerGroup`),Kg()(),Jc(694,`div`,2)(695,`p`),Mk(696,`Interface que representa o objeto `),Jc(697,`code`),Mk(698,`po-disclaimer-group`),Kg(),Mk(699,`.`),Kg()(),Jc(700,`h4`,12),Mk(701,`Propriedades`),Kg(),Jc(702,`table`,13)(703,`tr`,14)(704,`th`,15),Mk(705,`Nome`),Kg(),Jc(706,`th`,15),Mk(707,`Tipo`),Kg(),Jc(708,`th`,15),Mk(709,`Descrição`),Kg()(),Jc(710,`tr`,68)(711,`td`,17)(712,`div`,18)(713,`span`,19),Mk(714,` change`),_u(715,`br`),Kg()()(),Jc(716,`td`,20)(717,`code`,45),Mk(718,`Function`),Kg()(),Jc(719,`td`,23)(720,`em`)(721,`strong`),Mk(722,`(opcional)`),Kg()(),Jc(723,`p`),Mk(724,`Função que será disparada quando a lista de `),Jc(725,`em`),Mk(726,`disclaimers`),Kg(),Mk(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Jc(728,`em`),Mk(729,`disclaimers`),Kg(),Mk(730,`.`),Kg()()(),Jc(731,`tr`,69)(732,`td`,17)(733,`div`,18)(734,`span`,19),Mk(735,` disclaimers`),_u(736,`br`),Kg()()(),Jc(737,`td`,20)(738,`code`,64),Mk(739,`Array<PoDisclaimer>`),Kg()(),Jc(740,`td`,23)(741,`p`),Mk(742,`Lista de `),Jc(743,`em`),Mk(744,`disclaimers`),Kg(),Mk(745,`.`),Kg(),Jc(746,`p`),Mk(747,`Exemplo:`),Kg(),Jc(748,`pre`)(749,`code`),Mk(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),Kg()(),Jc(751,`p`),Mk(752,`Para que a lista de `),Jc(753,`em`),Mk(754,`disclaimers`),Kg(),Mk(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Jc(756,`code`),Mk(757,`PoDisclaimer`),Kg(),Mk(758,`.`),Kg(),Jc(759,`p`),Mk(760,`Exemplo:`),Kg(),Jc(761,`pre`)(762,`code`),Mk(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),Kg()()()(),Jc(764,`tr`,70)(765,`td`,17)(766,`div`,18)(767,`span`,19),Mk(768,` hideRemoveAll`),_u(769,`br`),Kg()()(),Jc(770,`td`,20)(771,`code`,57),Mk(772,`boolean`),Kg()(),Jc(773,`td`,23)(774,`em`)(775,`strong`),Mk(776,`(opcional)`),Kg()(),Jc(777,`p`),Mk(778,`Oculta o botão para remover todos os `),Jc(779,`em`),Mk(780,`disclaimers`),Kg(),Mk(781,` do grupo.`),Kg(),Jc(782,`blockquote`)(783,`p`),Mk(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Jc(785,`em`),Mk(786,`disclaimers`),Kg(),Mk(787,` com a opção `),Jc(788,`code`),Mk(789,`hideClose`),Kg(),Mk(790,` habilitada.`),Kg()()()(),Jc(791,`tr`,71)(792,`td`,17)(793,`div`,18)(794,`span`,19),Mk(795,` remove`),_u(796,`br`),Kg()()(),Jc(797,`td`,20)(798,`code`,45),Mk(799,`Function`),Kg()(),Jc(800,`td`,23)(801,`em`)(802,`strong`),Mk(803,`(opcional)`),Kg()(),Jc(804,`p`),Mk(805,`Função que será disparada quando um `),Jc(806,`em`),Mk(807,`disclaimer`),Kg(),Mk(808,` for removido da lista de
`),Jc(809,`em`),Mk(810,`disclaimers`),Kg(),Mk(811,` pelo usuário.`),Kg(),Jc(812,`p`),Mk(813,`Recebe como parâmetro um objeto conforme a interface `),Jc(814,`code`),Mk(815,`PoDisclaimerGroupRemoveAction`),Kg(),Mk(816,`.`),Kg()()(),Jc(817,`tr`,72)(818,`td`,17)(819,`div`,18)(820,`span`,19),Mk(821,` removeAll`),_u(822,`br`),Kg()()(),Jc(823,`td`,20)(824,`code`,45),Mk(825,`Function`),Kg()(),Jc(826,`td`,23)(827,`em`)(828,`strong`),Mk(829,`(opcional)`),Kg()(),Jc(830,`p`),Mk(831,`Função que será disparada quando todos os `),Jc(832,`em`),Mk(833,`disclaimers`),Kg(),Mk(834,` forem removidos da lista de `),Jc(835,`em`),Mk(836,`disclaimers`),Kg(),Mk(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Kg(),Jc(838,`p`),Mk(839,`Recebe como parâmetro uma lista contendo todos os `),Jc(840,`code`),Mk(841,`disclaimers`),Kg(),Mk(842,` removidos.`),Kg()()(),Jc(843,`tr`,73)(844,`td`,17)(845,`div`,18)(846,`span`,19),Mk(847,` title`),_u(848,`br`),Kg()()(),Jc(849,`td`,20)(850,`code`,27),Mk(851,`string`),Kg()(),Jc(852,`td`,23)(853,`em`)(854,`strong`),Mk(855,`(opcional)`),Kg()(),Jc(856,`p`),Mk(857,`Título do grupo de `),Jc(858,`em`),Mk(859,`disclaimers`),Kg(),Mk(860,`.`),Kg()()()(),Jc(861,`h4`,74)(862,`code`,5),Mk(863,`PoPageAction`),Kg()(),Jc(864,`div`,2)(865,`p`),Mk(866,`Interface para as ações dos componentes `),Jc(867,`code`),Mk(868,`po-page-default`),Kg(),Mk(869,` e `),Jc(870,`code`),Mk(871,`po-page-list`),Kg(),Mk(872,`.`),Kg(),Jc(873,`p`),Mk(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Jc(875,`em`),Mk(876,`dropdown`),Kg(),Mk(877,`,
conforme o `),Jc(878,`code`),Mk(879,`PoPageActionsLayout`),Kg(),Mk(880,` e o tamanho da tela.`),Kg(),Jc(881,`blockquote`)(882,`p`),Mk(883,`As propriedades `),Jc(884,`code`),Mk(885,`separator`),Kg(),Mk(886,`, `),Jc(887,`code`),Mk(888,`selected`),Kg(),Mk(889,` e `),Jc(890,`code`),Mk(891,`subItems`),Kg(),Mk(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Jc(893,`em`),Mk(894,`dropdown`),Kg(),Mk(895,`.`),Kg()()(),Jc(896,`h4`,12),Mk(897,`Propriedades`),Kg(),Jc(898,`table`,13)(899,`tr`,14)(900,`th`,15),Mk(901,`Nome`),Kg(),Jc(902,`th`,15),Mk(903,`Tipo`),Kg(),Jc(904,`th`,15),Mk(905,`Descrição`),Kg()(),Jc(906,`tr`,75)(907,`td`,17)(908,`div`,18)(909,`span`,19),Mk(910,` action`),_u(911,`br`),Kg()()(),Jc(912,`td`,20)(913,`code`,45),Mk(914,`Function`),Kg()(),Jc(915,`td`,23)(916,`em`)(917,`strong`),Mk(918,`(opcional)`),Kg()(),Jc(919,`p`),Mk(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(921,`p`),Mk(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(923,`code`),Mk(924,`subItems`),Kg(),Mk(925,`.`),Kg(),Jc(926,`blockquote`)(927,`p`),Mk(928,`Para que a função seja executada no contexto do componente, utilize `),Jc(929,`em`),Mk(930,`bind`),Kg(),Mk(931,`:
`),Jc(932,`code`),Mk(933,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(934,`tr`,76)(935,`td`,17)(936,`div`,18)(937,`span`,19),Mk(938,` disabled`),_u(939,`br`),Kg()()(),Jc(940,`td`,20)(941,`code`,57),Mk(942,`boolean `),Kg(),Jc(943,`code`,45),Mk(944,` Function`),Kg()(),Jc(945,`td`,23)(946,`em`)(947,`strong`),Mk(948,`(opcional)`),Kg()(),Jc(949,`p`),Mk(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(951,`tr`,77)(952,`td`,17)(953,`div`,18)(954,`span`,19),Mk(955,` icon`),_u(956,`br`),Kg()()(),Jc(957,`td`,20)(958,`code`,27),Mk(959,`string `),Kg(),Jc(960,`code`,78),Mk(961,` TemplateRef<void>`),Kg()(),Jc(962,`td`,23)(963,`em`)(964,`strong`),Mk(965,`(opcional)`),Kg()(),Jc(966,`p`),Mk(967,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(968,`p`),Mk(969,`Aceita ícones da `),Jc(970,`a`,6),Mk(971,`Biblioteca de ícones`),Kg(),Mk(972,`, fontes externas (ex: Font Awesome)
ou um `),Jc(973,`code`),Mk(974,`TemplateRef`),Kg(),Mk(975,` para ícones customizados.`),Kg(),Jc(976,`pre`)(977,`code`),Mk(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(979,`tr`,79)(980,`td`,17)(981,`div`,18)(982,`span`,19),Mk(983,` kind`),_u(984,`br`),Kg()()(),Jc(985,`td`,20)(986,`code`,27),Mk(987,`string`),Kg()(),Jc(988,`td`,23)(989,`em`)(990,`strong`),Mk(991,`(opcional)`),Kg()(),Jc(992,`p`),Mk(993,`Define o estilo visual da ação quando exibida como botão fora do `),Jc(994,`em`),Mk(995,`dropdown`),Kg(),Mk(996,`.`),Kg(),Jc(997,`p`),Mk(998,`Valores permitidos:`),Kg(),Jc(999,`ul`)(1e3,`li`)(1001,`code`),Mk(1002,`primary`),Kg(),Mk(1003,`: botão com maior destaque visual.`),Kg(),Jc(1004,`li`)(1005,`code`),Mk(1006,`secondary`),Kg(),Mk(1007,`: estilo padrão.`),Kg()(),Jc(1008,`blockquote`)(1009,`p`),Mk(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Kg()(),Jc(1011,`blockquote`)(1012,`p`),Mk(1013,`Somente uma ação pode ter `),Jc(1014,`code`),Mk(1015,`kind`),Kg(),Mk(1016,` igual a `),Jc(1017,`code`),Mk(1018,`primary`),Kg(),Mk(1019,`. Caso mais de uma defina `),Jc(1020,`code`),Mk(1021,`primary`),Kg(),Mk(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Jc(1023,`code`),Mk(1024,`secondary`),Kg(),Mk(1025,`.`),Kg()(),Jc(1026,`blockquote`)(1027,`p`),Mk(1028,`Quando não definido, o estilo é determinado pelo `),Jc(1029,`code`),Mk(1030,`PoPageActionsLayout`),Kg(),Mk(1031,`.`),Kg()()()(),Jc(1032,`tr`,80)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),Mk(1036,` label`),_u(1037,`br`),Kg()()(),Jc(1038,`td`,20)(1039,`code`,27),Mk(1040,`string`),Kg()(),Jc(1041,`td`,23)(1042,`p`),Mk(1043,`Rótulo da ação.`),Kg(),Jc(1044,`p`),Mk(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1046,`code`),Mk(1047,`subItems`),Kg(),Mk(1048,`.`),Kg()()(),Jc(1049,`tr`,81)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),Mk(1053,` selected`),_u(1054,`br`),Kg()()(),Jc(1055,`td`,20)(1056,`code`,57),Mk(1057,`boolean`),Kg()(),Jc(1058,`td`,23)(1059,`em`)(1060,`strong`),Mk(1061,`(opcional)`),Kg()(),Jc(1062,`p`),Mk(1063,`Define se a ação está selecionada.`),Kg()()(),Jc(1064,`tr`,82)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),Mk(1068,` separator`),_u(1069,`br`),Kg()()(),Jc(1070,`td`,20)(1071,`code`,57),Mk(1072,`boolean`),Kg()(),Jc(1073,`td`,23)(1074,`em`)(1075,`strong`),Mk(1076,`(opcional)`),Kg()(),Jc(1077,`p`),Mk(1078,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(1079,`tr`,83)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),Mk(1083,` subItems`),_u(1084,`br`),Kg()()(),Jc(1085,`td`,20)(1086,`code`,84),Mk(1087,`Array<PoPopupAction>`),Kg()(),Jc(1088,`td`,23)(1089,`em`)(1090,`strong`),Mk(1091,`(opcional)`),Kg()(),Jc(1092,`p`),Mk(1093,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(1094,`pre`)(1095,`code`),Mk(1096,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(1097,`p`),Mk(1098,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(1099,`blockquote`)(1100,`p`),Mk(1101,`As propriedades `),Jc(1102,`code`),Mk(1103,`disabled`),Kg(),Mk(1104,`, `),Jc(1105,`code`),Mk(1106,`type`),Kg(),Mk(1107,` e `),Jc(1108,`code`),Mk(1109,`visible`),Kg(),Mk(1110,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(1111,`blockquote`)(1112,`p`),Mk(1113,`Quando `),Jc(1114,`code`),Mk(1115,`url`),Kg(),Mk(1116,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(1117,`blockquote`)(1118,`p`),Mk(1119,`Em subníveis aninhados, o `),Jc(1120,`code`),Mk(1121,`icon`),Kg(),Mk(1122,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(1123,`tr`,85)(1124,`td`,17)(1125,`div`,18)(1126,`span`,19),Mk(1127,` subItemsLazy`),_u(1128,`br`),Kg()()(),Jc(1129,`td`,20)(1130,`code`,86),Mk(1131,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(1132,`td`,23)(1133,`em`)(1134,`strong`),Mk(1135,`(opcional)`),Kg()(),Jc(1136,`p`),Mk(1137,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(1138,`p`),Mk(1139,`Recebe o item agrupador e retorna um `),Jc(1140,`code`),Mk(1141,`Observable<Array<PoPopupAction>>`),Kg(),Mk(1142,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1143,`strong`),Mk(1144,`apenas`),Kg(),Mk(1145,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1146,`code`),Mk(1147,`po-skeleton`),Kg(),Mk(1148,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(1149,`pre`)(1150,`code`),Mk(1151,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(1152,`blockquote`)(1153,`p`),Mk(1154,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(1155,`p`),Mk(1156,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(1157,`tr`,87)(1158,`td`,17)(1159,`div`,18)(1160,`span`,19),Mk(1161,` type`),_u(1162,`br`),Kg()()(),Jc(1163,`td`,20)(1164,`code`,27),Mk(1165,`string`),Kg()(),Jc(1166,`td`,23)(1167,`em`)(1168,`strong`),Mk(1169,`(opcional)`),Kg()(),Jc(1170,`p`),Mk(1171,`Define a cor do item.`),Kg(),Jc(1172,`p`),Mk(1173,`Valores válidos:`),Kg(),Jc(1174,`ul`)(1175,`li`)(1176,`code`),Mk(1177,`default`),Kg()(),Jc(1178,`li`)(1179,`code`),Mk(1180,`danger`),Kg()()()()(),Jc(1181,`tr`,88)(1182,`td`,17)(1183,`div`,18)(1184,`span`,19),Mk(1185,` url`),_u(1186,`br`),Kg()()(),Jc(1187,`td`,20)(1188,`code`,27),Mk(1189,`string`),Kg()(),Jc(1190,`td`,23)(1191,`em`)(1192,`strong`),Mk(1193,`(opcional)`),Kg()(),Jc(1194,`p`),Mk(1195,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(1196,`p`),Mk(1197,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1198,`code`),Mk(1199,`url`),Kg(),Mk(1200,` é informada em um agrupador, o clique `),Jc(1201,`strong`),Mk(1202,`não abrirá os subitens`),Kg(),Mk(1203,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(1204,`blockquote`)(1205,`p`),Mk(1206,`Quando informada, tem prioridade sobre a propriedade `),Jc(1207,`code`),Mk(1208,`action`),Kg(),Mk(1209,`.`),Kg()()()(),Jc(1210,`tr`,89)(1211,`td`,17)(1212,`div`,18)(1213,`span`,19),Mk(1214,` visible`),_u(1215,`br`),Kg()()(),Jc(1216,`td`,20)(1217,`code`,57),Mk(1218,`boolean `),Kg(),Jc(1219,`code`,45),Mk(1220,` Function`),Kg()(),Jc(1221,`td`,23)(1222,`em`)(1223,`strong`),Mk(1224,`(opcional)`),Kg()(),Jc(1225,`p`),Mk(1226,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Jc(1227,`h4`,90)(1228,`code`,5),Mk(1229,`PoPageFilter`),Kg()(),Jc(1230,`div`,2)(1231,`p`),Mk(1232,`Interface para o atributo `),Jc(1233,`code`),Mk(1234,`filter`),Kg(),Mk(1235,` do componente `),Jc(1236,`code`),Mk(1237,`po-page-list`),Kg(),Mk(1238,`.`),Kg()(),Jc(1239,`h4`,12),Mk(1240,`Propriedades`),Kg(),Jc(1241,`table`,13)(1242,`tr`,14)(1243,`th`,15),Mk(1244,`Nome`),Kg(),Jc(1245,`th`,15),Mk(1246,`Tipo`),Kg(),Jc(1247,`th`,15),Mk(1248,`Descrição`),Kg()(),Jc(1249,`tr`,91)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),Mk(1253,` action`),_u(1254,`br`),Kg()()(),Jc(1255,`td`,20)(1256,`code`,45),Mk(1257,`Function`),Kg()(),Jc(1258,`td`,23)(1259,`em`)(1260,`strong`),Mk(1261,`(opcional)`),Kg()(),Jc(1262,`p`),Mk(1263,`Ação a ser executada.`),Kg()()(),Jc(1264,`tr`,92)(1265,`td`,17)(1266,`div`,18)(1267,`span`,19),Mk(1268,` advancedAction`),_u(1269,`br`),Kg()()(),Jc(1270,`td`,20)(1271,`code`,45),Mk(1272,`Function`),Kg()(),Jc(1273,`td`,23)(1274,`em`)(1275,`strong`),Mk(1276,`(opcional)`),Kg()(),Jc(1277,`p`),Mk(1278,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Jc(1279,`em`),Mk(1280,`click`),Kg(),Mk(1281,` através do rótulo `),Jc(1282,`strong`),Mk(1283,`Busca Avançada`),Kg(),Mk(1284,`.`),Kg()()(),Jc(1285,`tr`,93)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),Mk(1289,` placeholder`),_u(1290,`br`),Kg()()(),Jc(1291,`td`,20)(1292,`code`,27),Mk(1293,`string`),Kg()(),Jc(1294,`td`,23)(1295,`em`)(1296,`strong`),Mk(1297,`(opcional)`),Kg()(),Jc(1298,`p`),Mk(1299,`Texto de instrução exibido dentro do campo de filtro.`),Kg()()(),Jc(1300,`tr`,94)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),Mk(1304,` width`),_u(1305,`br`),Kg()()(),Jc(1306,`td`,20)(1307,`code`,95),Mk(1308,`number`),Kg()(),Jc(1309,`td`,23)(1310,`em`)(1311,`strong`),Mk(1312,`(opcional)`),Kg()(),Jc(1313,`p`),Mk(1314,`Tamanho do filtro em tela, utilizando o `),Jc(1315,`em`),Mk(1316,`Grid System`),Kg(),Mk(1317,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),Kg()()()(),Jc(1318,`h4`,96)(1319,`code`,5),Mk(1320,`PoPageListLiterals`),Kg()(),Jc(1321,`div`,2)(1322,`p`),Mk(1323,`Interface para definição das literais usadas no `),Jc(1324,`code`),Mk(1325,`po-page-list`),Kg(),Mk(1326,`.`),Kg()(),Jc(1327,`h4`,12),Mk(1328,`Propriedades`),Kg(),Jc(1329,`table`,13)(1330,`tr`,14)(1331,`th`,15),Mk(1332,`Nome`),Kg(),Jc(1333,`th`,15),Mk(1334,`Tipo`),Kg(),Jc(1335,`th`,15),Mk(1336,`Descrição`),Kg()(),Jc(1337,`tr`,97)(1338,`td`,17)(1339,`div`,18)(1340,`span`,19),Mk(1341,` otherActions`),_u(1342,`br`),Kg()()(),Jc(1343,`td`,20)(1344,`code`,27),Mk(1345,`string`),Kg()(),Jc(1346,`td`,23)(1347,`em`)(1348,`strong`),Mk(1349,`(opcional)`),Kg()(),Jc(1350,`p`),Mk(1351,`Legenda do `),Jc(1352,`code`),Mk(1353,`po-dropdown`),Kg(),Mk(1354,` de ações.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return s})();function He(s,qe){if(s&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-list-basic-view`)(2,`sample-po-page-list-labs-view`)(3,`sample-po-page-list-hiring-processes-view`),Kg()),s&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Be=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page List`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Page List · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||s)(I(ar),I(An))};static ɵcmp=Jn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0),LO(1,He,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-page-list-doc`),Kg()()),l&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,be,Ee,fe,Pe],encapsulation:2,changeDetection:1})}return s})()}];var ve=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵmod=ge$1({type:s});static ɵinj=de({imports:[GV.forChild(Be),GV]})}return s})();var yt=(()=>{class s{static ɵfac=function(l){return new(l||s)};static ɵmod=ge$1({type:s});static ɵinj=de({imports:[M,ve]})}return s})();export{yt as DocPoPageListModule};