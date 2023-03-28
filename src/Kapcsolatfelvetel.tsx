import { Component } from "react";


interface kapcsolatStatus{
    nev: string;
    datum: Date;
    leiras: string
}

export class KapcsolatFelvetel extends Component{

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       // if(!nev || !datum || !leiras){
            alert('Minden mezőt ki kell tölteni')
            return
        }

    
    render(){
        return <div>
           <div className="top-row" /*onSubmit={this.handleSubmit}*/>
            <div className="form-group">
                <label htmlFor="">Név: </label>
                <input type="text" /*value={nev}*/ className="form-control" required autoComplete='off' placeholder="Név" /*onChange={{e => setName(e.targer.value)}}*/ />
            </div>

            <div className="form-group">
                <label htmlFor="">Rendezvény dátuma: </label>
                <input type="date" /*value={datum}*/ className="form-control" required autoComplete='off' placeholder="" />
            </div>

            <div className="form-group">
                <label htmlFor="">Leírás: </label>
                <textarea name="Leirás" /*value={leiras}*/ id="szoveg" placeholder="Leirás" cols={30} rows={10}></textarea>
            </div>
           </div>
        </div>
    }
}