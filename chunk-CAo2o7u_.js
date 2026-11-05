import{Ai as Zn,Ia as rg,Ka as vx,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Sa as nu,Tr as Fx,Ua as v_,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ha as lO,ir as Ax,ln as lre,oi as Sn,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var k=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:94,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoTableColumnTemplateDirective`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),wg(),jc(15,`p`),lO(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),wg(),jc(17,`p`),lO(18,`Retorno:`),wg(),jc(19,`ul`)(20,`li`),lO(21,`value: valor referente ao conteúdo da linha corrente.`),wg()(),jc(22,`p`),lO(23,`Modo de uso:`),wg(),jc(24,`pre`)(25,`code`,6),lO(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),wg()(),jc(27,`blockquote`)(28,`p`),lO(29,`No exemplo acima, todas as células correspondentes a coluna `),jc(30,`code`),lO(31,`status`),wg(),lO(32,` terão o conteúdo alterado para `),jc(33,`code`),lO(34,"<h1>${value}</h1>"),wg(),lO(35,`,
sendo que `),jc(36,`code`),lO(37,`value`),wg(),lO(38,` refere-se ao conteúdo da linha.`),wg()(),jc(39,`pre`)(40,`code`,6),lO(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),wg()(),jc(42,`blockquote`)(43,`p`),lO(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),wg()(),jc(45,`p`),lO(46,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),wg(),jc(47,`pre`)(48,`code`,7),lO(49,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),wg()(),jc(50,`blockquote`)(51,`p`),lO(52,`Observação: Sempre adicionar o `),jc(53,`strong`),lO(54,`type`),wg(),lO(55,` da coluna que deseja manipular com a directiva como `),jc(56,`code`),lO(57,`columnTemplate`),wg()()()(),jc(58,`div`,8)(59,`h4`,9),lO(60,`Seletor`),wg(),jc(61,`pre`,10),lO(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),wg()(),jc(63,`h4`,11),lO(64,`Propriedades`),wg(),jc(65,`table`,12)(66,`tr`,13)(67,`th`,14),lO(68,`Nome`),wg(),jc(69,`th`,14),lO(70,`Tipo`),wg(),jc(71,`th`,14),lO(72,`Padrão`),wg(),jc(73,`th`,14),lO(74,`Descrição`),wg()(),jc(75,`tr`,15)(76,`td`,16)(77,`div`,17)(78,`span`,18),lO(79,` p-property`),nu(80,`br`),wg()()(),jc(81,`td`,19)(82,`code`,20),lO(83,`string`),wg()(),jc(84,`td`,21),lO(85,`-`),wg(),jc(86,`td`,22)(87,`em`)(88,`strong`),lO(89,`(opcional)`),wg()(),jc(90,`p`),lO(91,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),wg(),jc(92,`p`),lO(93,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function I(n,j){if(n&1){let i=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(i);let l=Fx();return __(l.changeTab(`web`))}),wg()}if(n&2){let i=Fx();UE(`p-active`,i.activeTab===`web`)}}var N=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,I,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-table-column-template-doc`),wg()()()),a&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Vze,lre,ure,k],encapsulation:2,changeDetection:1})}return n})()}];var A=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[I1.forChild(N),I1]})}return n})();var X=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[M,A]})}return n})();export{X as DocPoTableColumnTemplateModule};