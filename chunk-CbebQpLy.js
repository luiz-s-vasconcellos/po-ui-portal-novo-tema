import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,F as Kee,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,P as Joe,Pt as bae,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Yi as eF,an as j4,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,va as nk,vn as oi,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(Jc(0,`div`,0),_u(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),Zg())},dependencies:[Kee],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-skeleton-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ee,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,F){if(o&1){let p=ZO();Jc(0,`po-select`,12),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.size,a)||(d.size=a),H_(a)}),Zg()}if(o&2){let p=nk();Yb(`ngModel`,p.size),Rb(`p-options`,p.sizeOptions),Y0()}}function ye(o,F){if(o&1){let p=ZO();_u(0,`po-divider`,13),Jc(1,`po-number`,14),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.circleSize,a)||(d.circleSize=a),H_(a)}),vt(`p-change`,function(){U_(p);let a=nk();return H_(a.onCircleSizeChange())}),Zg(),Jc(2,`po-select`,15),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.circleSizeUnit,a)||(d.circleSizeUnit=a),H_(a)}),vt(`p-change`,function(){U_(p);let a=nk();return H_(a.onCircleSizeUnitChange())}),Zg(),_u(3,`po-info`,16)}if(o&2){let p=nk();Ig(),Yb(`ngModel`,p.circleSize),Y0(),Ig(),Yb(`ngModel`,p.circleSizeUnit),Rb(`p-options`,p.unitOptions),Y0(),Ig(),Rb(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,F){if(o&1){let p=ZO();_u(0,`po-divider`,17),Jc(1,`po-input`,18),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.width,a)||(d.width=a),H_(a)}),Zg(),Jc(2,`po-input`,19),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.height,a)||(d.height=a),H_(a)}),Zg(),Jc(3,`po-input`,20),W0(),Kb(`ngModelChange`,function(a){U_(p);let d=nk();return Ak(d.borderRadius,a)||(d.borderRadius=a),H_(a)}),Zg()}if(o&2){let p=nk();Ig(),Yb(`ngModel`,p.width),Y0(),Ig(),Yb(`ngModel`,p.height),Y0(),Ig(),Yb(`ngModel`,p.borderRadius),Y0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(Jc(0,`div`,0),_u(1,`po-skeleton`,1),Zg(),_u(2,`hr`)(3,`po-info`,2)(4,`hr`),Jc(5,`form`,0),_u(6,`po-divider`,3),Jc(7,`po-select`,4),W0(),Kb(`ngModelChange`,function(x){return Ak(a.animation,x)||(a.animation=x),x}),Zg(),Jc(8,`po-select`,5),W0(),Kb(`ngModelChange`,function(x){return Ak(a.type,x)||(a.type=x),x}),Zg(),_u(9,`po-divider`,6),Jc(10,`po-select`,7),W0(),Kb(`ngModelChange`,function(x){return Ak(a.variant,x)||(a.variant=x),x}),vt(`p-change`,function(){return a.onVariantChange()}),Zg(),VO(11,we,1,2,`po-select`,8),_u(12,`po-divider`,9),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(x){return Ak(a.ariaLabel,x)||(a.ariaLabel=x),x}),Zg(),VO(14,ye,4,4),VO(15,Pe,4,3),Jc(16,`po-button`,11),vt(`p-click`,function(){return a.restore()}),Zg()()),l&2&&(Ig(),Rb(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),Ig(2),Rb(`p-value`,a.modelValue),Ig(4),Yb(`ngModel`,a.animation),Rb(`p-options`,a.animationOptions),Y0(),Ig(),Yb(`ngModel`,a.type),Rb(`p-options`,a.typeOptions),Y0(),Ig(2),Yb(`ngModel`,a.variant),Rb(`p-options`,a.variantOptions),Y0(),Ig(),BO(a.variant!==`text`?11:-1),Ig(2),Yb(`ngModel`,a.ariaLabel),Y0(),Ig(),BO(a.variant===`circle`?14:-1),Ig(),BO(a.variant===`text`?15:-1))},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Goe,Koe,Joe,Kee],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-skeleton
    class="po-md-12"
    [p-variant]="variant"
    [p-type]="type"
    [p-animation]="animation"
    [p-size]="size"
    [p-width]="width || undefined"
    [p-height]="height || undefined"
    [p-border-radius]="borderRadius || undefined"
    [p-aria-label]="ariaLabel"
  >
  </po-skeleton>
</div>

<hr />

<po-info class="po-md-12" p-label="Model" [p-value]="modelValue"></po-info>

<hr />

