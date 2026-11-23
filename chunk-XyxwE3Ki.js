import{m as P,p as M}from"./main-RBGX2DMP.js";import{$a as tm,Ar as I,At as Zte,Ca as j_,G as Nf,Gi as Yb,Ha as p,Hn as wne,Ii as WL,Ir as Kb,Kn as xne,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,Zr as No,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,io as vt,j as I4,ki as V_,li as Qc,lt as Ss,ra as de$1,rr as AZ,si as QL,sn as j4,so as wg,tt as R4,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-page-slide`,1,0),Sk(2,` Hello World! `),Kg(),Qc(3,`div`,2)(4,`po-button`,3),vt(`p-click`,function(){B_(d);let a=ik(1);return U_(a.open())}),Kg()()}},dependencies:[oi,wne],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-slide-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var Pe=[`poPageSlide`];var me=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(r=>r!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Du(Pe,5),l&2){let d;No(d=xo())&&(n.poPageSlide=d.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-page-slide`,2,0),Sk(2),Qc(3,`po-page-slide-footer`)(4,`po-button`,3),vt(`p-click`,function(){return n.closePage()}),Kg(),Qc(5,`po-button`,4),vt(`p-click`,function(){return n.closePage()}),Kg()()(),Qc(6,`po-button`,5),vt(`p-click`,function(){return n.openPage()}),Kg(),vu(7,`po-divider`),Qc(8,`form`,null,1)(10,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.title,a)||(n.title=a),U_(a)}),Kg(),Qc(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.subtitle,a)||(n.subtitle=a),U_(a)}),Kg(),Qc(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.content,a)||(n.content=a),U_(a)}),Kg(),Qc(13,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.properties,a)||(n.properties=a),U_(a)}),Kg(),Qc(14,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.size,a)||(n.size=a),U_(a)}),vt(`ngModelChange`,function(){return n.onChangeSize()}),Kg(),Qc(15,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.componentsSize,a)||(n.componentsSize=a),U_(a)}),Kg(),Qc(16,`div`,12)(17,`po-button`,13),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let d=ik(9);Rb(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),wg(2),tm(` `,n.content,` `),wg(4),Rb(`p-disabled`,d.form.invalid),wg(4),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.subtitle),W0(),wg(),Yb(`ngModel`,n.content),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,wne,xne],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-page-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-slide-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` content `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`

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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(29,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{router=p(An);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.bluetooth,a)||(n.bluetooth=a),U_(a)}),Kg(),Qc(4,`po-switch`,4),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.locked,a)||(n.locked=a),U_(a)}),Kg()(),Qc(5,`div`,2)(6,`po-switch`,5),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.microphone,a)||(n.microphone=a),U_(a)}),Kg(),Qc(7,`po-switch`,6),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.notification,a)||(n.notification=a),U_(a)}),Kg()(),Qc(8,`div`,2)(9,`po-switch`,7),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.localization,a)||(n.localization=a),U_(a)}),Kg(),Qc(10,`po-switch`,8),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.favorited,a)||(n.favorited=a),U_(a)}),Kg()(),vu(11,`po-divider`),Qc(12,`h2`,9),Sk(13,`About Page Slide`),Kg(),Qc(14,`section`,10)(15,`h3`,11),Sk(16,`Usage`),Kg(),Qc(17,`ul`,12)(18,`li`),Sk(19,`To reveal additional navigation controls`),Kg(),Qc(20,`li`),Sk(21,`In TV or mobile space since controls and/or space is limited`),Kg(),Qc(22,`li`),Sk(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),Kg(),Qc(24,`li`),Sk(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),Kg()()(),Qc(26,`section`,10)(27,`h3`,11),Sk(28,`Challenges`),Kg(),Qc(29,`ul`,12)(30,`li`),Sk(31,`Discoverability`),Kg(),Qc(32,`li`),Sk(33,`Losing context with the rest of the page`),Kg(),Qc(34,`li`),Sk(35,`Make the disruption work for you`),Kg()()(),Qc(36,`section`,10)(37,`h3`,11),Sk(38,`Recommendations`),Kg(),Qc(39,`ul`,12)(40,`li`),Sk(41,`Use it sparingly only for major context switches`),Kg(),Qc(42,`li`),Sk(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),Kg(),Qc(44,`li`),Sk(45,`Make the activation/deactivation dead simple`),Kg()()(),Qc(46,`p`),Sk(47,` For more information visit `),Qc(48,`a`,13),Sk(49,`Designing Web Interfaces: Page Slide`),Kg()(),Qc(50,`po-page-slide-footer`)(51,`po-button`,14),vt(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),Kg()()(),Qc(52,`div`,15)(53,`po-button`,16),vt(`p-click`,function(){B_(d);let a=ik(1);return U_(a.open())}),Kg()()}l&2&&(wg(3),Yb(`ngModel`,n.bluetooth),W0(),wg(),Yb(`ngModel`,n.locked),W0(),wg(2),Yb(`ngModel`,n.microphone),W0(),wg(),Yb(`ngModel`,n.notification),W0(),wg(2),Yb(`ngModel`,n.localization),W0(),wg(),Yb(`ngModel`,n.favorited),W0())},dependencies:[MZ,QL,oi,Nf,R4,wne,xne],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-slide-configuration`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide - Configuration`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-slide-configuration`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:572,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Page Slide Footer`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-page-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-flexible-width`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-open`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[`id`,`method-close`,1,`docs-api-method-table`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`blockquote`,3)(23,`strong`),Sk(24,`Subcomponentes:`),Kg(),Qc(25,`po-tag`,4),vt(`p-click`,function(){return n.openDoc(`po-page-slide-footer`)}),Kg()(),Qc(26,`h3`,5),Sk(27,`Componente`),Kg(),Qc(28,`h4`,6)(29,`code`,7),Sk(30,`PoPageSlideComponent`),Kg()(),Qc(31,`div`,2)(32,`p`),Sk(33,`O componente `),Qc(34,`code`),Sk(35,`po-page-slide`),Kg(),Sk(36,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),Kg(),Qc(37,`p`),Sk(38,`Este componente é ativado a partir do método `),Qc(39,`code`),Sk(40,`#open()`),Kg(),Sk(41,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Qc(42,`code`),Sk(43,`#close()`),Kg(),Sk(44,`.`),Kg(),Qc(45,`p`),Sk(46,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Qc(47,`a`,8),Sk(48,`Grid System`),Kg(),Sk(49,`.`),Kg(),Qc(50,`p`),Sk(51,`No rodapé é possível utilizar o componente `),Qc(52,`a`,9)(53,`code`),Sk(54,`PoPageSlideFooter`),Kg()(),Sk(55,` para customização do template.`),Kg(),Qc(56,`ul`)(57,`li`)(58,`h4`),Sk(59,`Tokens customizáveis`),Kg()()(),Qc(60,`p`),Sk(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(62,`blockquote`)(63,`p`),Sk(64,`Para maiores informações, acesse o guia `),Qc(65,`a`,10),Sk(66,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(67,`.`),Kg()(),Qc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),Sk(72,`Propriedade`),Kg(),Qc(73,`th`),Sk(74,`Descrição`),Kg(),Qc(75,`th`),Sk(76,`Valor Padrão`),Kg()()(),Qc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),Sk(81,`--font-family`),Kg()(),Qc(82,`td`),Sk(83,`Família tipográfica usada`),Kg(),Qc(84,`td`)(85,`code`),Sk(86,`var(--font-family-theme)`),Kg()()(),Qc(87,`tr`)(88,`td`)(89,`code`),Sk(90,`--font-weight`),Kg()(),Qc(91,`td`),Sk(92,`Peso da fonte`),Kg(),Qc(93,`td`)(94,`code`),Sk(95,`var(--font-weight-bold)`),Kg()()(),Qc(96,`tr`)(97,`td`)(98,`code`),Sk(99,`--padding-header`),Kg()(),Qc(100,`td`),Sk(101,`Espaçamento do header`),Kg(),Qc(102,`td`)(103,`code`),Sk(104,`var(--spacing-md)`),Kg()()(),Qc(105,`tr`)(106,`td`)(107,`code`),Sk(108,`--padding-body`),Kg()(),Qc(109,`td`),Sk(110,`Espaçamento do conteúdo`),Kg(),Qc(111,`td`)(112,`code`),Sk(113,`var(--line-height-none)`),Kg()()(),Qc(114,`tr`)(115,`td`)(116,`code`),Sk(117,`--padding-footer`),Kg()(),Qc(118,`td`),Sk(119,`Espaçamento do footer`),Kg(),Qc(120,`td`)(121,`code`),Sk(122,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),Kg()()(),Qc(123,`tr`)(124,`td`)(125,`strong`),Sk(126,`Default Values`),Kg()(),vu(127,`td`)(128,`td`),Kg(),Qc(129,`tr`)(130,`td`)(131,`code`),Sk(132,`--color-overlay`),Kg()(),Qc(133,`td`),Sk(134,`Cor do overlay`),Kg(),Qc(135,`td`)(136,`code`),Sk(137,`var(--color-neutral-dark-80)`),Kg()()(),Qc(138,`tr`)(139,`td`)(140,`code`),Sk(141,`--opacity-overlay`),Kg()(),Qc(142,`td`),Sk(143,`Cor da opacidade do overlay`),Kg(),Qc(144,`td`)(145,`code`),Sk(146,`0.7`),Kg()()(),Qc(147,`tr`)(148,`td`)(149,`code`),Sk(150,`--background-color`),Kg()(),Qc(151,`td`),Sk(152,`Cor de background`),Kg(),Qc(153,`td`)(154,`code`),Sk(155,`var(--color-neutral-light-00)`),Kg()()(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--border-color`),Kg()(),Qc(160,`td`),Sk(161,`Cor da borda`),Kg(),Qc(162,`td`)(163,`code`),Sk(164,`var(--color-neutral-light-20)`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`code`),Sk(168,`--color-title`),Kg()(),Qc(169,`td`),Sk(170,`Cor do titulo do header`),Kg(),Qc(171,`td`)(172,`code`),Sk(173,`var(--color-neutral-dark-95)`),Kg()()(),Qc(174,`tr`)(175,`td`)(176,`code`),Sk(177,`--border-radius`),Kg()(),Qc(178,`td`),Sk(179,`Radius da borda`),Kg(),Qc(180,`td`)(181,`code`),Sk(182,`var(--border-radius-md) 0 0 var(--border-radius-md)`),Kg()()(),Qc(183,`tr`)(184,`td`)(185,`code`),Sk(186,`--transition-duration`),Kg()(),Qc(187,`td`),Sk(188,`Duração da transição`),Kg(),Qc(189,`td`)(190,`code`),Sk(191,`var(--duration-extra-fast)`),Kg()()(),Qc(192,`tr`)(193,`td`)(194,`code`),Sk(195,`--transition-timing`),Kg()(),Qc(196,`td`),Sk(197,`Duração da transição com o tipo de transição`),Kg(),Qc(198,`td`)(199,`code`),Sk(200,`var(--duration-extra-slow) var(--timing-standart)`),Kg()()(),Qc(201,`tr`)(202,`td`)(203,`code`),Sk(204,`--page-slide-width-sm`),Kg()(),Qc(205,`td`),Sk(206,`Tamanho da largura do componente no tamanho `),Qc(207,`code`),Sk(208,`small`),Kg()(),Qc(209,`td`)(210,`code`),Sk(211,`40%`),Kg()()(),Qc(212,`tr`)(213,`td`)(214,`code`),Sk(215,`--page-slide-width-md`),Kg()(),Qc(216,`td`),Sk(217,`Tamanho da largura do componente no tamanho `),Qc(218,`code`),Sk(219,`medium`),Kg()(),Qc(220,`td`)(221,`code`),Sk(222,`50%`),Kg()()(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--page-slide-width-lg`),Kg()(),Qc(227,`td`),Sk(228,`Tamanho da largura do componente no tamanho `),Qc(229,`code`),Sk(230,`large`),Kg()(),Qc(231,`td`)(232,`code`),Sk(233,`60%`),Kg()()(),Qc(234,`tr`)(235,`td`)(236,`code`),Sk(237,`--page-slide-width-xl`),Kg()(),Qc(238,`td`),Sk(239,`Tamanho da largura do componente no tamanho `),Qc(240,`code`),Sk(241,`extra large`),Kg()(),Qc(242,`td`)(243,`code`),Sk(244,`70%`),Kg()()(),Qc(245,`tr`)(246,`td`)(247,`code`),Sk(248,`--page-slide-min-width-auto`),Kg()(),Qc(249,`td`),Sk(250,`Tamanho da largura mínima do componente no tamanho `),Qc(251,`code`),Sk(252,`auto`),Kg()(),Qc(253,`td`)(254,`code`),Sk(255,`40%`),Kg()()(),Qc(256,`tr`)(257,`td`)(258,`code`),Sk(259,`--page-slide-max-width-auto`),Kg()(),Qc(260,`td`),Sk(261,`Tamanho da largura máxima do componente no tamanho `),Qc(262,`code`),Sk(263,`auto`),Kg()(),Qc(264,`td`)(265,`code`),Sk(266,`90%`),Kg()()()()()(),Qc(267,`div`,11)(268,`h4`,12),Sk(269,`Seletor`),Kg(),Qc(270,`pre`,13),Sk(271,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),Kg()(),Qc(272,`h4`,14),Sk(273,`Propriedades`),Kg(),Qc(274,`table`,15)(275,`tr`,16)(276,`th`,17),Sk(277,`Nome`),Kg(),Qc(278,`th`,17),Sk(279,`Tipo`),Kg(),Qc(280,`th`,17),Sk(281,`Padrão`),Kg(),Qc(282,`th`,17),Sk(283,`Descrição`),Kg()(),Qc(284,`tr`,18)(285,`td`,19)(286,`div`,20)(287,`span`,21),Sk(288,` p-click-out`),vu(289,`br`),Kg()()(),Qc(290,`td`,22)(291,`code`,23),Sk(292,`boolean`),Kg()(),Qc(293,`td`,24)(294,`p`)(295,`code`),Sk(296,`false`),Kg()()(),Qc(297,`td`,25)(298,`em`)(299,`strong`),Sk(300,`(opcional)`),Kg()(),Qc(301,`p`),Sk(302,`Define se permite o encerramento da página ao clicar fora da mesma.`),Kg()()(),Qc(303,`tr`,26)(304,`td`,19)(305,`div`,27)(306,`span`,28),Sk(307,` (p-close)`),vu(308,`br`),Kg()()(),Qc(309,`td`,22)(310,`code`,29),Sk(311,`EventEmitter`),Kg()(),Qc(312,`td`,24),Sk(313,`-`),Kg(),Qc(314,`td`,25)(315,`em`)(316,`strong`),Sk(317,`(opcional)`),Kg()(),Qc(318,`p`),Sk(319,`Evento executado ao fechar o page slide.`),Kg()()(),Qc(320,`tr`,30)(321,`td`,19)(322,`div`,20)(323,`span`,21),Sk(324,` p-components-size`),vu(325,`br`),Kg()()(),Qc(326,`td`,22)(327,`code`,31),Sk(328,`string`),Kg()(),Qc(329,`td`,24)(330,`p`)(331,`code`),Sk(332,`medium`),Kg()()(),Qc(333,`td`,25)(334,`em`)(335,`strong`),Sk(336,`(opcional)`),Kg()(),Qc(337,`p`),Sk(338,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(339,`ul`)(340,`li`)(341,`code`),Sk(342,`small`),Kg(),Sk(343,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(344,`li`)(345,`code`),Sk(346,`medium`),Kg(),Sk(347,`: aplica a medida medium de cada componente.`),Kg()(),Qc(348,`blockquote`)(349,`p`),Sk(350,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(351,`code`),Sk(352,`medium`),Kg(),Sk(353,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(354,`a`,32),Sk(355,`po-theme`),Kg(),Sk(356,`.`),Kg()()()(),Qc(357,`tr`,33)(358,`td`,19)(359,`div`,20)(360,`span`,21),Sk(361,` p-flexible-width`),vu(362,`br`),Kg()()(),Qc(363,`td`,22)(364,`code`,23),Sk(365,`boolean`),Kg()(),Qc(366,`td`,24)(367,`p`)(368,`code`),Sk(369,`false`),Kg()()(),Qc(370,`td`,25)(371,`em`)(372,`strong`),Sk(373,`(opcional)`),Kg()(),Qc(374,`p`),Sk(375,`Permite a expansão dinâmica da largura do `),Qc(376,`code`),Sk(377,`po-page-slide`),Kg(),Sk(378,` quando `),Qc(379,`code`),Sk(380,`p-size`),Kg(),Sk(381,` for `),Qc(382,`code`),Sk(383,`auto`),Kg(),Sk(384,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Qc(385,`code`),Sk(386,`po-table`),Kg(),Sk(387,` dentro do `),Qc(388,`code`),Sk(389,`po-page-slide`),Kg()()()(),Qc(390,`tr`,34)(391,`td`,19)(392,`div`,20)(393,`span`,21),Sk(394,` p-hide-close`),vu(395,`br`),Kg()()(),Qc(396,`td`,22)(397,`code`,23),Sk(398,`boolean`),Kg()(),Qc(399,`td`,24)(400,`p`)(401,`code`),Sk(402,`false`),Kg()()(),Qc(403,`td`,25)(404,`em`)(405,`strong`),Sk(406,`(opcional)`),Kg()(),Qc(407,`p`),Sk(408,`Oculta o botão de encerramento da página.`),Kg(),Qc(409,`blockquote`)(410,`p`),Sk(411,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Qc(412,`code`),Sk(413,`p-click-out`),Kg(),Sk(414,` habilitado ou, no modo `),Qc(415,`code`),Sk(416,`full`),Kg(),Sk(417,`, um
`),Qc(418,`a`,9)(419,`code`),Sk(420,`po-page-slide-footer`),Kg()(),Sk(421,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),Kg()()()(),Qc(422,`tr`,35)(423,`td`,19)(424,`div`,20)(425,`span`,21),Sk(426,` p-size`),vu(427,`br`),Kg()()(),Qc(428,`td`,22)(429,`code`,36),Sk(430,`PoPageSlideSize`),Kg()(),Qc(431,`td`,24)(432,`p`)(433,`code`),Sk(434,`md`),Kg()()(),Qc(435,`td`,25)(436,`em`)(437,`strong`),Sk(438,`(opcional)`),Kg()(),Qc(439,`p`),Sk(440,`Define o tamanho da página.`),Kg(),Qc(441,`p`),Sk(442,`Valores válidos:`),Kg(),Qc(443,`ul`)(444,`li`)(445,`code`),Sk(446,`sm`),Kg(),Sk(447,` (pequeno)`),Kg(),Qc(448,`li`)(449,`code`),Sk(450,`md`),Kg(),Sk(451,` (médio)`),Kg(),Qc(452,`li`)(453,`code`),Sk(454,`lg`),Kg(),Sk(455,` (grande)`),Kg(),Qc(456,`li`)(457,`code`),Sk(458,`xl`),Kg(),Sk(459,` (extra-grande)`),Kg(),Qc(460,`li`)(461,`code`),Sk(462,`auto`),Kg(),Sk(463,` (automático)`),Kg(),Qc(464,`li`)(465,`code`),Sk(466,`full`),Kg(),Sk(467,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),Kg()(),Qc(468,`blockquote`)(469,`p`),Sk(470,`Todas as opções de tamanho, exceto `),Qc(471,`code`),Sk(472,`auto`),Kg(),Sk(473,` e `),Qc(474,`code`),Sk(475,`full`),Kg(),Sk(476,`, possuem uma largura máxima de `),Qc(477,`strong`),Sk(478,`768px`),Kg(),Sk(479,`.`),Kg()(),Qc(480,`blockquote`)(481,`p`),Sk(482,`No modo `),Qc(483,`code`),Sk(484,`full`),Kg(),Sk(485,`, como não há overlay, o fechamento por clique fora (`),Qc(486,`code`),Sk(487,`p-click-out`),Kg(),Sk(488,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Qc(489,`code`),Sk(490,`Escape`),Kg(),Sk(491,`, pelo método `),Qc(492,`code`),Sk(493,`#close()`),Kg(),Sk(494,`
ou por um bot\xE3o no `),Qc(495,`a`,9)(496,`code`),Sk(497,`po-page-slide-footer`),Kg()(),Sk(498,`.`),Kg()()()(),Qc(499,`tr`,37)(500,`td`,19)(501,`div`,20)(502,`span`,21),Sk(503,` p-subtitle`),vu(504,`br`),Kg()()(),Qc(505,`td`,22)(506,`code`,31),Sk(507,`string`),Kg()(),Qc(508,`td`,24),Sk(509,`-`),Kg(),Qc(510,`td`,25)(511,`em`)(512,`strong`),Sk(513,`(opcional)`),Kg()(),Qc(514,`p`),Sk(515,`Subtítulo da página.`),Kg()()(),Qc(516,`tr`,38)(517,`td`,19)(518,`div`,20)(519,`span`,21),Sk(520,` p-title`),vu(521,`br`),Kg()()(),Qc(522,`td`,22)(523,`code`,31),Sk(524,`string`),Kg()(),Qc(525,`td`,24),Sk(526,`-`),Kg(),Qc(527,`td`,25)(528,`p`),Sk(529,`Título da página.`),Kg()()()(),Qc(530,`h3`,14),Sk(531,`Métodos`),Kg(),Qc(532,`table`,39)(533,`tr`,40)(534,`th`,41)(535,`div`,20)(536,`h4`)(537,`span`,21),Sk(538,` open `),Kg()()()()(),Qc(539,`tr`,25)(540,`td`,25)(541,`p`),Sk(542,`Ativa a visualização da página.`),Kg(),Qc(543,`p`),Sk(544,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Qc(545,`code`),Sk(546,`ViewChild`),Kg(),Sk(547,` da seguinte forma:`),Kg(),Qc(548,`pre`)(549,`code`,42),Sk(550,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),Kg()()()()(),vu(551,`br`),Qc(552,`table`,43)(553,`tr`,40)(554,`th`,41)(555,`div`,20)(556,`h4`)(557,`span`,21),Sk(558,` close `),Kg()()()()(),Qc(559,`tr`,25)(560,`td`,25)(561,`p`),Sk(562,`Encerra a visualização da página.`),Kg(),Qc(563,`p`),Sk(564,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Qc(565,`code`),Sk(566,`ViewChild`),Kg(),Sk(567,` da seguinte forma:`),Kg(),Qc(568,`pre`)(569,`code`,42),Sk(570,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),Kg()()()()(),vu(571,`br`),Kg())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function _e(o,ke){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-page-slide-basic-view`)(2,`sample-po-page-slide-labs-view`)(3,`sample-po-page-slide-configuration-view`),Kg()),o&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Slide`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Page Slide · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0),FO(1,_e,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-page-slide-doc`),Kg()()),l&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,se,ue,ge],encapsulation:2,changeDetection:1})}return o})()}];var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Me),GV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,he]})}return o})();export{lt as DocPoPageSlideModule};