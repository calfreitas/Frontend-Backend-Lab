// O cartão deve conter:
// Foto do usuário (pode usar uma URL qualquer).
// Nome.
// Cargo ou função.
// Uma breve descrição.
// Um botão “Seguir”.

// Os componentes em TSX precisam ter uma interface e retornar um XML necessariamente. 
import './profileCard.css'

function ProfileCardComponent(){
    return (
        <div className="containerBox">
            <div className="profileDataBox">
                <div className="profileDataField">
                    <p>teste</p>
                </div>
                
                <div className="profileDataField">
                    <p>teste</p>
                </div>
                
                <div className="profileDataField">
                    <p>teste</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardComponent;