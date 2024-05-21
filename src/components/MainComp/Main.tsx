import { useEffect, useState } from 'react';
import './Main.css';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";


interface Lovak {
    id: number;
    Nev: string;
    Fajta: string;
    Tipus: string;
    Ar: number;
    Marmagassag: number;
    Eletkor: number;
    Jobbkezes: boolean;
}

function formatPrice(price: number): string {
    return price.toLocaleString('hu-HU', { minimumFractionDigits: 0 });
}

export function Main() {
    const [lovak, setLovak] = useState<Lovak[]>([]);
    const [filteredLovak, setFilteredLovak] = useState<Lovak[]>([]);
    const [searchName, setsearchName] = useState<string>('');
    const [searchPosition, setSearchPosition] = useState<string>('');
    const [searchTeam, setSearchTeam] = useState<string>('');
    const [jobbkezes, setJobbKezes] = useState(true)
    const [sortOrder, setSortOrder] = useState<'ascending' | 'descending' | null>(null);
    const [showInputs, setShowInputs] = useState(false);
    const [changeableData, setChangeableData] = useState<Omit<Lovak, 'id'>>({
        Nev: "",
        Fajta: "",
        Tipus: "",
        Ar: 0,
        Marmagassag: 0,
        Eletkor: 0,
        Jobbkezes: true,
    });

    const sortByPrice = () => {
        if (sortOrder === 'ascending') {
            const sortedLovak = [...filteredLovak].sort((a, b) => b.Ar - a.Ar);
            setFilteredLovak(sortedLovak);
            setSortOrder('descending');
        } else {
            const sortedLovak = [...filteredLovak].sort((a, b) => a.Ar - b.Ar);
            setFilteredLovak(sortedLovak);
            setSortOrder('ascending');
        }
    };

    const sortByHeight = () => {
        if (sortOrder === 'ascending') {
            const sortedLovak = [...filteredLovak].sort((a, b) => b.Marmagassag - a.Marmagassag);
            setFilteredLovak(sortedLovak);
            setSortOrder('descending');
        } else {
            const sortedLovak = [...filteredLovak].sort((a, b) => a.Marmagassag - b.Marmagassag);
            setFilteredLovak(sortedLovak);
            setSortOrder('ascending');
        }
    };

    const sortByAge = () => {
        if (sortOrder === 'ascending') {
            const sortedLovak = [...filteredLovak].sort((a, b) => b.Eletkor - a.Eletkor);
            setFilteredLovak(sortedLovak);
            setSortOrder('descending');
        } else {
            const sortedLovak = [...filteredLovak].sort((a, b) => a.Eletkor - b.Eletkor);
            setFilteredLovak(sortedLovak);
            setSortOrder('ascending');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'Nev' && value.length <= 40) {
            setChangeableData((prevChangeableData) => ({
                ...prevChangeableData,
                [name]: value,
            }));
        } else if (name !== 'Nev') {
            setChangeableData((prevChangeableData) => ({
                ...prevChangeableData,
                [name]: name === 'Ar' || name === 'Marmagassag' || name === 'Eletkor' ? parseInt(value) : value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (changeableData.Nev.length >= 2) {
            const newLovak: Lovak = {
                id: lovak.length + 1,
                ...changeableData,
            };
            setLovak([...lovak, newLovak]);
            setFilteredLovak([...lovak, newLovak]);
            setChangeableData({
                Nev: "",
                Fajta: "",
                Tipus: "",
                Ar: 0,
                Marmagassag: 0,
                Eletkor: 0,
                Jobbkezes: true,
            });
        } else {
            alert('A játékos neve hosszabb kell legyen, mint két betű!');
        }
    };

    useEffect(() => {
        console.log('Focista adatok betöltve');
        async function load() {
            const response = await fetch('/lovak.json');
            const data = await response.json();
            setLovak(data.lovak);
            setFilteredLovak(data.lovak);
        }
        load();
    }, []);

    useEffect(() => {
        if (!searchName && !searchPosition && !searchTeam) {
            setFilteredLovak(lovak);
        } else {
            let filtered = lovak;
            if (searchName) {
                filtered = filtered.filter(focista =>
                    focista.Nev.toLowerCase().includes(searchName.toLowerCase())
                );
            }
            if (searchPosition) {
                filtered = filtered.filter(focista =>
                    focista.Tipus.toLowerCase().includes(searchPosition.toLowerCase())
                );
            }
            if (searchTeam) {
                filtered = filtered.filter(focista =>
                    focista.Fajta.toLowerCase().includes(searchTeam.toLowerCase())
                );
            }
            setFilteredLovak(filtered);
        }
    }, [searchName, searchPosition, searchTeam, lovak]);

    const handleIconClick = () => {
        setShowInputs(!showInputs);
    };

    return (
        <div className='body'>
            <h2>Lovak táblázata</h2>
            <div className='p-container'>
                <label>Név:
                    <input className='kereso'
                        type="text"
                        placeholder="Keresés név alapján..."
                        value={searchName}
                        onChange={(e) => setsearchName(e.target.value)}
                    />
                </label>
                <label>Típus:
                    <input className='kereso'
                        type="text"
                        placeholder="Keresés típus alapján..."
                        value={searchPosition}
                        onChange={(e) => setSearchPosition(e.target.value)}
                    />
                </label>
                <label>Fajta:
                    <input className='kereso'
                        type="text"
                        placeholder="Keresés faj alapján..."
                        value={searchTeam}
                        onChange={(e) => setSearchTeam(e.target.value)}
                    />
                </label>
            </div>


            <div className='tablazat-container'>
                <table className='tablazat'>
                    <thead className='foadatok'>
                        <tr>
                            <th>ID</th>
                            <th>Név</th>
                            <th>Fajta</th>
                            <th>Típus</th>
                            <th onClick={sortByPrice} className='ar'>
                                Ár <span className="arrow">↑ ↓</span>
                            </th>
                            <th onClick={sortByHeight} className='marmagassag'>
                                Marmagasság <span className="arrow">↑ ↓</span>
                            </th>
                            <th onClick={sortByAge} className='eletkor'>
                                Életkor <span className="arrow">↑ ↓</span>
                            </th>
                            <th>Jobbkezes</th>
                        </tr>
                    </thead>
                    <tbody className='adatok'>
                        {filteredLovak.map(focista => (
                            <tr key={focista.id}>
                                <td>{focista.id}</td>
                                <td>{focista.Nev}</td>
                                <td>{focista.Fajta}</td>
                                <td>{focista.Tipus}</td>
                                <td>{formatPrice(focista.Ar)} Ft</td>
                                <td>{focista.Marmagassag} cm</td>
                                <td>{focista.Eletkor}</td>
                                <td>{focista.Jobbkezes ? 'Igen' : 'Nem'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table><br />
            </div>

            <div className='plus-container'>
                <div className='adatfelvevo'>
                    <h3>Új lovak hozzáadása: {showInputs ? <CiCircleMinus className='icon' onClick={handleIconClick} /> : <CiCirclePlus className='icon' onClick={handleIconClick} />}</h3>
                    {showInputs && (
                        <form onSubmit={handleSubmit}>
                            <div className='p-container'>
                                <label>Név:<br />
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="Nev"
                                        value={changeableData.Nev}
                                        placeholder='A ló neve' />
                                </label><br /><br />
                                <label>Fajta:<br />
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="Fajta"
                                        value={changeableData.Fajta}
                                        placeholder='A ló fajtája' />
                                </label><br /><br />
                                <label>Típus:<br />
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name="Tipus"
                                        value={changeableData.Tipus}
                                        placeholder='A ló típusa' />
                                </label><br /><br />
                                <label>Ár: <br />
                                    <input
                                        onChange={handleInputChange}
                                        type="number"
                                        name="Ar"
                                        value={changeableData.Ar}
                                        min="0"
                                        max="999999999" />
                                </label><br /><br />
                                <label>Marmagasság: <br />
                                    <input
                                        onChange={handleInputChange}
                                        type="number"
                                        name="Marmagassag"
                                        value={changeableData.Marmagassag}
                                        min="130"
                                        max="190" />
                                </label><br /><br />
                                <label>Életkor: <br />
                                    <input
                                        onChange={handleInputChange}
                                        type="number"
                                        name="Eletkor"
                                        value={changeableData.Eletkor}
                                        min="1"
                                        max="100" />
                                </label><br />
                                <label>Jobbkezes: <br />
                                    <input
                                        className='checkbox'
                                        onChange={(e) => setJobbKezes(e.target.checked)}
                                        type="checkbox"
                                        checked={jobbkezes}
                                    />
                                </label>
                            </div>
                            <button className='hozzaad' type="submit">Hozzáadom</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main
