import { Col, Container, Row } from "react-bootstrap";
import {Header} from '../src/components/HeaderComp/Header'
import './Information.css';
import szello from '../../love/images/szello.jpg';
import villam from '../../love/images/villam.jpg';
import csillag from '../../love/images/csillag.jpg';
import herkules from '../../love/images/herkules.jpg';
import tunder from '../../love/images/tunder.jpg';
import hopihe from '../../love/images/hopihe.jpg';
import zeusz from '../../love/images/zeusz.jpg';
import pegazus from '../../love/images/pegazus.jpg';
import nimrod from '../../love/images/nimrod.jpg';

export function Information() {
    return (
        <>
            <Header />
            <Container fluid className="full-width">
                <Row>
                    <Col className="text-white text-center bg-dark">
                        <h2>További információk a lovakról</h2>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs={6} md={3} className="text-center">
                        <img src={szello} alt="Szellő" />
                        <h3>Szellő</h3>
                        <p className="text-muted">A Szellő nevű ló a Lipicai fajtába tartozik, amely híres a gyönyörű fehér színéről és kiváló díjlovaglási képességeiről.</p>
                        <p className="text-muted">A díjlovaglásban kiemelkedő eredményeket ért el, és rendszeresen szerepel versenyeken, ahol magasra értékeli teljesítményét.</p>
                        <p className="text-muted">Nemcsak a stílusos megjelenése miatt keresett, hanem azért is, mert jómagatartású és könnyen kezelhető ló, akár tapasztalt, akár kezdő lovasok számára.</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <img src={villam} alt="Villám" />
                        <h3>Villám</h3>
                        <p className="text-muted">A Villám nevű ló az Arab telivér fajtába tartozik, amely kiválóan alkalmas távlovaglásra.</p>
                        <p className="text-muted">Kimagasló teljesítményt nyújt távlovaglásban, és gyakran részt vesz versenyeken, ahol remek eredményeket ér el.</p>
                        <p className="text-muted">Kiváló tulajdonságai és könnyű kezelhetősége miatt kedvelt mind a tapasztalt, mind a kezdő lovasok körében.</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <img src={csillag} alt="Csillag" />
                        <h3>Csillag</h3>
                        <p className="text-muted">A Csillag nevű ló a Fjord fajtába tartozik, amely ideális hobbiló.</p>
                        <p className="text-muted">Bár a hobbi lovaglásban élvezi a legjobban az időt, de képes alkalmazkodni más tevékenységekhez is.</p>
                        <p className="text-muted">Barátságos és könnyen kezelhető, így a család kedvence lehet mind a gyerekek, mind a felnőttek számára.</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <img src={herkules} alt="Herkules" className="horse-image" />
                        <h3>Herkules</h3>
                        <p className="text-muted">A Herkules nevű ló a Shire fajtába tartozik, amely kiválóan alkalmas mezőgazdasági munkákra.</p>
                        <p className="text-muted">Erős és hatalmas testalkata miatt ideális vontató lónak számít, de egyaránt alkalmazkodik más munkafajtákhoz is.</p>
                        <p className="text-muted">Kiváló munkamorálja és könnyen kezelhetősége miatt sok gazda választja a mezőgazdasági munkáihoz.</p>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs={6} md={3} className="text-center">
                        <img src={tunder} alt="Tündér" className="horse-image" />
                        <h3>Tündér</h3>
                        <p className="text-muted">A Tündér nevű ló a Connemara fajtába tartozik, amely kiválóan alkalmas ugró lovak közé.</p>
                        <p className="text-muted">Kiváló ugróképessége és kiegyensúlyozott jellemzése miatt népszerű választás versenyekre és ugróversenyekre.</p>
                        <p className="text-muted">Barátságos és könnyen kezelhető, így mind a gyerekek, mind a tapasztalt lovagok számára ideális választás lehet.</p>
                    </Col>

                    <Col xs={6} md={3} className="text-center">
                        <img src={hopihe} alt="Hópihe" className="horse-image" />
                        <h3>Hópihe</h3>
                        <p className="text-muted">A Hópihe nevű ló a Fríz fajtába tartozik, amely kiválóan alkalmas díjlovaglásra.</p>
                        <p className="text-muted">Elegáns megjelenése és mozgásai miatt gyakran szerepel díjlovagló versenyeken, ahol magasra értékelik előadásait.</p>
                        <p className="text-muted">Könnyen kezelhető és okos, így a díjlovaglás kedvelői számára ideális partner lehet.</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <img src={zeusz} alt="Zeusz" className="horse-image" />
                        <h3>Zeusz</h3>
                        <p className="text-muted">A Zeusz nevű ló a Quarter Horse fajtába tartozik, amely kiválóan alkalmas western lovaglásra.</p>
                        <p className="text-muted">Erős testalkata és jó temperamentuma miatt népszerű választás western stílusú lovas sportokban.</p>
                        <p className="text-muted">Barátságos és könnyen kézben tartható, így a western lovaglás szerelmesei számára ideális társ lehet.</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <img src={pegazus} alt="Pegazus" className="horse-image" />
                        <h3>Pegazus</h3>
                        <p className="text-muted">A Pegazus nevű ló az Andalúz fajtába tartozik, amely kiválóan alkalmas díjugratásra.</p>
                        <p className="text-muted">Elegáns megjelenése és kiváló ugróképessége miatt számos díjugrató versenyen szerepel sikeresen.</p>
                        <p className="text-muted">Okos és könnyen tanul, így a díjugratás szerelmesei számára ideális partner lehet a versenyeken és edzéseken egyaránt.</p>
                    </Col>

                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs={6} md={3} className="text-center">
                        <img src={nimrod} alt="Nimród" className="horse-image" />
                        <h3>Nimród</h3>
                        <p className="text-muted">A Nimród nevű ló a Haflingi fajtába tartozik, amely ideális társ lehet tereplovaglás során.</p>
                        <p className="text-muted">Robusztus testalkata és jó temperamentuma miatt kiválóan alkalmas különböző terepek felfedezésére.</p>
                        <p className="text-muted">Barátságos és megbízható, így a tereplovaglás szerelmesei számára ideális társ lehet kirándulások során.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
