import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import noo from '../assets/Noo-viewers.png'
import LogoutIcon from '../assets/logout.png'

const cookies = new Cookies();

// const SideBar = ({ logout }) => (

// );


const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <nav className="#424242 grey darken-3" role="navigation">
                <div>
                    <ul className="right hide-on-med-and-down flex-navbar">
                        <div className='bg-nav'>
                            <div>
                                <div className="">
                                    <a href='https://noo-viewers.netlify.app/create' target="_blanc" className="Noo-viewer"><img src={noo} className="viewers" alt="noo" width="60" /></a>
                                </div>
                            </div>
                            <div className="channel-list__sidebar__icon2">
                                <div className="icon1__inner" onClick={logout}>
                                    <img src={LogoutIcon} alt="Logout" width="30" />
                                </div>
                            </div>
                        </div>
                        <div className="channel-list__header">
                            <p className="channel-list__header__text">N0o'</p>
                        </div>
                        {/* <SideBar logout={logout} /> */}
                        <div className="channel-list__list__wrapper rightside-navbar">
                            {/* <CompanyHeader /> */}
                            <ChannelSearch setToggleContainer={setToggleContainer} />
                            <ChannelList
                                filters={filters}
                                channelRenderFilterFn={customChannelTeamFilter}
                                List={(listProps) => (
                                    <TeamChannelList
                                        {...listProps}
                                        type="team"
                                        isCreating={isCreating}
                                        setIsCreating={setIsCreating}
                                        setCreateType={setCreateType}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                    />
                                )}
                                Preview={(previewProps) => (
                                    <TeamChannelPreview
                                        {...previewProps}
                                        setIsCreating={setIsCreating}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                        type="team"
                                    />
                                )}
                            />
                            <ChannelList
                                filters={filters}
                                channelRenderFilterFn={customChannelMessagingFilter}
                                List={(listProps) => (
                                    <TeamChannelList
                                        {...listProps}
                                        type="messaging"
                                        isCreating={isCreating}
                                        setIsCreating={setIsCreating}
                                        setCreateType={setCreateType}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                    />
                                )}
                                Preview={(previewProps) => (
                                    <TeamChannelPreview
                                        {...previewProps}
                                        setIsCreating={setIsCreating}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                        type="messaging"
                                    />
                                )}
                            />
                        </div>
                    </ul>

                    {/*MOBILE NAV*/}
                    <ul id="nav-mobile" className="sidenav">
                        <div className="channel-list__sidebar">
                            <div>
                                <div className="icon1__inner">
                                    <a href='https://noo-viewers.netlify.app/create' target="_blanc" className="Noo-viewer"><img src={noo} className="viewers" alt="noo" width="60" /></a>
                                </div>
                            </div>
                            <div className="channel-list__sidebar__icon2">
                                <div className="icon1__inner" onClick={logout}>
                                    <img src={LogoutIcon} alt="Logout" width="30" />
                                </div>
                            </div>
                        </div>
                        <div className="channel-list__header">
                            <p className="channel-list__header__text">N0o'</p>
                        </div>
                        {/* <SideBar logout={logout} /> */}
                        <div className="channel-list__list__wrapper">
                            {/* <CompanyHeader /> */}
                            <ChannelSearch setToggleContainer={setToggleContainer} />
                            <ChannelList
                                filters={filters}
                                channelRenderFilterFn={customChannelTeamFilter}
                                List={(listProps) => (
                                    <TeamChannelList
                                        {...listProps}
                                        type="team"
                                        isCreating={isCreating}
                                        setIsCreating={setIsCreating}
                                        setCreateType={setCreateType}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                    />
                                )}
                                Preview={(previewProps) => (
                                    <TeamChannelPreview
                                        {...previewProps}
                                        setIsCreating={setIsCreating}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                        type="team"
                                    />
                                )}
                            />
                            <ChannelList
                                filters={filters}
                                channelRenderFilterFn={customChannelMessagingFilter}
                                List={(listProps) => (
                                    <TeamChannelList
                                        {...listProps}
                                        type="messaging"
                                        isCreating={isCreating}
                                        setIsCreating={setIsCreating}
                                        setCreateType={setCreateType}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                    />
                                )}
                                Preview={(previewProps) => (
                                    <TeamChannelPreview
                                        {...previewProps}
                                        setIsCreating={setIsCreating}
                                        setIsEditing={setIsEditing}
                                        setToggleContainer={setToggleContainer}
                                        type="messaging"
                                    />
                                )}
                            />
                        </div>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="blue-text material-icons">menu</i></a>
                </div>
            </nav>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                />
            </div>
        </>
    )

}

export default ChannelListContainer;
