import DoubleCheckImage from 'assets/double-check.png'
import LabeledTextInput from 'components/LabeledTextInput';
import NavigationUtil from 'utils/NavigationUtil';
import TestModel from 'models/TestModel';
import { useNavigate } from 'react-router-dom';
import usePercentage from './_hooks/usePercentage';
import { useState } from 'react';
import useTags from './_hooks/useTags';

const LabelTexts = {
    name: 'Wprowadź nazwę testu:',
    type: 'Wybierz typ testu:',
    tags: 'Wypisz tagi testu oddzielone przecinkami:',
    passPercentage: 'Próg procentowy zaliczenia testu:',
}

function TestCreate(props) {
    const {
        createTest = () => { },
    } = props;

    const navi = useNavigate();

    const newTest = new TestModel();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [tagsString, setTagsString, tags] = useTags();
    const [passPercentage, setPassPercentageString] = usePercentage();

    const submitNewTest = () => {
        name && newTest.setName(name);
        type && newTest.setType(type);
        tags[0] && newTest.setTags(tags);
        (passPercentage || passPercentage === 0) && newTest.setPassPercentage(passPercentage);

        createTest(newTest);
        navi(NavigationUtil.links.dashboard.home);
    }

    return (
        <div className="full-size-view-container">
            <div>
                <p className="view-title">Nowy test</p>
                <p className='view-subtitle'>Wprowadź szczegóły testu zgodnie z instrukcjami lub od razu naciśnij przycisk na dole strony, aby zastosować domyślne wartości.</p>
            </div>

            <div className="full-size-view-main-content view-center-content">
                <LabeledTextInput labelContent={LabelTexts.name} placeholder={newTest.name} value={name} onChange={e => { setName(e.currentTarget.value) }} />
                <LabeledTextInput labelContent={LabelTexts.type} placeholder={newTest.type} value={type} onChange={e => { setType(e.currentTarget.value.trim()) }} />
                <LabeledTextInput labelContent={LabelTexts.tags} placeholder={newTest.tags + ', '} value={tagsString} onChange={e => { setTagsString(e.currentTarget.value) }} />
                <LabeledTextInput labelContent={LabelTexts.passPercentage} placeholder={newTest.passPercentage} value={passPercentage} onChange={e => { setPassPercentageString(e.currentTarget.value) }} inputProps={{ maxLength: 3, style: { width: '3em', textAlign: 'center' } }} />
            </div>

            <div className='view-bottom-menu'>
                <button onClick={submitNewTest} className='view-button'><img alt='button_icon' className='button-icon' src={DoubleCheckImage}></img> Stwórz test</button>
            </div>
        </div >
    )
}

export default TestCreate;