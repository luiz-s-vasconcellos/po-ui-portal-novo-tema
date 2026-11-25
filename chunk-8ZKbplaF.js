import{m as P,p as M}from"./main-RWBWY5VM.js";import{$r as No,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Ln as xne,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Pn as wne,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ar as B_,ca as ge$1,do as xo,ea as de$1,er as Ab,fn as oi,fr as Cu,ja as nm,jr as H_,li as QL,lt as Ss,nt as R4,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-page-slide`,1,0),Mk(2,` Hello World! `),Kg(),Jc(3,`div`,2)(4,`po-button`,3),_t(`p-click`,function(){U_(d);let a=ok(1);return H_(a.open())}),Kg()()}},dependencies:[oi,wne],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Slide Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-slide-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var Pe=[`poPageSlide`];var me=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(r=>r!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Cu(Pe,5),l&2){let d;No(d=xo())&&(n.poPageSlide=d.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-page-slide`,2,0),Mk(2),Jc(3,`po-page-slide-footer`)(4,`po-button`,3),_t(`p-click`,function(){return n.closePage()}),Kg(),Jc(5,`po-button`,4),_t(`p-click`,function(){return n.closePage()}),Kg()()(),Jc(6,`po-button`,5),_t(`p-click`,function(){return n.openPage()}),Kg(),_u(7,`po-divider`),Jc(8,`form`,null,1)(10,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.title,a)||(n.title=a),H_(a)}),Kg(),Jc(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.subtitle,a)||(n.subtitle=a),H_(a)}),Kg(),Jc(12,`po-input`,8),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.content,a)||(n.content=a),H_(a)}),Kg(),Jc(13,`po-checkbox-group`,9),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.properties,a)||(n.properties=a),H_(a)}),Kg(),Jc(14,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.size,a)||(n.size=a),H_(a)}),_t(`ngModelChange`,function(){return n.onChangeSize()}),Kg(),Jc(15,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.componentsSize,a)||(n.componentsSize=a),H_(a)}),Kg(),Jc(16,`div`,12)(17,`po-button`,13),_t(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let d=ok(9);Ab(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),wg(2),nm(` `,n.content,` `),wg(4),Ab(`p-disabled`,d.form.invalid),wg(4),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.subtitle),q0(),wg(),Kb(`ngModel`,n.content),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0(),wg(),Kb(`ngModel`,n.componentsSize),Ab(`p-options`,n.componentsSizeOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,wne,xne],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-page-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Slide Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-slide-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` content `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`

  <po-page-slide-footer>
    <po-button p-kind="secondary" p-label="Cancelar" (p-click)="closePage()"></po-button>
    <po-button p-kind="primary" p-label="Fechar" (p-click)="closePage()"></po-button>
  </po-page-slide-footer>
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
  <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
  <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  ></po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="Size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="No modo full a p\xE1gina ocupa 100% da largura, portanto n\xE3o h\xE1 \xE1rea externa para clicar e a propriedade Click Out n\xE3o \xE9 aplic\xE1vel. Utilize o bot\xE3o do cabe\xE7alho, a tecla Esc ou um bot\xE3o no rodap\xE9 para fechar."
    [p-options]="sizeOptions"
    p-optional
    (ngModelChange)="onChangeSize()"
  ></po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public componentsSize: string;
  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public get isFullSize(): boolean {
    return this.size === 'full';
  }

  public get propertiesOptions(): Array<PoCheckboxGroupOption> {
    return [
      {
        value: 'click-out',
        label: 'Click Out',
        disabled: this.isFullSize
      },
      {
        value: 'hide-close',
        label: 'Hide Close'
      }
    ];
  }

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    },
    {
      label: 'Full',
      value: 'full'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public closePage() {
    this.poPageSlide.close();
  }

  public onChangeSize() {
    if (this.isFullSize && this.properties.includes('click-out')) {
      this.properties = this.properties.filter(property => property !== 'click-out');
    }
  }

  public restore() {
    this.componentsSize = 'medium';
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{router=p(An);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.bluetooth,a)||(n.bluetooth=a),H_(a)}),Kg(),Jc(4,`po-switch`,4),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.locked,a)||(n.locked=a),H_(a)}),Kg()(),Jc(5,`div`,2)(6,`po-switch`,5),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.microphone,a)||(n.microphone=a),H_(a)}),Kg(),Jc(7,`po-switch`,6),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.notification,a)||(n.notification=a),H_(a)}),Kg()(),Jc(8,`div`,2)(9,`po-switch`,7),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.localization,a)||(n.localization=a),H_(a)}),Kg(),Jc(10,`po-switch`,8),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.favorited,a)||(n.favorited=a),H_(a)}),Kg()(),_u(11,`po-divider`),Jc(12,`h2`,9),Mk(13,`About Page Slide`),Kg(),Jc(14,`section`,10)(15,`h3`,11),Mk(16,`Usage`),Kg(),Jc(17,`ul`,12)(18,`li`),Mk(19,`To reveal additional navigation controls`),Kg(),Jc(20,`li`),Mk(21,`In TV or mobile space since controls and/or space is limited`),Kg(),Jc(22,`li`),Mk(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),Kg(),Jc(24,`li`),Mk(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),Kg()()(),Jc(26,`section`,10)(27,`h3`,11),Mk(28,`Challenges`),Kg(),Jc(29,`ul`,12)(30,`li`),Mk(31,`Discoverability`),Kg(),Jc(32,`li`),Mk(33,`Losing context with the rest of the page`),Kg(),Jc(34,`li`),Mk(35,`Make the disruption work for you`),Kg()()(),Jc(36,`section`,10)(37,`h3`,11),Mk(38,`Recommendations`),Kg(),Jc(39,`ul`,12)(40,`li`),Mk(41,`Use it sparingly only for major context switches`),Kg(),Jc(42,`li`),Mk(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),Kg(),Jc(44,`li`),Mk(45,`Make the activation/deactivation dead simple`),Kg()()(),Jc(46,`p`),Mk(47,` For more information visit `),Jc(48,`a`,13),Mk(49,`Designing Web Interfaces: Page Slide`),Kg()(),Jc(50,`po-page-slide-footer`)(51,`po-button`,14),_t(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),Kg()()(),Jc(52,`div`,15)(53,`po-button`,16),_t(`p-click`,function(){U_(d);let a=ok(1);return H_(a.open())}),Kg()()}l&2&&(wg(3),Kb(`ngModel`,n.bluetooth),q0(),wg(),Kb(`ngModel`,n.locked),q0(),wg(2),Kb(`ngModel`,n.microphone),q0(),wg(),Kb(`ngModel`,n.notification),q0(),wg(2),Kb(`ngModel`,n.localization),q0(),wg(),Kb(`ngModel`,n.favorited),q0())},dependencies:[RZ,QL,oi,Nf,R4,wne,xne],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-slide-configuration`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Slide - Configuration`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-slide-configuration`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <po-divider />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  private router = inject(Router);

  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:572,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Page Slide Footer`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-page-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-flexible-width`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-open`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[`id`,`method-close`,1,`docs-api-method-table`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Mk(8,`po-page-default`),Kg(),Mk(9,`, `),Jc(10,`code`),Mk(11,`po-page-detail`),Kg(),Mk(12,`,
