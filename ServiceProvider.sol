pragma solidity ^0.4.0;

contract ServiceProvider {

    struct Subscription {
        uint debt;
        uint plan;
        string username;
    }
    
    address[] public subscriberIds;
    mapping(address => Subscription) public subscribers;
    
    function subscribe(string _username, uint _plan) {
        subscribers[msg.sender] = Subscription({ debt: 0, plan: _plan, username: _username });
        subscriberIds.push(msg.sender);
    }
    
    function bill(address userAddress) {
        subscribers[userAddress].debt += subscribers[userAddress].plan;
    }
    
    function pay() {
        subscribers[msg.sender].debt -= msg.value;
    }
}
