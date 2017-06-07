pragma solidity ^0.4.0;

contract ServiceProvider {

    struct Subscription {
        uint debt;
        uint plan;
        string username;
    }
    
    mapping(address => Subscription) public subscribers;
    
    function subscribe(string _username, uint _plan) {
        subscribers[msg.sender] = Subscription({ debt: 0, plan: _plan, username: _username });
    }
    
    function bill(address userAddress) {
        subscribers[userAddress].debt += subscribers[userAddress].plan;
    }
    
    function pay() payable {
        subscribers[msg.sender].debt -= msg.value;
    }
    
    function withdraw() {
        msg.sender.transfer(this.balance);
    }
}
