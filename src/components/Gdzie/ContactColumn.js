import React from 'react';

import StyledContactColumn from './StyledContactColumn';
import LogoReusable from '../Logo/LogoReusable';
import SocialsContainerReusable from '../SocialsContainer/SocialsContainerReusable';

import premises from '../../data/premises';

const ContactColumn = () => (
    <StyledContactColumn itemScope itemType='https://schema.org/Restaurant'>
                        <article class='contact'>
                                <section class='contact__details'>
                                    <span itemprop="name">
                                        {premises.name}
                                    </span>
                                    <li>
                                        <section itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                            <span itemProp='streetAddress'>
                                                {premises.contact.address.street} 
                                                {premises.contact.address.streetNo}
                                            </span> <br />
                                            <span itemProp='postalCode'>
                                                {premises.contact.address.post}{' '}
                                            </span>
                                            <span itemProp='addressLocality'>
                                                {premises.contact.address.city}
                                            </span>
                                        </section>
                                    </li>
                                    <li>
                                        <span itemProp='telephone'>
                                        tel. {premises.contact.phone}
                                        </span>
                                    </li>
                                    <li>
                                        <span itemProp='email'>
                                            <a href="mailto:biuro@jaglana.pl">{premises.contact.email}</a>
                                        </span>
                                    </li>
                                </section>
                                <div class='contact__logo'>
                                    <LogoReusable type='black' itemProp='logo' />
                                </div>
                        </article>
                            
                        <article class='openingHours' itemProp="openingHours" content="Mo-Su 10:00-15:00">
                            <div class='openingHours__socialMedia'>
                                <SocialsContainerReusable type='black' />
                            </div>
                            <ul class='openingHours__list'>
                                {premises.open.map(index => (
                                    <li>
                                        <span class='openingHours__day'>{index.day}</span>
                                        <span class='openingHours__time'>{index.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                </StyledContactColumn>
);

export default ContactColumn;