<form class="po-row">
  <po-divider class="po-md-12" p-label="Animation"></po-divider>

  <po-select
    class="po-md-6"
    name="animation"
    [(ngModel)]="animation"
    p-label="Animation"
    [p-options]="animationOptions"
  >
  </po-select>

  <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

  <po-divider class="po-md-12" p-label="Shapes"></po-divider>

  <po-select
    class="po-md-6"
    name="variant"
    [(ngModel)]="variant"
    p-label="Variant"
    [p-options]="variantOptions"
    (p-change)="onVariantChange()"
  >
  </po-select>

  @if (variant !== 'text') {
    <po-select class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions"> </po-select>
  }

  <po-divider class="po-md-12" p-label="Accessibility"></po-divider>

  <po-input
    class="po-md-12"
    name="ariaLabel"
    [(ngModel)]="ariaLabel"
    p-label="Aria Label"
    p-help="Texto descritivo para leitores de tela (acessibilidade)"
  >
  </po-input>

  @if (variant === 'circle') {
    <po-divider class="po-md-12" p-label="Circle Dynamic Size (optional)"></po-divider>

    <po-number
      class="po-md-4"
      name="circleSize"
      [(ngModel)]="circleSize"
      p-clean
      p-label="Circle Size"
      p-help="Define o tamanho do c\xEDrculo"
      p-min="1"
      (p-change)="onCircleSizeChange()"
    >
    </po-number>

    <po-select
      class="po-md-2"
      name="circleSizeUnit"
      [(ngModel)]="circleSizeUnit"
      p-label="Unit"
      [p-options]="unitOptions"
      (p-change)="onCircleSizeUnitChange()"
    >
    </po-select>

    <po-info
      class="po-md-6"
      p-label="Applied Size"
      [p-value]="circleSize ? circleSize + circleSizeUnit : 'Using default size from Size select'"
    >
    </po-info>
  }

  @if (variant === 'text') {
    <po-divider class="po-md-12" p-label="Custom (optional)"></po-divider>

    <po-input
      class="po-md-6"
      name="width"
      [(ngModel)]="width"
      p-clean
      p-label="Width"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-label="Height"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="borderRadius"
      [(ngModel)]="borderRadius"
      p-clean
      p-label="Border Radius"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>
  }

  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-labs',
  templateUrl: './sample-po-skeleton-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonLabsComponent implements OnInit {
  animation: string;
  borderRadius: string;
  height: string;
  ariaLabel: string;
  size: string;
  type: string;
  variant: string;
  width: string;
  circleSize: number;
  circleSizeUnit: string = 'px';

  readonly animationOptions = [
    { label: 'Shimmer', value: 'shimmer' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'None', value: 'none' }
  ];

  readonly sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
    { label: 'Extra Extra Large', value: '2xl' }
  ];

  readonly typeOptions = [
    { label: 'Normal', value: 'normal' },
    { label: 'Primary', value: 'primary' },
    { label: 'Content', value: 'content' }
  ];

  readonly variantOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Text', value: 'text' },
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Square', value: 'square' }
  ];

  readonly unitOptions = [
    { label: 'Pixels (px)', value: 'px' },
    { label: 'REM', value: 'rem' },
    { label: 'EM', value: 'em' },
    { label: 'Percentage (%)', value: '%' }
  ];

  ngOnInit() {
    this.restore();
  }

  get modelValue() {
    return JSON.stringify(
      {
        variant: this.variant,
        type: this.type,
        animation: this.animation,
        size: this.size,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
        ariaLabel: this.ariaLabel
      },
      null,
      2
    );
  }

  onVariantChange() {
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.circleSize = null;
  }

  onCircleSizeChange() {
    if (this.circleSize && this.variant === 'circle') {
      const sizeValue = \`\${this.circleSize}\${this.circleSizeUnit}\`;
      this.width = sizeValue;
      this.height = sizeValue;
      this.borderRadius = '50%';
    } else {
      this.width = undefined;
      this.height = undefined;
      this.borderRadius = undefined;
    }
  }

  onCircleSizeUnitChange() {
    this.onCircleSizeChange();
  }

  restore() {
    this.variant = 'circle';
    this.type = 'normal';
    this.animation = 'shimmer';
    this.size = 'md';
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.ariaLabel = 'Carregando';
    this.circleSize = null;
    this.circleSizeUnit = 'px';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-skeleton-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),_u(5,`po-skeleton`,4),Zg()(),Jc(6,`div`,5)(7,`div`,6),_u(8,`po-skeleton`,7),Zg(),Jc(9,`div`,6),_u(10,`po-skeleton`,7),Zg(),Jc(11,`div`,6),_u(12,`po-skeleton`,7),Zg(),Jc(13,`div`,6),_u(14,`po-skeleton`,7),Zg()(),Jc(15,`div`,8)(16,`div`,9),_u(17,`po-skeleton`,10)(18,`po-skeleton`,11),Zg(),Jc(19,`div`,12),_u(20,`po-skeleton`,13)(21,`po-skeleton`,14),Zg()(),Jc(22,`div`,15),_u(23,`po-skeleton`,16),Zg()()(),Jc(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),_u(28,`po-skeleton`,19),Zg()(),Jc(29,`div`,5)(30,`div`,6),_u(31,`po-skeleton`,20),Zg(),Jc(32,`div`,6),_u(33,`po-skeleton`,20),Zg(),Jc(34,`div`,6),_u(35,`po-skeleton`,20),Zg(),Jc(36,`div`,6),_u(37,`po-skeleton`,20),Zg()(),Jc(38,`div`,8)(39,`div`,9),_u(40,`po-skeleton`,21)(41,`po-skeleton`,22),Zg(),Jc(42,`div`,12),_u(43,`po-skeleton`,23)(44,`po-skeleton`,24),Zg()(),Jc(45,`div`,15),_u(46,`po-skeleton`,25),Zg()()()())},dependencies:[bae,Kee],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton - Credit Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method">
    <div class="credit-card">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method - Content">
    <div class="credit-card-gray">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm" p-type="content"></po-skeleton>
      </div>
    </div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.credit-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.credit-card-gray {
  background: linear-gradient(135deg, #8b93a7 0%, #6b7280 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.card-chip,
.card-number {
  margin-bottom: 15px;
}

.card-holder,
.card-expiry {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-brand {
  position: absolute;
  bottom: 24px;
  right: 35px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-skeleton-credit-card`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),_u(5,`po-skeleton`,5),Zg(),Jc(6,`div`,6),_u(7,`po-skeleton`,7),Zg(),Jc(8,`div`,8),_u(9,`po-skeleton`,9),Zg()(),Jc(10,`div`,10)(11,`div`,4),_u(12,`po-skeleton`,5),Zg()(),_u(13,`div`,11),Jc(14,`div`,12)(15,`div`,13),_u(16,`po-skeleton`,14),Zg()()()()())},dependencies:[bae,Kee],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton - Widget Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3">
    <div class="widget-card">
      <div class="po-row widget-header">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-width="80px" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-2 po-md-2 widget-icon">
          <po-skeleton p-variant="square" p-size="sm"></po-skeleton>
        </div>
      </div>

      <div class="po-row widget-content">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
      </div>

      <div class="widget-spacer"></div>

      <div class="po-row widget-footer">
        <div class="po-sm-12 po-md-12 footer-button">
          <po-skeleton p-variant="rectangle" p-size="md"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.widget-card {
  padding: 8px 0;
}

