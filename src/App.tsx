import React, { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import './App.css';
import copyJson from "./data/copy.json";
import datastructure from "./data/datastructure.json";
import datastructureSimple from "./data/datastructure_simple.json";
import pic from "./utdslogo.png";

let t = "Peace is a journey of a thousand miles and it must be taken one step at a time.";

let nationalHistory = new Array();
let internationalHistory = new Array();
export function Slide(props) {
	if (props.flag)
	return (
		<div className="slide">{props.flag}</div>
	)
	else {
		return (<></>);
	}
}
export function NationalModal(props) {
	let json_dict = datastructure["national"][props.index]
if (true){
return (
		<div className="sets" key={props.index}>
		<div className="titles">{json_dict.title}</div>
			{
			Object.values(json_dict.rounds).map((e) => {
			return (
					<>
						<div className="set">
							<div className="parant">
								<div className="child1">
								<div className="title2">
									{
									e.round
									}
								</div>
									<div className="motion2">
										{
										e.motion
										}
									</div>
									<Slide flag={e.slide} />
								</div>
							</div>
						</div>
					</>
					);
				}
			)
		}

		<div className="index-close">
			<div className="index">{props.index}/{datastructure["national"].length}</div>
			{/* <button className="close" onClick = {() => {}}>↑</button> */}
		</div>
		</div>
	);}
	else {
		return (<></>);
	}
}
export function InternationalModal(props) {
	let json_dict = datastructure["international"][props.index]
if (true){
return (
		<div className="sets" key={props.index}>
		<div className="titles">{json_dict.title}</div>
			{
			Object.values(json_dict.rounds).map((e) => {
			return (
					<>
						<div className="set">
							<div className="parant">
								<div className="child1">
								<div className="title2">
									{
									e.round
									}
								</div>
									<div className="motion2">
										{
										e.motion
										}
									</div>
									<Slide flag={e.slide} />
								</div>
							</div>
						</div>
					</>
					);
				}
			)
		}
		<div className="index-close">
			<div className="index">{props.index}/{datastructure["international"].length}</div>
			{/* <button className="close">↑</button> */}
		</div>

		</div>
	);}
	else {
		return (<></>);
	}
}

export function SearchModal(props) {
	// if (isClicked){
	if (props.started) {
		return (
		<div className="sets">{
			props.ranks.map((e) => {
			return (
		<>
			<div className="set">
				<div className="parant">
					<div className="child1">
					<div className="title">
						{
						datastructureSimple.data.find((v) => v.id==e).title + " / " + datastructureSimple.data.find((v) => v.id==e).round
						}
					</div>
						<div className="motion">
							{
							datastructureSimple.data.find((v) => v.id==e).motion
							}
						</div>
						<Slide flag={datastructureSimple.data.find((v) => v.id==e).slide} />
					</div>
				</div>
			</div>
		</>
			);}
			)
		}
		</div>
		);
	} else {
		return (<></>);
	}
}

interface AppProps {}
function App({}: AppProps) {
	const [nationalIndex, setNationalIndex] = useState(0);
	const [internationalIndex, setInternationalIndex] = useState(0);
	const [value, copy] = useCopyToClipboard()
	const [nationalIsClicked, setNationalIsClicked] = useState(true);
	const [internationalIsClicked, setInternationalIsClicked] = useState(true);


	function handleNationalClick() {
		setNationalIndex(Math.floor(Math.random()*datastructure["national"].length));
		nationalHistory.push(nationalIndex);
		setNationalIsClicked(!nationalIsClicked);
	}
	function handleInternationalClick() {
		setInternationalIndex(Math.floor(Math.random()*datastructure["international"].length));
		internationalHistory.push(internationalIndex);
		setInternationalIsClicked(!internationalIsClicked);
	}

	function handleNationalBackwardClick() {
		setNationalIndex(nationalHistory.pop());
	}

	function handleInternationalBackwardClick() {
		setInternationalIndex(internationalHistory.pop());
	}

  return (
	<div className="App">
		<div className="picParent"><img src={pic} alt="picture"/></div>
	<br></br>
	<a href="http://resources.tokyodebate.org/debate-motion/tips/">utds</a>
	<br></br>
	<br></br>

		<div className="seperator"></div>

	<div className="flex">
		<button className="backward" onClick = {handleNationalBackwardClick}>back</button>
        <button className="button" onClick={() => {handleNationalClick();}}>random national</button>
        <button className="copy" onClick={() => copy(copyJson[nationalIndex])}>copy</button>
	</div>
		<NationalModal className="nationalModal" index={nationalIndex} flag={nationalIsClicked} type={"national"} />
		<br></br>

	<div className="flex">
		<button className="backward" onClick = {handleInternationalBackwardClick}>back</button>
        <button className="button" onClick={() => {handleInternationalClick();}}>random international</button>
        <button className="copy" onClick={() => copy(copyJson[internationalIndex + datastructure["national"].length - 1])}>copy</button>
	</div>
		<InternationalModal className="internationalModal" index={internationalIndex} flag={internationalIsClicked} type={"international"} />

		<br></br>
		<br></br>



	<br></br>
	{/* <p className="explain"></p> */}
	<p>press blue button to generate random motions</p>
	{/* <a href="http://resources.tokyodebate.org/debate-motion/motion/" className="explain">motions</a> */}
	<span>show random tournaments from 486 national tournaments and 306 international tournaments, 9914 motions collected by </span><a href="http://resources.tokyodebate.org/debate-motion/motion/">utds motion</a>
	<br></br>
	<br></br>
	<p> The University of Tokyo, Debating Society. UTDS</p>
	<br></br>
	</div>
	);
}

export default App;

