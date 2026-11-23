import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,S as Eze,Ti as U_,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,gi as Rb,io as vt,li as Qc,ra as de,rr as AZ,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik}from"./chunk-BQDTQO8h.js";var $=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(r,n){r&1&&vu(0,`po-page-detail`,0)},dependencies:[Eze],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Detail Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-detail-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,$],encapsulation:2,changeDetection:1})}return a})();var te=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let u=YO();Qc(0,`po-page-detail`,4),vt(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Qc(1,`div`,5),vu(2,`po-info`,6),Kg(),vu(3,`po-divider`),Qc(4,`form`,null,0)(6,`po-input`,7),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.title,l)||(n.title=l),U_(l)}),Kg(),Qc(7,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.subtitle,l)||(n.subtitle=l),U_(l)}),Kg(),Qc(8,`po-radio-group`,9),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.componentsSize,l)||(n.componentsSize=l),U_(l)}),Kg(),vu(9,`po-divider`),Qc(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.breadcrumb.favorite,l)||(n.breadcrumb.favorite=l),U_(l)}),Kg()()(),Qc(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.breadcrumbItem.label,l)||(n.breadcrumbItem.label=l),U_(l)}),Kg(),Qc(18,`po-input`,12),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.breadcrumbItem.link,l)||(n.breadcrumbItem.link=l),U_(l)}),Kg()(),Qc(19,`div`,5)(20,`po-button`,13),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),vu(21,`po-divider`),Qc(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.breadcrumbParams.property,l)||(n.breadcrumbParams.property=l),U_(l)}),Kg(),Qc(26,`po-input`,15),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.breadcrumbParams.value,l)||(n.breadcrumbParams.value=l),U_(l)}),Kg()(),Qc(27,`div`,5)(28,`po-button`,16),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),Qc(29,`div`,5)(30,`po-input`,17),z0(),Kb(`ngModelChange`,function(l){return B_(u),Tk(n.literals,l)||(n.literals=l),U_(l)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg()(),Qc(31,`div`,5)(32,`po-button`,18),vt(`p-click`,function(){return n.restore()}),Kg()()()()}if(r&2){let u=ik(15),s=ik(23);Rb(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Rb(`p-value`,n.action),wg(4),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.subtitle),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0(),wg(5),Yb(`ngModel`,n.breadcrumb.favorite),W0(),wg(4),Yb(`ngModel`,n.breadcrumbItem.label),W0(),wg(),Yb(`ngModel`,n.breadcrumbItem.link),W0(),wg(2),Rb(`p-disabled`,u.invalid),wg(5),Yb(`ngModel`,n.breadcrumbParams.property),W0(),wg(),Yb(`ngModel`,n.breadcrumbParams.value),W0(),wg(2),Rb(`p-disabled`,s.invalid),wg(2),Yb(`ngModel`,n.literals),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,Joe,Eze],encapsulation:2,changeDetection:1})}return a})();var ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Detail Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-detail-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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

    <po-divider />

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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{router=p(An);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(r,n){r&1&&(Qc(0,`po-page-detail`,0),vt(`p-edit`,function(){return n.edit()}),Qc(1,`div`,1),vu(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`div`,1),vu(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),Kg(),vu(10,`po-divider`),Qc(11,`div`,1),vu(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),Kg(),vu(15,`po-divider`),Qc(16,`div`,1),vu(17,`po-info`,11)(18,`po-info`,12),Kg()()),r&2&&(Rb(`p-breadcrumb`,n.breadcrumb),wg(2),Rb(`p-value`,n.userId),wg(),Rb(`p-value`,n.email),wg(),Rb(`p-value`,n.name),wg(3),Rb(`p-value`,n.nickname),wg(),Rb(`p-value`,n.birthDate),wg(),Rb(`p-value`,n.genre),wg(3),Rb(`p-value`,n.nationality),wg(),Rb(`p-value`,n.placeOfBirth),wg(),Rb(`p-value`,n.graduation),wg(3),Rb(`p-value`,n.fathersName),wg(),Rb(`p-value`,n.mothersName))},dependencies:[Nf,Joe,Eze],encapsulation:2,changeDetection:1})}return a})();var ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Detail - User`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-detail-user`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-detail-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-back`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-edit`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-page-detail-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-detail-literals-back`,1,`docs-api-properties-row`],[`id`,`interface-po-page-detail-literals-edit`,1,`docs-api-properties-row`],[`id`,`interface-po-page-detail-literals-remove`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoPageDetailComponent`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,`O componente `),Qc(30,`strong`),Sk(31,`po-page-detail`),Kg(),Sk(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),Kg(),Qc(33,`h4`),Sk(34,`Tokens customizáveis`),Kg(),Qc(35,`blockquote`)(36,`p`),Sk(37,`Para maiores informações, acesse o guia `),Qc(38,`a`,6),Sk(39,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(40,`.`),Kg()(),Qc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),Sk(45,`Propriedade`),Kg(),Qc(46,`th`),Sk(47,`Descrição`),Kg(),Qc(48,`th`),Sk(49,`Valor Padrão`),Kg()()(),Qc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),Sk(54,`Header`),Kg()(),vu(55,`td`)(56,`td`),Kg(),Qc(57,`tr`)(58,`td`)(59,`code`),Sk(60,`--padding`),Kg()(),Qc(61,`td`),Sk(62,`Espaçamento do header`),Kg(),Qc(63,`td`)(64,`code`),Sk(65,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(66,`tr`)(67,`td`)(68,`code`),Sk(69,`--gap`),Kg()(),Qc(70,`td`),Sk(71,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(72,`td`)(73,`code`),Sk(74,`var(--spacing-md)`),Kg()()(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--gap-actions`),Kg()(),Qc(79,`td`),Sk(80,`Espaçamento entre as ações`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(--spacing-xs)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--font-family`),Kg()(),Qc(88,`td`),Sk(89,`Família tipográfica do título`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--font-family-theme)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`strong`),Sk(96,`Content`),Kg()(),vu(97,`td`)(98,`td`),Kg(),Qc(99,`tr`)(100,`td`)(101,`code`),Sk(102,`--padding-content`),Kg()(),Qc(103,`td`),Sk(104,`Espaçamento do conteúdo`),Kg(),Qc(105,`td`)(106,`code`),Sk(107,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(108,`div`,7)(109,`h4`,8),Sk(110,`Seletor`),Kg(),Qc(111,`pre`,9),Sk(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),Kg()(),Qc(113,`h4`,10),Sk(114,`Propriedades`),Kg(),Qc(115,`table`,11)(116,`tr`,12)(117,`th`,13),Sk(118,`Nome`),Kg(),Qc(119,`th`,13),Sk(120,`Tipo`),Kg(),Qc(121,`th`,13),Sk(122,`Padrão`),Kg(),Qc(123,`th`,13),Sk(124,`Descrição`),Kg()(),Qc(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),Sk(129,` (p-back)`),vu(130,`br`),Kg()()(),Qc(131,`td`,18)(132,`code`,19),Sk(133,`EventEmitter`),Kg()(),Qc(134,`td`,20),Sk(135,`-`),Kg(),Qc(136,`td`,21)(137,`p`),Sk(138,`Evento que será disparado ao clicar no botão de "Voltar".`),Kg(),Qc(139,`pre`)(140,`code`),Sk(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),Kg()(),Qc(142,`blockquote`)(143,`p`),Sk(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),Kg()()()(),Qc(145,`tr`,22)(146,`td`,15)(147,`div`,23)(148,`span`,24),Sk(149,` p-breadcrumb`),vu(150,`br`),Kg()()(),Qc(151,`td`,18)(152,`code`,25),Sk(153,`PoBreadcrumb`),Kg()(),Qc(154,`td`,20),Sk(155,`-`),Kg(),Qc(156,`td`,21)(157,`p`),Sk(158,`Objeto com propriedades do breadcrumb.`),Kg()()(),Qc(159,`tr`,26)(160,`td`,15)(161,`div`,23)(162,`span`,24),Sk(163,` p-components-size`),vu(164,`br`),Kg()()(),Qc(165,`td`,18)(166,`code`,27),Sk(167,`string`),Kg()(),Qc(168,`td`,20)(169,`p`)(170,`code`),Sk(171,`medium`),Kg()()(),Qc(172,`td`,21)(173,`em`)(174,`strong`),Sk(175,`(opcional)`),Kg()(),Qc(176,`p`),Sk(177,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(178,`ul`)(179,`li`)(180,`code`),Sk(181,`small`),Kg(),Sk(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(183,`li`)(184,`code`),Sk(185,`medium`),Kg(),Sk(186,`: aplica a medida medium de cada componente.`),Kg()(),Qc(187,`blockquote`)(188,`p`),Sk(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(190,`code`),Sk(191,`medium`),Kg(),Sk(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(193,`a`,28),Sk(194,`po-theme`),Kg(),Sk(195,`.`),Kg()()()(),Qc(196,`tr`,29)(197,`td`,15)(198,`div`,16)(199,`span`,17),Sk(200,` (p-edit)`),vu(201,`br`),Kg()()(),Qc(202,`td`,18)(203,`code`,19),Sk(204,`EventEmitter`),Kg()(),Qc(205,`td`,20),Sk(206,`-`),Kg(),Qc(207,`td`,21)(208,`p`),Sk(209,`Evento que será disparado ao clicar no botão de "Editar".`),Kg(),Qc(210,`pre`)(211,`code`),Sk(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),Kg()(),Qc(213,`blockquote`)(214,`p`),Sk(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),Kg()()()(),Qc(216,`tr`,30)(217,`td`,15)(218,`div`,23)(219,`span`,24),Sk(220,` p-literals`),vu(221,`br`),Kg()()(),Qc(222,`td`,18)(223,`code`,31),Sk(224,`PoPageDetailLiterals`),Kg()(),Qc(225,`td`,20),Sk(226,`-`),Kg(),Qc(227,`td`,21)(228,`em`)(229,`strong`),Sk(230,`(opcional)`),Kg()(),Qc(231,`p`),Sk(232,`Objeto com as literais usadas no `),Qc(233,`code`),Sk(234,`po-page-detail`),Kg(),Sk(235,`.`),Kg(),Qc(236,`p`),Sk(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(238,`pre`)(239,`code`),Sk(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),Kg()(),Qc(241,`p`),Sk(242,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(243,`pre`)(244,`code`),Sk(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),Kg()(),Qc(246,`p`),Sk(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(248,`pre`)(249,`code`),Sk(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),Kg()(),Qc(251,`blockquote`)(252,`p`),Sk(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(254,`a`,32)(255,`code`),Sk(256,`PoI18nService`),Kg()(),Sk(257,` ou do browser.`),Kg()()()(),Qc(258,`tr`,33)(259,`td`,15)(260,`div`,16)(261,`span`,17),Sk(262,` (p-remove)`),vu(263,`br`),Kg()()(),Qc(264,`td`,18)(265,`code`,19),Sk(266,`EventEmitter`),Kg()(),Qc(267,`td`,20),Sk(268,`-`),Kg(),Qc(269,`td`,21)(270,`p`),Sk(271,`Evento que será disparado ao clicar no botão de "Remover".`),Kg(),Qc(272,`pre`)(273,`code`),Sk(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),Kg()(),Qc(275,`blockquote`)(276,`p`),Sk(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),Kg()()()(),Qc(278,`tr`,34)(279,`td`,15)(280,`div`,23)(281,`span`,24),Sk(282,` p-subtitle`),vu(283,`br`),Kg()()(),Qc(284,`td`,18)(285,`code`,27),Sk(286,`string`),Kg()(),Qc(287,`td`,20),Sk(288,`-`),Kg(),Qc(289,`td`,21)(290,`em`)(291,`strong`),Sk(292,`(opcional)`),Kg()(),Qc(293,`p`),Sk(294,`Subtitulo do Header da página.`),Kg(),Qc(295,`p`),Sk(296,`Suporta formatação básica com as tags `),Qc(297,`code`),Sk(298,`<b>`),Kg(),Sk(299,` (negrito), `),Qc(300,`code`),Sk(301,`<strong>`),Kg(),Sk(302,` (negrito), `),Qc(303,`code`),Sk(304,`<i>`),Kg(),Sk(305,` (itálico), `),Qc(306,`code`),Sk(307,`<em>`),Kg(),Sk(308,` (it\xE1lico) e
`),Qc(309,`code`),Sk(310,`<u>`),Kg(),Sk(311,` (sublinhado).`),Kg(),Qc(312,`p`),Sk(313,`Exemplo:`),Kg(),Qc(314,`pre`)(315,`code`,35),Sk(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),Kg()(),Qc(317,`blockquote`)(318,`p`),Sk(319,`Requer que `),Qc(320,`code`),Sk(321,`p-title`),Kg(),Sk(322,` esteja definido.`),Kg()()()(),Qc(323,`tr`,36)(324,`td`,15)(325,`div`,23)(326,`span`,24),Sk(327,` p-title`),vu(328,`br`),Kg()()(),Qc(329,`td`,18)(330,`code`,27),Sk(331,`string`),Kg()(),Qc(332,`td`,20),Sk(333,`-`),Kg(),Qc(334,`td`,21)(335,`p`),Sk(336,`Título da página.`),Kg()()()(),Qc(337,`h3`),Sk(338,`Interfaces`),Kg(),Qc(339,`h4`,37)(340,`code`,5),Sk(341,`PoBreadcrumbItem`),Kg()(),Qc(342,`div`,2)(343,`p`),Sk(344,`Interface que define cada item do componente `),Qc(345,`strong`),Sk(346,`po-breadcrumb`),Kg(),Sk(347,`.`),Kg()(),Qc(348,`h4`,10),Sk(349,`Propriedades`),Kg(),Qc(350,`table`,11)(351,`tr`,12)(352,`th`,13),Sk(353,`Nome`),Kg(),Qc(354,`th`,13),Sk(355,`Tipo`),Kg(),Qc(356,`th`,13),Sk(357,`Descrição`),Kg()(),Qc(358,`tr`,38)(359,`td`,15)(360,`div`,23)(361,`span`,24),Sk(362,` action`),vu(363,`br`),Kg()()(),Qc(364,`td`,18)(365,`code`,39),Sk(366,`Function`),Kg()(),Qc(367,`td`,21)(368,`em`)(369,`strong`),Sk(370,`(opcional)`),Kg()(),Qc(371,`p`),Sk(372,`Ação executada ao clicar no item.`),Kg(),Qc(373,`blockquote`)(374,`p`),Sk(375,`A função atribuída a esta propriedade receberá o `),Qc(376,`em`),Sk(377,`label`),Kg(),Sk(378,` do item como parâmetro para execução.`),Kg()()()(),Qc(379,`tr`,40)(380,`td`,15)(381,`div`,23)(382,`span`,24),Sk(383,` label`),vu(384,`br`),Kg()()(),Qc(385,`td`,18)(386,`code`,27),Sk(387,`string`),Kg()(),Qc(388,`td`,21)(389,`p`),Sk(390,`Rótulo do item.`),Kg()()(),Qc(391,`tr`,41)(392,`td`,15)(393,`div`,23)(394,`span`,24),Sk(395,` link`),vu(396,`br`),Kg()()(),Qc(397,`td`,18)(398,`code`,27),Sk(399,`string`),Kg()(),Qc(400,`td`,21)(401,`em`)(402,`strong`),Sk(403,`(opcional)`),Kg()(),Qc(404,`p`),Sk(405,`Url do item.`),Kg(),Qc(406,`blockquote`)(407,`p`),Sk(408,`Caso o item também contenha uma `),Qc(409,`em`),Sk(410,`action`),Kg(),Sk(411,` definida, a preferência de execução será do `),Qc(412,`em`),Sk(413,`link`),Kg(),Sk(414,`.`),Kg()(),Qc(415,`blockquote`)(416,`p`),Sk(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Qc(418,`strong`)(419,`a`,42),Sk(420,`Veja um exemplo de como criar rotas aqui`),Kg()(),Sk(421,`.`),Kg()(),Qc(422,`blockquote`)(423,`p`),Sk(424,`Esta propriedade é necessária para que a propriedade `),Qc(425,`code`),Sk(426,`p-favorite-service`),Kg(),Sk(427,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Qc(428,`h4`,43)(429,`code`,5),Sk(430,`PoBreadcrumb`),Kg()(),Qc(431,`div`,2)(432,`p`),Sk(433,`Interface que define o `),Qc(434,`code`),Sk(435,`po-breadcrumb`),Kg(),Sk(436,`.`),Kg()(),Qc(437,`h4`,10),Sk(438,`Propriedades`),Kg(),Qc(439,`table`,11)(440,`tr`,12)(441,`th`,13),Sk(442,`Nome`),Kg(),Qc(443,`th`,13),Sk(444,`Tipo`),Kg(),Qc(445,`th`,13),Sk(446,`Descrição`),Kg()(),Qc(447,`tr`,44)(448,`td`,15)(449,`div`,23)(450,`span`,24),Sk(451,` favorite`),vu(452,`br`),Kg()()(),Qc(453,`td`,18)(454,`code`,27),Sk(455,`string`),Kg()(),Qc(456,`td`,21)(457,`em`)(458,`strong`),Sk(459,`(opcional)`),Kg()(),Qc(460,`p`),Sk(461,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Qc(462,`blockquote`)(463,`p`),Sk(464,`Para maiores informações verificar a propriedade `),Qc(465,`code`),Sk(466,`p-favorite-service`),Kg(),Sk(467,` do componente `),Qc(468,`code`),Sk(469,`po-breadcrumb`),Kg(),Sk(470,`.`),Kg()()()(),Qc(471,`tr`,45)(472,`td`,15)(473,`div`,23)(474,`span`,24),Sk(475,` items`),vu(476,`br`),Kg()()(),Qc(477,`td`,18)(478,`code`,46),Sk(479,`Array<PoBreadcrumbItem>`),Kg()(),Qc(480,`td`,21)(481,`p`),Sk(482,`Lista de itens do `),Qc(483,`em`),Sk(484,`breadcrumb`),Kg(),Sk(485,`.`),Kg(),Qc(486,`p`)(487,`strong`),Sk(488,`Exemplo:`),Kg()(),Qc(489,`pre`)(490,`code`),Sk(491,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Qc(492,`tr`,47)(493,`td`,15)(494,`div`,23)(495,`span`,24),Sk(496,` params`),vu(497,`br`),Kg()()(),Qc(498,`td`,18)(499,`code`,48),Sk(500,`object`),Kg()(),Qc(501,`td`,21)(502,`em`)(503,`strong`),Sk(504,`(opcional)`),Kg()(),Qc(505,`p`),Sk(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Qc(507,`h4`,49)(508,`code`,5),Sk(509,`PoPageDetailLiterals`),Kg()(),Qc(510,`div`,2)(511,`p`),Sk(512,`Interface para definição das literais usadas no `),Qc(513,`code`),Sk(514,`po-page-detail`),Kg(),Sk(515,`.`),Kg()(),Qc(516,`h4`,10),Sk(517,`Propriedades`),Kg(),Qc(518,`table`,11)(519,`tr`,12)(520,`th`,13),Sk(521,`Nome`),Kg(),Qc(522,`th`,13),Sk(523,`Tipo`),Kg(),Qc(524,`th`,13),Sk(525,`Descrição`),Kg()(),Qc(526,`tr`,50)(527,`td`,15)(528,`div`,23)(529,`span`,24),Sk(530,` back`),vu(531,`br`),Kg()()(),Qc(532,`td`,18)(533,`code`,27),Sk(534,`string`),Kg()(),Qc(535,`td`,21)(536,`em`)(537,`strong`),Sk(538,`(opcional)`),Kg()(),Qc(539,`p`),Sk(540,`Label da ação `),Qc(541,`code`),Sk(542,`back`),Kg(),Sk(543,`.`),Kg()()(),Qc(544,`tr`,51)(545,`td`,15)(546,`div`,23)(547,`span`,24),Sk(548,` edit`),vu(549,`br`),Kg()()(),Qc(550,`td`,18)(551,`code`,27),Sk(552,`string`),Kg()(),Qc(553,`td`,21)(554,`em`)(555,`strong`),Sk(556,`(opcional)`),Kg()(),Qc(557,`p`),Sk(558,`Label da ação `),Qc(559,`code`),Sk(560,`edit`),Kg(),Sk(561,`.`),Kg()()(),Qc(562,`tr`,52)(563,`td`,15)(564,`div`,23)(565,`span`,24),Sk(566,` remove`),vu(567,`br`),Kg()()(),Qc(568,`td`,18)(569,`code`,27),Sk(570,`string`),Kg()(),Qc(571,`td`,21)(572,`em`)(573,`strong`),Sk(574,`(opcional)`),Kg()(),Qc(575,`p`),Sk(576,`Label da ação `),Qc(577,`code`),Sk(578,`remove`),Kg(),Sk(579,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ge(a,Se){if(a&1&&(Qc(0,`div`,1),vu(1,`sample-po-page-detail-basic-view`)(2,`sample-po-page-detail-labs-view`)(3,`sample-po-page-detail-user-view`),Kg()),a&2){let p=ek();Rb(`hidden`,p.activeTab!==`web`)}}var Ee=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Detail`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Page Detail · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0),FO(1,ge,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-page-detail-doc`),Kg()()),r&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,ee,ie,ae,oe],encapsulation:2,changeDetection:1})}return a})()}];var le=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ee),GV]})}return a})();var Xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,le]})}return a})();export{Xe as DocPoPageDetailModule};