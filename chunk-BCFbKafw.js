import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,G as Nf,Hn as wne,Ii as WL,Ir as Kb,Kn as xne,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-page-slide`,1,0),Sk(2,` Hello World! `),Kg(),Qc(3,`div`,2)(4,`po-button`,3),vt(`p-click`,function(){B_(m);let a=ik(1);return U_(a.open())}),Kg()()}},dependencies:[oi,wne],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-slide-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,fe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var xe=[`poPageSlide`];var se=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(r=>r!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Du(xe,5),l&2){let m;No(m=xo())&&(n.poPageSlide=m.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-page-slide`,2,0),Sk(2),Qc(3,`po-page-slide-footer`)(4,`po-button`,3),vt(`p-click`,function(){return n.closePage()}),Kg(),Qc(5,`po-button`,4),vt(`p-click`,function(){return n.closePage()}),Kg()()(),Qc(6,`po-button`,5),vt(`p-click`,function(){return n.openPage()}),Kg(),vu(7,`po-divider`),Qc(8,`form`,null,1)(10,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.title,a)||(n.title=a),U_(a)}),Kg(),Qc(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.subtitle,a)||(n.subtitle=a),U_(a)}),Kg(),Qc(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.content,a)||(n.content=a),U_(a)}),Kg(),Qc(13,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.properties,a)||(n.properties=a),U_(a)}),Kg(),Qc(14,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.size,a)||(n.size=a),U_(a)}),vt(`ngModelChange`,function(){return n.onChangeSize()}),Kg(),Qc(15,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.componentsSize,a)||(n.componentsSize=a),U_(a)}),Kg(),Qc(16,`div`,12)(17,`po-button`,13),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let m=ik(9);Rb(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),wg(2),tm(` `,n.content,` `),wg(4),Rb(`p-disabled`,m.form.invalid),wg(4),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.subtitle),W0(),wg(),Yb(`ngModel`,n.content),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,wne,xne],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}

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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-slide-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{router=p(An);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.bluetooth,a)||(n.bluetooth=a),U_(a)}),Kg(),Qc(4,`po-switch`,4),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.locked,a)||(n.locked=a),U_(a)}),Kg()(),Qc(5,`div`,2)(6,`po-switch`,5),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.microphone,a)||(n.microphone=a),U_(a)}),Kg(),Qc(7,`po-switch`,6),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.notification,a)||(n.notification=a),U_(a)}),Kg()(),Qc(8,`div`,2)(9,`po-switch`,7),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.localization,a)||(n.localization=a),U_(a)}),Kg(),Qc(10,`po-switch`,8),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.favorited,a)||(n.favorited=a),U_(a)}),Kg()(),vu(11,`po-divider`),Qc(12,`h2`,9),Sk(13,`About Page Slide`),Kg(),Qc(14,`section`,10)(15,`h3`,11),Sk(16,`Usage`),Kg(),Qc(17,`ul`,12)(18,`li`),Sk(19,`To reveal additional navigation controls`),Kg(),Qc(20,`li`),Sk(21,`In TV or mobile space since controls and/or space is limited`),Kg(),Qc(22,`li`),Sk(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),Kg(),Qc(24,`li`),Sk(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),Kg()()(),Qc(26,`section`,10)(27,`h3`,11),Sk(28,`Challenges`),Kg(),Qc(29,`ul`,12)(30,`li`),Sk(31,`Discoverability`),Kg(),Qc(32,`li`),Sk(33,`Losing context with the rest of the page`),Kg(),Qc(34,`li`),Sk(35,`Make the disruption work for you`),Kg()()(),Qc(36,`section`,10)(37,`h3`,11),Sk(38,`Recommendations`),Kg(),Qc(39,`ul`,12)(40,`li`),Sk(41,`Use it sparingly only for major context switches`),Kg(),Qc(42,`li`),Sk(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),Kg(),Qc(44,`li`),Sk(45,`Make the activation/deactivation dead simple`),Kg()()(),Qc(46,`p`),Sk(47,` For more information visit `),Qc(48,`a`,13),Sk(49,`Designing Web Interfaces: Page Slide`),Kg()(),Qc(50,`po-page-slide-footer`)(51,`po-button`,14),vt(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),Kg()()(),Qc(52,`div`,15)(53,`po-button`,16),vt(`p-click`,function(){B_(m);let a=ik(1);return U_(a.open())}),Kg()()}l&2&&(wg(3),Yb(`ngModel`,n.bluetooth),W0(),wg(),Yb(`ngModel`,n.locked),W0(),wg(2),Yb(`ngModel`,n.microphone),W0(),wg(),Yb(`ngModel`,n.notification),W0(),wg(2),Yb(`ngModel`,n.localization),W0(),wg(),Yb(`ngModel`,n.favorited),W0())},dependencies:[MZ,QL,oi,Nf,R4,wne,xne],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-slide-configuration`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Slide - Configuration`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-slide-configuration`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ue],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:574,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-flexible-width`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-open`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-page-slide-footer?view=doc`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoPageSlideComponent`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,`O componente `),Qc(30,`code`),Sk(31,`po-page-slide`),Kg(),Sk(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),Kg(),Qc(33,`p`),Sk(34,`Este componente é ativado a partir do método `),Qc(35,`code`),Sk(36,`#open()`),Kg(),Sk(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Qc(38,`code`),Sk(39,`#close()`),Kg(),Sk(40,`.`),Kg(),Qc(41,`p`),Sk(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Qc(43,`a`,6),Sk(44,`Grid System`),Kg(),Sk(45,`.`),Kg(),Qc(46,`p`),Sk(47,`No rodapé é possível utilizar o componente `),Qc(48,`a`,7)(49,`code`),Sk(50,`PoPageSlideFooter`),Kg()(),Sk(51,` para customização do template.`),Kg(),Qc(52,`ul`)(53,`li`)(54,`h4`),Sk(55,`Tokens customizáveis`),Kg()()(),Qc(56,`p`),Sk(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(58,`blockquote`)(59,`p`),Sk(60,`Para maiores informações, acesse o guia `),Qc(61,`a`,8),Sk(62,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(63,`.`),Kg()(),Qc(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),Sk(68,`Propriedade`),Kg(),Qc(69,`th`),Sk(70,`Descrição`),Kg(),Qc(71,`th`),Sk(72,`Valor Padrão`),Kg()()(),Qc(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),Sk(77,`--font-family`),Kg()(),Qc(78,`td`),Sk(79,`Família tipográfica usada`),Kg(),Qc(80,`td`)(81,`code`),Sk(82,`var(--font-family-theme)`),Kg()()(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--font-weight`),Kg()(),Qc(87,`td`),Sk(88,`Peso da fonte`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--font-weight-bold)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--padding-header`),Kg()(),Qc(96,`td`),Sk(97,`Espaçamento do header`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--spacing-md)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--padding-body`),Kg()(),Qc(105,`td`),Sk(106,`Espaçamento do conteúdo`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--line-height-none)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--padding-footer`),Kg()(),Qc(114,`td`),Sk(115,`Espaçamento do footer`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`strong`),Sk(122,`Default Values`),Kg()(),vu(123,`td`)(124,`td`),Kg(),Qc(125,`tr`)(126,`td`)(127,`code`),Sk(128,`--color-overlay`),Kg()(),Qc(129,`td`),Sk(130,`Cor do overlay`),Kg(),Qc(131,`td`)(132,`code`),Sk(133,`var(--color-neutral-dark-80)`),Kg()()(),Qc(134,`tr`)(135,`td`)(136,`code`),Sk(137,`--opacity-overlay`),Kg()(),Qc(138,`td`),Sk(139,`Cor da opacidade do overlay`),Kg(),Qc(140,`td`)(141,`code`),Sk(142,`0.7`),Kg()()(),Qc(143,`tr`)(144,`td`)(145,`code`),Sk(146,`--background-color`),Kg()(),Qc(147,`td`),Sk(148,`Cor de background`),Kg(),Qc(149,`td`)(150,`code`),Sk(151,`var(--color-neutral-light-00)`),Kg()()(),Qc(152,`tr`)(153,`td`)(154,`code`),Sk(155,`--border-color`),Kg()(),Qc(156,`td`),Sk(157,`Cor da borda`),Kg(),Qc(158,`td`)(159,`code`),Sk(160,`var(--color-neutral-light-20)`),Kg()()(),Qc(161,`tr`)(162,`td`)(163,`code`),Sk(164,`--color-title`),Kg()(),Qc(165,`td`),Sk(166,`Cor do titulo do header`),Kg(),Qc(167,`td`)(168,`code`),Sk(169,`var(--color-neutral-dark-95)`),Kg()()(),Qc(170,`tr`)(171,`td`)(172,`code`),Sk(173,`--border-radius`),Kg()(),Qc(174,`td`),Sk(175,`Radius da borda`),Kg(),Qc(176,`td`)(177,`code`),Sk(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),Kg()()(),Qc(179,`tr`)(180,`td`)(181,`code`),Sk(182,`--transition-duration`),Kg()(),Qc(183,`td`),Sk(184,`Duração da transição`),Kg(),Qc(185,`td`)(186,`code`),Sk(187,`var(--duration-extra-fast)`),Kg()()(),Qc(188,`tr`)(189,`td`)(190,`code`),Sk(191,`--transition-timing`),Kg()(),Qc(192,`td`),Sk(193,`Duração da transição com o tipo de transição`),Kg(),Qc(194,`td`)(195,`code`),Sk(196,`var(--duration-extra-slow) var(--timing-standart)`),Kg()()(),Qc(197,`tr`)(198,`td`)(199,`code`),Sk(200,`--page-slide-width-sm`),Kg()(),Qc(201,`td`),Sk(202,`Tamanho da largura do componente no tamanho `),Qc(203,`code`),Sk(204,`small`),Kg()(),Qc(205,`td`)(206,`code`),Sk(207,`40%`),Kg()()(),Qc(208,`tr`)(209,`td`)(210,`code`),Sk(211,`--page-slide-width-md`),Kg()(),Qc(212,`td`),Sk(213,`Tamanho da largura do componente no tamanho `),Qc(214,`code`),Sk(215,`medium`),Kg()(),Qc(216,`td`)(217,`code`),Sk(218,`50%`),Kg()()(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--page-slide-width-lg`),Kg()(),Qc(223,`td`),Sk(224,`Tamanho da largura do componente no tamanho `),Qc(225,`code`),Sk(226,`large`),Kg()(),Qc(227,`td`)(228,`code`),Sk(229,`60%`),Kg()()(),Qc(230,`tr`)(231,`td`)(232,`code`),Sk(233,`--page-slide-width-xl`),Kg()(),Qc(234,`td`),Sk(235,`Tamanho da largura do componente no tamanho `),Qc(236,`code`),Sk(237,`extra large`),Kg()(),Qc(238,`td`)(239,`code`),Sk(240,`70%`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--page-slide-min-width-auto`),Kg()(),Qc(245,`td`),Sk(246,`Tamanho da largura mínima do componente no tamanho `),Qc(247,`code`),Sk(248,`auto`),Kg()(),Qc(249,`td`)(250,`code`),Sk(251,`40%`),Kg()()(),Qc(252,`tr`)(253,`td`)(254,`code`),Sk(255,`--page-slide-max-width-auto`),Kg()(),Qc(256,`td`),Sk(257,`Tamanho da largura máxima do componente no tamanho `),Qc(258,`code`),Sk(259,`auto`),Kg()(),Qc(260,`td`)(261,`code`),Sk(262,`90%`),Kg()()()()()(),Qc(263,`div`,9)(264,`h4`,10),Sk(265,`Seletor`),Kg(),Qc(266,`pre`,11),Sk(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),Kg()(),Qc(268,`h4`,12),Sk(269,`Propriedades`),Kg(),Qc(270,`table`,13)(271,`tr`,14)(272,`th`,15),Sk(273,`Nome`),Kg(),Qc(274,`th`,15),Sk(275,`Tipo`),Kg(),Qc(276,`th`,15),Sk(277,`Padrão`),Kg(),Qc(278,`th`,15),Sk(279,`Descrição`),Kg()(),Qc(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),Sk(284,` p-click-out`),vu(285,`br`),Kg()()(),Qc(286,`td`,20)(287,`code`,21),Sk(288,`boolean`),Kg()(),Qc(289,`td`,22)(290,`p`)(291,`code`),Sk(292,`false`),Kg()()(),Qc(293,`td`,23)(294,`em`)(295,`strong`),Sk(296,`(opcional)`),Kg()(),Qc(297,`p`),Sk(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),Kg()()(),Qc(299,`tr`,24)(300,`td`,17)(301,`div`,25)(302,`span`,26),Sk(303,` (p-close)`),vu(304,`br`),Kg()()(),Qc(305,`td`,20)(306,`code`,27),Sk(307,`EventEmitter`),Kg()(),Qc(308,`td`,22),Sk(309,`-`),Kg(),Qc(310,`td`,23)(311,`em`)(312,`strong`),Sk(313,`(opcional)`),Kg()(),Qc(314,`p`),Sk(315,`Evento executado ao fechar o page slide.`),Kg()()(),Qc(316,`tr`,28)(317,`td`,17)(318,`div`,18)(319,`span`,19),Sk(320,` p-components-size`),vu(321,`br`),Kg()()(),Qc(322,`td`,20)(323,`code`,29),Sk(324,`string`),Kg()(),Qc(325,`td`,22)(326,`p`)(327,`code`),Sk(328,`medium`),Kg()()(),Qc(329,`td`,23)(330,`em`)(331,`strong`),Sk(332,`(opcional)`),Kg()(),Qc(333,`p`),Sk(334,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(335,`ul`)(336,`li`)(337,`code`),Sk(338,`small`),Kg(),Sk(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(340,`li`)(341,`code`),Sk(342,`medium`),Kg(),Sk(343,`: aplica a medida medium de cada componente.`),Kg()(),Qc(344,`blockquote`)(345,`p`),Sk(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(347,`code`),Sk(348,`medium`),Kg(),Sk(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(350,`a`,30),Sk(351,`po-theme`),Kg(),Sk(352,`.`),Kg()()()(),Qc(353,`tr`,31)(354,`td`,17)(355,`div`,18)(356,`span`,19),Sk(357,` p-flexible-width`),vu(358,`br`),Kg()()(),Qc(359,`td`,20)(360,`code`,21),Sk(361,`boolean`),Kg()(),Qc(362,`td`,22)(363,`p`)(364,`code`),Sk(365,`false`),Kg()()(),Qc(366,`td`,23)(367,`em`)(368,`strong`),Sk(369,`(opcional)`),Kg()(),Qc(370,`p`),Sk(371,`Permite a expansão dinâmica da largura do `),Qc(372,`code`),Sk(373,`po-page-slide`),Kg(),Sk(374,` quando `),Qc(375,`code`),Sk(376,`p-size`),Kg(),Sk(377,` for `),Qc(378,`code`),Sk(379,`auto`),Kg(),Sk(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Qc(381,`code`),Sk(382,`po-table`),Kg(),Sk(383,` dentro do `),Qc(384,`code`),Sk(385,`po-page-slide`),Kg()()()(),Qc(386,`tr`,32)(387,`td`,17)(388,`div`,18)(389,`span`,19),Sk(390,` p-hide-close`),vu(391,`br`),Kg()()(),Qc(392,`td`,20)(393,`code`,21),Sk(394,`boolean`),Kg()(),Qc(395,`td`,22)(396,`p`)(397,`code`),Sk(398,`false`),Kg()()(),Qc(399,`td`,23)(400,`em`)(401,`strong`),Sk(402,`(opcional)`),Kg()(),Qc(403,`p`),Sk(404,`Oculta o botão de encerramento da página.`),Kg(),Qc(405,`blockquote`)(406,`p`),Sk(407,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Qc(408,`code`),Sk(409,`p-click-out`),Kg(),Sk(410,` habilitado ou, no modo `),Qc(411,`code`),Sk(412,`full`),Kg(),Sk(413,`, um
`),Qc(414,`a`,7)(415,`code`),Sk(416,`po-page-slide-footer`),Kg()(),Sk(417,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),Kg()()()(),Qc(418,`tr`,33)(419,`td`,17)(420,`div`,18)(421,`span`,19),Sk(422,` p-size`),vu(423,`br`),Kg()()(),Qc(424,`td`,20)(425,`code`,34),Sk(426,`PoPageSlideSize`),Kg()(),Qc(427,`td`,22)(428,`p`)(429,`code`),Sk(430,`md`),Kg()()(),Qc(431,`td`,23)(432,`em`)(433,`strong`),Sk(434,`(opcional)`),Kg()(),Qc(435,`p`),Sk(436,`Define o tamanho da página.`),Kg(),Qc(437,`p`),Sk(438,`Valores válidos:`),Kg(),Qc(439,`ul`)(440,`li`)(441,`code`),Sk(442,`sm`),Kg(),Sk(443,` (pequeno)`),Kg(),Qc(444,`li`)(445,`code`),Sk(446,`md`),Kg(),Sk(447,` (médio)`),Kg(),Qc(448,`li`)(449,`code`),Sk(450,`lg`),Kg(),Sk(451,` (grande)`),Kg(),Qc(452,`li`)(453,`code`),Sk(454,`xl`),Kg(),Sk(455,` (extra-grande)`),Kg(),Qc(456,`li`)(457,`code`),Sk(458,`auto`),Kg(),Sk(459,` (automático)`),Kg(),Qc(460,`li`)(461,`code`),Sk(462,`full`),Kg(),Sk(463,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),Kg()(),Qc(464,`blockquote`)(465,`p`),Sk(466,`Todas as opções de tamanho, exceto `),Qc(467,`code`),Sk(468,`auto`),Kg(),Sk(469,` e `),Qc(470,`code`),Sk(471,`full`),Kg(),Sk(472,`, possuem uma largura máxima de `),Qc(473,`strong`),Sk(474,`768px`),Kg(),Sk(475,`.`),Kg()(),Qc(476,`blockquote`)(477,`p`),Sk(478,`No modo `),Qc(479,`code`),Sk(480,`full`),Kg(),Sk(481,`, como não há overlay, o fechamento por clique fora (`),Qc(482,`code`),Sk(483,`p-click-out`),Kg(),Sk(484,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Qc(485,`code`),Sk(486,`Escape`),Kg(),Sk(487,`, pelo método `),Qc(488,`code`),Sk(489,`#close()`),Kg(),Sk(490,`
ou por um bot\xE3o no `),Qc(491,`a`,7)(492,`code`),Sk(493,`po-page-slide-footer`),Kg()(),Sk(494,`.`),Kg()()()(),Qc(495,`tr`,35)(496,`td`,17)(497,`div`,18)(498,`span`,19),Sk(499,` p-subtitle`),vu(500,`br`),Kg()()(),Qc(501,`td`,20)(502,`code`,29),Sk(503,`string`),Kg()(),Qc(504,`td`,22),Sk(505,`-`),Kg(),Qc(506,`td`,23)(507,`em`)(508,`strong`),Sk(509,`(opcional)`),Kg()(),Qc(510,`p`),Sk(511,`Subtítulo da página.`),Kg()()(),Qc(512,`tr`,36)(513,`td`,17)(514,`div`,18)(515,`span`,19),Sk(516,` p-title`),vu(517,`br`),Kg()()(),Qc(518,`td`,20)(519,`code`,29),Sk(520,`string`),Kg()(),Qc(521,`td`,22),Sk(522,`-`),Kg(),Qc(523,`td`,23)(524,`p`),Sk(525,`Título da página.`),Kg()()()(),Qc(526,`h3`,12),Sk(527,`Métodos`),Kg(),Qc(528,`table`,37)(529,`tr`,38)(530,`th`,39)(531,`div`,18)(532,`h4`)(533,`span`,19),Sk(534,` open `),Kg()()()()(),Qc(535,`tr`,23)(536,`td`,23)(537,`p`),Sk(538,`Ativa a visualização da página.`),Kg(),Qc(539,`p`),Sk(540,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Qc(541,`code`),Sk(542,`ViewChild`),Kg(),Sk(543,` da seguinte forma:`),Kg(),Qc(544,`pre`)(545,`code`,40),Sk(546,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),Kg()()()()(),vu(547,`br`),Qc(548,`table`,41)(549,`tr`,38)(550,`th`,39)(551,`div`,18)(552,`h4`)(553,`span`,19),Sk(554,` close `),Kg()()()()(),Qc(555,`tr`,23)(556,`td`,23)(557,`p`),Sk(558,`Encerra a visualização da página.`),Kg(),Qc(559,`p`),Sk(560,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Qc(561,`code`),Sk(562,`ViewChild`),Kg(),Sk(563,` da seguinte forma:`),Kg(),Qc(564,`pre`)(565,`code`,40),Sk(566,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),Kg()()()()(),vu(567,`br`),Qc(568,`h3`,42),Sk(569,`Subcomponentes`),Kg(),Qc(570,`ul`,43)(571,`li`)(572,`a`,44),Sk(573,`Page Slide Footer`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function ze(o,Ve){if(o&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-page-slide-basic-view`)(2,`sample-po-page-slide-labs-view`)(3,`sample-po-page-slide-configuration-view`),Kg()}if(o&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var De=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ze,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-page-slide-doc`),Kg()()()),l&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,me,ce,ge,Se],encapsulation:2,changeDetection:1})}return o})()}];var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[GV.forChild(De),GV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,be]})}return o})();export{lt as DocPoPageSlideModule};