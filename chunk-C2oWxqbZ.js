import{$ as R4,$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Un as xne,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_,zn as wne}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=ZO();Jc(0,`po-page-slide`,1,0),Tk(2,` Hello World! `),Zg(),Jc(3,`div`,2)(4,`po-button`,3),vt(`p-click`,function(){U_(m);let a=sk(1);return H_(a.open())}),Zg()()}},dependencies:[oi,wne],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Slide Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-slide-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var xe=[`poPageSlide`];var se=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(r=>r!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Cu(xe,5),l&2){let m;No(m=xo())&&(n.poPageSlide=m.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=ZO();Jc(0,`po-page-slide`,2,0),Tk(2),Jc(3,`po-page-slide-footer`)(4,`po-button`,3),vt(`p-click`,function(){return n.closePage()}),Zg(),Jc(5,`po-button`,4),vt(`p-click`,function(){return n.closePage()}),Zg()()(),Jc(6,`po-button`,5),vt(`p-click`,function(){return n.openPage()}),Zg(),_u(7,`po-divider`),Jc(8,`form`,null,1)(10,`po-input`,6),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.title,a)||(n.title=a),H_(a)}),Zg(),Jc(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.subtitle,a)||(n.subtitle=a),H_(a)}),Zg(),Jc(12,`po-input`,8),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.content,a)||(n.content=a),H_(a)}),Zg(),Jc(13,`po-checkbox-group`,9),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.properties,a)||(n.properties=a),H_(a)}),Zg(),Jc(14,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.size,a)||(n.size=a),H_(a)}),vt(`ngModelChange`,function(){return n.onChangeSize()}),Zg(),Jc(15,`po-radio-group`,11),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.componentsSize,a)||(n.componentsSize=a),H_(a)}),Zg(),Jc(16,`div`,12)(17,`po-button`,13),vt(`p-click`,function(){return n.restore()}),Zg()()()}if(l&2){let m=sk(9);Rb(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),Ig(2),nm(` `,n.content,` `),Ig(4),Rb(`p-disabled`,m.form.invalid),Ig(4),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.subtitle),Y0(),Ig(),Yb(`ngModel`,n.content),Y0(),Ig(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,wne,xne],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Slide Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-slide
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-slide-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,we,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{router=p(An);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=ZO();Jc(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.bluetooth,a)||(n.bluetooth=a),H_(a)}),Zg(),Jc(4,`po-switch`,4),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.locked,a)||(n.locked=a),H_(a)}),Zg()(),Jc(5,`div`,2)(6,`po-switch`,5),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.microphone,a)||(n.microphone=a),H_(a)}),Zg(),Jc(7,`po-switch`,6),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.notification,a)||(n.notification=a),H_(a)}),Zg()(),Jc(8,`div`,2)(9,`po-switch`,7),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.localization,a)||(n.localization=a),H_(a)}),Zg(),Jc(10,`po-switch`,8),W0(),Kb(`ngModelChange`,function(a){return U_(m),Ak(n.favorited,a)||(n.favorited=a),H_(a)}),Zg()(),_u(11,`po-divider`),Jc(12,`h2`,9),Tk(13,`About Page Slide`),Zg(),Jc(14,`section`,10)(15,`h3`,11),Tk(16,`Usage`),Zg(),Jc(17,`ul`,12)(18,`li`),Tk(19,`To reveal additional navigation controls`),Zg(),Jc(20,`li`),Tk(21,`In TV or mobile space since controls and/or space is limited`),Zg(),Jc(22,`li`),Tk(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),Zg(),Jc(24,`li`),Tk(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),Zg()()(),Jc(26,`section`,10)(27,`h3`,11),Tk(28,`Challenges`),Zg(),Jc(29,`ul`,12)(30,`li`),Tk(31,`Discoverability`),Zg(),Jc(32,`li`),Tk(33,`Losing context with the rest of the page`),Zg(),Jc(34,`li`),Tk(35,`Make the disruption work for you`),Zg()()(),Jc(36,`section`,10)(37,`h3`,11),Tk(38,`Recommendations`),Zg(),Jc(39,`ul`,12)(40,`li`),Tk(41,`Use it sparingly only for major context switches`),Zg(),Jc(42,`li`),Tk(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),Zg(),Jc(44,`li`),Tk(45,`Make the activation/deactivation dead simple`),Zg()()(),Jc(46,`p`),Tk(47,` For more information visit `),Jc(48,`a`,13),Tk(49,`Designing Web Interfaces: Page Slide`),Zg()(),Jc(50,`po-page-slide-footer`)(51,`po-button`,14),vt(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),Zg()()(),Jc(52,`div`,15)(53,`po-button`,16),vt(`p-click`,function(){U_(m);let a=sk(1);return H_(a.open())}),Zg()()}l&2&&(Ig(3),Yb(`ngModel`,n.bluetooth),Y0(),Ig(),Yb(`ngModel`,n.locked),Y0(),Ig(2),Yb(`ngModel`,n.microphone),Y0(),Ig(),Yb(`ngModel`,n.notification),Y0(),Ig(2),Yb(`ngModel`,n.localization),Y0(),Ig(),Yb(`ngModel`,n.favorited),Y0())},dependencies:[TZ,JL,oi,Nf,R4,wne,xne],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Slide - Configuration`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-slide-configuration`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ue],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:568,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Tk(8,`po-page-default`),Zg(),Tk(9,`, `),Jc(10,`code`),Tk(11,`po-page-detail`),Zg(),Tk(12,`,
`),Jc(13,`code`),Tk(14,`po-page-edit`),Zg(),Tk(15,`, `),Jc(16,`code`),Tk(17,`po-page-list`),Zg(),Tk(18,` e `),Jc(19,`code`),Tk(20,`po-page-slide`),Zg(),Tk(21,`.`),Zg()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoPageSlideComponent`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,`O componente `),Jc(30,`code`),Tk(31,`po-page-slide`),Zg(),Tk(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),Zg(),Jc(33,`p`),Tk(34,`Este componente é ativado a partir do método `),Jc(35,`code`),Tk(36,`#open()`),Zg(),Tk(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Jc(38,`code`),Tk(39,`#close()`),Zg(),Tk(40,`.`),Zg(),Jc(41,`p`),Tk(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Jc(43,`a`,6),Tk(44,`Grid System`),Zg(),Tk(45,`.`),Zg(),Jc(46,`p`),Tk(47,`No rodapé é possível utilizar o componente `),Jc(48,`a`,7)(49,`code`),Tk(50,`PoPageSlideFooter`),Zg()(),Tk(51,` para customização do template.`),Zg(),Jc(52,`ul`)(53,`li`)(54,`h4`),Tk(55,`Tokens customizáveis`),Zg()()(),Jc(56,`p`),Tk(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(58,`blockquote`)(59,`p`),Tk(60,`Para maiores informações, acesse o guia `),Jc(61,`a`,8),Tk(62,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(63,`.`),Zg()(),Jc(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),Tk(68,`Propriedade`),Zg(),Jc(69,`th`),Tk(70,`Descrição`),Zg(),Jc(71,`th`),Tk(72,`Valor Padrão`),Zg()()(),Jc(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),Tk(77,`--font-family`),Zg()(),Jc(78,`td`),Tk(79,`Família tipográfica usada`),Zg(),Jc(80,`td`)(81,`code`),Tk(82,`var(--font-family-theme)`),Zg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--font-weight`),Zg()(),Jc(87,`td`),Tk(88,`Peso da fonte`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--font-weight-bold)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--padding-header`),Zg()(),Jc(96,`td`),Tk(97,`Espaçamento do header`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--spacing-md)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--padding-body`),Zg()(),Jc(105,`td`),Tk(106,`Espaçamento do conteúdo`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--line-height-none)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--padding-footer`),Zg()(),Jc(114,`td`),Tk(115,`Espaçamento do footer`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`strong`),Tk(122,`Default Values`),Zg()(),_u(123,`td`)(124,`td`),Zg(),Jc(125,`tr`)(126,`td`)(127,`code`),Tk(128,`--color-overlay`),Zg()(),Jc(129,`td`),Tk(130,`Cor do overlay`),Zg(),Jc(131,`td`)(132,`code`),Tk(133,`var(--color-neutral-dark-80)`),Zg()()(),Jc(134,`tr`)(135,`td`)(136,`code`),Tk(137,`--opacity-overlay`),Zg()(),Jc(138,`td`),Tk(139,`Cor da opacidade do overlay`),Zg(),Jc(140,`td`)(141,`code`),Tk(142,`0.7`),Zg()()(),Jc(143,`tr`)(144,`td`)(145,`code`),Tk(146,`--background-color`),Zg()(),Jc(147,`td`),Tk(148,`Cor de background`),Zg(),Jc(149,`td`)(150,`code`),Tk(151,`var(--color-neutral-light-00)`),Zg()()(),Jc(152,`tr`)(153,`td`)(154,`code`),Tk(155,`--border-color`),Zg()(),Jc(156,`td`),Tk(157,`Cor da borda`),Zg(),Jc(158,`td`)(159,`code`),Tk(160,`var(--color-neutral-light-20)`),Zg()()(),Jc(161,`tr`)(162,`td`)(163,`code`),Tk(164,`--color-title`),Zg()(),Jc(165,`td`),Tk(166,`Cor do titulo do header`),Zg(),Jc(167,`td`)(168,`code`),Tk(169,`var(--color-neutral-dark-95)`),Zg()()(),Jc(170,`tr`)(171,`td`)(172,`code`),Tk(173,`--border-radius`),Zg()(),Jc(174,`td`),Tk(175,`Radius da borda`),Zg(),Jc(176,`td`)(177,`code`),Tk(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),Zg()()(),Jc(179,`tr`)(180,`td`)(181,`code`),Tk(182,`--transition-duration`),Zg()(),Jc(183,`td`),Tk(184,`Duração da transição`),Zg(),Jc(185,`td`)(186,`code`),Tk(187,`var(--duration-extra-fast)`),Zg()()(),Jc(188,`tr`)(189,`td`)(190,`code`),Tk(191,`--transition-timing`),Zg()(),Jc(192,`td`),Tk(193,`Duração da transição com o tipo de transição`),Zg(),Jc(194,`td`)(195,`code`),Tk(196,`var(--duration-extra-slow) var(--timing-standart)`),Zg()()(),Jc(197,`tr`)(198,`td`)(199,`code`),Tk(200,`--page-slide-width-sm`),Zg()(),Jc(201,`td`),Tk(202,`Tamanho da largura do componente no tamanho `),Jc(203,`code`),Tk(204,`small`),Zg()(),Jc(205,`td`)(206,`code`),Tk(207,`40%`),Zg()()(),Jc(208,`tr`)(209,`td`)(210,`code`),Tk(211,`--page-slide-width-md`),Zg()(),Jc(212,`td`),Tk(213,`Tamanho da largura do componente no tamanho `),Jc(214,`code`),Tk(215,`medium`),Zg()(),Jc(216,`td`)(217,`code`),Tk(218,`50%`),Zg()()(),Jc(219,`tr`)(220,`td`)(221,`code`),Tk(222,`--page-slide-width-lg`),Zg()(),Jc(223,`td`),Tk(224,`Tamanho da largura do componente no tamanho `),Jc(225,`code`),Tk(226,`large`),Zg()(),Jc(227,`td`)(228,`code`),Tk(229,`60%`),Zg()()(),Jc(230,`tr`)(231,`td`)(232,`code`),Tk(233,`--page-slide-width-xl`),Zg()(),Jc(234,`td`),Tk(235,`Tamanho da largura do componente no tamanho `),Jc(236,`code`),Tk(237,`extra large`),Zg()(),Jc(238,`td`)(239,`code`),Tk(240,`70%`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Tk(244,`--page-slide-min-width-auto`),Zg()(),Jc(245,`td`),Tk(246,`Tamanho da largura mínima do componente no tamanho `),Jc(247,`code`),Tk(248,`auto`),Zg()(),Jc(249,`td`)(250,`code`),Tk(251,`40%`),Zg()()(),Jc(252,`tr`)(253,`td`)(254,`code`),Tk(255,`--page-slide-max-width-auto`),Zg()(),Jc(256,`td`),Tk(257,`Tamanho da largura máxima do componente no tamanho `),Jc(258,`code`),Tk(259,`auto`),Zg()(),Jc(260,`td`)(261,`code`),Tk(262,`90%`),Zg()()()()()(),Jc(263,`div`,9)(264,`h4`,10),Tk(265,`Seletor`),Zg(),Jc(266,`pre`,11),Tk(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),Zg()(),Jc(268,`h4`,12),Tk(269,`Propriedades`),Zg(),Jc(270,`table`,13)(271,`tr`,14)(272,`th`,15),Tk(273,`Nome`),Zg(),Jc(274,`th`,15),Tk(275,`Tipo`),Zg(),Jc(276,`th`,15),Tk(277,`Padrão`),Zg(),Jc(278,`th`,15),Tk(279,`Descrição`),Zg()(),Jc(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),Tk(284,` p-click-out`),_u(285,`br`),Zg()()(),Jc(286,`td`,20)(287,`code`,21),Tk(288,`boolean`),Zg()(),Jc(289,`td`,22)(290,`p`)(291,`code`),Tk(292,`false`),Zg()()(),Jc(293,`td`,23)(294,`em`)(295,`strong`),Tk(296,`(opcional)`),Zg()(),Jc(297,`p`),Tk(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),Zg()()(),Jc(299,`tr`,16)(300,`td`,17)(301,`div`,24)(302,`span`,25),Tk(303,` (p-close)`),_u(304,`br`),Zg()()(),Jc(305,`td`,20)(306,`code`,26),Tk(307,`EventEmitter`),Zg()(),Jc(308,`td`,22),Tk(309,`-`),Zg(),Jc(310,`td`,23)(311,`em`)(312,`strong`),Tk(313,`(opcional)`),Zg()(),Jc(314,`p`),Tk(315,`Evento executado ao fechar o page slide.`),Zg()()(),Jc(316,`tr`,16)(317,`td`,17)(318,`div`,18)(319,`span`,19),Tk(320,` p-components-size`),_u(321,`br`),Zg()()(),Jc(322,`td`,20)(323,`code`,27),Tk(324,`string`),Zg()(),Jc(325,`td`,22)(326,`p`)(327,`code`),Tk(328,`medium`),Zg()()(),Jc(329,`td`,23)(330,`em`)(331,`strong`),Tk(332,`(opcional)`),Zg()(),Jc(333,`p`),Tk(334,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(335,`ul`)(336,`li`)(337,`code`),Tk(338,`small`),Zg(),Tk(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(340,`li`)(341,`code`),Tk(342,`medium`),Zg(),Tk(343,`: aplica a medida medium de cada componente.`),Zg()(),Jc(344,`blockquote`)(345,`p`),Tk(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(347,`code`),Tk(348,`medium`),Zg(),Tk(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(350,`a`,28),Tk(351,`po-theme`),Zg(),Tk(352,`.`),Zg()()()(),Jc(353,`tr`,16)(354,`td`,17)(355,`div`,18)(356,`span`,19),Tk(357,` p-flexible-width`),_u(358,`br`),Zg()()(),Jc(359,`td`,20)(360,`code`,21),Tk(361,`boolean`),Zg()(),Jc(362,`td`,22)(363,`p`)(364,`code`),Tk(365,`false`),Zg()()(),Jc(366,`td`,23)(367,`em`)(368,`strong`),Tk(369,`(opcional)`),Zg()(),Jc(370,`p`),Tk(371,`Permite a expansão dinâmica da largura do `),Jc(372,`code`),Tk(373,`po-page-slide`),Zg(),Tk(374,` quando `),Jc(375,`code`),Tk(376,`p-size`),Zg(),Tk(377,` for `),Jc(378,`code`),Tk(379,`auto`),Zg(),Tk(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Jc(381,`code`),Tk(382,`po-table`),Zg(),Tk(383,` dentro do `),Jc(384,`code`),Tk(385,`po-page-slide`),Zg()()()(),Jc(386,`tr`,16)(387,`td`,17)(388,`div`,18)(389,`span`,19),Tk(390,` p-hide-close`),_u(391,`br`),Zg()()(),Jc(392,`td`,20)(393,`code`,21),Tk(394,`boolean`),Zg()(),Jc(395,`td`,22)(396,`p`)(397,`code`),Tk(398,`false`),Zg()()(),Jc(399,`td`,23)(400,`em`)(401,`strong`),Tk(402,`(opcional)`),Zg()(),Jc(403,`p`),Tk(404,`Oculta o botão de encerramento da página.`),Zg(),Jc(405,`blockquote`)(406,`p`),Tk(407,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Jc(408,`code`),Tk(409,`p-click-out`),Zg(),Tk(410,` habilitado ou, no modo `),Jc(411,`code`),Tk(412,`full`),Zg(),Tk(413,`, um
`),Jc(414,`a`,7)(415,`code`),Tk(416,`po-page-slide-footer`),Zg()(),Tk(417,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),Zg()()()(),Jc(418,`tr`,16)(419,`td`,17)(420,`div`,18)(421,`span`,19),Tk(422,` p-size`),_u(423,`br`),Zg()()(),Jc(424,`td`,20)(425,`code`,29),Tk(426,`PoPageSlideSize`),Zg()(),Jc(427,`td`,22)(428,`p`)(429,`code`),Tk(430,`md`),Zg()()(),Jc(431,`td`,23)(432,`em`)(433,`strong`),Tk(434,`(opcional)`),Zg()(),Jc(435,`p`),Tk(436,`Define o tamanho da página.`),Zg(),Jc(437,`p`),Tk(438,`Valores válidos:`),Zg(),Jc(439,`ul`)(440,`li`)(441,`code`),Tk(442,`sm`),Zg(),Tk(443,` (pequeno)`),Zg(),Jc(444,`li`)(445,`code`),Tk(446,`md`),Zg(),Tk(447,` (médio)`),Zg(),Jc(448,`li`)(449,`code`),Tk(450,`lg`),Zg(),Tk(451,` (grande)`),Zg(),Jc(452,`li`)(453,`code`),Tk(454,`xl`),Zg(),Tk(455,` (extra-grande)`),Zg(),Jc(456,`li`)(457,`code`),Tk(458,`auto`),Zg(),Tk(459,` (automático)`),Zg(),Jc(460,`li`)(461,`code`),Tk(462,`full`),Zg(),Tk(463,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),Zg()(),Jc(464,`blockquote`)(465,`p`),Tk(466,`Todas as opções de tamanho, exceto `),Jc(467,`code`),Tk(468,`auto`),Zg(),Tk(469,` e `),Jc(470,`code`),Tk(471,`full`),Zg(),Tk(472,`, possuem uma largura máxima de `),Jc(473,`strong`),Tk(474,`768px`),Zg(),Tk(475,`.`),Zg()(),Jc(476,`blockquote`)(477,`p`),Tk(478,`No modo `),Jc(479,`code`),Tk(480,`full`),Zg(),Tk(481,`, como não há overlay, o fechamento por clique fora (`),Jc(482,`code`),Tk(483,`p-click-out`),Zg(),Tk(484,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Jc(485,`code`),Tk(486,`Escape`),Zg(),Tk(487,`, pelo método `),Jc(488,`code`),Tk(489,`#close()`),Zg(),Tk(490,`
ou por um bot\xE3o no `),Jc(491,`a`,7)(492,`code`),Tk(493,`po-page-slide-footer`),Zg()(),Tk(494,`.`),Zg()()()(),Jc(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),Tk(499,` p-subtitle`),_u(500,`br`),Zg()()(),Jc(501,`td`,20)(502,`code`,27),Tk(503,`string`),Zg()(),Jc(504,`td`,22),Tk(505,`-`),Zg(),Jc(506,`td`,23)(507,`em`)(508,`strong`),Tk(509,`(opcional)`),Zg()(),Jc(510,`p`),Tk(511,`Subtítulo da página.`),Zg()()(),Jc(512,`tr`,16)(513,`td`,17)(514,`div`,18)(515,`span`,19),Tk(516,` p-title`),_u(517,`br`),Zg()()(),Jc(518,`td`,20)(519,`code`,27),Tk(520,`string`),Zg()(),Jc(521,`td`,22),Tk(522,`-`),Zg(),Jc(523,`td`,23)(524,`p`),Tk(525,`Título da página.`),Zg()()()(),Jc(526,`h3`,12),Tk(527,`Métodos`),Zg(),Jc(528,`table`,30)(529,`tr`,16)(530,`th`,31)(531,`div`,18)(532,`h4`)(533,`span`,19),Tk(534,` open `),Zg()()()()(),Jc(535,`tr`,23)(536,`td`,23)(537,`p`),Tk(538,`Ativa a visualização da página.`),Zg(),Jc(539,`p`),Tk(540,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Jc(541,`code`),Tk(542,`ViewChild`),Zg(),Tk(543,` da seguinte forma:`),Zg(),Jc(544,`pre`)(545,`code`,32),Tk(546,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),Zg()()()()(),_u(547,`br`),Jc(548,`table`,30)(549,`tr`,16)(550,`th`,31)(551,`div`,18)(552,`h4`)(553,`span`,19),Tk(554,` close `),Zg()()()()(),Jc(555,`tr`,23)(556,`td`,23)(557,`p`),Tk(558,`Encerra a visualização da página.`),Zg(),Jc(559,`p`),Tk(560,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Jc(561,`code`),Tk(562,`ViewChild`),Zg(),Tk(563,` da seguinte forma:`),Zg(),Jc(564,`pre`)(565,`code`,32),Tk(566,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),Zg()()()()(),_u(567,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function ze(o,Ve){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-page-slide-basic-view`)(2,`sample-po-page-slide-labs-view`)(3,`sample-po-page-slide-configuration-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var De=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ze,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-page-slide-doc`),Zg()()()),l&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,me,ce,ge,Se],encapsulation:2,changeDetection:1})}return o})()}];var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(De),WV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,be]})}return o})();export{lt as DocPoPageSlideModule};