.widget-header {
  margin-bottom: 8px;
  align-items: center;
}

.widget-icon {
  display: flex;
  justify-content: flex-end;
}

.widget-content {
  margin-bottom: 16px;
}

.widget-spacer {
  height: 40px;
}

.widget-footer {
  display: flex;
  justify-content: flex-end;
}

.footer-button {
  display: flex;
  justify-content: flex-end;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-skeleton-widget-card`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Oe,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),_u(4,`po-skeleton`,4),Zg(),_u(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),Jc(10,`div`,10)(11,`div`,11),_u(12,`po-skeleton`,12)(13,`po-skeleton`,13),Zg(),Jc(14,`div`,11),_u(15,`po-skeleton`,12)(16,`po-skeleton`,14),Zg(),Jc(17,`div`,11),_u(18,`po-skeleton`,12)(19,`po-skeleton`,15),Zg()()()()())},dependencies:[bae,Kee],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var We=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton - User Profile`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-widget class="po-md-6" p-title="User Profile">
    <div class="profile-card">
      <!-- Profile picture -->
      <div class="profile-picture">
        <po-skeleton p-variant="circle" p-size="xl" p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>
      </div>

      <!-- Name -->
      <po-skeleton p-variant="text" p-width="150px"></po-skeleton>

      <!-- Email -->
      <po-skeleton p-variant="text" p-width="200px"></po-skeleton>

      <!-- Bio -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>

      <!-- Stats -->
      <div class="profile-stats">
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="70px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="65px" p-size="sm"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.profile-card {
  text-align: center;
  padding: 24px;
}

