import React, { Component } from 'react';
import '../lessStyles/branchCard.less';

class BranchCards extends Component {
    render() {
        const arrCards = [];
        Object.keys(this.props.locationData).forEach(el => {
            arrCards.push(<EachCard thisLoc={this.props.locationData[el]} />);
        });
        console.log(this.props);
        console.log(this.props.locationData[0]);
        return (
            <div className='allCardsContainer'>
                {arrCards}
            </div>
        );
    };
}

class EachCard extends Component {
    render() {
        return (
            <div className='locCardContainer cardContainer-small'>
                <label>
                    <input type='checkbox' className='cardFlipCheckBox' />
                    <div className='cardFront'>
                        <div className='cardTop cardTop-small'>
                            <div className='locID'>Dist {this.props.thisLoc.district}/Br {this.props.thisLoc.id}</div>
                        </div>
                        <div className='cardBottom cardBottom-small'>
                            <ul className='cardBottomContent'>
                                <li className='locName'><h3>{this.props.thisLoc.name}</h3></li>
                                <li className='locManager'>{this.props.thisLoc.manager}</li>
                                <li className='locPhone'>{this.props.thisLoc.primaryPhone}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='cardBack cardContainer-small'>
                        <div className='cardBackContent'>
                            <ul className className='locLinks'>
                                <li className='locName'><h3>{this.props.thisLoc.name}</h3></li>
                                <li>Employee List</li>
                                <li>Kiosks Serviced</li>
                                <li>Accounts</li>
                            </ul>
                        </div>
                    </div>
                </label>
            </div>
        );
    };
}

export default BranchCards;