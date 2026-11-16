import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,F as Joe,G as Nf,I as Kee,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,k as Goe,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var oe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(Qc(0,`div`,0),vu(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),Kg())},dependencies:[Kee],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-skeleton-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-skeleton-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,oe],encapsulation:2,changeDetection:1})}return o})();function we(o,F){if(o&1){let p=YO();Qc(0,`po-select`,12),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.size,a)||(d.size=a),U_(a)}),Kg()}if(o&2){let p=ek();Yb(`ngModel`,p.size),Rb(`p-options`,p.sizeOptions),W0()}}function ye(o,F){if(o&1){let p=YO();vu(0,`po-divider`,13),Qc(1,`po-number`,14),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.circleSize,a)||(d.circleSize=a),U_(a)}),vt(`p-change`,function(){B_(p);let a=ek();return U_(a.onCircleSizeChange())}),Kg(),Qc(2,`po-select`,15),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.circleSizeUnit,a)||(d.circleSizeUnit=a),U_(a)}),vt(`p-change`,function(){B_(p);let a=ek();return U_(a.onCircleSizeUnitChange())}),Kg(),vu(3,`po-info`,16)}if(o&2){let p=ek();wg(),Yb(`ngModel`,p.circleSize),W0(),wg(),Yb(`ngModel`,p.circleSizeUnit),Rb(`p-options`,p.unitOptions),W0(),wg(),Rb(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function Pe(o,F){if(o&1){let p=YO();vu(0,`po-divider`,17),Qc(1,`po-input`,18),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.width,a)||(d.width=a),U_(a)}),Kg(),Qc(2,`po-input`,19),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.height,a)||(d.height=a),U_(a)}),Kg(),Qc(3,`po-input`,20),z0(),Kb(`ngModelChange`,function(a){B_(p);let d=ek();return Tk(d.borderRadius,a)||(d.borderRadius=a),U_(a)}),Kg()}if(o&2){let p=ek();wg(),Yb(`ngModel`,p.width),W0(),wg(),Yb(`ngModel`,p.height),W0(),wg(),Yb(`ngModel`,p.borderRadius),W0()}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(Qc(0,`div`,0),vu(1,`po-skeleton`,1),Kg(),vu(2,`hr`)(3,`po-info`,2)(4,`hr`),Qc(5,`form`,0),vu(6,`po-divider`,3),Qc(7,`po-select`,4),z0(),Kb(`ngModelChange`,function(x){return Tk(a.animation,x)||(a.animation=x),x}),Kg(),Qc(8,`po-select`,5),z0(),Kb(`ngModelChange`,function(x){return Tk(a.type,x)||(a.type=x),x}),Kg(),vu(9,`po-divider`,6),Qc(10,`po-select`,7),z0(),Kb(`ngModelChange`,function(x){return Tk(a.variant,x)||(a.variant=x),x}),vt(`p-change`,function(){return a.onVariantChange()}),Kg(),FO(11,we,1,2,`po-select`,8),vu(12,`po-divider`,9),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(x){return Tk(a.ariaLabel,x)||(a.ariaLabel=x),x}),Kg(),FO(14,ye,4,4),FO(15,Pe,4,3),Qc(16,`po-button`,11),vt(`p-click`,function(){return a.restore()}),Kg()()),l&2&&(wg(),Rb(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),wg(2),Rb(`p-value`,a.modelValue),wg(4),Yb(`ngModel`,a.animation),Rb(`p-options`,a.animationOptions),W0(),wg(),Yb(`ngModel`,a.type),Rb(`p-options`,a.typeOptions),W0(),wg(2),Yb(`ngModel`,a.variant),Rb(`p-options`,a.variantOptions),W0(),wg(),VO(a.variant!==`text`?11:-1),wg(2),Yb(`ngModel`,a.ariaLabel),W0(),wg(),VO(a.variant===`circle`?14:-1),wg(),VO(a.variant===`text`?15:-1))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Goe,Koe,Joe,Kee],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-skeleton-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-skeleton-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),vu(5,`po-skeleton`,4),Kg()(),Qc(6,`div`,5)(7,`div`,6),vu(8,`po-skeleton`,7),Kg(),Qc(9,`div`,6),vu(10,`po-skeleton`,7),Kg(),Qc(11,`div`,6),vu(12,`po-skeleton`,7),Kg(),Qc(13,`div`,6),vu(14,`po-skeleton`,7),Kg()(),Qc(15,`div`,8)(16,`div`,9),vu(17,`po-skeleton`,10)(18,`po-skeleton`,11),Kg(),Qc(19,`div`,12),vu(20,`po-skeleton`,13)(21,`po-skeleton`,14),Kg()(),Qc(22,`div`,15),vu(23,`po-skeleton`,16),Kg()()(),Qc(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),vu(28,`po-skeleton`,19),Kg()(),Qc(29,`div`,5)(30,`div`,6),vu(31,`po-skeleton`,20),Kg(),Qc(32,`div`,6),vu(33,`po-skeleton`,20),Kg(),Qc(34,`div`,6),vu(35,`po-skeleton`,20),Kg(),Qc(36,`div`,6),vu(37,`po-skeleton`,20),Kg()(),Qc(38,`div`,8)(39,`div`,9),vu(40,`po-skeleton`,21)(41,`po-skeleton`,22),Kg(),Qc(42,`div`,12),vu(43,`po-skeleton`,23)(44,`po-skeleton`,24),Kg()(),Qc(45,`div`,15),vu(46,`po-skeleton`,25),Kg()()()())},dependencies:[bae,Kee],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-skeleton-credit-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton - Credit Card`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.credit-card {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-skeleton-credit-card`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),vu(5,`po-skeleton`,5),Kg(),Qc(6,`div`,6),vu(7,`po-skeleton`,7),Kg(),Qc(8,`div`,8),vu(9,`po-skeleton`,9),Kg()(),Qc(10,`div`,10)(11,`div`,4),vu(12,`po-skeleton`,5),Kg()(),vu(13,`div`,11),Qc(14,`div`,12)(15,`div`,13),vu(16,`po-skeleton`,14),Kg()()()()())},dependencies:[bae,Kee],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-skeleton-widget-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton - Widget Card`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.widget-card {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-skeleton-widget-card`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Oe,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),vu(4,`po-skeleton`,4),Kg(),vu(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),Qc(10,`div`,10)(11,`div`,11),vu(12,`po-skeleton`,12)(13,`po-skeleton`,13),Kg(),Qc(14,`div`,11),vu(15,`po-skeleton`,12)(16,`po-skeleton`,14),Kg(),Qc(17,`div`,11),vu(18,`po-skeleton`,12)(19,`po-skeleton`,15),Kg()()()()())},dependencies:[bae,Kee],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-skeleton-user-profile`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton - User Profile`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.profile-card {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-skeleton-user-profile`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,qe,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),vu(4,`po-skeleton`,4),Qc(5,`div`,5),vu(6,`po-skeleton`,6)(7,`po-skeleton`,6),Kg()(),vu(8,`po-skeleton`,7),Qc(9,`div`,8),vu(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),Kg(),vu(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),Kg()(),Qc(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),vu(20,`po-skeleton`,14),Qc(21,`div`,5),vu(22,`po-skeleton`,6)(23,`po-skeleton`,6),Kg()(),vu(24,`po-skeleton`,15),Qc(25,`div`,8),vu(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),Kg(),vu(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),Kg()()())},dependencies:[bae,Kee],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-skeleton-social-post`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton - Social Post`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.post-card {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-skeleton-social-post`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),vu(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),Qc(6,`div`,6),vu(7,`po-skeleton`,7),Qc(8,`div`,8),vu(9,`po-skeleton`,9)(10,`po-skeleton`,10),Kg()(),vu(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),Kg()()())},dependencies:[bae,Kee],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-skeleton-article`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Skeleton - Article`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.article-card {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-skeleton-article`),Kg(),vu(29,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-skeleton-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-animation`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`id`,`prop-p-border-radius`,1,`docs-api-properties-row`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`id`,`prop-p-variant`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`],[`id`,`prop-p-width`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-animation`,1,`docs-api-class-name`],[`id`,`enum-po-skeleton-animation-none`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-animation-pulse`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-animation-shimmer`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size`,1,`docs-api-class-name`],[`id`,`enum-po-skeleton-size-xs`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size-sm`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size-md`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size-lg`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size-xl`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-size-xxl`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-type`,1,`docs-api-class-name`],[`id`,`enum-po-skeleton-type-normal`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-type-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-type-content`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-variant`,1,`docs-api-class-name`],[`id`,`enum-po-skeleton-variant-text`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-variant-rectangle`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-variant-square`,1,`docs-api-properties-row`],[`id`,`enum-po-skeleton-variant-circle`,1,`docs-api-properties-row`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-skeleton.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoSkeletonComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-skeleton`),Kg(),Sk(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),Kg(),Qc(18,`p`),Sk(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),Kg(),Qc(20,`h4`),Sk(21,`Tokens customizáveis`),Kg(),Qc(22,`p`),Sk(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(24,`blockquote`)(25,`p`),Sk(26,`Para maiores informações, acesse o guia `),Qc(27,`a`,6),Sk(28,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(29,`.`),Kg()(),Qc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),Sk(34,`Propriedade`),Kg(),Qc(35,`th`),Sk(36,`Descrição`),Kg(),Qc(37,`th`),Sk(38,`Valor Padrão`),Kg()()(),Qc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),Sk(43,`Cores`),Kg()(),vu(44,`td`)(45,`td`),Kg(),Qc(46,`tr`)(47,`td`)(48,`code`),Sk(49,`--color`),Kg()(),Qc(50,`td`),Sk(51,`Cor de fundo do skeleton (tipo normal)`),Kg(),Qc(52,`td`)(53,`code`),Sk(54,`var(--color-neutral-light-20)`),Kg()()(),Qc(55,`tr`)(56,`td`)(57,`code`),Sk(58,`--color-primary`),Kg()(),Qc(59,`td`),Sk(60,`Cor de fundo do skeleton (tipo primary)`),Kg(),Qc(61,`td`)(62,`code`),Sk(63,`var(--color-neutral-mid-40)`),Kg()()(),Qc(64,`tr`)(65,`td`)(66,`code`),Sk(67,`--color-content`),Kg()(),Qc(68,`td`),Sk(69,`Cor de fundo do skeleton (tipo content)`),Kg(),Qc(70,`td`)(71,`code`),Sk(72,`var(--color-neutral-light-00)`),Kg()()(),Qc(73,`tr`)(74,`td`)(75,`code`),Sk(76,`--shimmer-highlight`),Kg()(),Qc(77,`td`),Sk(78,`Cor de destaque do shimmer (tipo normal)`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--color-neutral-light-30)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--shimmer-highlight-primary`),Kg()(),Qc(86,`td`),Sk(87,`Cor de destaque do shimmer (tipo primary)`),Kg(),Qc(88,`td`)(89,`code`),Sk(90,`var(--color-neutral-light-20)`),Kg()()(),Qc(91,`tr`)(92,`td`)(93,`code`),Sk(94,`--shimmer-highlight-content`),Kg()(),Qc(95,`td`),Sk(96,`Cor de destaque do shimmer (tipo content)`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--color-neutral-light-05)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`strong`),Sk(103,`Espaçamento`),Kg()(),vu(104,`td`)(105,`td`),Kg(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--margin-bottom`),Kg()(),Qc(110,`td`),Sk(111,`Margem inferior do skeleton`),Kg(),Qc(112,`td`)(113,`code`),Sk(114,`var(--spacing-xs)`),Kg()()(),Qc(115,`tr`)(116,`td`)(117,`strong`),Sk(118,`Bordas`),Kg()(),vu(119,`td`)(120,`td`),Kg(),Qc(121,`tr`)(122,`td`)(123,`code`),Sk(124,`--border-radius`),Kg()(),Qc(125,`td`),Sk(126,`Raio da borda do skeleton`),Kg(),Qc(127,`td`)(128,`code`),Sk(129,`var(--border-radius-md)`),Kg()()(),Qc(130,`tr`)(131,`td`)(132,`code`),Sk(133,`--border-radius-text`),Kg()(),Qc(134,`td`),Sk(135,`Raio da borda para a variante text`),Kg(),Qc(136,`td`)(137,`code`),Sk(138,`var(--border-radius-md)`),Kg()()(),Qc(139,`tr`)(140,`td`)(141,`code`),Sk(142,`--border-radius-primary`),Kg()(),Qc(143,`td`),Sk(144,`Raio da borda do skeleton (tipo primary)`),Kg(),Qc(145,`td`)(146,`code`),Sk(147,`var(--border-radius-md)`),Kg()()(),Qc(148,`tr`)(149,`td`)(150,`code`),Sk(151,`--border-radius-content`),Kg()(),Qc(152,`td`),Sk(153,`Raio da borda do skeleton (tipo content)`),Kg(),Qc(154,`td`)(155,`code`),Sk(156,`var(--border-radius-lg)`),Kg()()(),Qc(157,`tr`)(158,`td`)(159,`strong`),Sk(160,`Transições`),Kg()(),vu(161,`td`)(162,`td`),Kg(),Qc(163,`tr`)(164,`td`)(165,`code`),Sk(166,`--transition-property`),Kg()(),Qc(167,`td`),Sk(168,`Propriedade CSS da transição`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`all`),Kg()()(),Qc(172,`tr`)(173,`td`)(174,`code`),Sk(175,`--transition-duration`),Kg()(),Qc(176,`td`),Sk(177,`Duração da transição de cor`),Kg(),Qc(178,`td`)(179,`code`),Sk(180,`var(--duration-moderate)`),Kg()()(),Qc(181,`tr`)(182,`td`)(183,`code`),Sk(184,`--transition-timing`),Kg()(),Qc(185,`td`),Sk(186,`Função de temporização da transição/animação`),Kg(),Qc(187,`td`)(188,`code`),Sk(189,`var(--timing-continuous)`),Kg()()(),Qc(190,`tr`)(191,`td`)(192,`strong`),Sk(193,`Animações`),Kg()(),vu(194,`td`)(195,`td`),Kg(),Qc(196,`tr`)(197,`td`)(198,`code`),Sk(199,`--animation-duration-pulse`),Kg()(),Qc(200,`td`),Sk(201,`Duração da animação de pulsação`),Kg(),Qc(202,`td`)(203,`code`),Sk(204,`var(--duration-very-slow)`),Kg()()(),Qc(205,`tr`)(206,`td`)(207,`code`),Sk(208,`--animation-duration-shimmer`),Kg()(),Qc(209,`td`),Sk(210,`Duração da animação de brilho deslizante`),Kg(),Qc(211,`td`)(212,`code`),Sk(213,`var(--duration-ultra-slow)`),Kg()()()()()(),Qc(214,`div`,7)(215,`h4`,8),Sk(216,`Seletor`),Kg(),Qc(217,`pre`,9),Sk(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),Kg()(),Qc(219,`h4`,10),Sk(220,`Propriedades`),Kg(),Qc(221,`table`,11)(222,`tr`,12)(223,`th`,13),Sk(224,`Nome`),Kg(),Qc(225,`th`,13),Sk(226,`Tipo`),Kg(),Qc(227,`th`,13),Sk(228,`Padrão`),Kg(),Qc(229,`th`,13),Sk(230,`Descrição`),Kg()(),Qc(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),Sk(235,` p-animation`),vu(236,`br`),Kg()()(),Qc(237,`td`,18)(238,`code`,19),Sk(239,`PoSkeletonAnimation`),Kg()(),Qc(240,`td`,20)(241,`p`)(242,`code`),Sk(243,`shimmer`),Kg()()(),Qc(244,`td`,21)(245,`em`)(246,`strong`),Sk(247,`(opcional)`),Kg()(),Qc(248,`p`),Sk(249,`Define o tipo de animação do skeleton.`),Kg(),Qc(250,`p`),Sk(251,`Valores válidos:`),Kg(),Qc(252,`ul`)(253,`li`)(254,`code`),Sk(255,`none`),Kg(),Sk(256,`: Sem animação`),Kg(),Qc(257,`li`)(258,`code`),Sk(259,`pulse`),Kg(),Sk(260,`: Animação de pulsação`),Kg(),Qc(261,`li`)(262,`code`),Sk(263,`shimmer`),Kg(),Sk(264,`: Animação de brilho deslizante`),Kg()()()(),Qc(265,`tr`,22)(266,`td`,15)(267,`div`,16)(268,`span`,17),Sk(269,` p-aria-label`),vu(270,`br`),Kg()()(),Qc(271,`td`,18)(272,`code`,23),Sk(273,`string`),Kg()(),Qc(274,`td`,20),Sk(275,`-`),Kg(),Qc(276,`td`,21)(277,`em`)(278,`strong`),Sk(279,`(opcional)`),Kg()(),Qc(280,`p`),Sk(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),Kg(),Qc(282,`p`),Sk(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),Kg(),Qc(284,`p`)(285,`strong`),Sk(286,`Quando usar:`),Kg()(),Qc(287,`ul`)(288,`li`),Sk(289,`Use em `),Qc(290,`strong`),Sk(291,`skeletons únicos`),Kg(),Sk(292,` ou no `),Qc(293,`strong`),Sk(294,`primeiro skeleton de um grupo`),Kg(),Sk(295,` com descrição contextual`),Kg(),Qc(296,`li`),Sk(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),Kg()(),Qc(298,`p`)(299,`strong`),Sk(300,`Exemplos de uso:`),Kg()(),Qc(301,`pre`)(302,`code`,24),Sk(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),Kg()(),Qc(304,`blockquote`)(305,`p`)(306,`strong`),Sk(307,`Boas práticas de acessibilidade:`),Kg()(),Qc(308,`ul`)(309,`li`),Sk(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),Kg()()(),Qc(311,`blockquote`)(312,`ul`)(313,`li`),Sk(314,`Em casos complexos, considere usar um único `),Qc(315,`code`),Sk(316,`<div role="status">`),Kg(),Sk(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),Kg()()()()(),Qc(318,`tr`,25)(319,`td`,15)(320,`div`,16)(321,`span`,17),Sk(322,` p-border-radius`),vu(323,`br`),Kg()()(),Qc(324,`td`,18)(325,`code`,23),Sk(326,`string`),Kg()(),Qc(327,`td`,20),Sk(328,`-`),Kg(),Qc(329,`td`,21)(330,`em`)(331,`strong`),Sk(332,`(opcional)`),Kg()(),Qc(333,`p`),Sk(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Kg(),Qc(335,`p`),Sk(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),Kg()()(),Qc(337,`tr`,26)(338,`td`,15)(339,`div`,16)(340,`span`,17),Sk(341,` p-height`),vu(342,`br`),Kg()()(),Qc(343,`td`,18)(344,`code`,23),Sk(345,`string`),Kg()(),Qc(346,`td`,20),Sk(347,`-`),Kg(),Qc(348,`td`,21)(349,`em`)(350,`strong`),Sk(351,`(opcional)`),Kg()(),Qc(352,`p`),Sk(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Kg(),Qc(354,`p`),Sk(355,`Quando definido, sobrescreve a altura padrão da variante.`),Kg()()(),Qc(356,`tr`,27)(357,`td`,15)(358,`div`,16)(359,`span`,17),Sk(360,` p-size`),vu(361,`br`),Kg()()(),Qc(362,`td`,18)(363,`code`,28),Sk(364,`PoSkeletonSize`),Kg()(),Qc(365,`td`,20)(366,`p`)(367,`code`),Sk(368,`md`),Kg()()(),Qc(369,`td`,21)(370,`em`)(371,`strong`),Sk(372,`(opcional)`),Kg()(),Qc(373,`p`),Sk(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),Qc(375,`code`),Sk(376,`rectangle`),Kg(),Sk(377,`, `),Qc(378,`code`),Sk(379,`square`),Kg(),Sk(380,`, `),Qc(381,`code`),Sk(382,`circle`),Kg(),Sk(383,`).`),Kg(),Qc(384,`p`),Sk(385,`Valores válidos:`),Kg(),Qc(386,`ul`)(387,`li`)(388,`code`),Sk(389,`xs`),Kg(),Sk(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),Kg(),Qc(391,`li`)(392,`code`),Sk(393,`sm`),Kg(),Sk(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),Kg(),Qc(395,`li`)(396,`code`),Sk(397,`md`),Kg(),Sk(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),Kg(),Qc(399,`li`)(400,`code`),Sk(401,`lg`),Kg(),Sk(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),Kg(),Qc(403,`li`)(404,`code`),Sk(405,`xl`),Kg(),Sk(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),Kg(),Qc(407,`li`)(408,`code`),Sk(409,`2xl`),Kg(),Sk(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),Kg()(),Qc(411,`p`),Sk(412,`Esta propriedade é ignorada quando `),Qc(413,`code`),Sk(414,`p-width`),Kg(),Sk(415,` ou `),Qc(416,`code`),Sk(417,`p-height`),Kg(),Sk(418,` são definidos explicitamente.`),Kg()()(),Qc(419,`tr`,29)(420,`td`,15)(421,`div`,16)(422,`span`,17),Sk(423,` p-type`),vu(424,`br`),Kg()()(),Qc(425,`td`,18)(426,`code`,30),Sk(427,`PoSkeletonType`),Kg()(),Qc(428,`td`,20)(429,`p`)(430,`code`),Sk(431,`normal`),Kg()()(),Qc(432,`td`,21)(433,`em`)(434,`strong`),Sk(435,`(opcional)`),Kg()(),Qc(436,`p`),Sk(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),Kg(),Qc(438,`p`),Sk(439,`Valores válidos:`),Kg(),Qc(440,`ul`)(441,`li`)(442,`code`),Sk(443,`normal`),Kg(),Sk(444,`: Cor neutra clara (padrão)`),Kg(),Qc(445,`li`)(446,`code`),Sk(447,`primary`),Kg(),Sk(448,`: Cor neutra média`),Kg(),Qc(449,`li`)(450,`code`),Sk(451,`content`),Kg(),Sk(452,`: Fundo branco`),Kg()()()(),Qc(453,`tr`,31)(454,`td`,15)(455,`div`,16)(456,`span`,17),Sk(457,` p-variant`),vu(458,`br`),Kg()()(),Qc(459,`td`,18)(460,`code`,32),Sk(461,`PoSkeletonVariant`),Kg()(),Qc(462,`td`,20)(463,`p`)(464,`code`),Sk(465,`text`),Kg()()(),Qc(466,`td`,21)(467,`em`)(468,`strong`),Sk(469,`(opcional)`),Kg()(),Qc(470,`p`),Sk(471,`Define a variante visual do skeleton.`),Kg(),Qc(472,`p`),Sk(473,`Valores válidos:`),Kg(),Qc(474,`ul`)(475,`li`)(476,`code`),Sk(477,`text`),Kg(),Sk(478,`: Simula uma linha de texto (altura padrão: 1em)`),Kg(),Qc(479,`li`)(480,`code`),Sk(481,`rectangle`),Kg(),Sk(482,`: Forma retangular (proporção 3:1 por padrão)`),Kg(),Qc(483,`li`)(484,`code`),Sk(485,`square`),Kg(),Sk(486,`: Forma quadrada (largura e altura iguais)`),Kg(),Qc(487,`li`)(488,`code`),Sk(489,`circle`),Kg(),Sk(490,`: Forma circular (largura e altura iguais)`),Kg()()()(),Qc(491,`tr`,33)(492,`td`,15)(493,`div`,16)(494,`span`,17),Sk(495,` p-width`),vu(496,`br`),Kg()()(),Qc(497,`td`,18)(498,`code`,23),Sk(499,`string`),Kg()(),Qc(500,`td`,20)(501,`p`)(502,`code`),Sk(503,`100%`),Kg(),Sk(504,` para variante `),Qc(505,`code`),Sk(506,`text`),Kg(),Sk(507,`, tamanho baseado em `),Qc(508,`code`),Sk(509,`p-size`),Kg(),Sk(510,` para outras variantes`),Kg()(),Qc(511,`td`,21)(512,`em`)(513,`strong`),Sk(514,`(opcional)`),Kg()(),Qc(515,`p`),Sk(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),Kg(),Qc(517,`p`),Sk(518,`Quando definido, sobrescreve a largura padrão da variante.`),Kg()()()(),Qc(519,`h3`),Sk(520,`Enums`),Kg(),Qc(521,`h4`,34)(522,`code`,5),Sk(523,`PoSkeletonAnimation`),Kg()(),Qc(524,`div`,2)(525,`p`),Sk(526,`Define os tipos de animação do componente `),Qc(527,`code`),Sk(528,`po-skeleton`),Kg(),Sk(529,`.`),Kg()(),Qc(530,`h4`,10),Sk(531,`Propriedades`),Kg(),Qc(532,`table`,11)(533,`tr`,12)(534,`th`,13),Sk(535,`Nome`),Kg(),Qc(536,`th`,13),Sk(537,`Descrição`),Kg()(),Qc(538,`tr`,35)(539,`td`,15)(540,`div`,16)(541,`span`,17),Sk(542,` none`),vu(543,`br`),Kg()()(),Qc(544,`td`,21)(545,`p`),Sk(546,`Sem animação`),Kg()()(),Qc(547,`tr`,36)(548,`td`,15)(549,`div`,16)(550,`span`,17),Sk(551,` pulse`),vu(552,`br`),Kg()()(),Qc(553,`td`,21)(554,`p`),Sk(555,`Animação de pulsação`),Kg()()(),Qc(556,`tr`,37)(557,`td`,15)(558,`div`,16)(559,`span`,17),Sk(560,` shimmer`),vu(561,`br`),Kg()()(),Qc(562,`td`,21)(563,`p`),Sk(564,`Animação de brilho deslizante`),Kg()()()(),Qc(565,`h4`,38)(566,`code`,5),Sk(567,`PoSkeletonSize`),Kg()(),Qc(568,`div`,2)(569,`p`),Sk(570,`Define os tamanhos disponíveis para o componente `),Qc(571,`code`),Sk(572,`po-skeleton`),Kg(),Sk(573,`.`),Kg()(),Qc(574,`h4`,10),Sk(575,`Propriedades`),Kg(),Qc(576,`table`,11)(577,`tr`,12)(578,`th`,13),Sk(579,`Nome`),Kg(),Qc(580,`th`,13),Sk(581,`Descrição`),Kg()(),Qc(582,`tr`,39)(583,`td`,15)(584,`div`,16)(585,`span`,17),Sk(586,` xs`),vu(587,`br`),Kg()()(),Qc(588,`td`,21)(589,`p`),Sk(590,`Tamanho extra pequeno`),Kg()()(),Qc(591,`tr`,40)(592,`td`,15)(593,`div`,16)(594,`span`,17),Sk(595,` sm`),vu(596,`br`),Kg()()(),Qc(597,`td`,21)(598,`p`),Sk(599,`Tamanho pequeno`),Kg()()(),Qc(600,`tr`,41)(601,`td`,15)(602,`div`,16)(603,`span`,17),Sk(604,` md`),vu(605,`br`),Kg()()(),Qc(606,`td`,21)(607,`p`),Sk(608,`Tamanho médio`),Kg()()(),Qc(609,`tr`,42)(610,`td`,15)(611,`div`,16)(612,`span`,17),Sk(613,` lg`),vu(614,`br`),Kg()()(),Qc(615,`td`,21)(616,`p`),Sk(617,`Tamanho grande`),Kg()()(),Qc(618,`tr`,43)(619,`td`,15)(620,`div`,16)(621,`span`,17),Sk(622,` xl`),vu(623,`br`),Kg()()(),Qc(624,`td`,21)(625,`p`),Sk(626,`Tamanho extra grande`),Kg()()(),Qc(627,`tr`,44)(628,`td`,15)(629,`div`,16)(630,`span`,17),Sk(631,` xxl`),vu(632,`br`),Kg()()(),Qc(633,`td`,21)(634,`p`),Sk(635,`Tamanho extra extra grande`),Kg()()()(),Qc(636,`h4`,45)(637,`code`,5),Sk(638,`PoSkeletonType`),Kg()(),Qc(639,`div`,2)(640,`p`),Sk(641,`Define os tipos visuais disponíveis para o componente `),Qc(642,`code`),Sk(643,`po-skeleton`),Kg(),Sk(644,`.`),Kg()(),Qc(645,`h4`,10),Sk(646,`Propriedades`),Kg(),Qc(647,`table`,11)(648,`tr`,12)(649,`th`,13),Sk(650,`Nome`),Kg(),Qc(651,`th`,13),Sk(652,`Descrição`),Kg()(),Qc(653,`tr`,46)(654,`td`,15)(655,`div`,16)(656,`span`,17),Sk(657,` normal`),vu(658,`br`),Kg()()(),Qc(659,`td`,21)(660,`p`),Sk(661,`Tipo padrão com cor neutra clara`),Kg()()(),Qc(662,`tr`,47)(663,`td`,15)(664,`div`,16)(665,`span`,17),Sk(666,` primary`),vu(667,`br`),Kg()()(),Qc(668,`td`,21)(669,`p`),Sk(670,`Tipo primário com cor neutra média`),Kg()()(),Qc(671,`tr`,48)(672,`td`,15)(673,`div`,16)(674,`span`,17),Sk(675,` content`),vu(676,`br`),Kg()()(),Qc(677,`td`,21)(678,`p`),Sk(679,`Tipo de conteúdo com fundo branco`),Kg()()()(),Qc(680,`h4`,49)(681,`code`,5),Sk(682,`PoSkeletonVariant`),Kg()(),Qc(683,`div`,2)(684,`p`),Sk(685,`Define as variantes visuais do componente `),Qc(686,`code`),Sk(687,`po-skeleton`),Kg(),Sk(688,`.`),Kg()(),Qc(689,`h4`,10),Sk(690,`Propriedades`),Kg(),Qc(691,`table`,11)(692,`tr`,12)(693,`th`,13),Sk(694,`Nome`),Kg(),Qc(695,`th`,13),Sk(696,`Descrição`),Kg()(),Qc(697,`tr`,50)(698,`td`,15)(699,`div`,16)(700,`span`,17),Sk(701,` text`),vu(702,`br`),Kg()()(),Qc(703,`td`,21)(704,`p`),Sk(705,`Variante para simular texto`),Kg()()(),Qc(706,`tr`,51)(707,`td`,15)(708,`div`,16)(709,`span`,17),Sk(710,` rectangle`),vu(711,`br`),Kg()()(),Qc(712,`td`,21)(713,`p`),Sk(714,`Variante retangular (largura maior que altura)`),Kg()()(),Qc(715,`tr`,52)(716,`td`,15)(717,`div`,16)(718,`span`,17),Sk(719,` square`),vu(720,`br`),Kg()()(),Qc(721,`td`,21)(722,`p`),Sk(723,`Variante quadrada (largura igual à altura)`),Kg()()(),Qc(724,`tr`,53)(725,`td`,15)(726,`div`,16)(727,`span`,17),Sk(728,` circle`),vu(729,`br`),Kg()()(),Qc(730,`td`,21)(731,`p`),Sk(732,`Variante circular`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ge(o,F){if(o&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-skeleton-basic-view`)(2,`sample-po-skeleton-labs-view`)(3,`sample-po-skeleton-credit-card-view`)(4,`sample-po-skeleton-widget-card-view`)(5,`sample-po-skeleton-user-profile-view`)(6,`sample-po-skeleton-social-post-view`)(7,`sample-po-skeleton-article-view`),Kg()}if(o&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var Qe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ge,8,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-skeleton-doc`),Kg()()()),l&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var Ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Qe),GV]})}return o})();var Ot=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,Ce]})}return o})();export{Ot as DocPoSkeletonModule};