.profile-picture {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.profile-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-skeleton-user-profile`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,We,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),_u(4,`po-skeleton`,4),Jc(5,`div`,5),_u(6,`po-skeleton`,6)(7,`po-skeleton`,6),Zg()(),_u(8,`po-skeleton`,7),Jc(9,`div`,8),_u(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),Zg(),_u(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),Zg()(),Jc(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),_u(20,`po-skeleton`,14),Jc(21,`div`,5),_u(22,`po-skeleton`,6)(23,`po-skeleton`,6),Zg()(),_u(24,`po-skeleton`,15),Jc(25,`div`,8),_u(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),Zg(),_u(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),Zg()()())},dependencies:[bae,Kee],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton - Social Post`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <!-- Post Card 1 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm" p-aria-label="Carregando post de rede social"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="300px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="120px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="85%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="60%"></po-skeleton>
    </div>
  </po-widget>

  <!-- Post Card 2 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="250px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="140px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="65%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="50%"></po-skeleton>
    </div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.post-card {
  padding: 16px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-header-text {
  flex: 1;
}

.post-actions {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}

.post-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-skeleton-social-post`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Fe,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),_u(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),Jc(6,`div`,6),_u(7,`po-skeleton`,7),Jc(8,`div`,8),_u(9,`po-skeleton`,9)(10,`po-skeleton`,10),Zg()(),_u(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),Zg()()())},dependencies:[bae,Kee],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Skeleton - Article`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-widget class="po-md-6" p-height="380" p-title="Latest Article">
    <div class="article-card">
      <!-- Article thumbnail -->
      <po-skeleton p-variant="rectangle" p-height="150px" p-aria-label="Carregando artigo"></po-skeleton>

      <!-- Article title -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Author info -->
      <div class="article-author">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="author-details">
          <po-skeleton p-variant="text" p-width="100px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="80px" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Article excerpt -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="75%"></po-skeleton>

      <!-- Read more -->
      <po-skeleton p-variant="text" p-width="80px"></po-skeleton>
    </div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.article-card {
  padding: 16px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-skeleton-article`),Zg(),_u(29,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,He,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-skeleton.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoSkeletonComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-skeleton`),Zg(),Tk(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),Zg(),Jc(18,`p`),Tk(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),Zg(),Jc(20,`h4`),Tk(21,`Tokens customizáveis`),Zg(),Jc(22,`p`),Tk(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(24,`blockquote`)(25,`p`),Tk(26,`Para maiores informações, acesse o guia `),Jc(27,`a`,6),Tk(28,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(29,`.`),Zg()(),Jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),Tk(34,`Propriedade`),Zg(),Jc(35,`th`),Tk(36,`Descrição`),Zg(),Jc(37,`th`),Tk(38,`Valor Padrão`),Zg()()(),Jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),Tk(43,`Cores`),Zg()(),_u(44,`td`)(45,`td`),Zg(),Jc(46,`tr`)(47,`td`)(48,`code`),Tk(49,`--color`),Zg()(),Jc(50,`td`),Tk(51,`Cor de fundo do skeleton (tipo normal)`),Zg(),Jc(52,`td`)(53,`code`),Tk(54,`var(--color-neutral-light-20)`),Zg()()(),Jc(55,`tr`)(56,`td`)(57,`code`),Tk(58,`--color-primary`),Zg()(),Jc(59,`td`),Tk(60,`Cor de fundo do skeleton (tipo primary)`),Zg(),Jc(61,`td`)(62,`code`),Tk(63,`var(--color-neutral-mid-40)`),Zg()()(),Jc(64,`tr`)(65,`td`)(66,`code`),Tk(67,`--color-content`),Zg()(),Jc(68,`td`),Tk(69,`Cor de fundo do skeleton (tipo content)`),Zg(),Jc(70,`td`)(71,`code`),Tk(72,`var(--color-neutral-light-00)`),Zg()()(),Jc(73,`tr`)(74,`td`)(75,`code`),Tk(76,`--shimmer-highlight`),Zg()(),Jc(77,`td`),Tk(78,`Cor de destaque do shimmer (tipo normal)`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--color-neutral-light-30)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--shimmer-highlight-primary`),Zg()(),Jc(86,`td`),Tk(87,`Cor de destaque do shimmer (tipo primary)`),Zg(),Jc(88,`td`)(89,`code`),Tk(90,`var(--color-neutral-light-20)`),Zg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Tk(94,`--shimmer-highlight-content`),Zg()(),Jc(95,`td`),Tk(96,`Cor de destaque do shimmer (tipo content)`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--color-neutral-light-05)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`strong`),Tk(103,`Espaçamento`),Zg()(),_u(104,`td`)(105,`td`),Zg(),Jc(106,`tr`)(107,`td`)(108,`code`),Tk(109,`--margin-bottom`),Zg()(),Jc(110,`td`),Tk(111,`Margem inferior do skeleton`),Zg(),Jc(112,`td`)(113,`code`),Tk(114,`var(--spacing-xs)`),Zg()()(),Jc(115,`tr`)(116,`td`)(117,`strong`),Tk(118,`Bordas`),Zg()(),_u(119,`td`)(120,`td`),Zg(),Jc(121,`tr`)(122,`td`)(123,`code`),Tk(124,`--border-radius`),Zg()(),Jc(125,`td`),Tk(126,`Raio da borda do skeleton`),Zg(),Jc(127,`td`)(128,`code`),Tk(129,`var(--border-radius-md)`),Zg()()(),Jc(130,`tr`)(131,`td`)(132,`code`),Tk(133,`--border-radius-text`),Zg()(),Jc(134,`td`),Tk(135,`Raio da borda para a variante text`),Zg(),Jc(136,`td`)(137,`code`),Tk(138,`var(--border-radius-md)`),Zg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Tk(142,`--border-radius-primary`),Zg()(),Jc(143,`td`),Tk(144,`Raio da borda do skeleton (tipo primary)`),Zg(),Jc(145,`td`)(146,`code`),Tk(147,`var(--border-radius-md)`),Zg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Tk(151,`--border-radius-content`),Zg()(),Jc(152,`td`),Tk(153,`Raio da borda do skeleton (tipo content)`),Zg(),Jc(154,`td`)(155,`code`),Tk(156,`var(--border-radius-lg)`),Zg()()(),Jc(157,`tr`)(158,`td`)(159,`strong`),Tk(160,`Transições`),Zg()(),_u(161,`td`)(162,`td`),Zg(),Jc(163,`tr`)(164,`td`)(165,`code`),Tk(166,`--transition-property`),Zg()(),Jc(167,`td`),Tk(168,`Propriedade CSS da transição`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`all`),Zg()()(),Jc(172,`tr`)(173,`td`)(174,`code`),Tk(175,`--transition-duration`),Zg()(),Jc(176,`td`),Tk(177,`Duração da transição de cor`),Zg(),Jc(178,`td`)(179,`code`),Tk(180,`var(--duration-moderate)`),Zg()()(),Jc(181,`tr`)(182,`td`)(183,`code`),Tk(184,`--transition-timing`),Zg()(),Jc(185,`td`),Tk(186,`Função de temporização da transição/animação`),Zg(),Jc(187,`td`)(188,`code`),Tk(189,`var(--timing-continuous)`),Zg()()(),Jc(190,`tr`)(191,`td`)(192,`strong`),Tk(193,`Animações`),Zg()(),_u(194,`td`)(195,`td`),Zg(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--animation-duration-pulse`),Zg()(),Jc(200,`td`),Tk(201,`Duração da animação de pulsação`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`var(--duration-very-slow)`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`code`),Tk(208,`--animation-duration-shimmer`),Zg()(),Jc(209,`td`),Tk(210,`Duração da animação de brilho deslizante`),Zg(),Jc(211,`td`)(212,`code`),Tk(213,`var(--duration-ultra-slow)`),Zg()()()()()(),Jc(214,`div`,7)(215,`h4`,8),Tk(216,`Seletor`),Zg(),Jc(217,`pre`,9),Tk(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),Zg()(),Jc(219,`h4`,10),Tk(220,`Propriedades`),Zg(),Jc(221,`table`,11)(222,`tr`,12)(223,`th`,13),Tk(224,`Nome`),Zg(),Jc(225,`th`,13),Tk(226,`Tipo`),Zg(),Jc(227,`th`,13),Tk(228,`Padrão`),Zg(),Jc(229,`th`,13),Tk(230,`Descrição`),Zg()(),Jc(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),Tk(235,` p-animation`),_u(236,`br`),Zg()()(),Jc(237,`td`,18)(238,`code`,19),Tk(239,`PoSkeletonAnimation`),Zg()(),Jc(240,`td`,20)(241,`p`)(242,`code`),Tk(243,`shimmer`),Zg()()(),Jc(244,`td`,21)(245,`em`)(246,`strong`),Tk(247,`(opcional)`),Zg()(),Jc(248,`p`),Tk(249,`Define o tipo de animação do skeleton.`),Zg(),Jc(250,`p`),Tk(251,`Valores válidos:`),Zg(),Jc(252,`ul`)(253,`li`)(254,`code`),Tk(255,`none`),Zg(),Tk(256,`: Sem animação`),Zg(),Jc(257,`li`)(258,`code`),Tk(259,`pulse`),Zg(),Tk(260,`: Animação de pulsação`),Zg(),Jc(261,`li`)(262,`code`),Tk(263,`shimmer`),Zg(),Tk(264,`: Animação de brilho deslizante`),Zg()()()(),Jc(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),Tk(269,` p-aria-label`),_u(270,`br`),Zg()()(),Jc(271,`td`,18)(272,`code`,22),Tk(273,`string`),Zg()(),Jc(274,`td`,20),Tk(275,`-`),Zg(),Jc(276,`td`,21)(277,`em`)(278,`strong`),Tk(279,`(opcional)`),Zg()(),Jc(280,`p`),Tk(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),Zg(),Jc(282,`p`),Tk(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),Zg(),Jc(284,`p`)(285,`strong`),Tk(286,`Quando usar:`),Zg()(),Jc(287,`ul`)(288,`li`),Tk(289,`Use em `),Jc(290,`strong`),Tk(291,`skeletons únicos`),Zg(),Tk(292,` ou no `),Jc(293,`strong`),Tk(294,`primeiro skeleton de um grupo`),Zg(),Tk(295,` com descrição contextual`),Zg(),Jc(296,`li`),Tk(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),Zg()(),Jc(298,`p`)(299,`strong`),Tk(300,`Exemplos de uso:`),Zg()(),Jc(301,`pre`)(302,`code`,23),Tk(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),Zg()(),Jc(304,`blockquote`)(305,`p`)(306,`strong`),Tk(307,`Boas práticas de acessibilidade:`),Zg()(),Jc(308,`ul`)(309,`li`),Tk(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),Zg()()(),Jc(311,`blockquote`)(312,`ul`)(313,`li`),Tk(314,`Em casos complexos, considere usar um único `),Jc(315,`code`),Tk(316,`<div role="status">`),Zg(),Tk(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),Zg()()()()(),Jc(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),Tk(322,` p-border-radius`),_u(323,`br`),Zg()()(),Jc(324,`td`,18)(325,`code`,22),Tk(326,`string`),Zg()(),Jc(327,`td`,20),Tk(328,`-`),Zg(),Jc(329,`td`,21)(330,`em`)(331,`strong`),Tk(332,`(opcional)`),Zg()(),Jc(333,`p`),Tk(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Zg(),Jc(335,`p`),Tk(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),Zg()()(),Jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),Tk(341,` p-height`),_u(342,`br`),Zg()()(),Jc(343,`td`,18)(344,`code`,22),Tk(345,`string`),Zg()(),Jc(346,`td`,20),Tk(347,`-`),Zg(),Jc(348,`td`,21)(349,`em`)(350,`strong`),Tk(351,`(opcional)`),Zg()(),Jc(352,`p`),Tk(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Zg(),Jc(354,`p`),Tk(355,`Quando definido, sobrescreve a altura padrão da variante.`),Zg()()(),Jc(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),Tk(360,` p-size`),_u(361,`br`),Zg()()(),Jc(362,`td`,18)(363,`code`,24),Tk(364,`PoSkeletonSize`),Zg()(),Jc(365,`td`,20)(366,`p`)(367,`code`),Tk(368,`md`),Zg()()(),Jc(369,`td`,21)(370,`em`)(371,`strong`),Tk(372,`(opcional)`),Zg()(),Jc(373,`p`),Tk(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),Jc(375,`code`),Tk(376,`rectangle`),Zg(),Tk(377,`, `),Jc(378,`code`),Tk(379,`square`),Zg(),Tk(380,`, `),Jc(381,`code`),Tk(382,`circle`),Zg(),Tk(383,`).`),Zg(),Jc(384,`p`),Tk(385,`Valores válidos:`),Zg(),Jc(386,`ul`)(387,`li`)(388,`code`),Tk(389,`xs`),Zg(),Tk(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),Zg(),Jc(391,`li`)(392,`code`),Tk(393,`sm`),Zg(),Tk(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),Zg(),Jc(395,`li`)(396,`code`),Tk(397,`md`),Zg(),Tk(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),Zg(),Jc(399,`li`)(400,`code`),Tk(401,`lg`),Zg(),Tk(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),Zg(),Jc(403,`li`)(404,`code`),Tk(405,`xl`),Zg(),Tk(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),Zg(),Jc(407,`li`)(408,`code`),Tk(409,`2xl`),Zg(),Tk(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),Zg()(),Jc(411,`p`),Tk(412,`Esta propriedade é ignorada quando `),Jc(413,`code`),Tk(414,`p-width`),Zg(),Tk(415,` ou `),Jc(416,`code`),Tk(417,`p-height`),Zg(),Tk(418,` são definidos explicitamente.`),Zg()()(),Jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),Tk(423,` p-type`),_u(424,`br`),Zg()()(),Jc(425,`td`,18)(426,`code`,25),Tk(427,`PoSkeletonType`),Zg()(),Jc(428,`td`,20)(429,`p`)(430,`code`),Tk(431,`normal`),Zg()()(),Jc(432,`td`,21)(433,`em`)(434,`strong`),Tk(435,`(opcional)`),Zg()(),Jc(436,`p`),Tk(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),Zg(),Jc(438,`p`),Tk(439,`Valores válidos:`),Zg(),Jc(440,`ul`)(441,`li`)(442,`code`),Tk(443,`normal`),Zg(),Tk(444,`: Cor neutra clara (padrão)`),Zg(),Jc(445,`li`)(446,`code`),Tk(447,`primary`),Zg(),Tk(448,`: Cor neutra média`),Zg(),Jc(449,`li`)(450,`code`),Tk(451,`content`),Zg(),Tk(452,`: Fundo branco`),Zg()()()(),Jc(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),Tk(457,` p-variant`),_u(458,`br`),Zg()()(),Jc(459,`td`,18)(460,`code`,26),Tk(461,`PoSkeletonVariant`),Zg()(),Jc(462,`td`,20)(463,`p`)(464,`code`),Tk(465,`text`),Zg()()(),Jc(466,`td`,21)(467,`em`)(468,`strong`),Tk(469,`(opcional)`),Zg()(),Jc(470,`p`),Tk(471,`Define a variante visual do skeleton.`),Zg(),Jc(472,`p`),Tk(473,`Valores válidos:`),Zg(),Jc(474,`ul`)(475,`li`)(476,`code`),Tk(477,`text`),Zg(),Tk(478,`: Simula uma linha de texto (altura padrão: 1em)`),Zg(),Jc(479,`li`)(480,`code`),Tk(481,`rectangle`),Zg(),Tk(482,`: Forma retangular (proporção 3:1 por padrão)`),Zg(),Jc(483,`li`)(484,`code`),Tk(485,`square`),Zg(),Tk(486,`: Forma quadrada (largura e altura iguais)`),Zg(),Jc(487,`li`)(488,`code`),Tk(489,`circle`),Zg(),Tk(490,`: Forma circular (largura e altura iguais)`),Zg()()()(),Jc(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),Tk(495,` p-width`),_u(496,`br`),Zg()()(),Jc(497,`td`,18)(498,`code`,22),Tk(499,`string`),Zg()(),Jc(500,`td`,20)(501,`p`)(502,`code`),Tk(503,`100%`),Zg(),Tk(504,` para variante `),Jc(505,`code`),Tk(506,`text`),Zg(),Tk(507,`, tamanho baseado em `),Jc(508,`code`),Tk(509,`p-size`),Zg(),Tk(510,` para outras variantes`),Zg()(),Jc(511,`td`,21)(512,`em`)(513,`strong`),Tk(514,`(opcional)`),Zg()(),Jc(515,`p`),Tk(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Zg(),Jc(517,`p`),Tk(518,`Quando definido, sobrescreve a largura padrão da variante.`),Zg()()()(),Jc(519,`h3`),Tk(520,`Enums`),Zg(),Jc(521,`h4`,4)(522,`code`,5),Tk(523,`PoSkeletonAnimation`),Zg()(),Jc(524,`div`,2)(525,`p`),Tk(526,`Define os tipos de animação do componente `),Jc(527,`code`),Tk(528,`po-skeleton`),Zg(),Tk(529,`.`),Zg()(),Jc(530,`h4`,10),Tk(531,`Propriedades`),Zg(),Jc(532,`table`,11)(533,`tr`,12)(534,`th`,13),Tk(535,`Nome`),Zg(),Jc(536,`th`,13),Tk(537,`Descrição`),Zg()(),Jc(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),Tk(542,` none`),_u(543,`br`),Zg()()(),Jc(544,`td`,21)(545,`p`),Tk(546,`Sem animação`),Zg()()(),Jc(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),Tk(551,` pulse`),_u(552,`br`),Zg()()(),Jc(553,`td`,21)(554,`p`),Tk(555,`Animação de pulsação`),Zg()()(),Jc(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),Tk(560,` shimmer`),_u(561,`br`),Zg()()(),Jc(562,`td`,21)(563,`p`),Tk(564,`Animação de brilho deslizante`),Zg()()()(),Jc(565,`h4`,4)(566,`code`,5),Tk(567,`PoSkeletonSize`),Zg()(),Jc(568,`div`,2)(569,`p`),Tk(570,`Define os tamanhos disponíveis para o componente `),Jc(571,`code`),Tk(572,`po-skeleton`),Zg(),Tk(573,`.`),Zg()(),Jc(574,`h4`,10),Tk(575,`Propriedades`),Zg(),Jc(576,`table`,11)(577,`tr`,12)(578,`th`,13),Tk(579,`Nome`),Zg(),Jc(580,`th`,13),Tk(581,`Descrição`),Zg()(),Jc(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),Tk(586,` xs`),_u(587,`br`),Zg()()(),Jc(588,`td`,21)(589,`p`),Tk(590,`Tamanho extra pequeno`),Zg()()(),Jc(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),Tk(595,` sm`),_u(596,`br`),Zg()()(),Jc(597,`td`,21)(598,`p`),Tk(599,`Tamanho pequeno`),Zg()()(),Jc(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),Tk(604,` md`),_u(605,`br`),Zg()()(),Jc(606,`td`,21)(607,`p`),Tk(608,`Tamanho médio`),Zg()()(),Jc(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),Tk(613,` lg`),_u(614,`br`),Zg()()(),Jc(615,`td`,21)(616,`p`),Tk(617,`Tamanho grande`),Zg()()(),Jc(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),Tk(622,` xl`),_u(623,`br`),Zg()()(),Jc(624,`td`,21)(625,`p`),Tk(626,`Tamanho extra grande`),Zg()()(),Jc(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),Tk(631,` xxl`),_u(632,`br`),Zg()()(),Jc(633,`td`,21)(634,`p`),Tk(635,`Tamanho extra extra grande`),Zg()()()(),Jc(636,`h4`,4)(637,`code`,5),Tk(638,`PoSkeletonType`),Zg()(),Jc(639,`div`,2)(640,`p`),Tk(641,`Define os tipos visuais disponíveis para o componente `),Jc(642,`code`),Tk(643,`po-skeleton`),Zg(),Tk(644,`.`),Zg()(),Jc(645,`h4`,10),Tk(646,`Propriedades`),Zg(),Jc(647,`table`,11)(648,`tr`,12)(649,`th`,13),Tk(650,`Nome`),Zg(),Jc(651,`th`,13),Tk(652,`Descrição`),Zg()(),Jc(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),Tk(657,` normal`),_u(658,`br`),Zg()()(),Jc(659,`td`,21)(660,`p`),Tk(661,`Tipo padrão com cor neutra clara`),Zg()()(),Jc(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),Tk(666,` primary`),_u(667,`br`),Zg()()(),Jc(668,`td`,21)(669,`p`),Tk(670,`Tipo primário com cor neutra média`),Zg()()(),Jc(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),Tk(675,` content`),_u(676,`br`),Zg()()(),Jc(677,`td`,21)(678,`p`),Tk(679,`Tipo de conteúdo com fundo branco`),Zg()()()(),Jc(680,`h4`,4)(681,`code`,5),Tk(682,`PoSkeletonVariant`),Zg()(),Jc(683,`div`,2)(684,`p`),Tk(685,`Define as variantes visuais do componente `),Jc(686,`code`),Tk(687,`po-skeleton`),Zg(),Tk(688,`.`),Zg()(),Jc(689,`h4`,10),Tk(690,`Propriedades`),Zg(),Jc(691,`table`,11)(692,`tr`,12)(693,`th`,13),Tk(694,`Nome`),Zg(),Jc(695,`th`,13),Tk(696,`Descrição`),Zg()(),Jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),Tk(701,` text`),_u(702,`br`),Zg()()(),Jc(703,`td`,21)(704,`p`),Tk(705,`Variante para simular texto`),Zg()()(),Jc(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),Tk(710,` rectangle`),_u(711,`br`),Zg()()(),Jc(712,`td`,21)(713,`p`),Tk(714,`Variante retangular (largura maior que altura)`),Zg()()(),Jc(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),Tk(719,` square`),_u(720,`br`),Zg()()(),Jc(721,`td`,21)(722,`p`),Tk(723,`Variante quadrada (largura igual à altura)`),Zg()()(),Jc(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),Tk(728,` circle`),_u(729,`br`),Zg()()(),Jc(730,`td`,21)(731,`p`),Tk(732,`Variante circular`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ge(o,F){if(o&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-skeleton-basic-view`)(2,`sample-po-skeleton-labs-view`)(3,`sample-po-skeleton-credit-card-view`)(4,`sample-po-skeleton-widget-card-view`)(5,`sample-po-skeleton-user-profile-view`)(6,`sample-po-skeleton-social-post-view`)(7,`sample-po-skeleton-article-view`),Zg()}if(o&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ge,8,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-skeleton-doc`),Zg()()()),l&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var ke=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[WV.forChild(Qe),WV]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ke]})}return o})();export{Ot as DocPoSkeletonModule};