`),Jc(13,`code`),Mk(14,`po-page-edit`),Kg(),Mk(15,`, `),Jc(16,`code`),Mk(17,`po-page-list`),Kg(),Mk(18,` e `),Jc(19,`code`),Mk(20,`po-page-slide`),Kg(),Mk(21,`.`),Kg()(),Jc(22,`blockquote`,3)(23,`strong`),Mk(24,`Subcomponentes:`),Kg(),Jc(25,`po-tag`,4),_t(`p-click`,function(){return n.openDoc(`po-page-slide-footer`)}),Kg()(),Jc(26,`h3`,5),Mk(27,`Componente`),Kg(),Jc(28,`h4`,6)(29,`code`,7),Mk(30,`PoPageSlideComponent`),Kg()(),Jc(31,`div`,2)(32,`p`),Mk(33,`O componente `),Jc(34,`code`),Mk(35,`po-page-slide`),Kg(),Mk(36,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),Kg(),Jc(37,`p`),Mk(38,`Este componente é ativado a partir do método `),Jc(39,`code`),Mk(40,`#open()`),Kg(),Mk(41,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Jc(42,`code`),Mk(43,`#close()`),Kg(),Mk(44,`.`),Kg(),Jc(45,`p`),Mk(46,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Jc(47,`a`,8),Mk(48,`Grid System`),Kg(),Mk(49,`.`),Kg(),Jc(50,`p`),Mk(51,`No rodapé é possível utilizar o componente `),Jc(52,`a`,9)(53,`code`),Mk(54,`PoPageSlideFooter`),Kg()(),Mk(55,` para customização do template.`),Kg(),Jc(56,`ul`)(57,`li`)(58,`h4`),Mk(59,`Tokens customizáveis`),Kg()()(),Jc(60,`p`),Mk(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(62,`blockquote`)(63,`p`),Mk(64,`Para maiores informações, acesse o guia `),Jc(65,`a`,10),Mk(66,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(67,`.`),Kg()(),Jc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),Mk(72,`Propriedade`),Kg(),Jc(73,`th`),Mk(74,`Descrição`),Kg(),Jc(75,`th`),Mk(76,`Valor Padrão`),Kg()()(),Jc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),Mk(81,`--font-family`),Kg()(),Jc(82,`td`),Mk(83,`Família tipográfica usada`),Kg(),Jc(84,`td`)(85,`code`),Mk(86,`var(--font-family-theme)`),Kg()()(),Jc(87,`tr`)(88,`td`)(89,`code`),Mk(90,`--font-weight`),Kg()(),Jc(91,`td`),Mk(92,`Peso da fonte`),Kg(),Jc(93,`td`)(94,`code`),Mk(95,`var(--font-weight-bold)`),Kg()()(),Jc(96,`tr`)(97,`td`)(98,`code`),Mk(99,`--padding-header`),Kg()(),Jc(100,`td`),Mk(101,`Espaçamento do header`),Kg(),Jc(102,`td`)(103,`code`),Mk(104,`var(--spacing-md)`),Kg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Mk(108,`--padding-body`),Kg()(),Jc(109,`td`),Mk(110,`Espaçamento do conteúdo`),Kg(),Jc(111,`td`)(112,`code`),Mk(113,`var(--line-height-none)`),Kg()()(),Jc(114,`tr`)(115,`td`)(116,`code`),Mk(117,`--padding-footer`),Kg()(),Jc(118,`td`),Mk(119,`Espaçamento do footer`),Kg(),Jc(120,`td`)(121,`code`),Mk(122,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),Kg()()(),Jc(123,`tr`)(124,`td`)(125,`strong`),Mk(126,`Default Values`),Kg()(),_u(127,`td`)(128,`td`),Kg(),Jc(129,`tr`)(130,`td`)(131,`code`),Mk(132,`--color-overlay`),Kg()(),Jc(133,`td`),Mk(134,`Cor do overlay`),Kg(),Jc(135,`td`)(136,`code`),Mk(137,`var(--color-neutral-dark-80)`),Kg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Mk(141,`--opacity-overlay`),Kg()(),Jc(142,`td`),Mk(143,`Cor da opacidade do overlay`),Kg(),Jc(144,`td`)(145,`code`),Mk(146,`0.7`),Kg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Mk(150,`--background-color`),Kg()(),Jc(151,`td`),Mk(152,`Cor de background`),Kg(),Jc(153,`td`)(154,`code`),Mk(155,`var(--color-neutral-light-00)`),Kg()()(),Jc(156,`tr`)(157,`td`)(158,`code`),Mk(159,`--border-color`),Kg()(),Jc(160,`td`),Mk(161,`Cor da borda`),Kg(),Jc(162,`td`)(163,`code`),Mk(164,`var(--color-neutral-light-20)`),Kg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Mk(168,`--color-title`),Kg()(),Jc(169,`td`),Mk(170,`Cor do titulo do header`),Kg(),Jc(171,`td`)(172,`code`),Mk(173,`var(--color-neutral-dark-95)`),Kg()()(),Jc(174,`tr`)(175,`td`)(176,`code`),Mk(177,`--border-radius`),Kg()(),Jc(178,`td`),Mk(179,`Radius da borda`),Kg(),Jc(180,`td`)(181,`code`),Mk(182,`var(--border-radius-md) 0 0 var(--border-radius-md)`),Kg()()(),Jc(183,`tr`)(184,`td`)(185,`code`),Mk(186,`--transition-duration`),Kg()(),Jc(187,`td`),Mk(188,`Duração da transição`),Kg(),Jc(189,`td`)(190,`code`),Mk(191,`var(--duration-extra-fast)`),Kg()()(),Jc(192,`tr`)(193,`td`)(194,`code`),Mk(195,`--transition-timing`),Kg()(),Jc(196,`td`),Mk(197,`Duração da transição com o tipo de transição`),Kg(),Jc(198,`td`)(199,`code`),Mk(200,`var(--duration-extra-slow) var(--timing-standart)`),Kg()()(),Jc(201,`tr`)(202,`td`)(203,`code`),Mk(204,`--page-slide-width-sm`),Kg()(),Jc(205,`td`),Mk(206,`Tamanho da largura do componente no tamanho `),Jc(207,`code`),Mk(208,`small`),Kg()(),Jc(209,`td`)(210,`code`),Mk(211,`40%`),Kg()()(),Jc(212,`tr`)(213,`td`)(214,`code`),Mk(215,`--page-slide-width-md`),Kg()(),Jc(216,`td`),Mk(217,`Tamanho da largura do componente no tamanho `),Jc(218,`code`),Mk(219,`medium`),Kg()(),Jc(220,`td`)(221,`code`),Mk(222,`50%`),Kg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Mk(226,`--page-slide-width-lg`),Kg()(),Jc(227,`td`),Mk(228,`Tamanho da largura do componente no tamanho `),Jc(229,`code`),Mk(230,`large`),Kg()(),Jc(231,`td`)(232,`code`),Mk(233,`60%`),Kg()()(),Jc(234,`tr`)(235,`td`)(236,`code`),Mk(237,`--page-slide-width-xl`),Kg()(),Jc(238,`td`),Mk(239,`Tamanho da largura do componente no tamanho `),Jc(240,`code`),Mk(241,`extra large`),Kg()(),Jc(242,`td`)(243,`code`),Mk(244,`70%`),Kg()()(),Jc(245,`tr`)(246,`td`)(247,`code`),Mk(248,`--page-slide-min-width-auto`),Kg()(),Jc(249,`td`),Mk(250,`Tamanho da largura mínima do componente no tamanho `),Jc(251,`code`),Mk(252,`auto`),Kg()(),Jc(253,`td`)(254,`code`),Mk(255,`40%`),Kg()()(),Jc(256,`tr`)(257,`td`)(258,`code`),Mk(259,`--page-slide-max-width-auto`),Kg()(),Jc(260,`td`),Mk(261,`Tamanho da largura máxima do componente no tamanho `),Jc(262,`code`),Mk(263,`auto`),Kg()(),Jc(264,`td`)(265,`code`),Mk(266,`90%`),Kg()()()()()(),Jc(267,`div`,11)(268,`h4`,12),Mk(269,`Seletor`),Kg(),Jc(270,`pre`,13),Mk(271,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),Kg()(),Jc(272,`h4`,14),Mk(273,`Propriedades`),Kg(),Jc(274,`table`,15)(275,`tr`,16)(276,`th`,17),Mk(277,`Nome`),Kg(),Jc(278,`th`,17),Mk(279,`Tipo`),Kg(),Jc(280,`th`,17),Mk(281,`Padrão`),Kg(),Jc(282,`th`,17),Mk(283,`Descrição`),Kg()(),Jc(284,`tr`,18)(285,`td`,19)(286,`div`,20)(287,`span`,21),Mk(288,` p-click-out`),_u(289,`br`),Kg()()(),Jc(290,`td`,22)(291,`code`,23),Mk(292,`boolean`),Kg()(),Jc(293,`td`,24)(294,`p`)(295,`code`),Mk(296,`false`),Kg()()(),Jc(297,`td`,25)(298,`em`)(299,`strong`),Mk(300,`(opcional)`),Kg()(),Jc(301,`p`),Mk(302,`Define se permite o encerramento da página ao clicar fora da mesma.`),Kg()()(),Jc(303,`tr`,26)(304,`td`,19)(305,`div`,27)(306,`span`,28),Mk(307,` (p-close)`),_u(308,`br`),Kg()()(),Jc(309,`td`,22)(310,`code`,29),Mk(311,`EventEmitter`),Kg()(),Jc(312,`td`,24),Mk(313,`-`),Kg(),Jc(314,`td`,25)(315,`em`)(316,`strong`),Mk(317,`(opcional)`),Kg()(),Jc(318,`p`),Mk(319,`Evento executado ao fechar o page slide.`),Kg()()(),Jc(320,`tr`,30)(321,`td`,19)(322,`div`,20)(323,`span`,21),Mk(324,` p-components-size`),_u(325,`br`),Kg()()(),Jc(326,`td`,22)(327,`code`,31),Mk(328,`string`),Kg()(),Jc(329,`td`,24)(330,`p`)(331,`code`),Mk(332,`medium`),Kg()()(),Jc(333,`td`,25)(334,`em`)(335,`strong`),Mk(336,`(opcional)`),Kg()(),Jc(337,`p`),Mk(338,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(339,`ul`)(340,`li`)(341,`code`),Mk(342,`small`),Kg(),Mk(343,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(344,`li`)(345,`code`),Mk(346,`medium`),Kg(),Mk(347,`: aplica a medida medium de cada componente.`),Kg()(),Jc(348,`blockquote`)(349,`p`),Mk(350,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(351,`code`),Mk(352,`medium`),Kg(),Mk(353,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(354,`a`,32),Mk(355,`po-theme`),Kg(),Mk(356,`.`),Kg()()()(),Jc(357,`tr`,33)(358,`td`,19)(359,`div`,20)(360,`span`,21),Mk(361,` p-flexible-width`),_u(362,`br`),Kg()()(),Jc(363,`td`,22)(364,`code`,23),Mk(365,`boolean`),Kg()(),Jc(366,`td`,24)(367,`p`)(368,`code`),Mk(369,`false`),Kg()()(),Jc(370,`td`,25)(371,`em`)(372,`strong`),Mk(373,`(opcional)`),Kg()(),Jc(374,`p`),Mk(375,`Permite a expansão dinâmica da largura do `),Jc(376,`code`),Mk(377,`po-page-slide`),Kg(),Mk(378,` quando `),Jc(379,`code`),Mk(380,`p-size`),Kg(),Mk(381,` for `),Jc(382,`code`),Mk(383,`auto`),Kg(),Mk(384,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Jc(385,`code`),Mk(386,`po-table`),Kg(),Mk(387,` dentro do `),Jc(388,`code`),Mk(389,`po-page-slide`),Kg()()()(),Jc(390,`tr`,34)(391,`td`,19)(392,`div`,20)(393,`span`,21),Mk(394,` p-hide-close`),_u(395,`br`),Kg()()(),Jc(396,`td`,22)(397,`code`,23),Mk(398,`boolean`),Kg()(),Jc(399,`td`,24)(400,`p`)(401,`code`),Mk(402,`false`),Kg()()(),Jc(403,`td`,25)(404,`em`)(405,`strong`),Mk(406,`(opcional)`),Kg()(),Jc(407,`p`),Mk(408,`Oculta o botão de encerramento da página.`),Kg(),Jc(409,`blockquote`)(410,`p`),Mk(411,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Jc(412,`code`),Mk(413,`p-click-out`),Kg(),Mk(414,` habilitado ou, no modo `),Jc(415,`code`),Mk(416,`full`),Kg(),Mk(417,`, um
`),Jc(418,`a`,9)(419,`code`),Mk(420,`po-page-slide-footer`),Kg()(),Mk(421,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),Kg()()()(),Jc(422,`tr`,35)(423,`td`,19)(424,`div`,20)(425,`span`,21),Mk(426,` p-size`),_u(427,`br`),Kg()()(),Jc(428,`td`,22)(429,`code`,36),Mk(430,`PoPageSlideSize`),Kg()(),Jc(431,`td`,24)(432,`p`)(433,`code`),Mk(434,`md`),Kg()()(),Jc(435,`td`,25)(436,`em`)(437,`strong`),Mk(438,`(opcional)`),Kg()(),Jc(439,`p`),Mk(440,`Define o tamanho da página.`),Kg(),Jc(441,`p`),Mk(442,`Valores válidos:`),Kg(),Jc(443,`ul`)(444,`li`)(445,`code`),Mk(446,`sm`),Kg(),Mk(447,` (pequeno)`),Kg(),Jc(448,`li`)(449,`code`),Mk(450,`md`),Kg(),Mk(451,` (médio)`),Kg(),Jc(452,`li`)(453,`code`),Mk(454,`lg`),Kg(),Mk(455,` (grande)`),Kg(),Jc(456,`li`)(457,`code`),Mk(458,`xl`),Kg(),Mk(459,` (extra-grande)`),Kg(),Jc(460,`li`)(461,`code`),Mk(462,`auto`),Kg(),Mk(463,` (automático)`),Kg(),Jc(464,`li`)(465,`code`),Mk(466,`full`),Kg(),Mk(467,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),Kg()(),Jc(468,`blockquote`)(469,`p`),Mk(470,`Todas as opções de tamanho, exceto `),Jc(471,`code`),Mk(472,`auto`),Kg(),Mk(473,` e `),Jc(474,`code`),Mk(475,`full`),Kg(),Mk(476,`, possuem uma largura máxima de `),Jc(477,`strong`),Mk(478,`768px`),Kg(),Mk(479,`.`),Kg()(),Jc(480,`blockquote`)(481,`p`),Mk(482,`No modo `),Jc(483,`code`),Mk(484,`full`),Kg(),Mk(485,`, como não há overlay, o fechamento por clique fora (`),Jc(486,`code`),Mk(487,`p-click-out`),Kg(),Mk(488,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Jc(489,`code`),Mk(490,`Escape`),Kg(),Mk(491,`, pelo método `),Jc(492,`code`),Mk(493,`#close()`),Kg(),Mk(494,`
ou por um bot\xE3o no `),Jc(495,`a`,9)(496,`code`),Mk(497,`po-page-slide-footer`),Kg()(),Mk(498,`.`),Kg()()()(),Jc(499,`tr`,37)(500,`td`,19)(501,`div`,20)(502,`span`,21),Mk(503,` p-subtitle`),_u(504,`br`),Kg()()(),Jc(505,`td`,22)(506,`code`,31),Mk(507,`string`),Kg()(),Jc(508,`td`,24),Mk(509,`-`),Kg(),Jc(510,`td`,25)(511,`em`)(512,`strong`),Mk(513,`(opcional)`),Kg()(),Jc(514,`p`),Mk(515,`Subtítulo da página.`),Kg()()(),Jc(516,`tr`,38)(517,`td`,19)(518,`div`,20)(519,`span`,21),Mk(520,` p-title`),_u(521,`br`),Kg()()(),Jc(522,`td`,22)(523,`code`,31),Mk(524,`string`),Kg()(),Jc(525,`td`,24),Mk(526,`-`),Kg(),Jc(527,`td`,25)(528,`p`),Mk(529,`Título da página.`),Kg()()()(),Jc(530,`h3`,14),Mk(531,`Métodos`),Kg(),Jc(532,`table`,39)(533,`tr`,40)(534,`th`,41)(535,`div`,20)(536,`h4`)(537,`span`,21),Mk(538,` open `),Kg()()()()(),Jc(539,`tr`,25)(540,`td`,25)(541,`p`),Mk(542,`Ativa a visualização da página.`),Kg(),Jc(543,`p`),Mk(544,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Jc(545,`code`),Mk(546,`ViewChild`),Kg(),Mk(547,` da seguinte forma:`),Kg(),Jc(548,`pre`)(549,`code`,42),Mk(550,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),Kg()()()()(),_u(551,`br`),Jc(552,`table`,43)(553,`tr`,40)(554,`th`,41)(555,`div`,20)(556,`h4`)(557,`span`,21),Mk(558,` close `),Kg()()()()(),Jc(559,`tr`,25)(560,`td`,25)(561,`p`),Mk(562,`Encerra a visualização da página.`),Kg(),Jc(563,`p`),Mk(564,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Jc(565,`code`),Mk(566,`ViewChild`),Kg(),Mk(567,` da seguinte forma:`),Kg(),Jc(568,`pre`)(569,`code`,42),Mk(570,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),Kg()()()()(),_u(571,`br`),Kg())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function _e(o,ke){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-slide-basic-view`)(2,`sample-po-page-slide-labs-view`)(3,`sample-po-page-slide-configuration-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Slide`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Page Slide · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0),LO(1,_e,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-page-slide-doc`),Kg()()),l&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,se,ue,ge],encapsulation:2,changeDetection:1})}return o})()}];var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Me),GV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,he]})}return o})();export{lt as DocPoPageSlideModule};