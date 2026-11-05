import{Da as pe,Fa as rg,Ga as vx,Ha as v_,Ii as b,Mr as I1,Ra as ue,Xt as ere,Ya as wg,ai as Sn,gr as Dx,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var I=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(i,l){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoTableCellTemplateDirective`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),wg(),jc(15,`p`),lO(16,`Em seu uso, deve-se apenas adicionar a diretiva `),jc(17,`strong`),lO(18,`p-table-cell-template`),wg(),lO(19,` à tag `),jc(20,`code`),lO(21,`ng-template`),wg(),lO(22,`.`),wg(),jc(23,`p`),lO(24,`Retorno:`),wg(),jc(25,`ul`)(26,`li`)(27,`code`),lO(28,`column`),wg(),lO(29,`: conteúdo da coluna corrente.`),wg(),jc(30,`li`)(31,`code`),lO(32,`row`),wg(),lO(33,`: conteúdo da linha corrente`),wg()(),jc(34,`p`),lO(35,`Modo de uso:`),wg(),jc(36,`pre`)(37,`code`),lO(38,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),wg()(),jc(39,`blockquote`)(40,`p`),lO(41,`No exemplo acima, o usuário tem como retorno `),jc(42,`code`),lO(43,`row`),wg(),lO(44,` e a `),jc(45,`code`),lO(46,`column`),wg(),lO(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),wg()(),jc(48,`p`),lO(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),wg(),jc(50,`pre`)(51,`code`),lO(52,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),wg()(),jc(53,`blockquote`)(54,`p`),lO(55,`Observação: Sempre adicionar o `),jc(56,`strong`),lO(57,`type`),wg(),lO(58,` da coluna que deseja manipular com a directiva como `),jc(59,`code`),lO(60,`cellTemplate`),wg()()()(),jc(61,`div`,6)(62,`h4`,7),lO(63,`Seletor`),wg(),jc(64,`pre`,8),lO(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),wg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function N(n,R){if(n&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let l=Fx();return __(l.changeTab(`web`))}),wg()}if(n&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,l){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,N,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-table-cell-template-doc`),wg()()()),i&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,I],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[I1.forChild(q),I1]})}return n})();var X=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[M,k]})}return n})();export{X as DocPoTableCellTemplateModule};