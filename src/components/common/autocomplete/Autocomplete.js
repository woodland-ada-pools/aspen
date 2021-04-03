import {Component} from "react";
import './Autocomplete.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {noop} from 'lodash';

class Autocomplete extends Component {
	windowClickListener = null;

	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0,
			query:       '',
			selected:    false
		};

		this.handleKeyPress  = this.handleKeyPress.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.updateQuery     = this.updateQuery.bind(this);
	}

	componentDidMount() {
		const {onDropdownClose = noop} = this.props;

		this.windowClickListener = function(event) {
			const wasDropdownClick = event.composedPath().some(element => element instanceof Element && element.matches('.dropdown-menu'));

			if (!wasDropdownClick) {
				onDropdownClose();
			}
		};

		window.addEventListener('click', this.windowClickListener);
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.windowClickListener);
	}

	handleKeyPress(event) {
		const {activeIndex} = this.state,
		      {matches}     = this.props;

		switch (event.which) {
			case 13: // Enter key
				if (matches.length) {
					this.handleSelection(event, matches[activeIndex]);
				}
				break;
			case 38: // Up arrow
				this.setState({
					activeIndex: activeIndex >= 1 ? activeIndex - 1 : 0
				});
				break;
			case 40: // Down arrow
				this.setState({
					activeIndex:
						activeIndex < matches.length - 1
						? activeIndex + 1
						: matches.length - 1
				});
				break;
			default:
				break;
		}
	}

	handleSelection(event, selection) {
		const {onDropdownClose = noop, onSelect = noop} = this.props;

		event.preventDefault();

		this.setState({
			activeIndex: 0,
			query:       selection.label,
			selected:    true
		});

		onSelect(selection);
		onDropdownClose();
	}

	updateQuery(e) {
		const {onChange = noop} = this.props;

		if (!this.state.selected) {
			const query = e.target.value;

			this.setState({query});

			onChange(query);
		} else {
			if (e.nativeEvent.inputType === "deleteContentBackward") {
				this.setState({
					query:    "",
					selected: false
				});
			}
		}
	}

	clear() {
		const {onClear = noop} = this.props;

		this.setState({
			query:    '',
			selected: false
		});

		onClear();
	}

	render() {
		const {label, name, placeholder, matches, width = '100%'} = this.props;
		const {activeIndex, query, selected}                      = this.state;

		return (
			<div className="autocomplete-wrapper">
				{label && <label className="label">{label}</label>}

				<div className="autocomplete field has-addons">
					<div className="control">
						<div className={`dropdown${matches.length > 0 ? " is-active" : ""}`}>
							<div className="dropdown-trigger">
								<input
									type="text"
									className={`input${!!selected ? ' is-locked': ''}`}
									name={name}
									value={query}
									onChange={!selected ? this.updateQuery : noop}
									onKeyDown={this.handleKeyPress}
									placeholder={placeholder}
									style={{
										width
									}}
								/>
							</div>
							<div className="dropdown-menu">
								{matches.length > 0 && (
									<div className="dropdown-content">
										{matches.map((match, index) => (
											<a
												className={`dropdown-item ${
													index === activeIndex ? "is-active" : ""
												}`}
												href="/"
												key={match.id || index}
												onClick={event => this.handleSelection(event, match)}
											>
												{match.label}
											</a>
										))}
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="control">
						<button className="button"
						        onClick={() => this.clear()}
						        title="Clear selection"
						        disabled={!selected}>
							<span className="icon clearButton">
								<FontAwesomeIcon icon={faTimes}/>
							</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Autocomplete;
