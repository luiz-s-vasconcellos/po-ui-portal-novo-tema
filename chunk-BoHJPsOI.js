import{A as Hoe,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,Xt as ere,Ya as wg,Za as xF,Zt as fae,ai as Sn,bt as Wee,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var ae=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-basic`]],standalone:!1,decls:4,vars:0,consts:[[1,`po-row`],[1,`po-md-12`]],template:function(l,a){l&1&&(jc(0,`div`,0),nu(1,`po-skeleton`,1)(2,`po-skeleton`,1)(3,`po-skeleton`,1),wg())},dependencies:[Wee],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-skeleton-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ae],encapsulation:2,changeDetection:1})}return o})();function ye(o,I){if(o&1){let p=Ax();jc(0,`po-select`,12),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.size,a)||(d.size=a),__(a)}),wg()}if(o&2){let p=Fx();sb(`ngModel`,p.size),UE(`p-options`,p.sizeOptions),o0()}}function Pe(o,I){if(o&1){let p=Ax();nu(0,`po-divider`,13),jc(1,`po-number`,14),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.circleSize,a)||(d.circleSize=a),__(a)}),mt(`p-change`,function(){v_(p);let a=Fx();return __(a.onCircleSizeChange())}),wg(),jc(2,`po-select`,15),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.circleSizeUnit,a)||(d.circleSizeUnit=a),__(a)}),mt(`p-change`,function(){v_(p);let a=Fx();return __(a.onCircleSizeUnitChange())}),wg(),nu(3,`po-info`,16)}if(o&2){let p=Fx();rg(),sb(`ngModel`,p.circleSize),o0(),rg(),sb(`ngModel`,p.circleSizeUnit),UE(`p-options`,p.unitOptions),o0(),rg(),UE(`p-value`,p.circleSize?p.circleSize+p.circleSizeUnit:`Using default size from Size select`)}}function _e(o,I){if(o&1){let p=Ax();nu(0,`po-divider`,17),jc(1,`po-input`,18),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.width,a)||(d.width=a),__(a)}),wg(),jc(2,`po-input`,19),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.height,a)||(d.height=a),__(a)}),wg(),jc(3,`po-input`,20),r0(),ab(`ngModelChange`,function(a){v_(p);let d=Fx();return uO(d.borderRadius,a)||(d.borderRadius=a),__(a)}),wg()}if(o&2){let p=Fx();rg(),sb(`ngModel`,p.width),o0(),rg(),sb(`ngModel`,p.height),o0(),rg(),sb(`ngModel`,p.borderRadius),o0()}}var pe=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit=`px`;animationOptions=[{label:`Shimmer`,value:`shimmer`},{label:`Pulse`,value:`pulse`},{label:`None`,value:`none`}];sizeOptions=[{label:`Extra Small`,value:`xs`},{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra Large`,value:`xl`},{label:`Extra Extra Large`,value:`2xl`}];typeOptions=[{label:`Normal`,value:`normal`},{label:`Primary`,value:`primary`},{label:`Content`,value:`content`}];variantOptions=[{label:`Circle`,value:`circle`},{label:`Text`,value:`text`},{label:`Rectangle`,value:`rectangle`},{label:`Square`,value:`square`}];unitOptions=[{label:`Pixels (px)`,value:`px`},{label:`REM`,value:`rem`},{label:`EM`,value:`em`},{label:`Percentage (%)`,value:`%`}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant===`circle`){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius=`50%`}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant=`circle`,this.type=`normal`,this.animation=`shimmer`,this.size=`md`,this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel=`Carregando`,this.circleSize=null,this.circleSizeUnit=`px`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-labs`]],standalone:!1,decls:17,vars:19,consts:[[1,`po-row`],[1,`po-md-12`,3,`p-variant`,`p-type`,`p-animation`,`p-size`,`p-width`,`p-height`,`p-border-radius`,`p-aria-label`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Animation`,1,`po-md-12`],[`name`,`animation`,`p-label`,`Animation`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Shapes`,1,`po-md-12`],[`name`,`variant`,`p-label`,`Variant`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModel`,`p-options`],[`p-label`,`Accessibility`,1,`po-md-12`],[`name`,`ariaLabel`,`p-label`,`Aria Label`,`p-help`,`Texto descritivo para leitores de tela (acessibilidade)`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Circle Dynamic Size (optional)`,1,`po-md-12`],[`name`,`circleSize`,`p-clean`,``,`p-label`,`Circle Size`,`p-help`,`Define o tamanho do círculo`,`p-min`,`1`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`circleSizeUnit`,`p-label`,`Unit`,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Applied Size`,1,`po-md-6`,3,`p-value`],[`p-label`,`Custom (optional)`,1,`po-md-12`],[`name`,`width`,`p-clean`,``,`p-label`,`Width`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderRadius`,`p-clean`,``,`p-label`,`Border Radius`,`p-help`,`Valores CSS: px, %, em, rem`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,a){l&1&&(jc(0,`div`,0),nu(1,`po-skeleton`,1),wg(),nu(2,`hr`)(3,`po-info`,2)(4,`hr`),jc(5,`form`,0),nu(6,`po-divider`,3),jc(7,`po-select`,4),r0(),ab(`ngModelChange`,function(x){return uO(a.animation,x)||(a.animation=x),x}),wg(),jc(8,`po-select`,5),r0(),ab(`ngModelChange`,function(x){return uO(a.type,x)||(a.type=x),x}),wg(),nu(9,`po-divider`,6),jc(10,`po-select`,7),r0(),ab(`ngModelChange`,function(x){return uO(a.variant,x)||(a.variant=x),x}),mt(`p-change`,function(){return a.onVariantChange()}),wg(),vx(11,ye,1,2,`po-select`,8),nu(12,`po-divider`,9),jc(13,`po-input`,10),r0(),ab(`ngModelChange`,function(x){return uO(a.ariaLabel,x)||(a.ariaLabel=x),x}),wg(),vx(14,Pe,4,4),vx(15,_e,4,3),jc(16,`po-button`,11),mt(`p-click`,function(){return a.restore()}),wg()()),l&2&&(rg(),UE(`p-variant`,a.variant)(`p-type`,a.type)(`p-animation`,a.animation)(`p-size`,a.size)(`p-width`,a.width||void 0)(`p-height`,a.height||void 0)(`p-border-radius`,a.borderRadius||void 0)(`p-aria-label`,a.ariaLabel),rg(2),UE(`p-value`,a.modelValue),rg(4),sb(`ngModel`,a.animation),UE(`p-options`,a.animationOptions),o0(),rg(),sb(`ngModel`,a.type),UE(`p-options`,a.typeOptions),o0(),rg(2),sb(`ngModel`,a.variant),UE(`p-options`,a.variantOptions),o0(),rg(),Dx(a.variant!==`text`?11:-1),rg(2),sb(`ngModel`,a.ariaLabel),o0(),rg(),Dx(a.variant===`circle`?14:-1),rg(),Dx(a.variant===`text`?15:-1))},dependencies:[RK,SK,MK,xF,SF,oi,Lf,U4,Hoe,Woe,Yoe,Wee],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-skeleton-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Me,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-credit-card`]],standalone:!1,decls:47,vars:0,consts:[[1,`po-row`],[`p-height`,`340`,`p-title`,`Payment Method`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card`],[1,`po-md-2`,`card-chip`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`],[1,`po-row`,`card-number`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`],[1,`po-row`,`card-details`],[1,`po-sm-7`,`po-md-7`,`card-holder`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`120px`],[1,`po-sm-5`,`po-md-5`,`card-expiry`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`50px`],[1,`card-brand`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-height`,`340`,`p-title`,`Payment Method - Content`,1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`credit-card-gray`],[`p-variant`,`rectangle`,`p-width`,`40px`,`p-height`,`24px`,`p-type`,`content`],[`p-variant`,`text`,`p-type`,`content`],[`p-variant`,`text`,`p-size`,`sm`,`p-width`,`40px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`120px`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`,`p-type`,`content`],[`p-variant`,`text`,`p-width`,`50px`,`p-type`,`content`],[`p-variant`,`circle`,`p-size`,`sm`,`p-type`,`content`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,0)(4,`div`,3),nu(5,`po-skeleton`,4),wg()(),jc(6,`div`,5)(7,`div`,6),nu(8,`po-skeleton`,7),wg(),jc(9,`div`,6),nu(10,`po-skeleton`,7),wg(),jc(11,`div`,6),nu(12,`po-skeleton`,7),wg(),jc(13,`div`,6),nu(14,`po-skeleton`,7),wg()(),jc(15,`div`,8)(16,`div`,9),nu(17,`po-skeleton`,10)(18,`po-skeleton`,11),wg(),jc(19,`div`,12),nu(20,`po-skeleton`,13)(21,`po-skeleton`,14),wg()(),jc(22,`div`,15),nu(23,`po-skeleton`,16),wg()()(),jc(24,`po-widget`,17)(25,`div`,18)(26,`div`,0)(27,`div`,3),nu(28,`po-skeleton`,19),wg()(),jc(29,`div`,5)(30,`div`,6),nu(31,`po-skeleton`,20),wg(),jc(32,`div`,6),nu(33,`po-skeleton`,20),wg(),jc(34,`div`,6),nu(35,`po-skeleton`,20),wg(),jc(36,`div`,6),nu(37,`po-skeleton`,20),wg()(),jc(38,`div`,8)(39,`div`,9),nu(40,`po-skeleton`,21)(41,`po-skeleton`,22),wg(),jc(42,`div`,12),nu(43,`po-skeleton`,23)(44,`po-skeleton`,24),wg()(),jc(45,`div`,15),nu(46,`po-skeleton`,25),wg()()()())},dependencies:[fae,Wee],styles:[`.credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}`],changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-credit-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton - Credit Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css`),wg(),jc(25,`pre`,11),lO(26,`.credit-card {
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
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-skeleton-credit-card`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Le,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,se],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-widget-card`]],standalone:!1,decls:17,vars:0,consts:[[1,`po-row`],[1,`po-sm-12`,`po-md-6`,`po-lg-4`,`po-xl-3`],[1,`widget-card`],[1,`po-row`,`widget-header`],[1,`po-sm-7`,`po-md-7`],[`p-variant`,`text`,`p-height`,`32px`],[1,`po-sm-3`,`po-md-3`],[`p-variant`,`text`,`p-width`,`80px`,`p-height`,`32px`],[1,`po-sm-2`,`po-md-2`,`widget-icon`],[`p-variant`,`square`,`p-size`,`sm`],[1,`po-row`,`widget-content`],[1,`widget-spacer`],[1,`po-row`,`widget-footer`],[1,`po-sm-12`,`po-md-12`,`footer-button`],[`p-variant`,`rectangle`,`p-size`,`md`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3)(4,`div`,4),nu(5,`po-skeleton`,5),wg(),jc(6,`div`,6),nu(7,`po-skeleton`,7),wg(),jc(8,`div`,8),nu(9,`po-skeleton`,9),wg()(),jc(10,`div`,10)(11,`div`,4),nu(12,`po-skeleton`,5),wg()(),nu(13,`div`,11),jc(14,`div`,12)(15,`div`,13),nu(16,`po-skeleton`,14),wg()()()()())},dependencies:[fae,Wee],styles:[`.widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-widget-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton - Widget Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css`),wg(),jc(25,`pre`,11),lO(26,`.widget-card {
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
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-skeleton-widget-card`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-user-profile`]],standalone:!1,decls:20,vars:0,consts:[[1,`po-row`],[`p-title`,`User Profile`,1,`po-md-6`],[1,`profile-card`],[1,`profile-picture`],[`p-variant`,`circle`,`p-size`,`xl`,`p-aria-label`,`Carregando perfil do usuário`],[`p-variant`,`text`,`p-width`,`150px`],[`p-variant`,`text`,`p-width`,`200px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[1,`profile-stats`],[1,`stat`],[`p-variant`,`text`,`p-width`,`40px`],[`p-variant`,`text`,`p-width`,`60px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`70px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`65px`,`p-size`,`sm`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),nu(4,`po-skeleton`,4),wg(),nu(5,`po-skeleton`,5)(6,`po-skeleton`,6)(7,`po-skeleton`,7)(8,`po-skeleton`,8)(9,`po-skeleton`,9),jc(10,`div`,10)(11,`div`,11),nu(12,`po-skeleton`,12)(13,`po-skeleton`,13),wg(),jc(14,`div`,11),nu(15,`po-skeleton`,12)(16,`po-skeleton`,14),wg(),jc(17,`div`,11),nu(18,`po-skeleton`,12)(19,`po-skeleton`,15),wg()()()()())},dependencies:[fae,Wee],styles:[`.profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var We=o=>({"docs-sample-code-tabs":o});var he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-user-profile-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton - User Profile`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css`),wg(),jc(25,`pre`,11),lO(26,`.profile-card {
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
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-skeleton-user-profile`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,We,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ue],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-social-post`]],standalone:!1,decls:35,vars:0,consts:[[1,`po-row`],[`p-height`,`550`,1,`po-md-6`],[1,`post-card`],[1,`post-header`],[`p-variant`,`circle`,`p-size`,`sm`,`p-aria-label`,`Carregando post de rede social`],[1,`post-header-text`],[`p-variant`,`text`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`300px`],[1,`post-actions`],[`p-variant`,`rectangle`,`p-size`,`sm`,`p-width`,`30px`,`p-height`,`30px`],[`p-variant`,`text`,`p-width`,`120px`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`85%`],[`p-variant`,`text`,`p-width`,`60%`],[`p-variant`,`circle`,`p-size`,`sm`],[`p-variant`,`rectangle`,`p-height`,`250px`],[`p-variant`,`text`,`p-width`,`140px`],[`p-variant`,`text`,`p-width`,`90%`],[`p-variant`,`text`,`p-width`,`70%`],[`p-variant`,`text`,`p-width`,`65%`],[`p-variant`,`text`,`p-width`,`50%`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`div`,3),nu(4,`po-skeleton`,4),jc(5,`div`,5),nu(6,`po-skeleton`,6)(7,`po-skeleton`,6),wg()(),nu(8,`po-skeleton`,7),jc(9,`div`,8),nu(10,`po-skeleton`,9)(11,`po-skeleton`,9)(12,`po-skeleton`,9),wg(),nu(13,`po-skeleton`,10)(14,`po-skeleton`,11)(15,`po-skeleton`,12)(16,`po-skeleton`,13),wg()(),jc(17,`po-widget`,1)(18,`div`,2)(19,`div`,3),nu(20,`po-skeleton`,14),jc(21,`div`,5),nu(22,`po-skeleton`,6)(23,`po-skeleton`,6),wg()(),nu(24,`po-skeleton`,15),jc(25,`div`,8),nu(26,`po-skeleton`,9)(27,`po-skeleton`,9)(28,`po-skeleton`,9),wg(),nu(29,`po-skeleton`,16)(30,`po-skeleton`,11)(31,`po-skeleton`,17)(32,`po-skeleton`,18)(33,`po-skeleton`,19)(34,`po-skeleton`,20),wg()()())},dependencies:[fae,Wee],styles:[`.post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-social-post-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton - Social Post`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css`),wg(),jc(25,`pre`,11),lO(26,`.post-card {
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
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-skeleton-social-post`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ge],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-article`]],standalone:!1,decls:15,vars:0,consts:[[1,`po-row`],[`p-height`,`380`,`p-title`,`Latest Article`,1,`po-md-6`],[1,`article-card`],[`p-variant`,`rectangle`,`p-height`,`150px`,`p-aria-label`,`Carregando artigo`],[`p-variant`,`text`],[`p-variant`,`text`,`p-width`,`90%`],[1,`article-author`],[`p-variant`,`circle`,`p-size`,`sm`],[1,`author-details`],[`p-variant`,`text`,`p-width`,`100px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`80px`,`p-size`,`sm`],[`p-variant`,`text`,`p-width`,`75%`],[`p-variant`,`text`,`p-width`,`80px`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),nu(3,`po-skeleton`,3)(4,`po-skeleton`,4)(5,`po-skeleton`,5),jc(6,`div`,6),nu(7,`po-skeleton`,7),jc(8,`div`,8),nu(9,`po-skeleton`,9)(10,`po-skeleton`,10),wg()(),nu(11,`po-skeleton`,4)(12,`po-skeleton`,4)(13,`po-skeleton`,11)(14,`po-skeleton`,12),wg()()())},dependencies:[fae,Wee],styles:[`.article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--%NS%margin-bottom: 0}`],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-article-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Skeleton - Article`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-skeleton-article/sample-po-skeleton-article.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-skeleton-article/sample-po-skeleton-article.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-skeleton-article/sample-po-skeleton-article.component.css`),wg(),jc(25,`pre`,11),lO(26,`.article-card {
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
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-skeleton-article`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ne,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-skeleton-doc`]],standalone:!1,decls:733,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonAnimation`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`language-html`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonSize`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonType`],[`pan`,``,1,`docs-api-property-type`,`PoSkeletonVariant`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoSkeletonModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-skeleton.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoSkeletonComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-skeleton`),wg(),lO(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),wg(),jc(18,`p`),lO(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),wg(),jc(20,`h4`),lO(21,`Tokens customizáveis`),wg(),jc(22,`p`),lO(23,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(24,`blockquote`)(25,`p`),lO(26,`Para maiores informações, acesse o guia `),jc(27,`a`,6),lO(28,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(29,`.`),wg()(),jc(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),lO(34,`Propriedade`),wg(),jc(35,`th`),lO(36,`Descrição`),wg(),jc(37,`th`),lO(38,`Valor Padrão`),wg()()(),jc(39,`tbody`)(40,`tr`)(41,`td`)(42,`strong`),lO(43,`Cores`),wg()(),nu(44,`td`)(45,`td`),wg(),jc(46,`tr`)(47,`td`)(48,`code`),lO(49,`--color`),wg()(),jc(50,`td`),lO(51,`Cor de fundo do skeleton (tipo normal)`),wg(),jc(52,`td`)(53,`code`),lO(54,`var(--color-neutral-light-20)`),wg()()(),jc(55,`tr`)(56,`td`)(57,`code`),lO(58,`--color-primary`),wg()(),jc(59,`td`),lO(60,`Cor de fundo do skeleton (tipo primary)`),wg(),jc(61,`td`)(62,`code`),lO(63,`var(--color-neutral-mid-40)`),wg()()(),jc(64,`tr`)(65,`td`)(66,`code`),lO(67,`--color-content`),wg()(),jc(68,`td`),lO(69,`Cor de fundo do skeleton (tipo content)`),wg(),jc(70,`td`)(71,`code`),lO(72,`var(--color-neutral-light-00)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`code`),lO(76,`--shimmer-highlight`),wg()(),jc(77,`td`),lO(78,`Cor de destaque do shimmer (tipo normal)`),wg(),jc(79,`td`)(80,`code`),lO(81,`var(--color-neutral-light-30)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),lO(85,`--shimmer-highlight-primary`),wg()(),jc(86,`td`),lO(87,`Cor de destaque do shimmer (tipo primary)`),wg(),jc(88,`td`)(89,`code`),lO(90,`var(--color-neutral-light-20)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),lO(94,`--shimmer-highlight-content`),wg()(),jc(95,`td`),lO(96,`Cor de destaque do shimmer (tipo content)`),wg(),jc(97,`td`)(98,`code`),lO(99,`var(--color-neutral-light-05)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`strong`),lO(103,`Espaçamento`),wg()(),nu(104,`td`)(105,`td`),wg(),jc(106,`tr`)(107,`td`)(108,`code`),lO(109,`--margin-bottom`),wg()(),jc(110,`td`),lO(111,`Margem inferior do skeleton`),wg(),jc(112,`td`)(113,`code`),lO(114,`var(--spacing-xs)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`strong`),lO(118,`Bordas`),wg()(),nu(119,`td`)(120,`td`),wg(),jc(121,`tr`)(122,`td`)(123,`code`),lO(124,`--border-radius`),wg()(),jc(125,`td`),lO(126,`Raio da borda do skeleton`),wg(),jc(127,`td`)(128,`code`),lO(129,`var(--border-radius-md)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),lO(133,`--border-radius-text`),wg()(),jc(134,`td`),lO(135,`Raio da borda para a variante text`),wg(),jc(136,`td`)(137,`code`),lO(138,`var(--border-radius-md)`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),lO(142,`--border-radius-primary`),wg()(),jc(143,`td`),lO(144,`Raio da borda do skeleton (tipo primary)`),wg(),jc(145,`td`)(146,`code`),lO(147,`var(--border-radius-md)`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),lO(151,`--border-radius-content`),wg()(),jc(152,`td`),lO(153,`Raio da borda do skeleton (tipo content)`),wg(),jc(154,`td`)(155,`code`),lO(156,`var(--border-radius-lg)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`strong`),lO(160,`Transições`),wg()(),nu(161,`td`)(162,`td`),wg(),jc(163,`tr`)(164,`td`)(165,`code`),lO(166,`--transition-property`),wg()(),jc(167,`td`),lO(168,`Propriedade CSS da transição`),wg(),jc(169,`td`)(170,`code`),lO(171,`all`),wg()()(),jc(172,`tr`)(173,`td`)(174,`code`),lO(175,`--transition-duration`),wg()(),jc(176,`td`),lO(177,`Duração da transição de cor`),wg(),jc(178,`td`)(179,`code`),lO(180,`var(--duration-moderate)`),wg()()(),jc(181,`tr`)(182,`td`)(183,`code`),lO(184,`--transition-timing`),wg()(),jc(185,`td`),lO(186,`Função de temporização da transição/animação`),wg(),jc(187,`td`)(188,`code`),lO(189,`var(--timing-continuous)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`strong`),lO(193,`Animações`),wg()(),nu(194,`td`)(195,`td`),wg(),jc(196,`tr`)(197,`td`)(198,`code`),lO(199,`--animation-duration-pulse`),wg()(),jc(200,`td`),lO(201,`Duração da animação de pulsação`),wg(),jc(202,`td`)(203,`code`),lO(204,`var(--duration-very-slow)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),lO(208,`--animation-duration-shimmer`),wg()(),jc(209,`td`),lO(210,`Duração da animação de brilho deslizante`),wg(),jc(211,`td`)(212,`code`),lO(213,`var(--duration-ultra-slow)`),wg()()()()()(),jc(214,`div`,7)(215,`h4`,8),lO(216,`Seletor`),wg(),jc(217,`pre`,9),lO(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),wg()(),jc(219,`h4`,10),lO(220,`Propriedades`),wg(),jc(221,`table`,11)(222,`tr`,12)(223,`th`,13),lO(224,`Nome`),wg(),jc(225,`th`,13),lO(226,`Tipo`),wg(),jc(227,`th`,13),lO(228,`Padrão`),wg(),jc(229,`th`,13),lO(230,`Descrição`),wg()(),jc(231,`tr`,14)(232,`td`,15)(233,`div`,16)(234,`span`,17),lO(235,` p-animation`),nu(236,`br`),wg()()(),jc(237,`td`,18)(238,`code`,19),lO(239,`PoSkeletonAnimation`),wg()(),jc(240,`td`,20)(241,`p`)(242,`code`),lO(243,`shimmer`),wg()()(),jc(244,`td`,21)(245,`em`)(246,`strong`),lO(247,`(opcional)`),wg()(),jc(248,`p`),lO(249,`Define o tipo de animação do skeleton.`),wg(),jc(250,`p`),lO(251,`Valores válidos:`),wg(),jc(252,`ul`)(253,`li`)(254,`code`),lO(255,`none`),wg(),lO(256,`: Sem animação`),wg(),jc(257,`li`)(258,`code`),lO(259,`pulse`),wg(),lO(260,`: Animação de pulsação`),wg(),jc(261,`li`)(262,`code`),lO(263,`shimmer`),wg(),lO(264,`: Animação de brilho deslizante`),wg()()()(),jc(265,`tr`,14)(266,`td`,15)(267,`div`,16)(268,`span`,17),lO(269,` p-aria-label`),nu(270,`br`),wg()()(),jc(271,`td`,18)(272,`code`,22),lO(273,`string`),wg()(),jc(274,`td`,20),lO(275,`-`),wg(),jc(276,`td`,21)(277,`em`)(278,`strong`),lO(279,`(opcional)`),wg()(),jc(280,`p`),lO(281,`Define a descrição acessível do conteúdo que está sendo carregado.`),wg(),jc(282,`p`),lO(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),wg(),jc(284,`p`)(285,`strong`),lO(286,`Quando usar:`),wg()(),jc(287,`ul`)(288,`li`),lO(289,`Use em `),jc(290,`strong`),lO(291,`skeletons únicos`),wg(),lO(292,` ou no `),jc(293,`strong`),lO(294,`primeiro skeleton de um grupo`),wg(),lO(295,` com descrição contextual`),wg(),jc(296,`li`),lO(297,`Evite usar em múltiplos skeletons dentro da mesma área sem contexto, para não causar repetição excessiva`),wg()(),jc(298,`p`)(299,`strong`),lO(300,`Exemplos de uso:`),wg()(),jc(301,`pre`)(302,`code`,23),lO(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),wg()(),jc(304,`blockquote`)(305,`p`)(306,`strong`),lO(307,`Boas práticas de acessibilidade:`),wg()(),jc(308,`ul`)(309,`li`),lO(310,`Forneça contexto específico na label para que os usuários entendam o que está carregando`),wg()()(),jc(311,`blockquote`)(312,`ul`)(313,`li`),lO(314,`Em casos complexos, considere usar um único `),jc(315,`code`),lO(316,`<div role="status">`),wg(),lO(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),wg()()()()(),jc(318,`tr`,14)(319,`td`,15)(320,`div`,16)(321,`span`,17),lO(322,` p-border-radius`),nu(323,`br`),wg()()(),jc(324,`td`,18)(325,`code`,22),lO(326,`string`),wg()(),jc(327,`td`,20),lO(328,`-`),wg(),jc(329,`td`,21)(330,`em`)(331,`strong`),lO(332,`(opcional)`),wg()(),jc(333,`p`),lO(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(335,`p`),lO(336,`Esta propriedade sobrescreve o border-radius padrão de cada variante.`),wg()()(),jc(337,`tr`,14)(338,`td`,15)(339,`div`,16)(340,`span`,17),lO(341,` p-height`),nu(342,`br`),wg()()(),jc(343,`td`,18)(344,`code`,22),lO(345,`string`),wg()(),jc(346,`td`,20),lO(347,`-`),wg(),jc(348,`td`,21)(349,`em`)(350,`strong`),lO(351,`(opcional)`),wg()(),jc(352,`p`),lO(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(354,`p`),lO(355,`Quando definido, sobrescreve a altura padrão da variante.`),wg()()(),jc(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),lO(360,` p-size`),nu(361,`br`),wg()()(),jc(362,`td`,18)(363,`code`,24),lO(364,`PoSkeletonSize`),wg()(),jc(365,`td`,20)(366,`p`)(367,`code`),lO(368,`md`),wg()()(),jc(369,`td`,21)(370,`em`)(371,`strong`),lO(372,`(opcional)`),wg()(),jc(373,`p`),lO(374,`Define o tamanho do skeleton para as variantes pré-definidas (`),jc(375,`code`),lO(376,`rectangle`),wg(),lO(377,`, `),jc(378,`code`),lO(379,`square`),wg(),lO(380,`, `),jc(381,`code`),lO(382,`circle`),wg(),lO(383,`).`),wg(),jc(384,`p`),lO(385,`Valores válidos:`),wg(),jc(386,`ul`)(387,`li`)(388,`code`),lO(389,`xs`),wg(),lO(390,`: Extra pequeno (24px para square/circle, 72px x 24px para rectangle)`),wg(),jc(391,`li`)(392,`code`),lO(393,`sm`),wg(),lO(394,`: Pequeno (32px para square/circle, 96px x 32px para rectangle)`),wg(),jc(395,`li`)(396,`code`),lO(397,`md`),wg(),lO(398,`: Médio (48px para square/circle, 144px x 48px para rectangle)`),wg(),jc(399,`li`)(400,`code`),lO(401,`lg`),wg(),lO(402,`: Grande (64px para square/circle, 192px x 64px para rectangle)`),wg(),jc(403,`li`)(404,`code`),lO(405,`xl`),wg(),lO(406,`: Extra grande (96px para square/circle, 288px x 96px para rectangle)`),wg(),jc(407,`li`)(408,`code`),lO(409,`2xl`),wg(),lO(410,`: Extra extra grande (144px para square/circle, 432px x 144px para rectangle)`),wg()(),jc(411,`p`),lO(412,`Esta propriedade é ignorada quando `),jc(413,`code`),lO(414,`p-width`),wg(),lO(415,` ou `),jc(416,`code`),lO(417,`p-height`),wg(),lO(418,` são definidos explicitamente.`),wg()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),lO(423,` p-type`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,25),lO(427,`PoSkeletonType`),wg()(),jc(428,`td`,20)(429,`p`)(430,`code`),lO(431,`normal`),wg()()(),jc(432,`td`,21)(433,`em`)(434,`strong`),lO(435,`(opcional)`),wg()(),jc(436,`p`),lO(437,`Define o tipo visual do skeleton, alterando sua cor de fundo.`),wg(),jc(438,`p`),lO(439,`Valores válidos:`),wg(),jc(440,`ul`)(441,`li`)(442,`code`),lO(443,`normal`),wg(),lO(444,`: Cor neutra clara (padrão)`),wg(),jc(445,`li`)(446,`code`),lO(447,`primary`),wg(),lO(448,`: Cor neutra média`),wg(),jc(449,`li`)(450,`code`),lO(451,`content`),wg(),lO(452,`: Fundo branco`),wg()()()(),jc(453,`tr`,14)(454,`td`,15)(455,`div`,16)(456,`span`,17),lO(457,` p-variant`),nu(458,`br`),wg()()(),jc(459,`td`,18)(460,`code`,26),lO(461,`PoSkeletonVariant`),wg()(),jc(462,`td`,20)(463,`p`)(464,`code`),lO(465,`text`),wg()()(),jc(466,`td`,21)(467,`em`)(468,`strong`),lO(469,`(opcional)`),wg()(),jc(470,`p`),lO(471,`Define a variante visual do skeleton.`),wg(),jc(472,`p`),lO(473,`Valores válidos:`),wg(),jc(474,`ul`)(475,`li`)(476,`code`),lO(477,`text`),wg(),lO(478,`: Simula uma linha de texto (altura padrão: 1em)`),wg(),jc(479,`li`)(480,`code`),lO(481,`rectangle`),wg(),lO(482,`: Forma retangular (proporção 3:1 por padrão)`),wg(),jc(483,`li`)(484,`code`),lO(485,`square`),wg(),lO(486,`: Forma quadrada (largura e altura iguais)`),wg(),jc(487,`li`)(488,`code`),lO(489,`circle`),wg(),lO(490,`: Forma circular (largura e altura iguais)`),wg()()()(),jc(491,`tr`,14)(492,`td`,15)(493,`div`,16)(494,`span`,17),lO(495,` p-width`),nu(496,`br`),wg()()(),jc(497,`td`,18)(498,`code`,22),lO(499,`string`),wg()(),jc(500,`td`,20)(501,`p`)(502,`code`),lO(503,`100%`),wg(),lO(504,` para variante `),jc(505,`code`),lO(506,`text`),wg(),lO(507,`, tamanho baseado em `),jc(508,`code`),lO(509,`p-size`),wg(),lO(510,` para outras variantes`),wg()(),jc(511,`td`,21)(512,`em`)(513,`strong`),lO(514,`(opcional)`),wg()(),jc(515,`p`),lO(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),wg(),jc(517,`p`),lO(518,`Quando definido, sobrescreve a largura padrão da variante.`),wg()()()(),jc(519,`h3`),lO(520,`Enums`),wg(),jc(521,`h4`,4)(522,`code`,5),lO(523,`PoSkeletonAnimation`),wg()(),jc(524,`div`,2)(525,`p`),lO(526,`Define os tipos de animação do componente `),jc(527,`code`),lO(528,`po-skeleton`),wg(),lO(529,`.`),wg()(),jc(530,`h4`,10),lO(531,`Propriedades`),wg(),jc(532,`table`,11)(533,`tr`,12)(534,`th`,13),lO(535,`Nome`),wg(),jc(536,`th`,13),lO(537,`Descrição`),wg()(),jc(538,`tr`,14)(539,`td`,15)(540,`div`,16)(541,`span`,17),lO(542,` none`),nu(543,`br`),wg()()(),jc(544,`td`,21)(545,`p`),lO(546,`Sem animação`),wg()()(),jc(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),lO(551,` pulse`),nu(552,`br`),wg()()(),jc(553,`td`,21)(554,`p`),lO(555,`Animação de pulsação`),wg()()(),jc(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),lO(560,` shimmer`),nu(561,`br`),wg()()(),jc(562,`td`,21)(563,`p`),lO(564,`Animação de brilho deslizante`),wg()()()(),jc(565,`h4`,4)(566,`code`,5),lO(567,`PoSkeletonSize`),wg()(),jc(568,`div`,2)(569,`p`),lO(570,`Define os tamanhos disponíveis para o componente `),jc(571,`code`),lO(572,`po-skeleton`),wg(),lO(573,`.`),wg()(),jc(574,`h4`,10),lO(575,`Propriedades`),wg(),jc(576,`table`,11)(577,`tr`,12)(578,`th`,13),lO(579,`Nome`),wg(),jc(580,`th`,13),lO(581,`Descrição`),wg()(),jc(582,`tr`,14)(583,`td`,15)(584,`div`,16)(585,`span`,17),lO(586,` xs`),nu(587,`br`),wg()()(),jc(588,`td`,21)(589,`p`),lO(590,`Tamanho extra pequeno`),wg()()(),jc(591,`tr`,14)(592,`td`,15)(593,`div`,16)(594,`span`,17),lO(595,` sm`),nu(596,`br`),wg()()(),jc(597,`td`,21)(598,`p`),lO(599,`Tamanho pequeno`),wg()()(),jc(600,`tr`,14)(601,`td`,15)(602,`div`,16)(603,`span`,17),lO(604,` md`),nu(605,`br`),wg()()(),jc(606,`td`,21)(607,`p`),lO(608,`Tamanho médio`),wg()()(),jc(609,`tr`,14)(610,`td`,15)(611,`div`,16)(612,`span`,17),lO(613,` lg`),nu(614,`br`),wg()()(),jc(615,`td`,21)(616,`p`),lO(617,`Tamanho grande`),wg()()(),jc(618,`tr`,14)(619,`td`,15)(620,`div`,16)(621,`span`,17),lO(622,` xl`),nu(623,`br`),wg()()(),jc(624,`td`,21)(625,`p`),lO(626,`Tamanho extra grande`),wg()()(),jc(627,`tr`,14)(628,`td`,15)(629,`div`,16)(630,`span`,17),lO(631,` xxl`),nu(632,`br`),wg()()(),jc(633,`td`,21)(634,`p`),lO(635,`Tamanho extra extra grande`),wg()()()(),jc(636,`h4`,4)(637,`code`,5),lO(638,`PoSkeletonType`),wg()(),jc(639,`div`,2)(640,`p`),lO(641,`Define os tipos visuais disponíveis para o componente `),jc(642,`code`),lO(643,`po-skeleton`),wg(),lO(644,`.`),wg()(),jc(645,`h4`,10),lO(646,`Propriedades`),wg(),jc(647,`table`,11)(648,`tr`,12)(649,`th`,13),lO(650,`Nome`),wg(),jc(651,`th`,13),lO(652,`Descrição`),wg()(),jc(653,`tr`,14)(654,`td`,15)(655,`div`,16)(656,`span`,17),lO(657,` normal`),nu(658,`br`),wg()()(),jc(659,`td`,21)(660,`p`),lO(661,`Tipo padrão com cor neutra clara`),wg()()(),jc(662,`tr`,14)(663,`td`,15)(664,`div`,16)(665,`span`,17),lO(666,` primary`),nu(667,`br`),wg()()(),jc(668,`td`,21)(669,`p`),lO(670,`Tipo primário com cor neutra média`),wg()()(),jc(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),lO(675,` content`),nu(676,`br`),wg()()(),jc(677,`td`,21)(678,`p`),lO(679,`Tipo de conteúdo com fundo branco`),wg()()()(),jc(680,`h4`,4)(681,`code`,5),lO(682,`PoSkeletonVariant`),wg()(),jc(683,`div`,2)(684,`p`),lO(685,`Define as variantes visuais do componente `),jc(686,`code`),lO(687,`po-skeleton`),wg(),lO(688,`.`),wg()(),jc(689,`h4`,10),lO(690,`Propriedades`),wg(),jc(691,`table`,11)(692,`tr`,12)(693,`th`,13),lO(694,`Nome`),wg(),jc(695,`th`,13),lO(696,`Descrição`),wg()(),jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),lO(701,` text`),nu(702,`br`),wg()()(),jc(703,`td`,21)(704,`p`),lO(705,`Variante para simular texto`),wg()()(),jc(706,`tr`,14)(707,`td`,15)(708,`div`,16)(709,`span`,17),lO(710,` rectangle`),nu(711,`br`),wg()()(),jc(712,`td`,21)(713,`p`),lO(714,`Variante retangular (largura maior que altura)`),wg()()(),jc(715,`tr`,14)(716,`td`,15)(717,`div`,16)(718,`span`,17),lO(719,` square`),nu(720,`br`),wg()()(),jc(721,`td`,21)(722,`p`),lO(723,`Variante quadrada (largura igual à altura)`),wg()()(),jc(724,`tr`,14)(725,`td`,15)(726,`div`,16)(727,`span`,17),lO(728,` circle`),nu(729,`br`),wg()()(),jc(730,`td`,21)(731,`p`),lO(732,`Variante circular`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Qe(o,I){if(o&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let a=Fx();return __(a.changeTab(`web`))}),nu(1,`sample-po-skeleton-basic-view`)(2,`sample-po-skeleton-labs-view`)(3,`sample-po-skeleton-credit-card-view`)(4,`sample-po-skeleton-widget-card-view`)(5,`sample-po-skeleton-user-profile-view`)(6,`sample-po-skeleton-social-post-view`)(7,`sample-po-skeleton-article-view`),wg()}if(o&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var Je=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Skeleton`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Qe,8,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(4,`sample-po-skeleton-doc`),wg()()()),l&2&&(UE(`p-actions`,a.actions),rg(2),Dx(a.hidePoWebSample?-1:2),rg(),UE(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,le,re,de,ce,he,Se,ve,Ce],encapsulation:2,changeDetection:1})}return o})()}];var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[I1.forChild(Je),I1]})}return o})();var Bt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[M,be]})}return o})();export{Bt as DocPoSkeletonModule};